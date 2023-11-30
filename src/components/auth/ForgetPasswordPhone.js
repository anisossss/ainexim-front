import React, { useState } from "react";
import Link from "next/link";
import { Input, Text } from "@nextui-org/react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { CONSTANTS } from "../../constants/index";
import { useRouter } from "next/router";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function ForgetPasswordPhone() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    var url = `${CONSTANTS.API_URL_PROD}/auth/forgot-password-phone`;

    try {
      const response = await axios.post(url, {
        phoneNumber,
      });

      if (response.data.success) {
        toast.success(response.data.message);
        setTimeout(() => {
          const redirectUrl = `/auth/reset-password-phone?phoneNumber=${phoneNumber}`;
          router.push(redirectUrl);
        }, 2000);
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
                <Text h4>Recover password with phone number</Text>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-8 py-10 pt-0">
              <div className="text-blueGray-800  mb-3 font-bold">
                <Text b>
                  Please enter your phone number to reset your password
                </Text>
                <br></br>
              </div>
              <Text span style={{ fontSize: "14px", color: "#A9A9AE" }}>
                We&apos;ll send you a one-time-password code to recover your
                account.
              </Text>
              <br></br>

              <br></br>
              <form onSubmit={handleSubmit}>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-800 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Phone number
                  </label>
                  <PhoneInput
                    disableSearchIcon
                    enableSearch
                    country={"za"}
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    buttonStyle={{
                      height: "3rem",
                      border: "1px solid #f1f3f5",
                      borderRadius: "1rem",
                      backgroundColor: "#f1f3f5",
                    }}
                    inputStyle={{
                      width: "100%",
                      height: "3rem",
                      fontSize: "1rem",
                      borderRadius: "1rem",
                      border: "0px solid #fff",
                      backgroundColor: "#f1f3f5",
                      fontFamily: "Poppins",
                    }}
                    dropdownStyle={{
                      fontSize: "1rem",
                      borderRadius: "1rem",
                      border: "0px solid #fff",
                      backgroundColor: "#f1f3f5",
                    }}
                    searchStyle={{
                      fontSize: "1rem",
                      backgroundColor: "#f1f3f5",
                      width: "90%",
                    }}
                  />
                </div>

                <div className=" mt-6">
                  <button
                    className="main-button gradient"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send"}
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
