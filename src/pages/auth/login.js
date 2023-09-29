import React from "react";

import Meta from "../../components/seo";

import Auth from "../../layouts/Auth.js";
import Login from "../../components/auth/Login";

export default function LoginPage() {
  return (
    <>
      <Meta
        title="Login - AINEXIM"
        description="AINEXIM, step into the future of virtual work experience."
        ogUrl="https://ainexim.com"
        thumbnail="https://i.postimg.cc/MKBWj4pd/thumbnail.png"
        keywords="AINEXIM, Virtual work"
      ></Meta>
      <Login />
    </>
  );
}

LoginPage.layout = Auth;
