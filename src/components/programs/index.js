import React, { useState } from "react";

import { Card, Grid, Text, Link } from "@nextui-org/react";
import Image from "next/image";
const Fade = require("react-reveal/Fade");
export default function Programs() {
  const cards = [
    {
      image: "/assets/images/sd.jpg",
      text: "Software Development",
      desc: " Comprehensive Software Development Programs for Technical Excellence.",
      desc2:
        "Experience hands-on learning in mobile, web, and desktop development.",
      fade: "left",
      href: "/programs/software-development",
    },
    {
      image: "/assets/images/uxui.jpg",
      text: "UX/UI Design",
      desc: "Innovative UX/UI Design Programs for Creative Problem Solvers. ",
      desc2:
        "Master the art of designing user-centered interfaces with interactive projects.",
      fade: "right",
      href: "/programs/ux-ui-design",
    },

    {
      image: "/assets/images/pm.jpg",
      text: "Project Management",
      desc: "Dynamic Project Management Programs for Effective Team Leaders. ",
      desc2:
        "Learn Agile methods through real-time collaboration and project execution.",
      fade: "left",
      href: "/programs/project-management",
    },
  ];

  return (
    <>
      <Grid className="wrapper-all">
        <Grid align="center">
          <Text span size="$md" weight="bold">
            OUR PROGRAMS
          </Text>
          <br></br>
          <br></br>
          <Text span size="$md">
            Immersive Programs for Professional Growth
          </Text>
        </Grid>
        <br></br>
        <br></br>
        <Grid sm={12} xs={12} css={{ margin: "auto" }} align="center">
          {cards.map(({ image, text, desc, desc2, fade, href }) => (
            <Fade left={fade === "left"} right={fade === "right"} key={text}>
              <Link href={href}>
                <a style={{ width: "60em" }}>
                  <Card
                    isPressable
                    css={{
                      padding: 0,
                      marginBottom: "2em",
                    }}
                  >
                    <Card.Body>
                      <Card.Image
                        src={image}
                        alt=""
                        width="100%"
                        css={{ height: "15em", width: "30em" }}
                        objectFit="cover"
                      ></Card.Image>
                      <br></br>
                      <Grid
                        css={{
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center",
                          padding: "1em",
                        }}
                      >
                        <Text h6 b>
                          {text}
                        </Text>
                        <br></br>
                        <Text span size={"$sm"}>
                          {desc}
                        </Text>
                        <br></br>
                        <Text span size={"$sm"}>
                          {desc2}
                        </Text>
                      </Grid>
                    </Card.Body>
                  </Card>
                </a>
              </Link>
            </Fade>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
