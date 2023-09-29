import { Card, Grid, Text, Link, Image } from "@nextui-org/react";

export default function CardsCertifications() {
  const cards = [
    {
      image: "/assets/landing/certif1.svg",
      text: "Software Development",
      desc: "We are a team of software developers, designers, and project managers who are passionate about creating immersive experiences.",
    },
    {
      image: "/assets/landing/certif2.svg",
      text: "UX/UI Design",
      desc: "We are a team of software developers, designers, and project managers who are passionate about creating immersive experiences.",
    },
    {
      image: "/assets/landing/certif3.svg",
      text: "Project Management",
      desc: "We are a team of software developers, designers, and project managers who are passionate about creating immersive experiences.",
    },
  ];

  return (
    <>
      <Grid.Container
        css={{
          justifyContent: "space-around",
          margin: "auto",
          mt: "$20",
          textAlign: "left",
          "@media (max-width: 767px)": {
            display: "block",
            margin: "auto",
          },
        }}
      >
        <Grid md={12} sm={12} xs={12}>
          {cards.map(({ image, text, desc }) => (
            <Card
              isPressable
              key={text}
              css={{
                margin: "1em",
                padding: 0,
              }}
            >
              <Card.Body>
                <Card.Image
                  src={image}
                  alt=""
                  width="100%"
                  css={{ height: "10em", width: "30em" }}
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
                    {text}{" "}
                  </Text>
                  <br></br>
                  <Text span size={"$sm"}>
                    {desc}
                  </Text>
                </Grid>
              </Card.Body>
            </Card>
          ))}
        </Grid>
      </Grid.Container>
    </>
  );
}
