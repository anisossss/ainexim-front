import React, { useState } from "react";
import axios from "axios";
import { CONSTANTS } from "../../constants/index";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import { Input, Textarea } from "@nextui-org/react";

export default function Waitlist() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [career, setCareer] = useState("");

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCareerChange = (event) => {
    setCareer(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const url = `${CONSTANTS.API_URL_PROD}/user/waitlist`;

    axios
      .post(url, { email, career, fullName })
      .then((response) => {
        console.log(response);
        toast.success(response.data.message);
        setFullName("");
        setEmail("");
        setCareer("");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
  };
  return (
    <>
      <div className="flex content-center items-center justify-center wrapper-all">
        <div className="w-full lg:w-6/12 px-4  ">
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 5000,
            }}
          />
          <div className="relative flex flex-col min-w-0   ">
            <div className="flex-auto px-4 lg:px-10 py-10 pt-6">
              <h2 align="center">Join our wailist now !</h2>
              <br></br>
              <br></br>
              <br></br>
              <form onSubmit={handleSubmit}>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase   font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Full Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    size="lg"
                    required
                    width="100%"
                    clearable
                    value={fullName}
                    onChange={handleFullNameChange}
                  />
                </div>
                <br></br>
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
                    Curent Career / Desired Career
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your career"
                    size="lg"
                    required
                    width="100%"
                    clearable
                    value={career}
                    onChange={handleCareerChange}
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
        <Image
          src="/assets/logo/green_contact_logo.svg"
          alt="AINEXIM logo"
          width={500}
          height={500}
        />
      </div>
    </>
  );
}
