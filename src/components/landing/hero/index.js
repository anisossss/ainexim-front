import { Grid, Input, Text } from "@nextui-org/react";
import React, { useState } from "react";
import { Box } from "../../styles/box";
import { Flex } from "../../styles/flex";
import Image from "next/image";
import Link from "next/link";
const Bounce = require("react-reveal/Bounce");
const Fade = require("react-reveal/Fade");

export const Hero = () => {
  return (
    <>
      <Flex
        css={{
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          "@sm": {
            flexDirection: "row",
          },
          "@media (max-width: 767px)": {
            padding: 50,
          },
        }}
        justify={"center"}
      >
        <Box
          css={{
            display: "flex",
            flexDirection: "column",
            gap: "$5",
          }}
        >
          <Box
            css={{
              maxWidth: "650px",
            }}
          >
            <Fade top>
              <Text h1>Revolutionize Your Online Work Experience</Text>
            </Fade>

            <Bounce top>
              <Text
                h1
                css={{
                  display: "inline",
                  textGradient: "45deg, #86d4ca -20%, #86d4ca 50%",
                }}
              >
                with Immersive Interfaces
              </Text>
            </Bounce>
          </Box>
          <Text
            css={{
              maxWidth: "500px",
            }}
            size={"$sm"}
            span
          >
            Step into a world where online work becomes an exhilarating
            adventure. Our immersive interface takes your professional career to
            new heights by incorporating interactive 3D environments, gamified
            elements, and real-time collaborative work directly in your browser.
          </Text>
          <Flex
            css={{
              gap: "$8",
              pt: "$4",
            }}
            wrap={"wrap"}
          >
            <Link href="/waitlist">
              <div className="wrapper-btn">
                <div className="link_wrapper">
                  <a href="careers" className="a">
                    Enroll Now
                  </a>
                </div>
              </div>
            </Link>
          </Flex>
          <br></br>
        </Box>
        <Fade top>
          <Grid>
            <Image
              src="/assets/landing/hero.svg"
              alt=""
              width={500}
              height={500}
              objectFit="contain"
            />
          </Grid>
        </Fade>
      </Flex>
    </>
  );
};
