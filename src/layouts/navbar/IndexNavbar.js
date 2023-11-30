import { Link, Navbar } from "@nextui-org/react";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export const Nav = () => {
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
      href: "/careers",
      title: "Careers",
    },
    {
      href: "/programs",
      title: "Programs",
    },

    {
      href: "/pricing",
      title: "Packs",
    },
    {
      href: "/waitlist",
      title: "Join Waitlist",
    },
    {
      href: "/auth/register",
      title: "Create Account",
    },
  ];
  return (
    <Navbar
      activeColor="success"
      css={{
        "& .nextui-navbar-container": {
          position: "fixed",
          top: 0,
          justifyContent: "space-evenly",
        },
      }}
    >
      <Navbar.Brand>
        <Navbar.Toggle aria-label="toggle navigation" showIn="md" />
        <Link href="/">
          <Image
            width={220}
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
          ml: "8em",
        }}
      >
        <ActiveLink href="/">Home</ActiveLink>
        <ActiveLink href="/careers">Careers</ActiveLink>
        <ActiveLink href="/programs">Programs</ActiveLink>
        <ActiveLink href="/pricing">Packs</ActiveLink>
        <Link href="/waitlist">
          <button className="main-button-border gradient">Join Waitlist</button>
        </Link>
        <Link href="/auth/register">
          <button className="main-button gradient">Create Account</button>
        </Link>
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
};
