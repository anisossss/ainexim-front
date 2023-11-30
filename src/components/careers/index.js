import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { Grid, Text, Card } from "@nextui-org/react";
import Image from "next/image";

export default function Careers() {
  const softwareCareers = [
    {
      img: "/assets/icons/devweb.svg",
      name: "Front-End Developer",
    },
    {
      img: "/assets/icons/devweb.svg",
      name: "Back-End Developer",
    },
    {
      img: "/assets/icons/devweb.svg",
      name: "Full-Stack Developer",
    },
    {
      img: "/assets/icons/devmobile.svg",
      name: "Mobile App Developer",
    },
    {
      img: "/assets/icons/ai.svg",
      name: "Game Developer",
    },
    {
      img: "/assets/icons/iot.svg",
      name: "Embedded Systems Developer",
    },
    {
      img: "/assets/icons/",
      name: "DevOps Engineer",
    },
    {
      img: "/assets/icons/",
      name: "Data Scientist/Engineer",
    },
    {
      img: "/assets/icons/",
      name: "Machine Learning Engineer",
    },
    {
      img: "/assets/icons/",
      name: "Security Engineer",
    },
  ];

  const designCareers = [
    {
      img: "/assets/icons/",
      name: "UX Designer (User Experience)",
    },
    {
      img: "/assets/icons/",
      name: "UI Designer (User Interface)",
    },
    {
      img: "/assets/icons/",
      name: "Designer",
    },
    {
      img: "/assets/icons/",
      name: "Interaction Designer",
    },
    {
      img: "/assets/icons/",
      name: "Visual Designer",
    },
  ];

  const projectMangCareers = [
    {
      img: "/assets/icons/",
      name: "Project Manager",
    },
    {
      img: "/assets/icons/",
      name: "Scrum Master",
    },
    {
      img: "/assets/icons/",
      name: "Product Manager",
    },
    {
      img: "/assets/icons/",
      name: "Project Manager",
    },
    {
      img: "/assets/icons/",
      name: "Program Manager",
    },
    {
      img: "/assets/icons/",
      name: "Agile Coach",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 6000, min: 2500 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 2500, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Grid md={12}>
      <Grid align="center">
        <Text span size="$2xl" weight="bold">
          Careers available at AINEXIM
        </Text>
      </Grid>
      <br></br>
      <br></br> <br></br>
      <br></br>
      <Text span size="$md" weight="bold" css={{ padding: "2em" }}>
        Software Engineer Careers
      </Text>
      <br></br> <br></br>
      <Carousel responsive={responsive} swipeable={true} draggable={true}>
        {softwareCareers.map((career, index) => (
          <Grid
            key={index}
            className="recipe-card"
            css={{ paddingTop: "2.5em" }}
          >
            <Card className="single" isPressable>
              <Card.Body
                css={{
                  alignItems: "center",
                  margin: "auto",
                  p: 0,
                }}
              >
                <Image
                  src={career.img}
                  alt=""
                  height={200}
                  objectFit="contain"
                  width={400}
                />
              </Card.Body>
              <Grid className="p-4">
                <Grid
                  css={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "50px",
                  }}
                >
                  <Text span b size="$sm">
                    {career.name}
                  </Text>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Carousel>
      <Text span size="$md" weight="bold" css={{ padding: "2em" }}>
        Designer Careers
      </Text>
      <br></br> <br></br>
      <Carousel responsive={responsive} swipeable={true} draggable={true}>
        {designCareers.map((career, index) => (
          <Grid
            key={index}
            className="recipe-card"
            css={{ paddingTop: "2.5em" }}
          >
            <Card className="single" isHoverable isPressable>
              <Card.Body
                css={{
                  alignItems: "center",
                  margin: "auto",
                  p: 0,
                }}
              >
                <Image
                  src={career.img}
                  alt=""
                  height={200}
                  objectFit="cover"
                  width="100%"
                />
              </Card.Body>
              <Grid className="p-4">
                <Grid
                  css={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "50px",
                  }}
                >
                  <Text span b size="$sm">
                    {career.name}
                  </Text>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Carousel>
      <Text span size="$md" weight="bold" css={{ padding: "2em" }}>
        Project Management Careers
      </Text>
      <br></br> <br></br>
      <Carousel responsive={responsive} swipeable={true} draggable={true}>
        {projectMangCareers.map((career, index) => (
          <Grid
            key={index}
            className="recipe-card"
            css={{ paddingTop: "2.5em" }}
          >
            <Card className="single" isHoverable isPressable>
              <Card.Body
                css={{
                  alignItems: "center",
                  margin: "auto",
                  p: 0,
                }}
              >
                <Image
                  src={career.img}
                  alt=""
                  height={200}
                  objectFit="cover"
                  width="100%"
                />
              </Card.Body>
              <Grid className="p-4">
                <Grid
                  css={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "50px",
                  }}
                >
                  <Text span b size="$sm">
                    {career.name}
                  </Text>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Carousel>
    </Grid>
  );
}
