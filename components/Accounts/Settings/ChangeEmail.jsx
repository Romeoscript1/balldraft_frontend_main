"use client";

import React from "react";
import Icon from "@/Reusable/Icons/Icons";
import { Formik, Form, Field, useField } from "formik";
import {
  TextField,
  Button,
  FormControl,
  FormHelperText,
  FormControlLabel,
  Checkbox,
  InputAdornment,
} from "@mui/material";
import { Toaster, toast } from "react-hot-toast";
import * as Yup from "yup";
import styled from "@emotion/styled";
import EmailIcon from "@mui/icons-material/Email";
import axios from "axios";
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

const StyledTextField = styled(TextField)(({ theme, error }) => ({
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
  ...props
}) => (
  <FormControl fullWidth error={touched[field.name] && !!errors[field.name]}>
    <StyledTextField
      {...field}
      {...props}
      error={touched[field.name] && !!errors[field.name]}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{icon}</InputAdornment>
        ),
      }}
    />
    {touched[field.name] && errors[field.name] && (
      <FormHelperText>{errors[field.name]}</FormHelperText>
    )}
  </FormControl>
);

const ChangeEmail = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const initialValues = {
    email: "",
    rememberMe: false,
  };

  const onSubmit = async (values, { setSubmitting }) => {
    const url = process.env.NEXT_PUBLIC_API_URL;
    try {
      const response = await axios.patch(
        `${url}/profile/change-email/`,
        { new_email: values.email },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getAccessToken()}`,
          },
        }
      );
      toast.success("Email updated successfully");
    } catch (error) {
      console.error("Error updating email:", error);
      toast.error("Failed to update email");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="p-6 rounded-lg m-auto w-full">
      <Toaster />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="text-center my-[1rem]">
              <h2 className="font-bold text-2xl">Change Email Address</h2>
              <p>
                By changing your Email address, you can make sure that all your
                account information is up to date
              </p>
            </div>
            <Field
              name="email"
              type="email"
              component={MuiFormikField}
              label="Email Address"
              variant="outlined"
              margin="normal"
              icon={<EmailIcon />}
            />
            <MuiFormikCheckbox
              name="rememberMe"
              label="By clicking “Save change” you confirm that you are the account holder and authorize the Email Address update."
            />
            <br />
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

export default ChangeEmail;
