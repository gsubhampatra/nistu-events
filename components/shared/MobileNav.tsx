import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@radix-ui/react-separator";
import NavItems from "./NavItems";

const MobileNav = () => {
  return (
    <nav className="md:hidden" >
      <Sheet>
        <SheetTrigger>
            <div className="p-2 rounded-md bg-[#1560bd] text-white">
                <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                />
                </svg>
            </div>
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white " >
            <SheetTitle>Welcome</SheetTitle>
            <Separator className="border border-gray-400" />
            <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
