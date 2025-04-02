"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import useThemeSwitcher from "./hooks/useDarkMode";
import { MoonIcon, SunIcon } from "lucide-react";

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
    name: "work",
    path: "/work",
  },
];

const Nav = () => {
  const [mode, setMode] = useThemeSwitcher();
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {/* Navigation Links */}
      {Links.map((link, index) => (
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
      ))}

      {/* Dark Mode Toggle Button */}
      <button
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
        className="p-2 rounded-full transition-all duration-300"
      >
        {mode === "dark" ? (
          <SunIcon className="text-dark" />
        ) : (
          <MoonIcon className="text-light" />
        )}
      </button>
    </nav>
  );
};

export default Nav;

