import React, { useState } from "react";
import Link from "next/link";
import { Input, Text } from "@nextui-org/react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { CONSTANTS } from "../../constants/index";
import { useSelector } from "react-redux";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { accessToken } = useSelector((state) => state.auth);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    var url = `${CONSTANTS.API_URL_PROD}/auth/forgot-password-email`;

    try {
      const response = await axios.post(url, {
        email,
      });

      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(error.response.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }

    setLoading(false);
  };

  return (
    <>
      <div className="flex content-center items-center justify-center outer-container">
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 5000,
          }}
        />
        <div className="w-full lg:w-6/12 px-4 inner-container">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 ">
            <div className="rounded-t mb-0 px-4 py-6 ">
              <div className=" mb-3">
                <Text h4>Recover Your Password</Text>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-8 py-10 pt-0">
              <div className="text-blueGray-800  mb-3 font-bold">
                <Text b>
                  Please enter your email address to reset your password
                </Text>
                <br></br>
              </div>
              <Text span style={{ fontSize: "14px", color: "#A9A9AE" }}>
                We&apos;ll send you an email to recover your account.
              </Text>
              <br></br>

              <br></br>
              <form onSubmit={handleSubmit}>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-800 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email
                  </label>
                  <Input
                    type="email"
                    size="lg"
                    required
                    width="100%"
                    clearable
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>

                <div className=" mt-6">
                  <button
                    className="main-button gradient"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Email me"}
                  </button>
                </div>
              </form>
              <div className="flex flex-wrap mt-6 relative">
                <div className="w-1/2 ">
                  <Link href="/auth/login">
                    <a>
                      <Text b>Back to login</Text>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
