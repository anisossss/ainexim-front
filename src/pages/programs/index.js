import React from "react";
import { useSelector } from "react-redux";

import Meta from "../../components/seo/index.js";
import { IndexLayout } from "../../layouts";

import Programs from "../../components/programs/index.js";

export default function ContactI() {
  return (
    <IndexLayout>
      <Meta
        title="Programs - AINEXIM"
        description="AINEXIM, step into the future of virtual work experience."
        ogUrl="https://ainexim.com"
        thumbnail="https://i.postimg.cc/MKBWj4pd/thumbnail.png"
        keywords="AINEXIM, Virtual work"
      ></Meta>
      <Programs />
    </IndexLayout>
  );
}
