"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaPhone } from "react-icons/fa";
import { FaMapPin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { HiMenuAlt4 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";

export default function Home() {
  // Setting mobile view
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  // Change navbar when scrolling
  const [color, setColor] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (typeof window !== "undefined") {
        // Check if window is defined (client-side)
        if (window.scrollY >= 80) {
          setColor(true);
        } else {
          setColor(false);
        }
      }
    };

    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", changeColor);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <>
      <nav
        className={
          color
            ? "bg-black bg-opacity-40 border-b duration-750 border-primary fixed w-full h-24 flex justify-between items-center px-4 z-10"
            : "fixed w-full h-24 flex justify-between items-center px-4 bg-transparent z-10"
        }
      >
        <div className="">
          <img
            src="/photos/logo.png"
            alt="Lazos Fence LLC Logo"
            style={{ height: "60px" }}
          />
        </div>

        {/* Menu */}
        <ul className="hidden md:flex">
          <li className="text-white hover:scale-125 duration-200">
            <p className="py-8">ABOUT</p>
          </li>
          <li className="text-white hover:scale-125 duration-200">
            <p className="py-8">SERVICES</p>
          </li>
          <li className="text-white hover:scale-125 duration-200">
            <p className="py-8">PORTFOLIO</p>
          </li>
          <li className="text-white hover:scale-125 duration-200">
            <p className="py-8">CONTACT</p>
          </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <HiMenuAlt4 /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul
          className={
            nav
              ? "absolute top-0 right-0 pt-4 w-full h-screen bg-white duration-500 border-l-8 border-primary"
              : "absolute right-[-100%] pt-4 h-screen w-full "
          }
        >
          <li className="text-xl">
            <p className="py-4 w-full">ABOUT</p>
          </li>
          <li className="text-xl">
            <p className="py-4 w-full">SERVICES</p>
          </li>
          <li className="text-xl">
            <p className="py-4 w-full">PORTFOLIO</p>
          </li>
          <li className="text-xl">
            <p className="py-4 w-full">CONTACT</p>
          </li>
        </ul>
      </nav>
      {/* Container */}
      <div name="home">
        <div className=" relative w-full h-screen">
          <video
            src="/videos/bgVideo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
          />
          <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center text-center backdrop-blur-sm">
            <div className="max-w-screen-xl w-full mx-auto p-8">
              <p className="text-2xl md:text-5xl font-extrabold leading-tight text-white drop-shadow-xl uppercase">
                Building Boundaries, Creating Security
              </p>
              <div className="bg-white bg-opacity-80 my-10 rounded-lg shadow-md">
                <div className="grid sm:grid-cols-2 gap-8 md:gap-16 p-4 md:p-14">
                  <div>
                    <p className="text-lg md:text-3xl font-semibold mb-6 text-primary">
                      We Install All Types of Fences
                    </p>

                    <p className="text-gray-600 md:text-lg leading-relaxed">
                      Serving all of Monmouth County as well as parts of Ocean,
                      Middlesex, and Mercer counties. Do not hesitate to call or
                      email us today for a free quote!
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <p className="text-end font-semibold text-sm md:text-base text-gray-600">
                      MON
                      <br />
                      TUE
                      <br />
                      WED
                      <br />
                      THUR
                      <br />
                      FRI
                      <br />
                      SAT
                      <br />
                      SUN
                      <br />
                    </p>

                    <p className="text-start text-sm md:text-base text-gray-600">
                      9AM - 5PM
                      <br />
                      9AM - 5PM
                      <br />
                      9AM - 5PM
                      <br />
                      9AM - 5PM
                      <br />
                      9AM - 5PM
                      <br />
                      9AM - 5PM
                      <br />
                      CLOSED
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <a
                  href="#contact"
                  className="px-6 py-3 text-lg font-semibold text-white bg-primary hover:bg-primary-dark transition duration-300 ease-in-out rounded-full"
                >
                  GET A QUOTE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div name="about" className="bg-slate-50">
        <div className="w-full flex flex-col items-center">
          <div className="max-w-screen-xl w-full mx-auto  md:mx-8 lg:py-16">
            <p className="text-center text-4xl uppercase mb-16">About Us</p>
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div>
                <p className="text-base text-gray-700 leading-loose mb-6">
                  We take pride in providing top-notch fencing solutions
                  tailored to your needs. Our team offers a wide range of
                  fencing services to enhance your property's security and
                  aesthetics.
                </p>
                <ul className="list-inside text-gray-700 mb-6">
                  <li className="mb-2">
                    <span className="text-primary mr-2">&#10003;</span>
                    Professional Installation: Our experienced team ensures
                    precision and quality in every installation.
                  </li>
                  <li className="mb-2">
                    <span className="text-primary mr-2">&#10003;</span>
                    High-Quality Materials: We use durable and attractive
                    materials to guarantee longevity.
                  </li>
                  <li className="mb-2">
                    <span className="text-primary mr-2">&#10003;</span>
                    Free Consultations: Contact us anytime for a free
                    consultation to discuss your fencing needs.
                  </li>
                </ul>
                <p className="text-base text-gray-700 leading-loose">
                  Serving Monmouth County and neighboring areas, we are
                  committed to creating beautiful and secure boundaries for your
                  property. Contact us today to get started on your fencing
                  project.
                </p>
              </div>

              <div>
                <img
                  src="/photos/about.png"
                  alt="About Us Image"
                  className="w-full rounded-lg shadow-md"
                />
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div name="services" className="services-image-bg">
        <div className="w-full flex flex-col items-center">
          <div className="max-w-screen-xl w-full mx-auto p-4 md:mx-8 lg:py-20">
            <p className="text-center text-4xl uppercase mb-16">Services</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-16 lg:gap-x-32  mt-8">
              <div
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('/photos/wood_fence.png')`,
                }}
                className="card services-card-img"
              >
                <span className="card-title">Wood Fences</span>
              </div>

              <div
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('/photos/vinyl_fence.png')`,
                }}
                className="card services-card-img"
              >
                <span className="card-title">Vinyl Fences</span>
              </div>

              <div
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('/photos/metal_fence.png')`,
                }}
                className="card services-card-img"
              >
                <span className="card-title">Metal Fences</span>
              </div>

              <div
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('/photos/chain_link_fence.png')`,
                }}
                className="card services-card-img"
              >
                <span className="card-title">Chain Link Fence</span>
              </div>

              <div
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('/photos/gate.png')`,
                }}
                className="card services-card-img"
              >
                <span className="card-title">Gates</span>
              </div>

              {/**
              <div
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('/photos/railings.png')`,
                }}
                className="card services-card-img"
              >
                <span className="card-title">Railings</span>
              </div>
 */}

              <div
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('/photos/barbed_wire.png')`,
                }}
                className="card services-card-img"
              >
                <span className="card-title">Barbed Wire</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div name="portfolio">
        <div className="w-full flex flex-col bg-slate-50 items-center">
          <div className="max-w-screen-xl w-full mx-auto p-4 md:mx-8 lg:py-20">
            <p className="text-center text-4xl uppercase">Portfolio</p>
          </div>
        </div>
      </div>
      <div name="contact" id="contact" className="contact-image-bg">
        <div className="w-full flex flex-col items-center">
          <div className="max-w-screen-xl w-full mx-auto p-4 md:mx-8 lg:py-20">
            <p className="text-center text-4xl uppercase mb-16">Contact Us</p>
            <div className="col-span-1 md:col-span-2 lg:col-span-3 grid md:grid-cols-3 gap-8 md:gap-16 lg:gap-32 mt-8">
              <div className="contact-item">
                <FaPhone size={40} color="#DC2626" />
                <p className="contact-item-title">(732) 298-3615</p>
                <p className="contact-text">
                  {" "}
                  Open MON - SUN from 9:00AM - 5:00PM. Please feel free to call
                  or text to setup a free quote.
                </p>
              </div>

              <div className="contact-item">
                <MdEmail size={40} color="#DC2626" />
                <p className="contact-item-title">Pantro_2010_1@hotmail.com</p>
                <p className="contact-text">
                  Email us anyime to ask us for either a free consultation or
                  quote. We respond within 24 hours!
                </p>
              </div>

              <div className="contact-item">
                <FaMapPin size={40} color="#DC2626" />
                <p className="contact-item-title">Neptune, NJ</p>
                <p className="contact-text">
                  Based off of Neptune, we service all of Monmouth County as
                  well as parts of Ocean, Middlesex, and Mercer counties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
