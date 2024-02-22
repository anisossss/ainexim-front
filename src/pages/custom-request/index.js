import React from "react";
import { useSelector } from "react-redux";

import Meta from "../../components/seo/index.js";
import { IndexLayout } from "../../layouts";

import CustomRequest from "../../components/requests/index.js";

export default function CustomRequestI() {
  return (
    <IndexLayout>
      <Meta
        title="Custom Request - AINEXIM"
        description="AINEXIM, step into the future of virtual work experience."
        ogUrl="https://ainexim.com"
        thumbnail="https://i.postimg.cc/MKBWj4pd/thumbnail.png"
        keywords="AINEXIM, Virtual work"
      ></Meta>
      <CustomRequest />
    </IndexLayout>
  );
}
