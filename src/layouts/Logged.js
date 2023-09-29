import React from "react";

import AuthNav from "./navbar/AuthNavbar";
import { Footer } from "./footer/index";

export default function Logged({ children }) {
  return (
    <>
      <AuthNav />
      <main>
        <section className="auth-container">{children}</section>
        <Footer />
      </main>
    </>
  );
}
