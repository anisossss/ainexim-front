import React from "react";
import { useSelector } from "react-redux";

import Meta from "../../components/seo/index.js";
import Auth from "../../layouts/Auth.js";
import Logged from "../../layouts/Logged.js";

import { Plans } from "../../components/plans/index.js";

export default function Pricing() {
  const accessToken = useSelector((state) => state.auth.accessToken);

  const isAuthenticated = !!accessToken;

  const AuthLayout = isAuthenticated ? Logged : Auth;

  return (
    <AuthLayout>
      <Meta
        title="Plans & Pricing - AINEXIM"
        description="AINEXIM, step into the future of virtual work experience."
        ogUrl="https://ainexim.com"
        thumbnail="https://i.postimg.cc/MKBWj4pd/thumbnail.png"
        keywords="AINEXIM, Virtual work"
      ></Meta>
      <Plans />
    </AuthLayout>
  );
}
