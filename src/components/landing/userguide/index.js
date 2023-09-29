import { Grid, Text } from "@nextui-org/react";
import React from "react";
import { Box } from "../../styles/box";
import { Flex } from "../../styles/flex";
import Image from "next/image";
const Fade = require("react-reveal/Fade");

export default function UserGuide() {
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
        <Fade top>
          <Text h3 size={"$4xl"}>
            USER GUIDE
          </Text>
          <br></br>

          <Text span size={"$md"}>
            Backed by industry-leading experts, our certification program offers
            the highest quality training and comprehensive skill development.
          </Text>
          <br></br>
          <br></br>
          <Image
            src="/assets/landing/path.svg"
            width={600}
            height={600}
            alt=""
          />
        </Fade>
      </Grid>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}
