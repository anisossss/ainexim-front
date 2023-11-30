import React, { useState } from "react";
import Link from "next/link";
import { Input, useInput, Image, Text, Grid, Radio } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";
import { CONSTANTS } from "../../constants/index";
import axios from "axios";
import { setAccessToken, setRefreshToken } from "../../store/authSlice";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [checkedOption, setCheckedOption] = useState("email");

  const [isHovered, setIsHovered] = useState(true);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleOptionChange = (event) => {
    setCheckedOption(event);
  };
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { value, reset, bindings } = useInput("");

  const validateEmail = (value) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
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
    if (checkedOption === "email") {
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
          router.push("/waitlist");
        }
      } catch (error) {
        toast.error(error.response.data.message);
      } finally {
        setLoading(false);
      }
    }
    if (checkedOption === "phone") {
      var url = `${CONSTANTS.API_URL_PROD}/auth/login-phone`;

      try {
        const res = await axios.post(url, {
          phoneNumber: phoneNumber,
          password: password,
        });

        const accessToken = res.data.access_token;
        const refreshToken = res.data.refresh_token;

        if (accessToken && refreshToken) {
          dispatch(setAccessToken(accessToken));
          dispatch(setRefreshToken(refreshToken));
          toast.success(res.data.message);
          router.push("/waitlist");
        } else {
          toast.error("You are not authorized !");
        }
      } catch (error) {
        toast.error(error.response.data.message);
        if (error.response.status === 401) {
          router.push("/auth/verify-otp?phoneNumber=" + phoneNumber);
        }
      } finally {
        setLoading(false);
      }
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
            <Grid className="flex-auto  ">
              <Grid className="text-blueGray-800 text-center mb-3 font-bold">
                <Text h3>Sign in with credentials</Text>
              </Grid>
              <br></br>
              <form>
                <Grid className="relative w-full mb-3">
                  <Radio.Group
                    label="Signin Options"
                    defaultValue="email"
                    orientation="horizontal"
                    value={checkedOption}
                    onChange={handleOptionChange}
                    isRequired
                  >
                    <Radio value="email" color="success">
                      <Text span size="$md">
                        Email
                      </Text>
                    </Radio>
                    <Radio value="phone" color="success">
                      <Text span size="$md">
                        Phone Number
                      </Text>
                    </Radio>
                  </Radio.Group>
                </Grid>
                <br></br>
                {checkedOption === "email" && (
                  <Grid className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-800 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <Input
                      value={email}
                      onChange={handleEmailChange}
                      size="lg"
                      required
                      width="100%"
                      {...bindings}
                      helperColor={helper.color}
                      type="email"
                      placeholder="Enter your email address"
                    />
                  </Grid>
                )}
                {checkedOption === "phone" && (
                  <Grid className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-800 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Phone Number
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
                  </Grid>
                )}
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
                <Grid css={{ position: "relative", zIndex: 0 }}>
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

              <Grid className="  mt-4  mb-8">
                <Grid className=" text-left ">
                  <Link href="/auth/register">
                    <a>
                      <Text b size={"$sm"}>
                        Create new account
                      </Text>
                    </a>
                  </Link>
                </Grid>
                <Grid className=" text-right">
                  <Link href="/auth/forget-password-email">
                    <a>
                      <Text b size={"$sm"}>
                        Recover password with email
                      </Text>
                    </a>
                  </Link>
                  <Grid>
                    <Link href="/auth/forget-password-phone">
                      <a>
                        <Text b size={"$sm"}>
                          Recover password with phone
                        </Text>
                      </a>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
