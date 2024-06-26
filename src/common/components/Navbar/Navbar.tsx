"use client";

import React from "react";
import Image from "next/image";
import { heroAssets } from "@/assets/images";

const Navbar = ({ handleChange }: any) => {
  return (
    <>
      <div className="lg:fixed z-10 top-0 w-full bg-transparent">
        <div className="w-full bg-transparent py-6 max-w-6xl px-6 lg:px-0 flex items-center mx-auto justify-between border-b-2 border-nav-border">
          <div className="flex items-center justify-between md:min-w-72">
            <a href="/">
              <p className="font-normal ml-4 text-base text-primary-blue font-futura  cursor-pointer">
                <Image
                  src={heroAssets.logo}
                  alt="Logo"
                  width={40}
                  height={40}
                  priority
                />
              </p>
            </a>

            <a
              href="#services"
              className="text-secondary-grey font-normal text-base hidden md:block"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-secondary-grey font-normal text-base hidden md:block"
            >
              Contact Us
            </a>
            {/* <a
            href="#portfolio"
            className="text-secondary-grey font-normal text-base hidden lg:block"
          >
            Portfolio
          </a> */}
          </div>
          <a href="#quotes">
            <button className="hover:bg-blue-600 hidden md:block transition bg-primary-blue text-white font-matter font-normal text-base w-32 h-12 rounded-full">
              Get quote
            </button>
          </a>
          <Image
            src={heroAssets.burger}
            alt="Logo"
            priority
            className=" md:hidden block cursor-pointer"
            onClick={handleChange}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
