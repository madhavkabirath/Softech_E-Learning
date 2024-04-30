"use client";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoMenu, IoClose, IoChevronDown, IoChevronUp } from "react-icons/io5";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen((prevState) => !prevState);
  };

  const toggleServiceDropdown = () => {
    
    setIsServiceDropdownOpen((prevState) => !prevState);
  };

  
  const toggleAboutOpen = () => {
    setIsServiceOpen(false)
    setIsAboutOpen((prevState) => !prevState);
  };

  const toggleServiceOpen = () => {
    setIsAboutDropdownOpen(false)
    setIsServiceOpen((prevState) => !prevState);
  };

 
  const router = useRouter();

  const pathname = usePathname();

  return (
    <div className="z-50 sticky top-0">
      <nav className="flex justify-between z-50 items-center py-6 px-8 shadow-md bg-slate-100 text-black">
        <div className="flex items-center">
          <Link href={"/"}>
            <h1 className="ml-2">Softech</h1>
          </Link>
        </div>

        {isMenuOpen ? (
          <IoClose className="text-2xl sm:hidden" onClick={toggleMenu} />
        ) : (
          <IoMenu className="text-2xl sm:hidden" onClick={toggleMenu} />
        )}

        <div className="hidden gap-6 sm:flex">
          <Link href="/">
            {pathname === "/" ? (
              <text className="uppercase text-red-500 font-bold">Home</text>
            ) : (
              <text className="uppercase">Home</text>
            )}
          </Link>
          <Link href="/Overview">
            {pathname === "/Overview" ? (
              <text
                className="uppercase text-red-500 font-bold"
                onClick={toggleAboutOpen}
              >
                About
              </text>
            ) : (
              <text className="uppercase" onClick={toggleAboutOpen}>
                About
              </text>
            )}
          </Link>

          <Link href="/Professional_Services">
            {pathname === "/Professional_Services" ? (
              <text className="uppercase text-red-500 font-bold" onClick={toggleAboutOpen}>service</text>
            ) : (
              <text className="uppercase" onClick={toggleServiceOpen}>service</text>
            )}
          </Link>
          <Link href="/Program">
            {pathname === "/Program" ? (
              <text className="uppercase text-red-500 font-bold" >Program</text>
            ) : (
              <text className="uppercase" >program</text>
            )}
          </Link>

          <Link href="/Contact">
            {pathname === "/Contact" ? (
              <text className="uppercase text-red-500 font-bold">
                Contact Us
              </text>
            ) : (
              <text className="uppercase">Contact Us</text>
            )}
          </Link>
        </div>
      </nav>
      {/* About option in the md */}
      <hr className=""/>
      {isAboutOpen && (
        <div className="flex flex-row gap-6 justify-center py-4 bg-white">
          <Link href={"/Overview"}>
            {" "}
            {pathname === "/Overview" ? (
              <text className="uppercase text-red-500 font-bold">OverView</text>
            ) : (
              <text className="uppercase">OverView</text>
            )}
          </Link>
          <Link href={"/Leadership"}>
            {" "}
            {pathname === "/Leadership" ? (
              <text className="uppercase text-red-500 font-bold">
                Leadership
              </text>
            ) : (
              <text className="uppercase">Leadership</text>
            )}
          </Link>
          <Link href={"/Events"}>
            {" "}
            {pathname === "/Events" ? (
              <text className="uppercase text-red-500 font-bold">Events</text>
            ) : (
              <text className="uppercase">Events</text>
            )}
          </Link>
          
        </div>
      )}
      {/* Service option in the md */}
      {isServiceOpen && (
        <div className="flex flex-row gap-6 justify-center bg-white py-4">
          <Link href={"/Professional_Services"}>
            {" "}
            {pathname === "/Professional_Services" ? (
              <text className="uppercase text-red-500 font-bold">Professional Services</text>
            ) : (
              <text className="uppercase">Professional Services</text>
            )}
          </Link>
          <Link href={"/Educational_Services"}>
            {" "}
            {pathname === "/Educational_Services" ? (
              <text className="uppercase text-red-500 font-bold">
              Educational Services
              </text>
            ) : (
              <text className="uppercase">Educational Services</text>
            )}
          </Link>
        </div>
      )}
      

      {/* Dropdown menu */}
      {isMenuOpen && (
        <div className="sm:hidden z-50 top-16 right-6 flex flex-col mx-2 bg-white text-black shadow-md mt-2">
          <Link href="/">
            <p
              className={`uppercase cursor-pointer ${
                pathname === "/" && "text-red-500 font-bold"
              }`}
            >
              Home
            </p>
          </Link>
          <div className="relative">
            <button
              className="flex items-center uppercase w-full px-4 py-2 cursor-pointer"
              onClick={toggleAboutDropdown}
            >
              About
              {isAboutDropdownOpen ? (
                <IoChevronUp className="ml-auto" />
              ) : (
                <IoChevronDown className="ml-auto" />
              )}
            </button>
            {isAboutDropdownOpen && (
              <div className="pl-4">
                <Link href="/Overview">
                  <p
                    className={`block uppercase cursor-pointer ${
                      pathname === "/About" && "text-red-500 font-bold"
                    } mb-2`}
                  >
                    Overview
                  </p>
                </Link>
                <Link href="/Leadership">
                  <p
                    className={`block uppercase cursor-pointer ${
                      pathname === "/Leadership" && "text-red-500 font-bold"
                    } mb-2`}
                  >
                    Leadership
                  </p>
                </Link>
                <Link href="/Events">
                  <p
                    className={`block uppercase cursor-pointer ${
                      pathname === "/Events" && "text-red-500 font-bold"
                    } mb-2`}
                  >
                    Events
                  </p>
                </Link>
                
              </div>
            )}
          </div>

          <div className="relative">
            <button
              className="flex items-center uppercase w-full px-4 py-2 cursor-pointer"
              onClick={toggleServiceDropdown}
            >
              Services
              {isServiceDropdownOpen ? (
                <IoChevronUp className="ml-auto" />
              ) : (
                <IoChevronDown className="ml-auto" />
              )}
            </button>
            {isServiceDropdownOpen && (
              <div className="pl-4">
                <Link href="/Professional_Services">
                  <p
                    className={`block uppercase cursor-pointer ${
                      pathname === "/Professional_Services" && "text-red-500 font-bold"
                    } mb-2`}
                  >
                    Professional Services
                  </p>
                </Link>
                <Link href="/Educational_Services">
                  <p
                    className={`block uppercase cursor-pointer ${
                      pathname === "/Educational_Services" &&
                      "text-red-500 font-bold"
                    } mb-2`}
                  >
                    Educational Services
                  </p>
                </Link>
              </div>
            )}
          </div>
          <Link href="/Program" className="pl-4">
            <p
              className={`uppercase cursor-pointer ${
                pathname === "/Program" && "text-red-500 font-bold"
              }`}
            >
              Program
            </p>
          </Link>
          <Link href="/Contact" className="pl-4">
            <p
              className={`uppercase cursor-pointer ${
                pathname === "/Contact" && "text-red-500 font-bold"
              }`}
            >
              Contact Us
            </p>
          </Link>
        </div>
      )}
    </div>
  );
}
