import React from "react";

import Meta from "../../components/seo/index.js";
import { IndexLayout } from "../../layouts";
import { Plans } from "../../components/plans/index.js";

export default function Pricing() {
  return (
    <IndexLayout>
      <Meta
        title="Plans & Pricing - AINEXIM"
        description="AINEXIM, step into the future of virtual work experience."
        ogUrl="https://ainexim.com"
        thumbnail="https://i.postimg.cc/MKBWj4pd/thumbnail.png"
        keywords="AINEXIM, Virtual work"
      ></Meta>
      <Plans />
    </IndexLayout>
  );
}
