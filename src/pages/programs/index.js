import React from "react";
import { useSelector } from "react-redux";

import Meta from "../../components/seo/index.js";
import Auth from "../../layouts/Auth.js";
import Logged from "../../layouts/Logged.js";

import Programs from "../../components/programs/index.js";

export default function ContactI() {
  const accessToken = useSelector((state) => state.auth.accessToken);

  // Check if the access token exists
  const isAuthenticated = !!accessToken;

  // Conditionally set the layout based on authentication
  const AuthLayout = isAuthenticated ? Logged : Auth;

  return (
    <AuthLayout>
      <Meta
        title="Programs - AINEXIM"
        description="AINEXIM, step into the future of virtual work experience."
        ogUrl="https://ainexim.com"
        thumbnail="https://i.postimg.cc/MKBWj4pd/thumbnail.png"
        keywords="AINEXIM, Virtual work"
      ></Meta>
      <Programs />
    </AuthLayout>
  );
}
