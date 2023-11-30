import React from "react";

import Auth from "../../layouts/Auth.js";
import Meta from "../../components/seo/index.js";
import ResetPasswordPhone from "../../components/auth/ResetPasswordPhone.js";

export default function ResetPasswordPhonePage() {
  return (
    <>
      <Meta
        title="Reset Password Phone - AINEXIM"
        description="AINEXIM, step into the future of virtual work experience."
        ogUrl="https://ainexim.com"
        thumbnail="https://i.postimg.cc/MKBWj4pd/thumbnail.png"
        keywords="AINEXIM, Virtual work"
      ></Meta>
      <ResetPasswordPhone />
    </>
  );
}

ResetPasswordPhonePage.layout = Auth;
