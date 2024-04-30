import React from "react";
import Image from "next/image";
import CustomButton from "./CustomeButton";

export default function Events() {
  return (
    <div className="relative">
      <div className="">
        <Image
          src="/images/bg-image.jpg"
          width={1000}
          height={1000}
          className="w-[100%] hidden md:block"
          alt="image 1"
        />
      </div>
      <div className="container mx-auto">
        <div className="sm:flex sm:flex-col md:absolute md:top-[25%] md:left-[10%] md:w-[50%] px-2">
          <h1 className="text-6xl w-full">
            Join us on campus, at conferences or online
          </h1>
          <p className="text-center py-2">
            Whether we&apos;re speaking at a conference&lsquo; hosting a campus networking
            event&lsquo; or discussing best practices during a live webinar—our events
            keep us directly connected to you.
          </p>
        </div>
        <h1 className="text-4xl px-2">What&apos;s coming Up</h1>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 py-4 px-2">
        <div className="px-4">
          <h1 className="px-2 text-red-500 text-3xl">Jun</h1>
          <p className="p-2 text-2xl">4-6</p>
        </div>
        <div className="px-2">
          <h1 className="text-2xl sm:text-3xl">New upcoming program</h1>
          <p className="sm:text-lg">
            The digital education industry is finally meeting in person again on
            site from 4th to 6th. June 2024 at LEARNTEC. At Europe&apos;s largest
            event for digital education at school&lsquo;
            <br /> university and work&lsquo; national and international exhibitors
            present the latest technologies related to digital learning and
            working.
          </p>
        </div>
      </div>
      <CustomButton />
    </div>
  );
}
