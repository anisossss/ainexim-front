import React from "react";
import { IndexLayout } from "../layouts/IndexLayout";
import Meta from "../components/seo/index";
import { Hero } from "../components/landing/hero";
import Experience from "../components/landing/experience";
import Certifications from "../components/landing/certifications";
import UserGuide from "../components/landing/userguide";
import Newsletter from "../components/landing/newsletter";

const Home = () => {
  return (
    <>
      <Meta
        title="Home - AINEXIM"
        description="AINEXIM, step into the future of virtual work experience."
        ogUrl="https://ainexim.com"
        thumbnail="https://i.postimg.cc/MKBWj4pd/thumbnail.png"
        keywords="AINEXIM, Virtual work"
      ></Meta>
      <IndexLayout>
        <Hero />
        <Experience />
        <Certifications />
        <UserGuide />
        <Newsletter />
      </IndexLayout>
    </>
  );
};

export async function getStaticProps() {
  return { props: {} };
}

export default Home;
