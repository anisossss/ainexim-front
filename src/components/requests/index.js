import React, { useState } from "react";
import axios from "axios";
import { CONSTANTS } from "../../constants/index";
import toast, { Toaster } from "react-hot-toast";

import { Input, Textarea } from "@nextui-org/react";

export default function CustomRequest() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const url = `${CONSTANTS.API_URL_PROD}/user/contact`;

    axios
      .post(url, { email, subject })
      .then((response) => {
        console.log(response);
        toast.success("Request sent !");
        setEmail("");
        setSubject("");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };
  return (
    <>
      <div className="flex content-center items-center justify-center outer-container ">
        <div className="w-full lg:w-6/12 px-4 inner-container ">
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 8000,
            }}
          />
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6  rounded-lg bg-opacity-50 backdrop-filter backdrop-blur-md border-0 carrrd">
            <div className="flex-auto px-4 lg:px-10 py-10 pt-6">
              <h2 align="center">Feel Free to contact our team</h2>
              <br></br>
              <br></br>
              <br></br>
              <form onSubmit={handleSubmit}>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase   font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your email"
                    size="lg"
                    required
                    width="100%"
                    clearable
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <br></br>
                <div className="relative w-full mb-3">
                  <label className="block uppercase  font-bold mb-2">
                    Subject
                  </label>
                  <Textarea
                    type="text"
                    placeholder="Submit a request subject"
                    size="lg"
                    required
                    width="100%"
                    clearable
                    value={subject}
                    onChange={handleSubjectChange}
                  />
                </div>
                <br></br>
                <button className="main-button gradient" type="submit">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
