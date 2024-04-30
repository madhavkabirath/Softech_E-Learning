"use client";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoMenu, IoClose, IoChevronDown, IoChevronUp } from "react-icons/io5";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [isProgramDropdownOpen, setIsProgramDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen((prevState) => !prevState);
  };

  const toggleServiceDropdown = () => {
    setIsServiceDropdownOpen((prevState) => !prevState);
  };

  const toggleProgramDropdown = () => {
    setIsProgramDropdownOpen((prevState) => !prevState);
  };
  const router = useRouter();

  const pathname = usePathname();

  return (
    <div className="z-50 sticky top-0">
      <nav className="flex justify-between z-50 items-center py-6 px-8 shadow-md bg-slate-100 text-black">
        <div className="flex items-center">
          <Link href={"/"}>
            {/* <img src="" alt="Logo" className="h-8" /> */}
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
          <div className="relative group">
            <button
              className="flex items-center uppercase"
              onClick={toggleAboutDropdown}
            >
              About
              {isAboutDropdownOpen ? (
                <IoChevronUp className="ml-1" />
              ) : (
                <IoChevronDown className="ml-1" />
              )}
            </button>
            {isAboutDropdownOpen && (
              <div className="absolute z-50 bg-white shadow-md p-4 rounded-md mt-2">
                <Link href="/About">
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
                <Link href="/Careers">
                  <p
                    className={`block uppercase cursor-pointer ${
                      pathname === "/Careers" && "text-red-500 font-bold"
                    } mb-2`}
                  >
                    Careers
                  </p>
                </Link>
              </div>
            )}
          </div>

          <div className="relative group">
            <button
              className="flex items-center uppercase"
              onClick={toggleServiceDropdown}
            >
              Service
              {isServiceDropdownOpen ? (
                <IoChevronUp className="ml-1" />
              ) : (
                <IoChevronDown className="ml-1" />
              )}
            </button>
            {isServiceDropdownOpen && (
              <div className="absolute z-50 bg-white shadow-md p-4 rounded-md mt-2">
                <Link href="/Services">
                  <p
                    className={`block uppercase cursor-pointer ${
                      pathname === "/Services" && "text-red-500 font-bold"
                    } mb-2`}
                  >
                    Professional Services
                  </p>
                </Link>
                <Link href="/Educational_Servives">
                  <p
                    className={`block uppercase cursor-pointer ${
                      pathname === "/Educational_Servives" &&
                      "text-red-500 font-bold"
                    } mb-2`}
                  >
                    Educational Services
                  </p>
                </Link>
              </div>
            )}
          </div>

          <div className="relative group">
            <button
              className="flex items-center uppercase"
              onClick={toggleProgramDropdown}
            >
              Program
              {isProgramDropdownOpen ? (
                <IoChevronUp className="ml-1" />
              ) : (
                <IoChevronDown className="ml-1" />
              )}
            </button>
            {isProgramDropdownOpen && (
              <div className="absolute z-50 bg-white shadow-md p-4 rounded-md mt-2">
                <Link href="/Web_Development">
                  <p
                    className={`block uppercase cursor-pointer ${
                      pathname === "/Web_Development" &&
                      "text-red-500 font-bold"
                    } mb-2`}
                  >
                    Web Development
                  </p>
                </Link>
                <Link href="/Mobile_App">
                  <p
                    className={`block uppercase cursor-pointer ${
                      pathname === "/Mobile_App" && "text-red-500 font-bold"
                    } mb-2`}
                  >
                    Mobile App Development
                  </p>
                </Link>
                <Link href="/software_Development">
                  <p
                    className={`block uppercase cursor-pointer ${
                      pathname === "/Software_Development" &&
                      "text-red-500 font-bold"
                    } mb-2`}
                  >
                    Software Development
                  </p>
                </Link>
              </div>
            )}
          </div>

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
      <div className="flex flex-row gap-6 justify-center">
        <h1>Overview</h1>
        <h1>Leadership</h1>
        <h1>Events</h1>
        <h1>Careers</h1>
      </div>
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
              className="flex items-center uppercase w-full px-4 py-2