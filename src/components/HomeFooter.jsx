import React from "react";
import { Link } from "react-router-dom";

const HomeFooter = () => {
  return (
    <div className="text-center overflow-x-hidden">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl">
        Learn Islamic Knowledge
      </h2>

      <p className="mx-auto mt-4 max-w-sm text-gray-500">
        learn plus is a social network focused around various islamic content,
        including tafsir, hadith, and Muslim history.
      </p>

      <Link
        to="/courses"
        className="mt-8 inline-block rounded-full border border-blue-600 px-12 py-3 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-3 focus:outline-hidden"
      >
        Get Started
      </Link>
    </div>
  );
};

export default HomeFooter;
