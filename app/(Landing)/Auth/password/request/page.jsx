"use client";
import React, { useEffect } from "react";
import { Formik, Form, Field, useField } from "formik";
import {
  TextField,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import EventIcon from "@mui/icons-material/Event";
import * as Yup from "yup";
import AuthLayout from "@/components/AuthLayout";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import styled from "@emotion/styled";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Loader from "@/components/Loader";
import { Checkbox, FormControlLabel } from "@mui/material";
import google from "@/public/images/google.svg";
import Image from "next/image";
import usePostRequest from "@/Hooks/usepostRequest";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getAccessToken, setRefreshToken } from "@/constants/constants";
import { setAccessToken } from "@/constants/constants";

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
const MuiFormikDatePicker = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        sx={{ width: "100%" }}
        label={label}
        value={field.value}
        onChange={(date) => helpers.setValue(date)}
        renderInput={(params) => (
          <TextField
            {...params}
            fullWidth
            margin="normal"
            error={!!(meta.touched && meta.error)}
            helperText={meta.touched && meta.error ? meta.error : null}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <IconButton>
                  <EventIcon />
                </IconButton>
              ),
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
};

const Page = () => {
  const router = useRouter();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const initialValues = {
    email: "",
  };
  const postRequest = usePostRequest();

  const url = process.env.NEXT_PUBLIC_API_URL;

  const { mutate, isPending, isSuccess, isError, error } = postRequest(
    `${url}/auth/password-reset/`,
    (response) => {
      toast.success(
        "Password reset link has been sent to your email!. please follow the instructions in your email to reset your password",
        {
          duration: 5000,
        }
      );
    },
    (error) => {
      console.error("Error:", error);
      const errorMessage =
        error.response?.data?.email?.[0] || error?.response?.data.error;
      toast.error(errorMessage);
    }
  );
  const onSubmit = (values) => {
    mutate(values);
    // Handle form submission
  };

  // useEffect(() => {
  //   const accessToken = getAccessToken();
  //   if (accessToken) {
  //     router.push("/Dashboard");
  //   }
  // }, [isSuccess, router]);

  return (
    <AuthLayout>
      {isPending && <Loader />}
      {/* <Loader /> */}
      <Toaster />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="text-center my-[1rem]">
              <h2 className="font-medium text-denary text-2xl">
                Password reset
              </h2>
              <p className="text-black text-sm">
                Please fill the details below to reset your password
              </p>
            </div>
            <Field
              name="email"
              component={MuiFormikField}
              label="Email Address"
              variant="outlined"
              margin="normal"
              icon={<EmailIcon />}
            />

            <br />
            <Button
              type="submit"
              className="bg-[#012C51] w-full text-white p-[1rem] hover:bg-[#4096FF] rounded-[30px]"
            >
              Submit <ArrowForwardIcon />
            </Button>

            <div className="mb-[2rem]">
              <p className="text-center mt-[1rem]">
                Yet to Create an account?{" "}
                <Link
                  href="/Auth/join"
                  className="text-[#012C51] hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </AuthLayout>
  );
};

export default Page;
