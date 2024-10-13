"use client";

import React, { useState } from "react";
import { Formik, Form, Field, useField } from "formik";
import {
  TextField,
  Button,
  FormControl,
  FormHelperText,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import styled from "@emotion/styled";
import * as Yup from "yup";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { getAccessToken } from "@/constants/constants";

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
        endAdornment: (
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

const ChangePasswordSchema = Yup.object().shape({
  newPassword: Yup.string().required("New password is required"),
  confirmPassword: Yup.string()
    .required("Please confirm your new password")
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
});

const ChangePassword = () => {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const initialValues = {
    newPassword: "",
    confirmPassword: "",
    rememberMe: false,
  };

  const onSubmit = async (values, { setSubmitting }) => {
    const url = process.env.NEXT_PUBLIC_API_URL;
    try {
      const response = await axios.patch(
        `${url}/auth/set-new-password/`,
        {
          password: values.newPassword,
          confirm_password: values.confirmPassword,
          // token: getAccessToken(),
          // uidb64: 1
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getAccessToken()}`,
          },
        }
      );
      toast.success("Password updated successfully");
    } catch (error) {
      console.error("Error updating password:", error);
      toast.error("Failed to update password");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="p-6 rounded-lg w-full m-auto">
      <Toaster />
      <Formik
        initialValues={initialValues}
        validationSchema={ChangePasswordSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="text-center my-[1rem]">
              <h2 className="font-bold text-2xl">Change Your Password</h2>
              <p>
                To enhance your security, please update your password below.
              </p>
            </div>
            <Field
              name="newPassword"
              component={MuiFormikField}
              label="New Password"
              type="password"
              variant="outlined"
              margin="normal"
              icon={<LockIcon />}
              showPassword={showNewPassword}
              toggleShowPassword={toggleShowNewPassword}
            />
            <Field
              name="confirmPassword"
              component={MuiFormikField}
              label="Confirm Password"
              type="password"
              variant="outlined"
              margin="normal"
              icon={<LockIcon />}
              showPassword={showConfirmPassword}
              toggleShowPassword={toggleShowConfirmPassword}
            />
            <MuiFormikCheckbox
              name="rememberMe"
              label="By clicking “Save change” you confirm that you are the account holder and authorize the password update."
            />
            <Button
              type="submit"
              className="bg-[#012C51] w-full text-white p-[1rem] hover:bg-[#4096FF] rounded-[30px]"
              disabled={isSubmitting}
            >
              Save Changes
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ChangePassword;
