import { Card, Grid, Text, Link, Image } from "@nextui-org/react";

export default function CardsCertifications() {
  const cards = [
    {
      image: "/assets/landing/certif1.svg",
      text: "Software Development",
      desc: "Earn your certification in mobile, web, and desktop development with our industry-leading courses. Dive into cutting-edge technologies and hands-on projects guided by experts.",
    },
    {
      image: "/assets/landing/certif2.svg",
      text: "UX/UI Design",
      desc: "Become certified in crafting captivating digital experiences. Explore design principles, user psychology, and prototyping through hands-on projects led by industry professionals.",
    },
    {
      image: "/assets/landing/certif3.svg",
      text: "Project Management",
      desc: "Certify your Agile expertise for project leadership. Learn from industry experts, gain practical experience, and master collaborative teamwork for success in today's fast-paced environment.",
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
              padding
              isHoverable
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
