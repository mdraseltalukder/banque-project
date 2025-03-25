"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const navbarRef = useRef(null);

  const pathname = usePathname();
  console.log(pathname);

  const navigator = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "features",
      href: "/feature",
    },
    {
      name: "compare",
      href: "/compare",
    },
    {
      name: "support",
      href: "/support",
    },
    {
      name: "blog",
      href: "/blog",
    },
  ];
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node) &&
        isToggleOpen
      ) {
        setIsToggleOpen(false);
      }
    };

    // Add event listener when the navbar is open
    if (isToggleOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isToggleOpen]);

  return (
    <>
      {/*<!-- Header --> */}

      <nav
        ref={navbarRef}
        aria-label="main navigation"
        className="flex flex-row items-center justify-between py-5.5 max-w-[1400px] px-3 lg-px-0  overflow-hidden mx-auto"
        role="navigation"
      >
        {/*      <!-- Brand logo --> */}
        <Link
          className="font-[700] text-[24px] md:text-[32px] text-[#5BB5A2] font-cinzel"
          href="/"
        >
          Banquee.
        </Link>
        {/*      <!-- Mobile trigger --> */}
        <button
          className={`relative z-50 order-10 block h-10 w-10 self-center lg:hidden
                ${
                  isToggleOpen
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                    : ""
                }
              `}
          onClick={() => setIsToggleOpen(!isToggleOpen)}
          aria-expanded={isToggleOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
            <span
              aria-hidden="true"
              className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
            ></span>
            <span
              aria-hidden="true"
              className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
            ></span>
            <span
              aria-hidden="true"
              className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
            ></span>
          </div>
        </button>
        {/*      <!-- Navigation links --> */}
        <ul
          role="menubar"
          aria-label="Select page"
          className={`absolute z-40 left-0 top-0  h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-background/80 backdrop-blur-sm px-8 pb-12 pt-24  transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-start  lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
            isToggleOpen ? "visible opacity-100 " : "invisible opacity-0"
          }`}
        >
          <div className="flex flex-col lg:flex-row items-start  md:gap-4">
            {navigator.map((nav) => (
              <Link
                onClick={() => setIsToggleOpen(false)}
                key={nav.name}
                href={nav.href}
                className={cn(
                  "hover:text-[#5BB5A2]  py-2 px-3 transition-colors font-medium",
                  pathname === nav.href
                    ? "text-[#5BB5A2] "
                    : "text-muted-foreground"
                )}
              >
                {nav.name}
              </Link>
            ))}
            <div className="flex lg:hidden items-center gap-1 md:gap-2 lg-gap-6">
              <Button
                variant="ghost"
                className="text-[#5BB5A2] hover:bg-transparent "
              >
                Login
              </Button>
              <Button className="px-4 py-2 text-[15px] text-white bg-[#5BB5A2] rounded-lg">
                Open Account
              </Button>
            </div>
          </div>
        </ul>
        {/*      <!-- Actions --> */}
        <div className="lg:flex items-center gap-1 md:gap-2 lg-gap-6 hidden ">
          <Button
            variant="ghost"
            className="text-[#5BB5A2] hover:bg-transparent "
          >
            Login
          </Button>
          <Button className="px-4 py-2 text-[15px] text-white bg-[#5BB5A2] rounded-lg">
            Open Account
          </Button>
        </div>
      </nav>
    </>
  );
}
