import React, { useState } from "react";

import { Card, Grid, Text, Link } from "@nextui-org/react";
import Image from "next/image";

export default function ProjectMang() {
  const [isReverse, setIsReverse] = useState(false);
  const toggleReverse = () => {
    setIsReverse(!isReverse);
  };
  const cards = [
    {
      image: "/assets/images/fullstack.png",
      desc: "Create user stories and prioritize them in a product backlog using Agile frameworks like Scrum or Kanban.",
      reverse: false,
    },
    {
      image: "/assets/images/responsive.jpg",
      desc: "Lead daily stand-up meetings to ensure team coordination and progress tracking.",
      reverse: true,
    },
    {
      image: "/assets/images/uiweb.jpg",
      desc: "Conduct sprint planning and define sprint goals based on team capacity and project requirements.",
      reverse: false,
    },
    {
      image: "/assets/images/debug.jpg",
      desc: "Facilitate sprint review and retrospective meetings to gather feedback and improve team performance.",
      reverse: true,
    },
    {
      image: "/assets/images/test.jpg",
      desc: "Develop and execute a project communication plan to ensure stakeholders are informed about project progress and milestones.",
      reverse: false,
    },
  ];
  return (
    <>
      <Grid className="wrapper-all">
        <Grid md={12} align="center">
          <Text span size="$md" weight="bold">
            PROJECT MANAGEMENT
          </Text>
          <br></br>
          <br></br>
          <Text span size="$md">
            Immersive Project Management Programs for Future Leaders
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
