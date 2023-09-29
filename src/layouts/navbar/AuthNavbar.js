import { Link, Navbar } from "@nextui-org/react";
import React from "react";
import { Avatar, Grid } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function AuthNav() {
  function ActiveLink({ href, children }) {
    const router = useRouter();
    const isActive = router.pathname.startsWith(href);

    return (
      <Navbar.Link
        className={isActive ? "nav-link active-link" : "nav-link"}
        href={href}
      >
        {children}
      </Navbar.Link>
    );
  }
  const collapseItems = [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/resources",
      title: "Resources",
    },
    {
      href: "/programs",
      title: "Programs",
    },
    {
      href: "/careers",
      title: "Careers",
    },
    {
      href: "/pricing",
      title: "Pricing",
    },
    {
      href: "/profile/my-information",
      title: "My profile",
    },
  ];

  return (
    <Navbar
      maxWidth={"xl"}
      activeColor="success"
      variant={"floating"}
      css={{
        position: "fixed",
        top: 0,
        justifyContent: "space-evenly",
      }}
    >
      <Navbar.Brand>
        <Navbar.Toggle aria-label="toggle navigation" showIn="md" />
        <Link href="/">
          <Image
            width={250}
            height={200}
            src="/assets/logo/nav_logo.svg"
            alt="logo"
            objectFit="contain"
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Content
        hideIn="md"
        css={{
          pl: "30rem",
          "@xs": {
            pr: "$18",
          },
        }}
      >
        <ActiveLink href="/">Home</ActiveLink>
        <ActiveLink href="/resources">Resources</ActiveLink>
        <ActiveLink href="/programs">Programs</ActiveLink>
        <ActiveLink href="/careers">Career Fields</ActiveLink>

        <ActiveLink href="/">
          My profile
          <Avatar
            css={{ margin: "2px" }}
            size={"lg"}
            src="/img/.png"
            bordered
            squared
            zoomed
          />
        </ActiveLink>
      </Navbar.Content>

      <Navbar.Collapse css={{ position: "fixed" }}>
        {collapseItems.map(({ title, href }) => (
          <Navbar.CollapseItem key={title}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href={href}
            >
              {title}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
