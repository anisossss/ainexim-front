import { Badge, Grid, Text, Card } from "@nextui-org/react";
import React from "react";
const Fade = require("react-reveal/Fade");
import Image from "next/image";
export const Modules = () => {
  const tabs = [
    {
      img: "/assets/icons/workflow.png",
      title: "WEB DEVELOPMENT",
      desc: "Provide features to track users progress.",
    },
    {
      img: "/assets/icons/workflow.png",
      title: "MOBILE DEVELOPMENT",
      desc: "Provide the flexility of virtual work experice.",
    },
    {
      img: "/assets/icons/workflow.png",
      title: "PROJECT MANAGEMENT ",
      desc: "Provide features to track users progres",
    },
    {
      img: "/assets/icons/workflow.png",
      title: "WEB DEVELOPMENT",
      desc: "Provide features to track users progress,",
    },
    {
      img: "/assets/icons/workflow.png",
      title: "MOBILE DEVELOPMENT",
      desc: "Provide the flexility of virtual work e",
    },
    {
      img: "/assets/icons/workflow.png",
      title: "PROJECT MANAGEMENT ",
      desc: "Offer a vast range of subjects and ",
    },    {
      img: "/assets/icons/workflow.png",
      title: "PROJECT MANAGEMENT ",
      desc: "Offer a vast range of subjects and ",
    },    {
      img: "/assets/icons/workflow.png",
      title: "PROJECT MANAGEMENT ",
      desc: "Offer a vast range of subjects and ",
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
        <Fade left>
          <Badge
            css={{
              padding: "1em",
              color: "#fff",
              background: "#86d4caaa",
              marginBottom: "2em",
            }}
          >
            OUR BEST MODULES
          </Badge>
          <Grid css={{ width: "50%", margin: "auto", marginBottom: "2em" }}>
            <Text h1>Discover the most immersive experience</Text>
          </Grid>
        </Fade>

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
            <Grid key={index} md={3} align="center">
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
                    <Grid md={3}>
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
