import React from "react";
import Meta from "../../components/seo/index";

import Auth from "../../layouts/Auth.js";
import Register from "../../components/auth/Register";

export default function RegisterPage() {
  return (
    <>
      <Meta
        title="Register - AINEXIM"
        description="AINEXIM, step into the future of virtual work experience."
        ogUrl="https://ainexim.com"
        thumbnail="https://i.postimg.cc/MKBWj4pd/thumbnail.png"
        keywords="AINEXIM, Virtual work"
      ></Meta>
      <Register />
    </>
  );
}

RegisterPage.layout = Auth;
