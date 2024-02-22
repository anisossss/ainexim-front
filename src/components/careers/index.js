import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { Grid, Text, Card } from "@nextui-org/react";
import Image from "next/image";

export default function Careers() {
  const softwareCareers = [
    {
      img: "/assets/images/careers/software.png",
      name: "Front-End Developer",
    },
    {
      img: "/assets/images/careers/software.png",
      name: "Back-End Developer",
    },
    {
      img: "/assets/images/careers/software.png",
      name: "Full-Stack Developer",
    },
    {
      img: "/assets/images/careers/software.png",
      name: "Mobile App Developer",
    },
    {
      img: "/assets/images/careers/software.png",
      name: "Game Developer",
    },
    {
      img: "/assets/images/careers/software.png",
      name: "Embedded Systems Developer",
    },
    {
      img: "/assets/images/careers/software.png",
      name: "DevOps Engineer",
    },
    {
      img: "/assets/images/careers/software.png",
      name: "Data Scientist/Engineer",
    },
    {
      img: "/assets/images/careers/software.png",
      name: "Machine Learning Engineer",
    },
    {
      img: "/assets/images/careers/software.png",
      name: "Security Engineer",
    },
  ];

  const designCareers = [
    {
      img: "/assets/images/careers/design.png",
      name: "UX Designer (User Experience)",
    },
    {
      img: "/assets/images/careers/design.png",
      name: "UI Designer (User Interface)",
    },
    {
      img: "/assets/images/careers/design.png",
      name: "Designer",
    },
    {
      img: "/assets/images/careers/design.png",
      name: "Interaction Designer",
    },
    {
      img: "/assets/images/careers/design.png",
      name: "Visual Designer",
    },
  ];

  const projectMangCareers = [
    {
      img: "/assets/images/careers/team.png",
      name: "Project Manager",
    },
    {
      img: "/assets/images/careers/team.png",
      name: "Scrum Master",
    },
    {
      img: "/assets/images/careers/team.png",
      name: "Product Manager",
    },
    {
      img: "/assets/images/careers/team.png",
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
    <Grid css={{ marginTop: "8em" }}>
      <Grid align="center">
        <Text span size="$2xl" weight="bold">
          Careers available at AINEXIM
        </Text>
      </Grid>
      <br></br> <br></br>
      <br></br>
      <Text span size="$xl" weight="bold" css={{ padding: "2%" }}>
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
            <Card className="single" isHoverable>
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
      <Text span size="$xl" weight="bold" css={{ padding: "2%" }}>
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
            <Card className="single" isHoverable>
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
                  objectFit="contain"
                  height={200}
                  width={300}
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
      <Text span size="$xl" weight="bold" css={{ padding: "2%" }}>
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
            <Card className="single" isHoverable>
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
                  objectFit="contain"
                  height={200}
                  width={300}
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
