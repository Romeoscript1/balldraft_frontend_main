"use client";
import React, { useState, useEffect } from "react";
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
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import styled from "@emotion/styled";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Loader from "@/components/Loader";
import { Checkbox, FormControlLabel } from "@mui/material";
import google from "@/public/images/google.svg";
import Image from "next/image";
import Verifyemail from "@/components/Verifyemail";
import dayjs from "dayjs"; // Import dayjs for date formatting
import usePostRequest from "@/Hooks/usepostRequest";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { message } from "antd";

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
  const [registrationComplete, setRegistrationComplete] = useState(false);
  const [registrationData, setRegistrationData] = useState(null);
  const router = useRouter();
  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    dob: Yup.date().required("Date of birth is required").nullable(),
    password: Yup.string().required("Password is required"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    dob: null,
    password: "",
    confirm_password: "",
    agreeToTerms: false,
    agreeToAge: false,
    agreeToUpdate: false,
  };

  const postRequest = usePostRequest();

  const url = process.env.NEXT_PUBLIC_API_URL;

  const getReferralCode = () => {
    // Only run this code on the client side where `window` is defined
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const ref = urlParams.get("ref");
      return ref;
    }
    return null;
  };

  const getApiUrl = () => {
    const referralCode = getReferralCode();
    return referralCode
      ? `${url}/auth/register/?referral_code=${referralCode}`
      : `${url}/auth/register/`;
  };

  const { mutate, isPending, isSuccess, isError, error } = postRequest(
    getApiUrl(),
    (response) => {
      console.log("Success:", response);
      toast.success("Registration was successful!");
      setRegistrationComplete(true);
      setRegistrationData(response);
      // Set registration complete to true on success
    },
    (error) => {
      console.error("Error:", error);
      const errorMessage =
        error.response?.data?.email?.[0] || error?.response?.data.error;
      
      toast.error(errorMessage === ''? 'Fatal: An error occured': errorMessage);
    }
  );

  const onSubmit = (values) => {
    // Format the date before submitting
    const formattedValues = {
      ...values,
      dob: values.dob ? dayjs(values.dob).format("YYYY-MM-DD") : null,
    };
    console.log(formattedValues);
    mutate(formattedValues, false);
    // Handle form submission
  };

  return (
    <AuthLayout>
      <Toaster />
      {isPending && <Loader />}
      {registrationComplete ? (
        <Verifyemail registrationData={registrationData} />
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="text-center my-[1rem]">
                <h2 className="font-medium text-2xl font-poppins text-black">Join Balldraft</h2>
                <p className="font-poppins">Please provide the following details</p>
              </div>
              <Field
                name="first_name"
                component={MuiFormikField}
                label="First Name"
                variant="outlined"
                margin="normal"
                icon={<PersonIcon />}
              />
              <Field
                name="last_name"
                component={MuiFormikField}
                label="Last Name"
                variant="outlined"
                margin="normal"
                icon={<PersonIcon />}
              />
              <Field
                name="email"
                component={MuiFormikField}
                label="Email Address"
                variant="outlined"
                margin="normal"
                icon={<EmailIcon />}
              />
              <MuiFormikDatePicker name="dob" label="Date of Birth" />
              <Field
                name="password"
                component={MuiFormikField}
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                icon={<LockIcon />}
              />
              <Field
                name="confirm_password"
                component={MuiFormikField}
                label="Confirm Password"
                type="password"
                variant="outlined"
                margin="normal"
                icon={<LockIcon />}
              />
              <MuiFormikCheckbox
                name="agreeToTerms"
                label="By clicking “Proceed”, you agree to our Terms and conditions"
              />
              <MuiFormikCheckbox
                name="agreeToAge"
                label="I agree that I am 18+ years old. I acknowledge that I am of age to navigate this account."
              />
              <MuiFormikCheckbox
                name="agreeToUpdate"
                label="I agree to receive important updates, exclusive promotions and personalized notifications via the provided email address"
              />
              <br />
              <Button
                type="submit"
                className="bg-[#012C51] w-full text-white p-[1rem] hover:bg-[#4096FF] rounded-[30px]"
              >
                Proceed <ArrowForwardIcon />
              </Button>
              {/* <div className="flex gap-4 my-[1.5rem] items-center justify-center">
                <aside className="w-2/5 border-[1px] border-[black] h-[2px]"></aside>
                or
                <aside className="w-2/5 border-[1px] border-[black] h-[2px]"></aside>
              </div> */}
              {/* <button
                type="button"
                className=" flex items-center justify-center text-[black] border-[2px] border-[#012C51] w-full text-white p-[0.7rem] bg-white hover:bg-white rounded-[30px]"
                style={{ color: "black" }}
                disabled={isSubmitting || isPending}
              >
                Continue with{" "}
                <Image
                  src={google}
                  height={20}
                  className="ml-[0.5rem]"
                  alt=""
                />
              </button> */}

              <div>
                <p className="text-center mt-[1rem]">
                  Already have an account?{" "}
                  <a href="/Auth/login" className="text-[#012C51] hover:underline">
                    Sign in
                  </a>
                </p>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </AuthLayout>
  );
};

export default Page;
