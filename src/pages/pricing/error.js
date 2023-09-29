import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { CONSTANTS } from "../../constants/index";
import { Text, Grid } from "@nextui-org/react";

import Meta from "../../components/seo/index.js";
import Logged from "../../layouts/Auth.js";
import { useSelector } from "react-redux";
import Link from "next/link";

import PaymentError from "/public/error.json";
import Lottie from "react-lottie";

export default function Success() {
  const router = useRouter();
  const { accessToken } = useSelector((state) => state.auth);

  function HandleAnimation() {
    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: PaymentError,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    return (
      <Grid style={{ position: "relative" }}>
        <Lottie options={defaultOptions} height={300} width={300} />
        <br></br>
        <Text span color="white">
          Payment Still pending... Retry !
        </Text>

        <Grid>
          <br></br>
          <Link href="/pricing" style={{ cursor: "pointer" }}>
            <h3>Go to pricing</h3>
          </Link>
        </Grid>
      </Grid>
    );
  }
  useEffect(() => {
    const searchParams = new URLSearchParams(router.query);
    const sessionId = searchParams.get("session_id");
    const url = `${CONSTANTS.API_URL_PROD}/user/check-payment/${sessionId}`;

    const updateAccount = async () => {
      try {
        const headers = { Authorization: accessToken };
        axios.post(url, {}, { headers });

        console.log("Account status updated successfully");
      } catch (error) {
        console.error("Failed to update account status:", error);
      }
    };
    updateAccount();
  }, [router.query, accessToken]);
  return (
    <>
      <Meta
        title="Subscription Error - AINEXIM"
        description="AINEXIM, step into the future of virtual work experience."
        ogUrl="https://ainexim.com"
        thumbnail="https://i.postimg.cc/MKBWj4pd/thumbnail.png"
        keywords="AINEXIM, Virtual work"
      ></Meta>
      <br></br>
      <br></br>
      <div align="center">
        <HandleAnimation />
      </div>
    </>
  );
}

Success.layout = Logged;
