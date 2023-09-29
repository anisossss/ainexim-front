import { Button, Card, Divider, Grid, Link, Text } from "@nextui-org/react";
import React, { useState } from "react";
import { Checkbox, Switch } from "@nextui-org/react";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import axios from "axios";

import { CONSTANTS } from "../../constants/index";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";

export const Plans = () => {
  const router = useRouter();

  const [isMonthly, setIsMonthly] = useState(true);
  const { accessToken, refreshToken } = useSelector((state) => state.auth);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSwitch = () => {
    setIsMonthly(!isMonthly);
  };

  const plans = [
    {
      name: "Starter",
      id: "starter_plan",
      description:
        "Get started with our basic plan: Interactive 3D Environments, Task-based Progress Tracking, Career Building Opportunities.",
      priceMonthly: 32.99,
      priceAnnually: 320,
      subscribeMonthly: "price_1N6X6dBwRCSfgWaX9vLQfROa",
      subscribeAnnually: "price_1N6X6sBwRCSfgWaXq9lLMlz2",
      features: [
        {
          feature1:
            "Interactive 3D Environments: Dive into visually stunning, immersive 3D environments that enhance your online work experience and bring creativity to the forefront.",
          feature2:
            "Task-based Progress Tracking: Complete tasks and track your progress with a built-in tracking system that provides real-time updates on your accomplishments and helps you stay motivated.",
          feature3:
            "Career Building Opportunities: Engage in virtual real-time work that simulates professional scenarios, allowing you to hone your skills and build your career in software development, UX/UI design, and Agile methods.",
        },
      ],
    },
    {
      name: "Master",
      id: "master_chief_plan",
      description:
        "Upgrade to our premium plan and unlock all features: Advanced Collaborative Tools, Deep Analytics and Insights, Personalized Learning Paths, Virtual Workshops and Industry Events. ",
      priceMonthly: 59.99,
      priceAnnually: 350,
      subscribeMonthly: "price_1N6X7IBwRCSfgWaXLvsJdkJS",
      subscribeAnnually: "price_1N6X7IBwRCSfgWaXeZYJ8V5D",
      features: [
        {
          feature1:
            "Advanced Collaborative Tools: Work seamlessly with colleagues and peers in real-time with advanced collaborative features such as shared workspaces, instant messaging, and video conferencing.",
          feature2:
            "Deep Analytics and Insights: Gain deep insights into your work performance and identify areas for improvement with comprehensive analytics and visualizations that showcase your strengths, weaknesses, and growth potential.",
          feature3:
            "Personalized Learning Paths: Receive tailored recommendations and learning paths based on your career goals and proficiency level, ensuring continuous skill development and growth in your field.",
          feature4:
            "Virtual Workshops and Industry Events: Participate in virtual workshops, seminars, and industry events led by renowned professionals, allowing you to network, learn from experts, and stay ahead of industry.",
        },
      ],
    },
  ];

  const handleSubscribe = async (planId) => {
    const plan = plans.find((p) => p.id === planId);
    const priceId = isMonthly ? plan.subscribeMonthly : plan.subscribeAnnually;
    const name = plan.name;
    const price = isMonthly ? plan.priceMonthly : plan.priceAnnually;

    const url = `${CONSTANTS.API_URL_PROD}/user/create-checkout`;

    try {
      const headers = { Authorization: accessToken };
      const response = await axios.post(
        url,
        {
          price_id: priceId,
          name: name,
        },
        {
          headers: headers,
        }
      );
      const payment_link = await response.data.url;
      router.push(payment_link);
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  };
  const containerStyles = {
    display: "grid",
    placeItems: "center",
    height: "10vh",
    gridTemplateColumns: "1fr auto 1fr",
    gap: "10px",
  };

  const textStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      <Flex
        css={{ py: "3em", gap: "1rem", mb: "6em" }}
        justify={"center"}
        wrap={"wrap"}
        direction={"column"}
        align={"center"}
      >
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 5000,
          }}
        />
        <Flex direction={"column"} align={"center"}>
          <Text h2>Flexible Plans</Text>
        </Flex>
        <Flex>
          <div style={containerStyles}>
            <div style={textStyles}>Monthly</div>
            <Switch shadow color="primary" onChange={handleSwitch} />
            <div style={textStyles}>Annually</div>
          </div>
        </Flex>
        <br></br>
        <Flex
          css={{ gap: "4rem", width: "100%" }}
          wrap={"wrap"}
          justify={"center"}
        >
          {plans.map(
            ({
              name,
              id,
              description,
              priceMonthly,
              priceAnnually,
              features,
            }) => (
              <Card
                css={{ p: "$6", mw: "500px", color: "black" }}
                isHoverable
                key={id}
              >
                <Card.Header>
                  <Grid.Container css={{ pl: "$6" }}>
                    <Grid xs={12}>
                      <Text h3>{name}</Text>
                    </Grid>
                    <br></br>
                    <br></br>

                    <Grid xs={12} css={{ height: "50px" }}>
                      <Text span size="$xs">
                        {description}
                      </Text>
                    </Grid>
                  </Grid.Container>
                </Card.Header>
                <Card.Body css={{ py: "$2" }}>
                  <Text css={{ display: "contents" }} h2>
                    {isMonthly ? `$${priceMonthly}` : `$${priceAnnually}`}{" "}
                  </Text>
                  <Text span css={{ display: "contents", color: "$accents8" }}>
                    {isMonthly ? "/mo" : "/year"}
                  </Text>
                  <Button
                    className="main-button gradient"
                    css={{
                      mt: "$7",
                      mb: "$12",
                      color: "white",
                    }}
                    onPress={() => {
                      setSelectedPlan(id);
                      handleSubscribe(id);
                    }}
                  >
                    {selectedPlan === id ? "Selected" : "Subscribe"}
                  </Button>

                  <Divider />
                  <br></br>

                  <Box as={"ul"}>
                    {features.map(({ feature1, feature2, feature3 }) => (
                      <>
                        <Flex
                          as={"li"}
                          css={{ py: "$2", gap: "$2" }}
                          align={"center"}
                          key={feature1}
                        >
                          <Text span size="$md">
                            <span style={{ color: "#11EACD" }}>•</span>{" "}
                            <Text size="$sm" span>
                              {isMonthly
                                ? feature1
                                : feature1.replace("1K", "100K")}
                            </Text>
                          </Text>
                        </Flex>
                        <Flex
                          as={"li"}
                          css={{ py: "$2", gap: "$2" }}
                          align={"center"}
                        >
                          <Text span size="$sm">
                            <span style={{ color: "#11EACD" }}>•</span>{" "}
                            {feature2}
                          </Text>
                        </Flex>
                        <Flex
                          as={"li"}
                          css={{ py: "$2", gap: "$2" }}
                          align={"center"}
                        >
                          <Text span size="$sm">
                            <span style={{ color: "#11EACD" }}>•</span>{" "}
                            {feature3}
                          </Text>
                        </Flex>
                      </>
                    ))}
                  </Box>
                </Card.Body>
              </Card>
            )
          )}
        </Flex>
      </Flex>

      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
