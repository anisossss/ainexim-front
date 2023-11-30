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
            pt: "10em",
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
            {/* Whether you&apos; re a software developer specializing in mobile,
            web, or desktop applications, a UX/UI designer dedicated to creating
            seamless user experiences, or a passionate advocate of Agile
            methods, our platform is tailored to your specific field. Complete
            tasks, earn scores, and track your progress as you build your skills
            and shape your career in a virtual realm like never before. Join us
            and discover the future of work today. */}
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
          <Grid css={{ marginTop: "5em" }}>
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
