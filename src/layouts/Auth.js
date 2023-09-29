import React from "react";

import { Nav } from "./navbar/IndexNavbar";
import { Footer } from "./footer";

export default function Auth({ children }) {
  return (
    <>
      <Nav />
      <main>
        <section className="auth-container">{children}</section>
        <Footer />
      </main>
    </>
  );
}
