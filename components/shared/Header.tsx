import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import MobileNav from "./MobileNav";
import NavItems from "./NavItems";

const Header = () => {
  return (
    <>
      <header className="flex md:max-h-20 h-fit w-screen items-center py-3 px-2 font-poppins   bg-[#1560bd] justify-between">
        <div className="flex space-x-2 items-center">
          <Link href="/">
            <img
              src="https://www.nist.edu/images/nist.png"
              alt="nist"
              className="md:h-16 h-10"
            />
          </Link>
          <h1 className="md:text-4xl text-xl   space-x-2 text-white">
            <span className=" font-semibold   font-poppins">NISTU</span>
            <span>Events</span>
          </h1>
        </div>
        <SignedIn>
          <div className="hidden md:block">
            <NavItems />
          </div>
        </SignedIn>
        <div className="flex-between">
          <SignedOut>
            <Button
              asChild={true}
              variant={"outline"}
              size={"lg"}
              className=" rounded-md   text-white"
            >
              <Link href="/sign-in">Log in</Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <>
              <UserButton afterSwitchSessionUrl="/" />
              <MobileNav />
            </>
          </SignedIn>
        </div>
      </header>
    </>
  );
};

export default Header;
