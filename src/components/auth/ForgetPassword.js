import React from "react";
import Link from "next/link";
import { Input, Text } from "@nextui-org/react";

import Auth from "../../layouts/Auth.js";

export default function ForgetPassword() {
  return (
    <>
      <div className="flex content-center items-center justify-center outer-container">
        <div className="w-full lg:w-6/12 px-4 inner-container">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 ">
            <div className="rounded-t mb-0 px-4 py-6 ">
              <div className=" mb-3">
                <Text h4>Forgot Password</Text>
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
              <form>
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
                  />
                </div>

                <div className=" mt-6">
                  <button className="main-button gradient" type="button">
                    Email me
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
