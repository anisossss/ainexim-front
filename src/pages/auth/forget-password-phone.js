import React from "react";

import { IndexLayout } from "../../layouts";
import Meta from "../../components/seo/index.js";
import ForgetPasswordPhone from "../../components/auth/ForgetPasswordPhone.js";

export default function ForgetPasswordPhonePage() {
  return (
    <>
      <Meta
        title="Forget Password Phone - AINEXIM"
        description="AINEXIM, step into the future of virtual work experience."
        ogUrl="https://ainexim.com"
        thumbnail="https://i.postimg.cc/MKBWj4pd/thumbnail.png"
        keywords="AINEXIM, Virtual work"
      ></Meta>
      <ForgetPasswordPhone />
    </>
  );
}

ForgetPasswordPhonePage.layout = Auth;
