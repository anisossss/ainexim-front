import React from "react";

import { IndexLayout } from "../../layouts";
import Meta from "../../components/seo/index.js";
import VerifyOTP from "../../components/auth/VerifyOTP.js";

export default function VerifyOTPPage() {
  return (
    <>
      <Meta
        title="Verify OTP - AINEXIM"
        description="AINEXIM, step into the future of virtual work experience."
        ogUrl="https://ainexim.com"
        thumbnail="https://i.postimg.cc/MKBWj4pd/thumbnail.png"
        keywords="AINEXIM, Virtual work"
      ></Meta>
      <IndexLayout>
        <VerifyOTP />
      </IndexLayout>
    </>
  );
}
