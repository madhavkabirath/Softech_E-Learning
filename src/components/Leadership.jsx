import React from "react";
import Image from "next/image";
import CustomButton from "./CustomeButton";
export default function  Leadership() {
  return (
    <div className="container mx-auto">
      <div className="h-48 flex flex-col md:justify-center items-center ">
        <h1 className="text-3xl text-bold">
          Meet the team guiding Softech into the Future.
        </h1>
        <p className="p-2  text-center">
          At Anthology&lsquo; we pride ourselves on leadership that inspires each
          employee to contribute to our mission and to expand it&rsquo; Learn more
          about our leadership team below and how each member is helping to
          continually shape Anthology&apos;s vision.
        </p>
      </div>
      <div className="md:grid grid-cols-3 gap-4">
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/images/team-1.jpg"
            width={1000}
            height={1000}
            className=""
            alt="image 1"
          />
          <h1>Instructor Name</h1>
          <h2>Position</h2>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/images/team-2.jpg"
            width={1000}
            height={1000}
            className=""
            alt="image 1"
          />
          <h1>Instructor Name</h1>
          <h2>Position</h2>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/images/team-3.jpg"
            width={1000}
            height={1000}
            className=""
            alt="image 1"
          />
          <h1>Instructor Name</h1>
          <h2>Position</h2>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/images/team-3.jpg"
            width={1000}
            height={1000}
            className=""
            alt="image 1"
          />
          <h1>Instructor Name</h1>
          <h2>Position</h2>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/images/team-1.jpg"
            width={1000}
            height={1000}
            className=""
            alt="image 1"
          />
          <h1>Instructor Name</h1>
          <h2>Position</h2>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/images/team-2.jpg"
            width={1000}
            height={1000}
            className=""
            alt="image 1"
          />
          <h1>Instructor Name</h1>
          <h2>Position</h2>
        </div>
      </div>
      <CustomButton />
    </div>
  );
}
