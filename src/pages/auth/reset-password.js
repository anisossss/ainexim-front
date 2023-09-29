import React from "react";

import Auth from "../../layouts/Auth.js";
import Meta from "../../components/seo/index.js";
import ResetPassword from "../../components/auth/ResetPassword.js";

export default function ResetPasswordPage() {
  return (
    <>
      <Meta
        title="Reset Password - AINEXIM"
        description="AINEXIM, step into the future of virtual work experience."
        ogUrl="https://ainexim.com"
        thumbnail="https://i.postimg.cc/MKBWj4pd/thumbnail.png"
        keywords="AINEXIM, Virtual work"
      ></Meta>
      <ResetPassword />
    </>
  );
}

ResetPasswordPage.layout = Auth;
