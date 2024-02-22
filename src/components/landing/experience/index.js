import { Grid, Text } from "@nextui-org/react";
import React from "react";

import Cards from "./cardsExperience";
const Fade = require("react-reveal/Fade");

export default function certifications() {
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
          Unleash Your Potential with Our Best Virtual work experience
        </Text>
        <br></br>

        <Text span size={"$md"}>
          Are you ready to take your skills to the next level? Look no further
          than our best courses, designed to empower individuals in the fields
          of software development (mobile, web, and desktop), UX/UI design, and
          Agile methods. Through a dynamic and immersive online learning
          experience, you&apos;ll dive deep into industry-relevant topics, gain
          hands-on experience through practical projects, and receive expert
          guidance from industry professionals.
        </Text>
        <br></br>
        <Cards />
      </Grid>
    </>
  );
}
