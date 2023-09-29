import { Button, Grid, Text } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import { Flex } from "../../styles/flex";
import axios from "axios";
import { Input } from "@nextui-org/react";
const Fade = require("react-reveal/Fade");

export default function Newseltter() {
  const [flashMessage, setFlashMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    setFlashMessage("A confirmation email has been sent to you !");
    setShowMessage(true);
    e.preventDefault();
    try {
      const url = `${CONSTANTS.API_URL_PROD}/user/waitlist`;

      const response = await axios.post(url, { email });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
        setShowMessage(false);
      }, 8000);
    }
  }, [showMessage]);

  return (
    <>
      <Flex
        css={{
          display: "flex",
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
          <Grid
            css={{
              margin: "auto",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Text h4> Join our newsletter to stay updated </Text>
            <form onSubmit={handleSubmit}>
              <Flex
                css={{
                  pt: "$10",
                }}
              >
                <Grid>
                  <Input
                    css={{ height: "4em" }}
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    clearable
                    contentRightStyling={false}
                    contentRight={
                      <Button
                        type="submit"
                        className="main-button gradient"
                        size={"$sm"}
                        css={{ height: "2em", width: "50px" }}
                      >
                        <Text span size={"$sm"} css={{ color: "#fff" }}>
                          Subscribe
                        </Text>
                      </Button>
                    }
                  />
                </Grid>
              </Flex>
            </form>
            {showMessage ? (
              <Grid
                css={{
                  fontWeight: "bold",
                  textGradient: "45deg, #55A628 -20%, #8BC34A 50%",
                  padding: "1em",
                }}
              >
                {flashMessage}
              </Grid>
            ) : null}
          </Grid>
        </Fade>
      </Flex>
    </>
  );
}
