import React from "react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer
      className="relative  pt-8 pb-6"
      style={{ backgroundColor: "#172A30" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap lg:text-left">
          <div className="lg:w-2/12 px-12 mb-6 " style={{ textAlign: "left" }}>
            <Image
              width={200}
              height={100}
              src="/assets/logo/logo_footer.svg"
              alt="logo"
              objectFit="contain"
            />
          </div>

          <div className="w-full lg:w-6/12 px-12">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-white text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <br></br>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-white hover:text-white font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover:text-white font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-white text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <br></br>

                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-white hover:text-white font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover:text-white font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover:text-white font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 bg-white" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-white font-semibold py-1">
              Copyrights © {new Date().getFullYear()} AINEXIM.{" "}
              <a
                href="https://aa-production.vercel.app"
                className="text-white hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                by AA Production
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
