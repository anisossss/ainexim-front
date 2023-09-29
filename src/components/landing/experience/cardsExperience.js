import { Card, Grid, Text, Link } from "@nextui-org/react";

export default function CardsExperiences() {
  const cards = [
    {
      image: "/assets/images/web_certif.jpg",
      text: "Software Development",
      desc: "We are a team of software developers, designers, and project managers who are passionate about creating immersive experiences.",
    },
    {
      image: "/assets/images/design_certif.jpg",
      text: "UX/UI Design",
      desc: "We are a team of software developers, designers, and project managers who are passionate about creating immersive experiences.",
    },
    {
      image: "/assets/images/pm_certif.jpg",
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
                padding: 0,
                margin: "1em",
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
                    {text}
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
