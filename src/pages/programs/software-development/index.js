import React from "react";
import { useSelector } from "react-redux";

import Meta from "../../../components/seo/index.js";

import SoftwareDevelopment from "../../../components/programs/softwareDev.js";

export default function ContactI() {
  return (
    <IndexLayout>
      <Meta
        title="Software Development Programs- AINEXIM"
        description="AINEXIM, step into the future of virtual work experience."
        ogUrl="https://ainexim.com"
        thumbnail="https://i.postimg.cc/MKBWj4pd/thumbnail.png"
        keywords="AINEXIM, Virtual work"
      ></Meta>
      <SoftwareDevelopment />
    </IndexLayout>
  );
}
