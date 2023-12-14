import React, { useState } from "react";
import axios, { AxiosResponse } from "axios"; // Import AxiosResponse for typing the response

import Reddit from "./assets/1658834703reddit-icon.png";
import Jordans from "./assets/Air-Jordan-1-Chicago-Lost-and-Found-DZ5485-612-Release-Date-4-1068x762.jpeg";
import SNKRS from "./assets/snkrs-mobile-logo-88EC2AF8B0-seeklogo.com.png";
import { IoMdMail } from "react-icons/io";

import "./App.css";

import { Formik, Form, Field, ErrorMessage } from "formik";

interface FormData {
  email: string;
}

function App() {
  const initialValues: FormData = {
    email: "",
  };

  const [joined, setJoined] = useState(false);

  const onSubmit = async (values: FormData, { setSubmitting, resetForm }: any) => {
    const { email } = values;

    try {
      const response: AxiosResponse<any> = await axios.post("/saveEmail", { email }); // Update URL appropriately

      if (response.status === 200) {
        // Handle successful response, maybe show a success message
        setJoined(true);
      } else {
        // Handle other status codes or errors
      }
    } catch (error) {
      // Handle fetch-related errors
      console.error("Error saving email:", error);
    } finally {
      setSubmitting(false);
      resetForm();
    }
  };

  const validate = (values: FormData) => {
    const errors: Partial<FormData> = {};

    if (!values.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = "Invalid email format";
    }

    return errors;
  };

  return (
    <>
      <header>
        <title>SNKRS Monitor</title>
        <meta name="SNKRS Monitor" content="SNKRS Monitor" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Josefin+Sans:wght@300;700&display=swap" rel="stylesheet" />
      </header>
      <div className="font-josefin flex min-h-screen select-none bg-[#F5F5F5]">
        {/* Left side - Hidden on small screens */}
        <div className="hidden md:flex md:flex-1 md:flex-col md:items-center md:jusqtify-center">
          <h1 className="px-4 pb-6 pt-48 text-center text-8xl font-bold text-[black]">
            A Real-Time <span className="  text-8xl text-[#c70b14]">SNKRS</span> Monitor, for free.
          </h1>
          <img className="pointer-events-none select-none" src={Jordans} width={500} height={500} />
        </div>
        {/* Right side */}
        <main className="flex flex-1 flex-col items-center justify-start bg-[#c70b14] px-3">
          {/* Content for both small and large screens */}
          <div className="flex gap-4 pt-10">
            <a href="https://www.reddit.com/r/SNKRS" target="_blank" rel="noopener noreferrer">
              <img src={Reddit} alt="Reddit Icon" width={40} height={40} />
            </a>
            <a href="https://www.snkrs.com" target="_blank" rel="noopener noreferrer">
              <img
                src={SNKRS}
                alt="SNKRS Icon"
                width={50}
                height={40}
                style={{
                  filter: "brightness(0) invert(1) sepia(1) hue-rotate(180deg)",
                }}
              />
            </a>
          </div>
          <h1 className="font-Josefin-Sans pt-24 sm:pt-36 text-center text-8xl font-bold text-white sm:text-left">Coming Soon</h1>
          <h2 className="max-w-md  text-center text-xl text-white opacity-80">
            A 100% Free Real-Time SNKRS Monitor. Get instant updates on releases, shock drops, and more, over email or text, for free.
          </h2>

          <div className="flex flex-col items-center space-y-2 pt-12">
            <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
              {({ isSubmitting }) => (
                <Form>
                  <div className="flex flex-col items-center space-y-2">
                    <Field type="email" name="email" placeholder="Email" className="w-64 p-1 rounded-md" />
                    <ErrorMessage name="email" component="div" className="text-red-500" />
                    {!joined && (
                      <button type="submit" disabled={isSubmitting} className="text-white rounded-lg  bg-slate-950 p-2 border border-black">
                        {isSubmitting ? "Submitting..." : "Join the waitlist"}
                      </button>
                    )}
                    {joined && <p>✓ Successfully Joined the Waitlist</p>}
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <footer className="bottom-0 p-4 pt-36 sm:pt-52 text-2xl text-center text-white">
            <a href="mailto:snkrs.reddit@gmail.com">
              <IoMdMail />
            </a>
          </footer>
        </main>
      </div>
    </>
  );
}

export default App;
