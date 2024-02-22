import React from "react";

import Meta from "../../components/seo/index.js";

import Waitlist from "../../components/waitlist/index.js";
import { IndexLayout } from "../../layouts/index.js";

export default function WaitlistI() {
  return (
    <IndexLayout>
      <Meta
        title="Join the wailist - AINEXIM"
        description="AINEXIM, step into the future of virtual work experience."
        ogUrl="https://ainexim.com"
        thumbnail="https://i.postimg.cc/MKBWj4pd/thumbnail.png"
        keywords="AINEXIM, Virtual work"
      ></Meta>
      <Waitlist />
    </IndexLayout>
  );
}
