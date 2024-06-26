"use client";

import Contact from "@/common/components/Contact/Contact";
import Footer from "@/common/components/Footer/Footer";
import Hero from "@/common/components/Hero/Hero";
import Navbar from "@/common/components/Navbar/Navbar";
import Quote from "@/common/components/Quote/Quote";
import Services from "@/common/components/Services/Services";
// import Works from "@/common/components/Works/Works";
import { ToastContainer } from "react-toastify";
import Image from "next/image";

import "react-toastify/dist/ReactToastify.css";
import { heroAssets } from "@/assets/images";
import { useState } from "react";

export default function Home() {
  const [mobileNav, setMobileNav] = useState(false);

  const handleChange = () => setMobileNav((prev) => !prev);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <Navbar handleChange={handleChange} />
      <Hero />
      <Services />
      {/* <Works /> */}
      <Quote />
      <Contact />
      <Footer />
      <ToastContainer />
      {mobileNav && (
        <div
          className={`bg-white  h-screen w-full fixed top-0 left-0 flex flex-col items-end ${
            mobileNav ? "z-30" : ""
          }`}
        >
          <Image
            src={heroAssets.cancel}
            onClick={handleChange}
            alt="Logo"
            priority
            className="size-6 self-end mr-7 mt-10 cursor-pointer"
          />
          <div className="flex flex-col items-center w-full min-h-96 justify-evenly">
            <a
              href="#services"
              onClick={handleChange}
              className="text-secondary-grey font-normal text-2xl hover:text-primary-blue"
            >
              Services
            </a>
            <a
              href="#contact"
              onClick={handleChange}
              className="text-secondary-grey font-normal text-2xl hover:text-primary-blue"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </main>
  );
}
