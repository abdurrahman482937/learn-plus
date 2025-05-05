import React from "react";
import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <>
      <section className="bg-white overflow-x-hidden px-[2%] flex flex-col lg:flex-row lg:items-center lg:justify-center">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-20 flex flex-col-reverse lg:flex-row lg:items-center lg:gap-16">
          {/* Text Content */}
          <div className="max-w-prose text-left lg:text-left">
            <p className="mt-4 text-base text-gray-500 sm:text-sm lg:text-lg">
              The Learn Plus
            </p>
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-6xl">
              Learn, Discuss, <br />& Share 
              <strong className="text-blue-600/80"> Islamic </strong>
              Knowledge
            </h1>
            <p className="mt-4 text-base text-gray-700 sm:text-lg lg:text-xl">
              learn plus is a social network focused around various islamic
              content, including tafsir, hadith, and Muslim history.
            </p>

            <div className="mt-6 flex sm:flex-row gap-4 justify-start">
              <Link to="/courses"
                className="inline-block rounded border border-blue-600 bg-blue-500 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-blue-600"
                href="#"
              >
                Get Started
              </Link>

              <a
                className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="mt-0 flex justify-center lg:justify-end">
            <img
              className="sm:w-full w-[80%] max-w-md sm:max-w-lg lg:max-w-xl h-auto object-cover"
              src="../../public/hero-banner-home-light.webp"
              alt="Hero Image"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeHero;
