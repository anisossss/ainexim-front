import React, { useState } from "react";

import { Card, Grid, Text, Link } from "@nextui-org/react";
import Image from "next/image";

export default function Design() {
  const [isReverse, setIsReverse] = useState(false);
  const toggleReverse = () => {
    setIsReverse(!isReverse);
  };
  const cards = [
    {
      image: "/assets/images/uxui.jpg",
      desc: "Conduct user research and create user personas for a specific target audience.",
      reverse: false,
    },
    {
      image: "/assets/images/uxui_courses.jpg",
      desc: "Design wireframes and interactive prototypes for a new mobile app.",
      reverse: true,
    },
    {
      image: "/assets/images/uiweb.jpg",
      desc: "Collaborate with developers to implement a seamless user experience.",
      reverse: false,
    },
    {
      image: "/assets/images/test.jpg",
      desc: "Conduct usability testing and iteratively refine design based on user feedback.",
      reverse: true,
    },
    {
      image: "/assets/images/uxui.jpg",
      desc: "Create a comprehensive style guide and design system for a web application.",
      reverse: false,
    },
  ];
  return (
    <>
      <Grid className="wrapper-all">
        <Grid md={12} align="center">
          <Text span size="$md" weight="bold">
            UX/UI DESIGN
          </Text>
          <br></br>
          <br></br>
          <Text span size="$md">
            Immersive Design Programs for Future Designers
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
