import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Input, Text } from "@nextui-org/react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { CONSTANTS } from "../../constants/index";
import { useRouter } from "next/router";

export default function ResetPasswordPhone() {
  const [time, setTime] = useState(60);
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setDisabled(false);
    }
  }, [time]);
  const handleRetry = async () => {
    try {
      const response = await axios.post(
        `${CONSTANTS.API_URL_PROD}/auth/resend-otp`,
        {
          phoneNumber,
        }
      );
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const router = useRouter();
  const phoneNumber = router.query.phoneNumber;
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleResetPassword = async () => {
    try {
      const response = await axios.post(
        `${CONSTANTS.API_URL_PROD}/auth/reset-password-phone`,
        { phoneNumber, code, newPassword }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        setNewPassword("");
        setTimeout(() => {
          router.push("/auth/login");
        }, 3000);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
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
                <Text h4>Set a new password</Text>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-8 py-10 pt-0">
              <div className="text-blueGray-800  mb-3 font-bold">
                <Text b>
                  Your new password must be different from the password used
                  previously
                </Text>
              </div>

              <br></br>
              <form>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-800 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Enter the code
                  </label>
                  <Input
                    required
                    size="lg"
                    width="100%"
                    clearable
                    color="white"
                    initialValue=""
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                </div>
                <br></br>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-800 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Your new password
                  </label>
                  <Input.Password
                    required
                    size="lg"
                    width="100%"
                    clearable
                    color="white"
                    initialValue=""
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>

                <div className=" mt-6 flex justify-between">
                  <button
                    className="main-button gradient"
                    type="button"
                    onClick={handleResetPassword}
                  >
                    Reset
                  </button>
                  <div>
                    <button
                      className="main-button-border gradient "
                      disabled={disabled}
                      onClick={handleRetry}
                    >
                      {disabled ? `Resend in ${time}s` : "Resend OTP"}
                    </button>
                  </div>
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
