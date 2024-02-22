import React from "react";
import { useSelector } from "react-redux";

import Meta from "../../components/seo/index.js";
import { IndexLayout } from "../../layouts";

import About from "../../components/about/index.js";

export default function AboutI() {
  return (
    <IndexLayout>
      <Meta
        title="About - AINEXIM"
        description="AINEXIM, step into the future of virtual work experience."
        ogUrl="https://ainexim.com"
        thumbnail="https://i.postimg.cc/MKBWj4pd/thumbnail.png"
        keywords="AINEXIM, Virtual work"
      ></Meta>
      <About />
    </IndexLayout>
  );
}
