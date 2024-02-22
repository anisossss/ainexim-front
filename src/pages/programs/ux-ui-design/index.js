import React from "react";
import { useSelector } from "react-redux";

import Meta from "../../../components/seo/index.js";

import Design from "../../../components/programs/design.js";
import IndexLayout from "../../../layouts";
export default function UXUIDesign() {
  return (
    <IndexLayout>
      <Meta
        title="UX/UI Design Programs - AINEXIM"
        description="AINEXIM, step into the future of virtual work experience."
        ogUrl="https://ainexim.com"
        thumbnail="https://i.postimg.cc/MKBWj4pd/thumbnail.png"
        keywords="AINEXIM, Virtual work"
      ></Meta>
      <Design />
    </IndexLayout>
  );
}
