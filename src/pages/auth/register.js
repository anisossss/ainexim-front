import React from "react";
import Meta from "../../components/seo/index";

import { IndexLayout } from "../../layouts";
import Register from "../../components/auth/Register";

export default function RegisterPage() {
  return (
    <>
      <Meta
        title="Create account - AINEXIM"
        description="AINEXIM, step into the future of virtual work experience."
        ogUrl="https://ainexim.com"
        thumbnail="https://i.postimg.cc/MKBWj4pd/thumbnail.png"
        keywords="AINEXIM, Virtual work"
      ></Meta>
      <IndexLayout>
        <Register />
      </IndexLayout>
    </>
  );
}
