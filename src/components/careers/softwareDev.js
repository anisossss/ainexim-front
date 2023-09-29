import React, { useState } from "react";

import { Grid, Input, Text } from "@nextui-org/react";
import Image from "next/image";

export default function SoftwareDev() {
  return (
    <>
      <Grid className="wrapper-all">
        <Grid.Container gap={2}>
          <Grid md={6}>
            <Text span size="$md" weight="bold">
              About us
            </Text>
            <br></br>
            <br></br>
            <Text span size="$md">
              We are a team of innovative technologists and industry experts
              dedicated to revolutionizing the way professionals work online.
              With a passion for immersive experiences and a deep understanding
              of the modern work landscape, we have developed an immersive
              interface that combines the best of virtual reality, gamification,
              and real-time collaboration. Our goal is to provide a cutting-edge
              platform where individuals specializing in software development,
              UX/UI design, and Agile methods can thrive and build their
              professional careers. Join us on this exciting journey as we
              redefine the future of work and unlock new levels of productivity
              and innovation.
            </Text>
          </Grid>
          <Grid xs={12} md={6}>
            <Grid className="flex content-center items-center justify-center ">
              <Image
                src="/assets/logo/green_contact_logo.svg"
                width={500}
                height={500}
                alt=""
              />
            </Grid>
          </Grid>
        </Grid.Container>
      </Grid>
    </>
  );
}
