import React, { Component } from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Meta from "../components/seo/index";
import { Grid, Text } from "@nextui-org/react";
import Image from "next/image";
export default function Error404() {
  const text = [
    "The page you are looking for might have been removed, had its name changed or is temporarily unavailable.",
  ];
  const [output, setOutput] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (
        text &&
        text[lineIndex] &&
        text[lineIndex][charIndex] &&
        lineIndex < text.length - 1 // check if there are more lines to display
      ) {
        // add a new character to the output
        setOutput((output) => `${output}${text[lineIndex][charIndex]}`);
        setCharIndex((charIndex) => charIndex + 1);
      } else if (
        text &&
        text[lineIndex] &&
        text[lineIndex][charIndex] &&
        lineIndex === text.length - 1 // check if this is the last line
      ) {
        // add a new character to the output
        setOutput((output) => `${output}${text[lineIndex][charIndex]}`);
        setCharIndex((charIndex) => charIndex + 1);
      } else {
        // end of line, move to the next line after a brief delay
        setTimeout(() => {
          setLineIndex((lineIndex) => lineIndex + 1);
          setCharIndex(0);
          setOutput((output) => `${output}\n`);
        }, 1000);
      }
    }, 50);

    // cleanup function to clear the interval
    return () => clearInterval(interval);
  }, [lineIndex, charIndex]);

  return (
    <>
      <Meta
        title="Page Not Found 404 - AINEXIM"
        description="AINEXIM, step into the future of virtual work experience."
        ogUrl="https://ainexim.com"
        thumbnail="https://i.postimg.cc/MKBWj4pd/thumbnail.png"
        keywords="AINEXIM, Virtual work"
      ></Meta>
      <Grid css={{ marginBottom: "2em", padding: "5%" }}>
        <Image
          src="/assets/logo/ainexim_logo_100.png"
          width={200}
          height={200}
          alt=""
          objectFit="contain"
        />
        <Grid className="terminal">
          <Text h1>Error 404</Text>
          <br></br>
          <h4 className="output">{output}</h4>
          <br></br>
          <Text h4 className="output" css={{ textDecoration: "underline" }}>
            Please try to <Link href="/">go back</Link> or{" "}
            <Link href="/">return to the homepage</Link>.
          </Text>
        </Grid>
      </Grid>
    </>
  );
}
