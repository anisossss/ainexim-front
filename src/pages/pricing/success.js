import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { CONSTANTS } from "../../constants/index";
import Link from "next/link";
import { Text, Grid } from "@nextui-org/react";

import Meta from "../../components/seo/index.js";
import Logged from "../../layouts/Auth.js";
import { useSelector } from "react-redux";

import PaymentSuccess from "/public/success.json";
import Lottie from "react-lottie";
import toast from "react-hot-toast";

export default function Success() {
  const router = useRouter();
  const { accessToken } = useSelector((state) => state.auth);
  function HandleAnimation() {
    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: PaymentSuccess,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    setTimeout(router.push("/profile/my-information"), 8000);

    return (
      <Grid style={{ position: "relative" }}>
        <Lottie options={defaultOptions} height={300} width={300} />
        <br></br>
        <Text span color="white">
          Subscription done successfully !
        </Text>
        <Grid>
          <br></br>
          <Link href="/profile/my-information" style={{ cursor: "pointer" }}>
            <h3>Go to profile</h3>
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
        toast.error("Failed to update account status");
      }
    };
    updateAccount();
  }, [router.query, accessToken]);
  return (
    <>
      <Meta
        title="Subscription Success - AINEXIM"
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
