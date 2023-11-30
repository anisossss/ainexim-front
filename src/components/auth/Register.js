import React, { useState, useEffect } from "react";
import {
  Input,
  Grid,
  Text,
  useInput,
  Image,
  Checkbox,
  Radio,
} from "@nextui-org/react";
import Link from "next/link";
import { CONSTANTS } from "../../constants/index";
import toast, { Toaster } from "react-hot-toast";

import axios from "axios";

import { useRouter } from "next/router";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
export default function Register() {
  const [query, setQuery] = useState("");
  const [checkedOption, setCheckedOption] = useState("email");

  useEffect(() => {
    const content = router.query.scheme;
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
  const handleOptionChange = (event) => {
    setCheckedOption(event);
  };
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { value, reset, bindings } = useInput("");

  const [passwordMatch, setPasswordMatch] = useState(false);
  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
  };
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

    if (checkedOption === "email") {
      var url = `${CONSTANTS.API_URL_PROD}/auth/register-email?scheme=${query}`;
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
    }
    if (checkedOption === "phone") {
      var url = `${CONSTANTS.API_URL_PROD}/auth/register-phone?scheme=${query}`;

      try {
        const res = await axios.post(url, {
          name: name,
          phoneNumber: phoneNumber,
          password: password,
          confirmPassword: confirmPassword,
        });
        toast.success(res.data.message);
        setTimeout(() => {
          const redirectUrl = `/auth/verify-otp?phoneNumber=${phoneNumber}`;
          router.push(redirectUrl);
        }, 2000);
      } catch (error) {
        toast.error(error.response.data.message);
        setLoading(false);
      }
    }
  };
  return (
    <>
      <Grid className="flex  items-center justify-center outer-container">
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 5000,
          }}
        />
        <Grid className="w-full lg:w-6/12 px-4 inner-container">
          <Grid className="relative flex flex-col min-w-0 break-words w-full mb-6"></Grid>
          <Grid className="flex-auto  ">
            <Grid className="text-blueGray-800 text-center mb-3 font-bold">
              <Text h3>Sign up with credentials</Text>
            </Grid>
            <br></br>
            <form>
              <Grid className="relative w-full mb-3">
                <Radio.Group
                  label="Signup Options"
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
                    <Link href="/privacy-policy">
                      <a className="text-lightBlue-500" target="_blank">
                        Privacy Policy
                      </a>
                    </Link>{" "}
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
            <Grid className="w-1/3 text-left mb-8">
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
    </>
  );
}
