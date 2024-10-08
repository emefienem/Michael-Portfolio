import Link from "next/link";
import React from "react";
import { navItems } from "@/constants";

interface NavbarLinksTypes {
  href: string;
  label: string;
}

const NavbarLink = ({ href, label }: NavbarLinksTypes) => {
  return (
    <li className="hover:line-through social-links">
      <a href={href} target="_blank" rel="noreferrer">
        {label}
      </a>
    </li>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar p-5 md:py-10 lg:py-5">
      <ul className="flex text-xs gap-10 md:gap-16 max-w-[1400px] lg:scale-y-[-1] justify-start lg:items-start lg:scale-x-[-1] mx-auto lg:[writing-mode:vertical-rl] lg:flex-row-reverse lg:h-[calc(100dvh-50px)] relative">
        <li className="home-link">
          <Link href="/" className="uppercase hover:line-through">
            Home
          </Link>
        </li>

        {navItems.map((item, index) => (
          <NavbarLink key={index} href={item.href} label={item.label} />
        ))}
        <p className="ml-auto lg:absolute top-0">
          &#169;{new Date().getFullYear()}
        </p>
      </ul>
    </nav>
  );
};

export default Navbar;
