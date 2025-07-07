"use client";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-center text-gray-700 py-6 mt-12 shadow-inner">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-sm md:text-base">
          &copy; {year} Fakrul Hossain | All rights reserved.
        </p>
        <div className="mt-2 space-x-4 text-sm">
          <a
            href="mailto:dev.fakrulhossain@gmail.com"
            className="hover:text-indigo-600 transition"
          >
            Email
          </a>
          <a
            href="https://github.com/fakrul-hossain"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/fakrul-hossain/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
