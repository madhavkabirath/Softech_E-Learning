import React from "react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomeButton";
export default function Professional_Services() {
  return (
    <div className="">
      <div className="container mx-auto flex-col-1">
        <div className="container mx-auto sm:py-2 md:flex">
          <div className="md:h-[350px] overflow-hidden md:order-1 flex justify-center">
            <Image
              src="/images/professional2.jpeg"
              width={1000}
              height={500}
              className="h-full w-full md:px-4"
              alt="image"
            />
          </div>
          <div className="px-4 container mx-auto md:h-[350px] md:order-2">
            <h1 className="px-8 py-4 text-2xl font-semibold">
              PROFESSIONAL SERVICES
            </h1>
            <h2 className="px-8 text-3xl font-semibold">
              Expand institutional effectiveness and success
            </h2>
            <p className="px-8 md:py-8">
              Softech Foundation has carved out a successful niche for itself in
              custom software design and development. We provide complete
              software implementation process, starting with software design and
              development, software quality assurance testing, software
              deployment, up to further software upgrades and enhancements
              <br /> <br />
              The core software design and development services provided by
              Softech Foundation include, but are not limited to, desktop
              application development, high-end client-server application
              development, enterprise application development and building
              end-to-end enterprise application integration (EAI) solutions,
              re-engineering, software systems maintenance and support.
            </p>
          </div>
        </div>
        <div className="container mx-auto sm:py-2 md:flex">
          <div className="md:h-[350px] overflow-hidden md:order-1 flex justify-center ">
            <Image
              src="/images/professional.png"
              width={1000}
              height={500}
              className="h-full w-full"
              alt="image"
            />
          </div>
          <div className="px-4 container mx-auto md:h-[350px] md:order-">
            <h1 className="px-8 text-4xl font-semibold">Smooth integrations</h1>
            <p className="px-8 md:py-8">
              By combining marketing expertise and design skills, Softech
              Foundation offers a full spectrum of professional, quality-driven
              services on custom website design and re-design, Flash web site
              design and programming, multimedia presentation design and
              development, corporate identity, custom print graphics, and
              original art work.
              <br /> <br />
              The team of design and marketing professionals at Softech
              Foundation blends inspiration, creative approach and technical
              skills to help you communicate with your clients and network more
              effectively, position your brand, or take your business to new
              heights.
            </p>
          </div>
        </div>
        <div className="container mx-auto sm:py-2 md:flex">
          <div className="md:h-[350px] overflow-hidden md:order-1 flex justify-center ">
            <Image
              src="/images/professional4.jpeg"
              width={1000}
              height={500}
              className="h-auto w-auto overflow-hidden"
              alt="image"
            />
          </div>
          <div className="px-4 container mx-auto md:h-[350px] md:order-2">
            <h1 className="px-8 text-3xl font-semibold">
              Data and strategy as resources
            </h1>
            <p className="px-8 md:py-8">
              We provide affordable mobile application for commercial purpose,
              social use, businesses transaction and individuals. We are able to
              provide you and your company or business, large or small with a
              range of options to ensure we can create the mobile application
              you require.
              <br /> <br /> We offer value for money packages for new business,
              established companies and individuals.By combining marketing
              expertise and design skills, Softech Foundation offers a full
              spectrum of professional, quality-driven services on custom mobile
              application development services, and mobile application
              programming, multimedia presentation design and development,
              corporate identity, custom print graphics, and original art work
            </p>
          </div>
        </div>
        <div className="container mx-auto sm:py-2 md:flex">
          <div className="md:h-[350px] overflow-hidden md:order-1 flex justify-center ">
            <Image
              src="/images/professional3.jpeg"
              width={1000}
              height={500}
              className="h-auto w-auto"
              alt="image"
            />
          </div>
          <div className="px-4 container mx-auto md:h-[350px] md:order-">
            <h1 className="px-8 text-4xl font-semibold">
              Data and strategy as resources
            </h1>
            <p className="px-8 md:py-8">
              By combining marketing expertise and design skills, Softech
              Foundation offers a full spectrum of professional, quality-driven
              services on custom website design and re-design, Flash web site
              design and programming, multimedia presentation design and
              development, corporate identity, custom print graphics, and
              original art work.
              <br /> <br />
              The team of design and marketing professionals at Softech
              Foundation blends inspiration, creative approach and technical
              skills to help you communicate with your clients and network more
              effectively, position your brand, or take your business to new
              heights.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Link href={"/Contact"}>
          <button className="bg-black text-white m-2 p-4 rounded-md sm:pl-8 ">
            Contact us
          </button>
        </Link>
      </div>
      <CustomButton />
    </div>
  );
}
