import React from "react";

import { IndexLayout } from "../../layouts";
import Meta from "../../components/seo/index.js";
import ForgetPassword from "../../components/auth/ForgetPassword.js";

export default function ForgetPasswordPage() {
  return (
    <>
      <Meta
        title="Forget Password - AINEXIM"
        description="AINEXIM, step into the future of virtual work experience."
        ogUrl="https://ainexim.com"
        thumbnail="https://i.postimg.cc/MKBWj4pd/thumbnail.png"
        keywords="AINEXIM, Virtual work"
      ></Meta>
      <IndexLayout>
        <ForgetPassword />
      </IndexLayout>
    </>
  );
}
