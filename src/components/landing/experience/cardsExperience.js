import { Card, Grid, Text, Link } from "@nextui-org/react";

export default function CardsExperiences() {
  const cards = [
    {
      image: "/assets/images/web_certif.jpg",
      text: "Software Development",
      desc: "Master mobile, web, and desktop development with our expert-led courses. Dive into cutting-edge technologies and real-world projects for hands-on experience.",
    },
    {
      image: "/assets/images/design_certif.jpg",
      text: "UX/UI Design",
      desc: "Unlock the secrets of captivating digital experiences. Learn design principles, user psychology, and prototyping through hands-on projects guided by industry professionals.",
    },
    {
      image: "/assets/images/pm_certif.jpg",
      text: "Project Management",
      desc: "Lead projects with confidence using Agile methodologies. Learn from industry experts, gain practical experience, and master collaborative teamwork for success in today's fast-paced environment.",
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
        {cards.map(({ image, text, desc }) => (
          <Grid key={text} md={4}>
            <Card
              isHoverable
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
                  css={{ height: "10em", borderRadius: "10px" }}
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
          </Grid>
        ))}
      </Grid.Container>
    </>
  );
}
