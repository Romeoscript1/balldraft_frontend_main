"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import {
  TextField,
  Button,
  FormControl,
  FormHelperText,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";
import { useRouter } from "next/navigation";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import styled from "@emotion/styled";
import * as Yup from "yup";
import { Toaster, toast } from "react-hot-toast";
import usePostRequest from "@/Hooks/usepostRequest";
import Loader from "@/components/Loader";
import { clearSessionStorage } from "@/constants/constants";

const MuiFormikCheckbox = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <FormControlLabel
      className="my-[0.5rem]"
      control={<Checkbox {...field} checked={field.value} color="primary" />}
      label={label}
    />
  );
};

const StyledTextField = styled(TextField)(({ error }) => ({
  ...(error && {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red",
      },
      "&:hover fieldset": {
        borderColor: "red",
      },
      "&.Mui-focused fieldset": {
        borderColor: "red",
      },
    },
  }),
}));

const MuiFormikField = ({
  field,
  form: { touched, errors },
  icon,
  type,
  showPassword,
  toggleShowPassword,
  ...props
}) => (
  <FormControl fullWidth error={touched[field.name] && !!errors[field.name]}>
    <StyledTextField
      {...field}
      {...props}
      type={showPassword ? "text" : type}
      error={touched[field.name] && !!errors[field.name]}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{icon}</InputAdornment>
        ),
        endAdornment: type === "password" && (
          <InputAdornment position="end">
            <IconButton
              aria-label={`toggle ${field.name} visibility`}
              onClick={toggleShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
    {touched[field.name] && errors[field.name] && (
      <FormHelperText>{errors[field.name]}</FormHelperText>
    )}
  </FormControl>
);

const DeactivateAccountSchema = Yup.object().shape({
  reason: Yup.string().required("Reason is required"),
  comment: Yup.string().required("Please provide additional details"),
  // password: Yup.string().required("Password is required"),
});

const Deactivate = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const postRequest = usePostRequest();
  const url = process.env.NEXT_PUBLIC_API_URL;
  const { mutate, isPending, isSuccess, isError, error } = postRequest(
    `${url}/auth/account/deactivate/`
  );

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const initialValues = {
    reason: "",
    comment: "",
    password: "",
  };

  const onSubmit = (values, { setSubmitting }) => {
    mutate(
      {
        reason: values.reason,
        comment: values.comment,
        password: "values.password",
      },
      {
        onSuccess: () => {
          toast.success("Account deactivated successfully");
          // sessionStorage.clear();
          clearSessionStorage();
          router.push("/Auth/join");
          setSubmitting(false);
        },
        onError: (error) => {
          console.error("Error deactivating account:", error);
          toast.error("Failed to deactivate account");
          setSubmitting(false);
        },
      }
    );
  };

  return (
    <div className="p-6 max-sm:p-2 rounded-lg w-full m-auto">
      <Toaster />
      {isPending && <Loader />}
      <Formik
        initialValues={initialValues}
        validationSchema={DeactivateAccountSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="text-center my-[1rem]">
              <h2 className="font-bold text-2xl text-denary font-poppins max-sm:text-xl">Deactivate Your Account</h2>
              <p className="max-sm:text-sm font-poppins opacity-60">
                Please provide the following details to deactivate your account.
              </p>
            </div>
            <FormControl fullWidth margin="normal">
              <InputLabel id="reason-label">Reason</InputLabel>
              <Field
                name="reason"
                as={Select}
                labelId="reason-label"
                label="Reason"
                variant="outlined"
              >
                <MenuItem value="Violation of terms">
                  Violation of terms
                </MenuItem>
                <MenuItem value="No reason provided">
                  No reason provided
                </MenuItem>
                <MenuItem value="Personal reasons">Personal reasons</MenuItem>
              </Field>
              <FormHelperText>
                <ErrorMessage name="reason" />
              </FormHelperText>
            </FormControl>
            <Field
              name="comment"
              component={MuiFormikField}
              label="Additional comment"
              variant="outlined"
              margin="normal"
              multiline
              rows={4}
            />
            <Field
              name="password"
              component={MuiFormikField}
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              hidden
              icon={<LockIcon />}
              showPassword={showPassword}
              toggleShowPassword={toggleShowPassword}
            />
            <Button
              type="submit"
              className="bg-[#012C51] w-full text-white p-[1rem] hover:bg-[#4096FF] rounded-[30px]"
              disabled={isSubmitting || isPending}
            >
              Deactivate Account
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Deactivate;
