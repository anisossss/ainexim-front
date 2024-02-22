import { Badge, Grid, Text, Card } from "@nextui-org/react";
import React from "react";
const Fade = require("react-reveal/Fade");
import Image from "next/image";
export const About = () => {
  const tabs = [
    {
      img: "/assets/icons/workflow.png",
      title: "Progress Tracking and Certifications",
      desc: "Provide features to track users progress, such as completion percentage, module-wise performance achievements.",
    },
    {
      img: "/assets/icons/users.png",
      title: "Accessibility and Convenience",
      desc: "Provide the flexility of virtual work experience, anytime, anywhere to a wider audience.",
    },
    {
      img: "/assets/icons/courses.png",
      title: "Diverse Course Selection",
      desc: "Offer a vast range of subjects and topics ro choose from, allowing users to explore their interests, aquire new skills.",
    },
    {
      img: "/assets/icons/computer.png",
      title: "Interactive wroking experience",
      desc: "Interactive elements, quizzes, exercices, meeting and more.",
    },
  ];
  return (
    <>
      <Grid
        css={{
          padding: "2em",
          margin: "auto",
          pt: "10em",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          width: "95%",
        }}
      >
        <Badge
          css={{
            padding: "1em",
            color: "#fff",
            background: "#86d4caaa",
            marginBottom: "2em",
          }}
        >
          WHY CHOOSE US
        </Badge>
        <Grid css={{ width: "50%", margin: "auto", marginBottom: "2em" }}>
          <Text h1>
            Dive into online working experience with various fields and levels
          </Text>
        </Grid>

        <Grid.Container
          css={{
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
          s
        >
          {tabs.map((tab, index) => (
            <Grid key={index} md={5} align="center">
              <Card
                isHoverable
                css={{
                  margin: "1em",
                  width: "90em",
                  height: "15em",
                  padding: "15px",
                }}
              >
                <Card.Body>
                  <Grid.Container gap={1}>
                    <Grid md={4}>
                      <Image
                        src={tab.img}
                        alt=""
                        height={250}
                        objectFit="contain"
                        width={400}
                      />
                    </Grid>
                    <Grid md={8}>
                      <Grid>
                        <Grid>
                          <Text b>{tab.title}</Text>
                        </Grid>
                        <Grid>
                          <Text span size={"$sm"}>
                            {tab.desc}
                          </Text>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid.Container>
                </Card.Body>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      </Grid>
    </>
  );
};
