import React from "react";
import { useSelector } from "react-redux";

import Meta from "../../components/seo/index.js";
import { IndexLayout } from "../../layouts";

import Careers from "../../components/careers/index.js";

export default function AboutI() {
  return (
    <IndexLayout>
      <Meta
        title="Careers - AINEXIM"
        description="AINEXIM, step into the future of virtual work experience."
        ogUrl="https://ainexim.com"
        thumbnail="https://i.postimg.cc/MKBWj4pd/thumbnail.png"
        keywords="AINEXIM, Virtual work"
      ></Meta>
      <Careers />
    </IndexLayout>
  );
}
