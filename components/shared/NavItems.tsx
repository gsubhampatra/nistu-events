'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavItems = () => {
    const pathname = usePathname();
    const headerLinks = [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "Events",
            href: "/events"
        },
        {
            name: "About",
            href: "/about"
        }
    ]
  return (
    <ul className="flex md:flex-row md:text-white  font-semibold  flex-col gap-4">
      {
            headerLinks.map((link, index) => (
                <li key={index} className={`cursor-pointer ${pathname === link.href ? 'md:text-blue-50 text-[#1560bd]' : ''}`}>
                    <Link href={link.href}>
                        {link.name}
                    </Link>
                </li>
            ))
      }
    </ul>
  );
};

export default NavItems;
