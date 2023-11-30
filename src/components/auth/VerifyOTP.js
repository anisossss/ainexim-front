import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Input, Text } from "@nextui-org/react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { CONSTANTS } from "../../constants/index";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setAccessToken, setRefreshToken } from "../../store/authSlice";

export default function VerifyOTP() {
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

  const dispatch = useDispatch();
  const router = useRouter();
  const phoneNumber = router.query.phoneNumber;
  const [code, setCode] = useState("");
  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    var url = `${CONSTANTS.API_URL_PROD}/auth/verify-otp`;

    try {
      const response = await axios.post(url, {
        phoneNumber,
        code,
      });

      const accessToken = response.data.access_token;
      const refreshToken = response.data.refresh_token;

      if (accessToken && refreshToken) {
        dispatch(setAccessToken(accessToken));
        dispatch(setRefreshToken(refreshToken));
        toast.success(response.data.message);
        router.push("/discover");
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
                <Text h4>Verify One-Time-Password</Text>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-8 py-10 pt-0">
              <div className="text-blueGray-800  mb-3 font-bold">
                <Text b>
                  Please enter the code sent to your phone number to verify your
                  phone number
                </Text>
                <br></br>
              </div>

              <br></br>
              <form onSubmit={handleSubmit}>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-800 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Code
                  </label>
                  <Input
                    type="text"
                    size="lg"
                    width="100%"
                    clearable
                    value={code}
                    onChange={handleCodeChange}
                  />
                </div>

                <div className=" mt-6 flex justify-between">
                  <button
                    className="main-button gradient"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send"}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
