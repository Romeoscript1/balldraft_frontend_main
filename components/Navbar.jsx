"use client";
import React from "react";
import logo from "@/public/images/logo.png";
import { usePathname, useRouter } from "next/navigation";
import { useFetchDataPlans } from "@/Hooks/useFetch";
import Link from "next/link";
import navham from "@/public/images/navham.svg";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "antd";

const Navbar = () => {
  const router = usePathname();
  const isAuthRoute = router.includes("/Auth");
  const url = process.env.NEXT_PUBLIC_API_URL;
  const apiUrl = `${url}/profile`;
  const { data, isLoading, error } = useFetchDataPlans(apiUrl);

  const navLinks = [
    {
      title: "What We Offer",
      route: "#what-we-offer",
    },
    {
      title: "About us",
      route: "/about",
    },
    {
      title: "Blog",
      route: "/blog",
    },
  ];

  return (
    <>
      {!isAuthRoute && (
        <div
          className="navbar bg-white text-black fixed top-0 w-full z-[999]"
          style={{ zIndex: "999px" }}
        >
          <div className="navbar-start">
            {/* <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div> */}
            <a className="btn btn-ghost text-xl max-sm:w-[110px]" href="/">
              <img src={logo.src} alt="" srcset="" className=" w-[100px]" />
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="#what-we-offer">What We Offer</Link>
              </li>
              <li>
                <Link href="/about">About us</Link>
              </li>
              {/* <li>
                <details>
                  <summary>Games Feature</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li> */}
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end flex flex-row gap-8 items-center">
            <Link
              href={"/Dashboard"}
              className="btn bg-[#012C51] rounded-[30px] max-s7:hidden"
            >
              Play now
            </Link>
            <Drawer>
              <DrawerTrigger>
                <img src={navham.src} alt="" className="hidden max-s7:flex" />
              </DrawerTrigger>
              <DrawerContent className="bg-white">
                <DrawerHeader className={"gap-4 flex flex-col "}>
                  {navLinks.map((link) => {
                    return (
                      <a
                        href={link.route}
                        className="text-denary"
                        key={`route-${link.route}`}
                      >
                        {link.title}
                      </a>
                    );
                  })}
                </DrawerHeader>
                <DrawerFooter className={"flex flex-col items-center"}>
                  <a
                    href="/Auth/join/"
                    className="py-3 px-6 bg-denary rounded-full text-white w-[200px] text-center"
                  >
                    Sign up
                  </a>
                  <a
                    href="/Dashboard"
                    className="py-3 px-6 bg-whiite border border-denary bg-white rounded-full text-denary w-[200px] text-center"
                  >
                    Play now
                  </a>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
