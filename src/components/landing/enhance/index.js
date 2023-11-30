import { Badge, Grid, Text, Card, Divider } from "@nextui-org/react";
const Fade = require("react-reveal/Fade");
import React from "react";
export const Enhance = () => {
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
            WORK SMARTER NOT HARDER
          </Badge>
        </Fade>
        <Fade left>
          <Grid css={{ width: "50%", margin: "auto", marginBottom: "2em" }}>
            <Text h1>Interactive, flexible experience </Text>
          </Grid>
          <Divider />
          <Grid>
            <Text h1>discover more... </Text>
          </Grid>
        </Fade>
      </Grid>
    </>
  );
};
