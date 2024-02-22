import React from "react";
import { useSelector } from "react-redux";

import Meta from "../../../components/seo/index.js";

import ProjectMang from "../../../components/programs/projectMang.js";

export default function PMScreen() {
  return (
    <IndexLayout>
      <Meta
        title="Project Management - AINEXIM"
        description="AINEXIM, step into the future of virtual work experience."
        ogUrl="https://ainexim.com"
        thumbnail="https://i.postimg.cc/MKBWj4pd/thumbnail.png"
        keywords="AINEXIM, Virtual work"
      ></Meta>
      <ProjectMang />
    </IndexLayout>
  );
}
