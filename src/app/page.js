'use client';
import React, { useState } from "react";

import { FaPhone } from "react-icons/fa";
import { FaMapPin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
  // Setting mobile view
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  // Change navbar when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 80) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <>
      <nav
        className={
          color
            ? "bg-black border-b duration-750 border-primary fixed w-full h-20 flex justify-between items-center px-4 z-10"
            : "fixed w-full h-20 flex justify-between items-center px-4 bg-transparent z-10"
        }
      >
        <div className="">
          <img src={Logo} alt="AlmanzaTech Logo" style={{ width: "250px" }} />
        </div>

        {/* Menu */}
        <ul className="hidden md:flex">
          <li className="hover:text-primary">
            <p className="py-8">What We Do</p>
          </li>
          <li className="hover:text-primary">
            <p className="py-8">Who We Are</p>
          </li>
          <li className="hover:text-primary">
            <p className="py-8">Contact Us</p>
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
              ? "absolute top-0 right-0 pt-4 w-full h-screen bg-black duration-500 border-l-8 border-primary"
              : "absolute right-[-100%] pt-4 h-screen w-full "
          }
        >
          <li className="text-xl">
            <p className="py-4 w-full">What We Do</p>
          </li>
          <li className="text-xl">
            <p className="py-4 w-full">Who We Are</p>
          </li>
          <li className="text-xl">
            <p className="py-4 w-full">Contact Us</p>
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
          <div className="absolute w-full h-full top-0 flex flex-col justify-center">
            <div className="max-w-screen-xl w-full mx-auto p-8 text-center">
              <p className="text-2xl md:text-6xl font-extrabold text-white drop-shadow-xl">
                Building Boundaries, Creating Security
              </p>
              <div className="bg-white bg-opacity-80 my-10">
                <div className="grid sm:grid-cols-2 gap-8 md:gab-16 p-10">
                  <div>
                    <p className="text-lg md:text-3xl uppercase underline font-bold mb-10">
                      We Install All Types of Fences
                    </p>
                    <p className="text-base md:text-xl text-start">
                      Serving all of Monmouth County as well as parts of Ocean,
                      Middlesex, and Mercer counties. Do not hesitate to call or
                      email us today for a free quote!
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <p className="text-end font-semibold text-sm md:text-base">
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

                    <p className="text-start text-sm md:text-base">
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
                      <p className="uppercase">CLOSED</p>
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <button className="flat-btn-home">GET A QUOTE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div name="about">
        <div className="w-full flex flex-col bg-slate-50 items-center">
          <div className="max-w-screen-xl w-full mx-auto p-4 md:mx-8 lg:py-20">
            <p className="text-center text-4xl uppercase">About Us</p>
          </div>
        </div>
      </div>
      <div name="services">
        <div className="w-full flex flex-col bg-slate-50 items-center">
          <div className="max-w-screen-xl w-full mx-auto p-4 md:mx-8 lg:py-20">
            <p className="text-center text-4xl uppercase">Services</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 mt-8">
              <div
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('/photos/wood_fence.jpeg')`,
                }}
                className="card services-card-img"
              >
                <span className="card-title">Wood Fences</span>
              </div>

              <div
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('/photos/vinyl_fence.jpeg')`,
                }}
                className="card services-card-img"
              >
                <span className="card-title">Vinyl Fences</span>
              </div>

              <div
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('/photos/metal_fence.jpeg')`,
                }}
                className="card services-card-img"
              >
                <span className="card-title">Metal Fences</span>
              </div>

              <div
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('/photos/chain_link_fence.jpeg')`,
                }}
                className="card services-card-img"
              >
                <span className="card-title">Chain Link Fence</span>
              </div>

              <div
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('/photos/gate.jpeg')`,
                }}
                className="card services-card-img"
              >
                <span className="card-title">Gates</span>
              </div>

              <div
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('/photos/railings.jpeg')`,
                }}
                className="card services-card-img"
              >
                <span className="card-title">Railings</span>
              </div>

              <div
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('/photos/barbed_wire.jpeg')`,
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
      <div name="contact">
        <div className="w-full flex flex-col bg-slate-50 items-center">
          <div className="max-w-screen-xl w-full mx-auto p-4 md:mx-8 lg:py-20">
            <p className="text-center text-4xl uppercase">Contact Us</p>
            <div className="col-span-1 md:col-span-2 lg:col-span-3 grid md:grid-cols-3 gap-8 md:gap-16 mt-8">
              <div className="contact-item">
                <FaPhone size={40} color="#DC2626" />
                <p className="contact-item-title">(732) 298-3615</p>
                <p>
                  {" "}
                  Open MON - SUN from 9:00AM - 5:00PM. Please feel free to call
                  or text to setup a free quote.
                </p>
              </div>

              <div className="contact-item">
                <MdEmail size={40} color="#DC2626" />
                <p className="contact-item-title">Pantro_2010_1@hotmail.com</p>
                <p>
                  Email us anyime to ask us for either a free consultation or
                  quote. We respond within 24 hours!
                </p>
              </div>

              <div className="contact-item">
                <FaMapPin size={40} color="#DC2626" />
                <p className="contact-item-title">Neptune, NJ</p>
                <p>
                  Based off of Neptune, we service all of Monmouth County as
                  well as parts of Ocean, Middlesex, and Mercer counties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      s
    </>
  );
}
