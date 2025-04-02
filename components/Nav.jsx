"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "contact",
    path: "/contact",
  },
];
const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex gap-8 ">
      {/* active-page */}
      {Links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname
                ? "text-accent border-b-2 border-accent"
                : ""
            } capitalize font-medium hover:text-accent transition-all duration-300 ease-in-out`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
