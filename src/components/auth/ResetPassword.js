import React, { useState } from "react";
import Link from "next/link";
import { Input, Text } from "@nextui-org/react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { CONSTANTS } from "../../constants/index";
import { useRouter } from "next/router";

export default function ResetPassword() {
  const router = useRouter();
  const userId = router.query.userId;
  const resetToken = router.query.token;
  console.log(resetToken);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleResetPassword = async () => {
    try {
      if (newPassword !== confirmPassword) {
        toast.error("Passwords must be identical");
      }
      const response = await axios.post(
        `${CONSTANTS.API_URL_PROD}/auth/reset-password-email/${userId}/${resetToken}`,
        {
          newPassword,
        }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        setNewPassword("");
        setConfirmPassword("");
        router.push("/auth/login");
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
                    Enter new password
                  </label>
                  <Input.Password
                    required
                    size="lg"
                    width="100%"
                    clearable
                    color="white"
                    initialValue=""
                    // helperText="Insecure password"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <br></br>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-800 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Confirm the new password
                  </label>
                  <Input.Password
                    required
                    size="lg"
                    width="100%"
                    clearable
                    color="white"
                    initialValue=""
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>

                <div className=" mt-6">
                  <button
                    className="main-button gradient"
                    type="button"
                    onClick={handleResetPassword}
                  >
                    Reset
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
