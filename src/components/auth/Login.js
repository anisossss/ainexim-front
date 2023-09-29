import React, { useState } from "react";
import Link from "next/link";
import { Input, useInput, Image, Text, Grid } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";
import { CONSTANTS } from "../../constants/index";
import axios from "axios";
import { setAccessToken, setRefreshToken } from "../../store/authSlice";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import { GoogleLogin } from "@react-oauth/google";

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();

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
    } finally {
      setLoading(false);
    }
  };
  const [isHovered, setIsHovered] = useState(true);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const { value, reset, bindings } = useInput("");

  const validateEmail = (value) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
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

  const handleLogin = async (event) => {
    event.preventDefault();

    setLoading(true);

    var url = `${CONSTANTS.API_URL_PROD}/auth/login`;

    try {
      const res = await axios.post(url, {
        email: value,
        password: password,
      });

      const accessToken = res.data.access_token;
      const refreshToken = res.data.refresh_token;

      if (accessToken && refreshToken) {
        dispatch(setAccessToken(accessToken));
        dispatch(setRefreshToken(refreshToken));
        toast.success(res.data.message);
        router.push("/discover");
      } else {
        console.error("You are not authorized !");
        toast.error("Invalid server response");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Grid className="flex content-center items-center justify-center outer-container">
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 5000,
          }}
        />
        <Grid className="w-full lg:w-6/12 px-4 inner-container relative z-10">
          <Grid className="relative flex flex-col min-w-0 break-words w-full mb-6 ">
            <Grid css={{ margin: "auto" }}>
              <GoogleLogin
                clientId={
                  "666060136282-7r0rvs6b50tosm1dm8ul5hibg27eg0on.apps.googleusercontent.com"
                }
                onSuccess={handleGoogleAuth}
                onFailure={() => console.log("Google authentication failed")}
                render={({ onClick }) => (
                  <button onClick={onClick}>Sign in with Google</button>
                )}
              />
            </Grid>
            <hr className="mt-6 border-b-1 border-blueGray-300" />
            <br></br>
            <Grid className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <Grid className="text-blueGray-800 text-center mb-3 font-bold">
                <Text b>Or sign in with credentials</Text>
              </Grid>
              <br></br>
              <form>
                <Grid className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-800 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email
                  </label>
                  <Input
                    size="lg"
                    required
                    width="100%"
                    {...bindings}
                    clearable
                    shadow={false}
                    onClearClick={reset}
                    status={helper.color}
                    color={helper.color}
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
                    type="password"
                    placeholder="Enter your password"
                    size="lg"
                    required
                    clearable
                    width="100%"
                    {...bindings}
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </Grid>
                <Grid>
                  <label className="inline-flex items-center cursor-pointer">
                    <Checkbox defaultSelected size="sm" color="success">
                      Remember me
                    </Checkbox>
                  </label>
                </Grid>

                <Grid className="text-center mt-6">
                  <button
                    className=" px-6 py-3 outline-none focus:outline-none mr-1 mb-1 
                      w-full main-button gradient"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleLogin}
                  >
                    Sign In
                  </button>
                </Grid>
              </form>
              <Grid className="flex flex-wrap mt-6 relative">
                <Grid className="w-1/2">
                  <Link href="/auth/forget-password">
                    <a>
                      <Text b>Forgot password?</Text>
                    </a>
                  </Link>
                </Grid>
                <Grid className="w-1/2 text-right">
                  <Link href="/auth/register">
                    <a>
                      <Text b>Create new account</Text>
                    </a>
                  </Link>
                </Grid>
              </Grid>
              <br></br>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
