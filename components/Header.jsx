import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-2 xl:py-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/" className="">
          <h1 className="text-4xl font-semibold outline-none">
            Luke <span className="text-accent">.</span>
          </h1>
        </Link>
        {/* desktop-navbar */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button className="ml-auto rounded-sm bg-accent">
              Hire Me
            </Button>
          </Link>
        </div>
        {/* mobile-navbar */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
