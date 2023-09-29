import React, { useState, useEffect } from "react";
import { Input, Grid, Text, useInput, Image } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";
import Link from "next/link";
import { CONSTANTS } from "../../constants/index";
import toast, { Toaster } from "react-hot-toast";
import { GoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { setAccessToken, setRefreshToken } from "../../store/authSlice";

import axios from "axios";

import { useRouter } from "next/router";

export default function Register() {
  const dispatch = useDispatch();

  const handleGoogleAuth = async (credentialResponse) => {
    var url = `${CONSTANTS.API_URL_PROD}/auth/google-auth`;

    try {
      const tokenId = credentialResponse.credential;
      console.log(tokenId);
      const response = await axios.post(url, {
        tokenId,
      });
      console.log(response);
      const accessToken = response.data.access_token;
      const refreshToken = response.data.refresh_token;

      if (accessToken && refreshToken) {
        dispatch(setAccessToken(accessToken));
        dispatch(setRefreshToken(refreshToken));
        toast.success(response.data.message);
        router.push("/discover");
      } else {
        console.error("You are not authorized !");
        toast.error(error.response.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };
  const [query, setQuery] = useState("");

  useEffect(() => {
    // Get the content after scheme= from the query parameter
    const content = router.query.scheme;

    console.log(content);
    setQuery(content);
  }, [router]);

  const [isHovered, setIsHovered] = useState(true);
  const router = useRouter();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { value, reset, bindings } = useInput("");

  const [passwordMatch, setPasswordMatch] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordMatch(e.target.value === confirmPassword);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordMatch(e.target.value === password);
  };
  const validateEmail = (value) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  };

  const helper = React.useMemo(() => {
    if (!value)
      return {
        text: "",
        color: "",
      };
    const isValid = validateEmail(value);
    return {
      text: isValid ? "Correct email" : "Enter a valid email",
      color: isValid ? "success" : "error",
    };
  }, [value]);

  const handleCreateAccount = async (event) => {
    event.preventDefault();

    setLoading(true);

    var url = `${CONSTANTS.API_URL_PROD}/auth/register?scheme=${query}`;

    try {
      const res = await axios.post(url, {
        name: name,
        email: value,
        password: password,
        confirmPassword: confirmPassword,
      });
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <>
      <Grid className="flex content-center items-center justify-center outer-container ">
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 5000,
          }}
        />
        <Grid className="w-full lg:w-6/12 px-4 inner-container">
          <Grid className="relative flex flex-col min-w-0 break-words w-full mb-6 ">
            <Grid className="relative flex flex-col min-w-0 break-words w-full mb-6 mt-6">
              <Grid className="rounded-t mb-0 px-6 py-12 ">
                <Grid
                  style={{
                    width: "35%",
                    margin: "auto",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  <GoogleLogin
                    clientId={
                      "666060136282-7r0rvs6b50tosm1dm8ul5hibg27eg0on.apps.googleusercontent.com"
                    }
                    onSuccess={handleGoogleAuth}
                    onFailure={() =>
                      console.log("Google authentication failed")
                    }
                    render={({ onClick }) => (
                      <button onClick={onClick}>Sign in with Google</button>
                    )}
                  />
                </Grid>
                <hr className="mt-6 border-b-1 border-blueGray-800" />
              </Grid>
              <Grid className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <Grid className="text-blueGray-800 text-center mb-3 font-bold">
                  <spa>Or sign up with credentials</spa>
                </Grid>
                <br></br>
                <form>
                  <Grid className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-800 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Name
                    </label>
                    <Input
                      {...bindings}
                      type="text"
                      placeholder="Enter your name"
                      size="lg"
                      required
                      width="100%"
                      clearable
                      value={name}
                      onChange={handleNameChange}
                    />
                  </Grid>

                  <Grid className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-800 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <Input
                      onChange={handleEmailChange}
                      size="lg"
                      required
                      width="100%"
                      {...bindings}
                      helperColor={helper.color}
                      helperText={helper.text}
                      type="email"
                      placeholder="Enter your email address"
                    />
                  </Grid>
                  <br></br>
                  <Grid className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-800 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <Input.Password
                      required
                      {...bindings}
                      size="lg"
                      width="100%"
                      status={passwordMatch ? "success" : "error"}
                      clearable
                      color="white"
                      value={password}
                      // helperText="Insecure password"
                      type="password"
                      placeholder="Enter your password"
                      onChange={handlePasswordChange}
                    />
                  </Grid>
                  <Grid className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-800 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Confirm Password
                    </label>
                    <Input.Password
                      required
                      {...bindings}
                      size="lg"
                      width="100%"
                      value={confirmPassword}
                      clearable
                      color="white"
                      onChange={handleConfirmPasswordChange}
                      status={passwordMatch ? "success" : "error"}
                      type="password"
                      placeholder="Confirm your password"
                    />
                  </Grid>
                  <br></br>
                  <Grid>
                    <label className="inline-flex items-center cursor-pointer">
                      <Checkbox color="success" defaultSelected size="sm">
                        I agree with the &nbsp;
                        <a
                          href="#"
                          className="text-lightBlue-500"
                          onClick={(e) => e.preventDefault()}
                        >
                          Privacy Policy
                        </a>{" "}
                      </Checkbox>
                    </label>
                  </Grid>

                  <Grid className="text-center mt-6">
                    <button
                      className=" px-6 py-3 outline-none focus:outline-none mr-1 mb-1 w-full main-button gradient"
                      type="main-button "
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onClick={handleCreateAccount}
                    >
                      Create Account
                    </button>
                  </Grid>
                </form>
                <br></br>
                <Grid className="w-1/3 text-left">
                  <Link href="/auth/login">
                    <a>
                      <Text b>
                        Already have an account? <b>Login</b>
                      </Text>
                    </a>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
