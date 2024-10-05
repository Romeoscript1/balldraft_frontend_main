"use client";
import React, { useState } from "react";
import usePostData from "@/Hooks/usePostData";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "@/components/Loader";

const Page = () => {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const apiUrl = `${url}/profile/help/`;
  const [isLoading, setIsLoading] = useState(false);
  const onSubmitHandler = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    const formData = new FormData(e.target);
    const response = await axios.post(apiUrl, formData);
    if (response.status == 200) {
      toast.success(
        "Thank you for contacting us. We will get back to you as soon as possible."
      );
    } else {
      toast.error("An error occured, please try again later.");
    }

    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loader />}

      <section className="max-container padding-x min-h-[70vh] py-20 md:pt-20 flex flex-col gap-10 md:flex-row justify-between px-5 sm:px-10">
        <div className="flex flex-col w-full md:w-1/2">
          <h1 className="text-3xl font-bold font-poppins text-denary">
            Get in touch
          </h1>
          <p className="max-w-[400px] mt-2 font-outfit">
            {
              "Whether you have questions, need assistance, or want to share your thoughts, we're here to help! Reach out to us via phone, email, or by filling out the form below."
            }
          </p>

          <a
            href="mailto:info@balldraft.com"
            className="underline mt-6 font-medium"
          >
            info@balldraft.com
          </a>
          <a
            href="mailto:info@balldraft.com"
            className="underline mt-3 font-medium"
          >
            0912 816 8542
          </a>

          <div className=" mt-8 md:mt-20 flex flex-row flex-wrap gap-10">
            <div>
              <p className="font-outfit font-bold text-[1.2rem] text-black opacity-70">
                Customer support
              </p>
              <p className="max-w-[350px] sm:max-w-[200px] text-sm">
                We prioritize your needs! Our customer support team is available
                around the clock to answer your questions. Contact us anytime.
              </p>
            </div>
            <div>
              <p className="font-outfit font-bold text-[1.2rem] text-black opacity-70">
                Feedback
              </p>
              <p className="max-w-[350px] md:max-w-[200px] text-sm">
                {
                  "We're committed to using your feedback to enhance your experience."
                }
              </p>
            </div>
          </div>
        </div>

        <div className=" w-full md:w-1/2">
          <form
            action=""
            className="bg-white p-2 sm:p-7 rounded-md flex flex-col items-center gap-5 w-[100%] max-w-[400px] m-auto shadow-sm"
            onSubmit={onSubmitHandler}
          >
            <h1 className="font-outfit text-denary font-medium text-[1.2rem]">
              Send us a message
            </h1>
            {/* 
            <Input input={{
                type:"text",
                placeholder:"Full name"
            }} /> */}

            <input
              type="text"
              placeholder="Full name"
              className="border p-3 rounded-full w-full outline-blue-100 font-poppins text-sm bg-white"
              name="name"
              required={true}
            />

            <input
              type="text"
              placeholder="Email address"
              className="border p-3 rounded-full w-full outline-blue-100 font-poppins text-sm bg-white"
              name="email"
              required={true}
            />
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              className="border p-3 rounded-full w-full outline-blue-100 font-poppins text-sm bg-white"
              required={true}
            />

            <textarea
              name="message"
              id=""
              cols="30"
              rows="5"
              className="border w-full rounded-lg p-3 font-poppins outline-blue-100 text-sm bg-white resize-none"
              placeholder="How can we help"
              required={true}
            ></textarea>

            <input
              type="submit"
              value="Submit"
              className="w-full p-3 bg-denary rounded-full text-white cursor-pointer font-outfit"
            />
            {/* <p className="text-center text-[0.8rem] font-poppins">
            By submitting this form, you consent to receiving emails from us using the contact details you provide.
          </p> */}
          </form>
        </div>
      </section>
    </>
  );
};

export default Page;
