import React from "react";
import Link from "next/link";
import { Input, Text } from "@nextui-org/react";

// layout for page

import Auth from "../../layouts/Auth.js";
import Meta from "../seo/index.js";

export default function ResetPassword() {
  return (
    <>
      <div className="flex content-center items-center justify-center outer-container">
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
                <br></br>
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
                    // helperText="Insecure password"
                    type="password"
                  />
                </div>

                <div className=" mt-6">
                  <button className="main-button gradient" type="button">
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
