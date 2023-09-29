import React, { useState } from "react";

import { Card, Grid, Text, Link } from "@nextui-org/react";
import Image from "next/image";

export default function SoftwareDevelopment() {
  const [isReverse, setIsReverse] = useState(false);
  const toggleReverse = () => {
    setIsReverse(!isReverse);
  };
  const cards = [
    {
      image: "/assets/images/fullstack.png",
      desc: "Develop a full stack application that integrates with external APIs.",
      reverse: false,
    },
    {
      image: "/assets/images/responsive.jpg",
      desc: "Build a responsive website using modern front-end frameworks and libraries.",
      reverse: true,
    },
    {
      image: "/assets/images/uiweb.jpg",
      desc: "Create a web application with advanced UI features and functionality.",
      reverse: false,
    },
    {
      image: "/assets/images/debug.jpg",
      desc: "Debug and fix errors in existing codebases to improve software performance.",
      reverse: true,
    },
    {
      image: "/assets/images/test.jpg",
      desc: "Implement unit tests and conduct code reviews for quality assurance.",
      reverse: false,
    },
  ];
  return (
    <>
      <Grid className="wrapper-all">
        <Grid md={12} align="center">
          <Text span size="$md" weight="bold">
            SOFTWARE ENGINEERING
          </Text>
          <br></br>
          <br></br>
          <Text span size="$md">
            Immersive Software Development Programs for Future Developers
          </Text>
        </Grid>
        <br></br>
        <br></br>
        <Grid md={12} align="center">
          {cards.map(({ image, desc, reverse }) => (
            <Grid.Container
              align="center"
              gap={2}
              key={desc}
              className={`flex content-center items-center justify-center${
                reverse ? " reverse" : ""
              }`}
            >
              {reverse ? (
                <>
                  <Grid md={6}>
                    <Grid className="flex content-center items-center justify-center">
                      <Image
                        src={image}
                        width={400}
                        height={400}
                        alt=""
                        objectFit="contain"
                      />
                    </Grid>
                  </Grid>
                  <Grid xs={12} md={6}>
                    <Text b size="$md" textAlign="right">
                      {desc}
                    </Text>
                  </Grid>
                </>
              ) : (
                <>
                  <Grid xs={12} md={6}>
                    <Text b size="$md">
                      {desc}
                    </Text>
                  </Grid>
                  <Grid md={6}>
                    <Grid className="flex content-center items-center justify-center">
                      <Image
                        src={image}
                        width={400}
                        height={400}
                        alt=""
                        objectFit="contain"
                      />
                    </Grid>
                  </Grid>
                </>
              )}
            </Grid.Container>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
