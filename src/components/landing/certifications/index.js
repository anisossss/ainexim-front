import { Grid, Text } from "@nextui-org/react";
import React from "react";

import Cards from "./CardsCertifications";
const Fade = require("react-reveal/Fade");

export default function Certifications() {
  return (
    <>
      <Grid
        css={{
          margin: "auto",
          textAlign: "center",
          width: "60%",
          pt: "8%",
          justifyContent: "center",
          alignItems: "center",
          "@media (max-width: 767px)": {
            padding: 60,
          },
        }}
      >
        <Text h3 size={"$4xl"}>
          Unleash Your Potential with Our Best Certifications
        </Text>
        <br></br>

        <Text span size={"$md"}>
          Through a rigorous and comprehensive online learning experience,
          you&apos;ll immerse yourself in industry-relevant topics, acquire
          practical skills through hands-on projects, and receive expert
          guidance from seasoned professionals. Our certification programs are
          built upon industry standards and best practices, ensuring that you
          are equipped with the latest knowledge and skills required to thrive
          in today&apos;s fast-paced and ever-evolving professional landscape.
        </Text>
        <br></br>
        <Cards />
      </Grid>
    </>
  );
}
