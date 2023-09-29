import { Grid, Text } from "@nextui-org/react";
import React from "react";
import { Box } from "../../styles/box";
import { Flex } from "../../styles/flex";
const Fade = require("react-reveal/Fade");
import Image from "next/image";

export const About = () => {
  return (
    <>
      <Grid
        css={{
          pt: "10em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "@sm": {},
          "@media (max-width: 767px)": {
            padding: 60,
            flexDirection: "column",
          },
        }}
      >
        <Box
          css={{
            maxWidth: "650px",
          }}
        >
          <Fade left>
            <Text h2 css={{}}>
              What&apos;s is AINEXIM ?
            </Text>
            <Flex
              css={{
                py: "$10",
                gap: "$5",
                alignItems: "center",
              }}
            >
              <Text span>
                Our AI-powered recipe generation app is designed to make meal
                planning and cooking easier than ever before. Using the latest
                in artificial intelligence technology, our app can analyze your
                dietary preferences and cooking skills to generate personalized
                recipes that are tailored to your needs.
              </Text>
            </Flex>
            <button className="main-button gradient">See more</button>{" "}
          </Fade>
        </Box>

        <Fade right>
          <Flex>
            <Image
              width={400}
              height={400}
              src="/img/landing/chief.png"
              alt=""
              objectFit="contain"
            />
          </Flex>
        </Fade>
      </Grid>
    </>
  );
};
