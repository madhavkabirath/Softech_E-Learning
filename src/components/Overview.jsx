"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import CustomButton from "./CustomeButton";

export default function Overview() {
  const [openIcon, setOpenIcon] = useState(false);

  const toggleIcon = () => {
    setOpenIcon((prevState) => !prevState);
  };
  return (
    <div>
      <div className="relative ">
        <div className="absolute z-10 bg-black/50 w-[100%] h-[100%]"></div>
        <Image
          src={"/images/banner1.jpg"}
          height={1000}
          width={1000}
          className="w-full h-[700px]"
          alt="overview img"
        />
        <div className="absolute z-20  md:top-[20%] md:w-[30rem] md:h-[27rem] md:left-[10%] top-16 ">
          <p className="text-6xl text-white">Understanding is Everythings</p>
        </div>
      </div>
      <div className="container mx-auto py-8 h-[50%]">
        <p className="text-4xl text-red-500 px-4 py-8 my-8">
          What if you had the visionary <strong> tools</strong>,<br />{" "}
          operational <strong>insights</strong>, and deep
          <br />
          <strong>understanding </strong>to empower your learners to <br />{" "}
          reach their full potential?
        </p>
        <div className="flex md:flex-row gap-4 p-12 flex-col">
          <div className="p-4">
            <p>
              What if you could meet each of them exactly where they are on
              their unique journey, deliver the personalized experiences that
              set them up for success, and make the best decisions for your
              institution’s future?
            </p>
          </div>
          <div className="p-4">
            <p>
              <strong>
                That’s exactly what our exclusive, holistic EdTech
                ecosystem—including a{" "}
              </strong>{" "}
              <strong className="text-red-500">CRM</strong>,{" "}
              <strong className="text-red-500">SIS</strong>, and{" "}
              <strong className="text-red-500">LMS</strong>—empowers you to do,
              by uniting and analyzing data from across the learner’s journey
              into the deep understanding and guidance that only Anthology
              Intelligent Experiences can provide.
            </p>
          </div>
          <div className="p-4">
            <p>
              Why? Because we’re here to help you gain the data-driven
              understanding that creates better outcomes for you and your
              learners, and as a result, better lives for people everywhere.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col h-[50%] md:p-[10rem]">
        <h1 className=" text-4xl w-2/4 text-center">
          Discover how we can help you connect the dots and reach your goals.
        </h1>
        <div
          className="bg-gradient-to-r from-red-500 to-purple-500  rounded-md my-2 p-4"
          onClick={toggleIcon}
        >
          <div className="flex sm:mx-2">
            <h1 className="text-white text-xl ">
              Explore our complete suite of solutions and services
            </h1>{" "}
            {openIcon ? (
              <IoIosArrowDown className="text-2xl text-white " />
            ) : (
              <MdKeyboardArrowRight className="text-2xl text-white " />
            )}
          </div>
          {openIcon && (
            <div className="flex flex-col py-2">
              <Link href={"/Professional_Services"}>
                <h1 className="hover:underline text-white text-xl py-4">
                  Professional Services
                </h1>
              </Link>
              <Link href={"/Educational_Services"}>
                <h1 className="hover:underline text-white text-xl py-4">
                  Educational Services
                </h1>
              </Link>
              <Link href={"/Web_Development"}>
                <h1 className="hover:underline text-white text-xl py-4">
                  Web Development
                </h1>
              </Link>
              <Link href={"/Mobile_App"}>
                <h1 className="hover:underline text-white text-xl py-4">
                  Mobile App Development
                </h1>
              </Link>
              <Link href={"/Software_Development"}>
                <h1 className="hover:underline text-white text-xl py-4">
                  Software Development
                </h1>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="container mx-auto shadow-lg">
        <div className="flex md:flex-row justify-center gap-4 text-center flex-col pl-4">
          <div className="">
            <p className="">
              <strong>Our mission </strong>is to provide dynamic, data-informed
              experiences to the global education community so that learners and
              educators can achieve their goals.
            </p>
          </div>
          <div>
            <p className="flex-col">
              <strong className="text-4xl text-center">150M+</strong>{" "}
              <a className="flex text-center">learners, educators, and administrators</a>
            </p>
          </div>
          <div>
            <p>
              <strong className="text-4xl">80+ </strong>{" "}
              <a className="flex">countries use Anthology solutions</a>
            </p>
          </div>
        </div>
        <hr className="w-[100px] h-[5px] bg-red-500 " />
        <div className="flex md:flex-row flex-col justify-center items-center">
          <div className=" md:w-2/4 p-8 ">
            <div className="p-6">
              <p >We are uniquely positioned to help guide your success</p>
            </div>
            <div className="p-6 justify-center items-center ">
              <p>
                Anthology was created through the merger of four of the world’s
                leading education technology companies: Blackboard, Campus
                Management, Campus Labs, and iModules.
              </p>
            </div>
            <div className="p-6 justify-center items-center ">
              <p>
                And we’re much more than a technology provider. We’re a true
                partner, whose team includes former faculty, administrators, and
                leaders with experience spanning more than three decades. We’re
                dedicated to understanding your institution’s unique challenges
                and ensuring your success.
              </p>
            </div>
            <div className="p-6 justify-center items-center">
              <p>
                Our goal is to not only meet your needs today, but to drive
                innovation that changes what EdTech can make possible for you
                tomorrow.
              </p>
            </div>
          </div>
          <div className="md:w-2/4">
            <Image 
              src={"/images/cat-2.jpg"}
              height={1000}
              width={1000}
              className="px-4"
              alt="overview img"
            />
          </div>
        </div>
      </div>
      <CustomButton />
    </div>
  );
}
