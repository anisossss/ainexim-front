import { Button, Grid, Text } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import { Flex } from "../../styles/flex";
import axios from "axios";
import { Input } from "@nextui-org/react";
import CONSTANTS from "../../../constants";
import toast, { Toaster } from "react-hot-toast";
const Fade = require("react-reveal/Fade");

export default function Newseltter() {
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    try {
      const url = `${CONSTANTS.API_URL_PROD}/user/waitlist`;

      const response = await axios.post(url, { email });
      toast.success("You have been added to the newsletter");
      console.log(response);
    } catch (error) {
      toast.error("An error occured, please try again");
      console.error(error);
    }
  };

  return (
    <>
      <Toaster />
      <Flex
        css={{
          marginTop: "10em",
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "10em",
          "@media (max-width: 767px)": {
            flexDirection: "column",
          },
          justifyContent: "center",
          alignItems: "center",
          "@sm": {
            justifyContent: "space-around",
            px: "$32",
            flexDirection: "row",
          },
          "@md": {
            px: "$64",
          },
        }}
      >
        <Fade top>
          <Grid>
            <Text h3 size={"$4xl"}>
              Join our newsletter to recieve the latest updates{" "}
            </Text>
            <br></br>
            <br></br>
            <Grid>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                size="xl"
                onChange={(e) => setEmail(e.target.value)}
                required
                clearable
                contentRightStyling={false}
                contentRight={
                  <Button
                    onClick={handleSubmit}
                    className="main-button gradient"
                    css={{ height: "2em", width: "50px" }}
                  >
                    <Text span size={"$sm"} css={{ color: "#fff" }}>
                      Subscribe
                    </Text>
                  </Button>
                }
              />
            </Grid>
          </Grid>
        </Fade>
      </Flex>
    </>
  );
}
