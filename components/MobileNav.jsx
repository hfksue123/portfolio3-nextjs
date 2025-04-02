"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import useThemeSwitcher from "./hooks/useDarkMode";
import { MoonIcon, SunIcon } from "lucide-react";

const Links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
];

const MobileNav = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useThemeSwitcher();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex justify-center items-center relative">
        <CiMenuFries className="text-[32px] text-accent font-extrabold right-8 absolute" />
      </SheetTrigger>
      <SheetContent className="flex flex-col items-center">
        {/* Logo */}
        <div className="mt-32 mb-32 text-center text-2xl">
          <Link href="/" className="text-4xl font-semibold">
            <h1>
              Luke <span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {Links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`${
                link.path === pathName
                  ? "text-accent border-b-2 border-accent"
                  : ""
              } text-xl capitalize hover:text-accent transition-all`}
              onClick={() => setOpen(false)} // Đóng navbar khi click vào link
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Dark Mode Toggle Button */}
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className="mt-10 p-2 rounded-full transition-all duration-300"
        >
          {mode === "dark" ? (
            <SunIcon className="text-dark" />
          ) : (
            <MoonIcon className="text-light" />
          )}
        </button>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
