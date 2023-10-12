"use client";
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaPhone, FaClock, FaAward } from "react-icons/fa";
import { FaMapPin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { HiMenuAlt4 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";

import ImageModal from './image_modal.js'; 
import VideoModal from './video_modal.js';


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

  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");

  // Function to open the modal when an image is clicked
  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsImageModalOpen(true);
  };

  // Function to close the modal
  const closeImageModal = () => {
    setIsImageModalOpen(false);
    setSelectedImage("");
  };

  // Function to open the modal when a video is clicked
  const openVideoModal = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setIsVideoModalOpen(true);
  };

  // Function to close the modal
  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    setSelectedVideo("");
  };

  return (
    <>
      <nav
        className={
          color
            ? "bg-black bg-opacity-70 border-b duration-750 border-primary fixed w-full h-24 flex justify-between items-center px-4 z-10"
            : "fixed w-full h-24 flex justify-between items-center px-4 bg-transparent z-10"
        }
      >
        <div className="">
          <img
            src="/photos/logo123.png"
            alt="Lazos Fence LLC Logo"
            style={{ height: "60px" }}
          />
        </div>

        {/* Menu */}
        <ul className="hidden md:flex">
          <li className="text-white hover:scale-125 duration-200">
            <Link to="about" smooth={true} duration={500} offset={-100}>
              <p className="py-8">ABOUT</p>
            </Link>
          </li>
          <li className="text-white hover:scale-125 duration-200">
            <Link to="services" smooth={true} duration={500} offset={-100}>
              <p className="py-8">SERVICES</p>
            </Link>
          </li>
          <li className="text-white hover:scale-125 duration-200">
            <Link to="portfolio" smooth={true} duration={500} offset={-100}>
              <p className="py-8">PORTFOLIO</p>
            </Link>
          </li>
          <li className="text-white hover:scale-125 duration-200">
            <Link to="contact" smooth={true} duration={500}>
              <p className="py-8">CONTACT</p>
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <HiMenuAlt4 color="#DC2626" /> : <FaTimes color="#DC2626" />}
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
            <Link
              onClick={handleClick}
              to="about"
              smooth={true}
              duration={500}
              offset={-100}
            >
              <p className="py-4 w-full">ABOUT</p>
            </Link>
          </li>
          <li className="text-xl">
            <Link
              onClick={handleClick}
              to="services"
              smooth={true}
              duration={500}
              offset={-100}
            >
              <p className="py-4 w-full">SERVICES</p>
            </Link>{" "}
          </li>
          <li className="text-xl">
            <Link
              onClick={handleClick}
              to="portfolio"
              smooth={true}
              duration={500}
              offset={-100}
            >
              <p className="py-4 w-full">PORTFOLIO</p>
            </Link>{" "}
          </li>
          <li className="text-xl">
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={500}
              offset={-100}
            >
              <p className="py-4 w-full">CONTACT</p>
            </Link>{" "}
          </li>
        </ul>
      </nav>

      {/* MAIN */}
      <div name="home">
        <div className="relative w-full h-screen">
          <video
            src="/videos/bgVideo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
          />
          <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center text-center">
            <div className="max-w-screen-xl w-full mx-auto p-8">
              <p className="text-xl md:text-4xl font-extrabold leading-tight text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] uppercase mb-2">
                Building Boundaries, Creating Security
              </p>
              <p className="text-base md:text-3xl font-extrabold text-primary uppercase drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:tracking-wide">
                We Install All Types of Fences
              </p>
              <div className="grid md:grid-cols-3 gap-4 md:gap-16 my-4 md:my-16">
                <div className="bg-white bg-opacity-80 rounded-lg shadow-md flex flex-col items-center p-2 md:p-8">
                  <FaMapPin size={40} color="#DC2626" />
                  <div className="text-sm md:text-lg text-gray-600 leading-relaxed mt-2 md:mt-6">
                    Serving all of{" "}
                    <span className="font-medium">Monmouth County</span> as well
                    as parts of <span className="font-medium">Ocean</span>,
                    <span className="font-medium"> Middlesex</span>, and{" "}
                    <span className="font-medium">Mercer</span> counties.
                  </div>
                </div>

                <div className="bg-white bg-opacity-80 rounded-lg shadow-md flex flex-col items-center p-2 md:p-8">
                  <FaAward size={40} color="#DC2626" />
                  <div className="text-sm md:text-lg text-gray-600 leading-relaxed mt-2 md:mt-6">
                    Our company is built on a foundation of commitment to
                    quality craftsmanship and earned trust from our satisfied
                    customers.
                  </div>
                </div>

                <div className="bg-white bg-opacity-80 rounded-lg shadow-md flex flex-col items-center p-2 md:p-8">
                  <FaClock size={40} color="#DC2626" />
                  <div className="grid grid-cols-2 gap-4 mt-2 md:mt-6">
                    <p className="text-end font-semibold text-sm md:text-lg text-gray-600">
                      MON - SAT
                      <br />
                      SUN
                      <br />
                    </p>

                    <p className="text-start text-sm md:text-lg text-gray-600">
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

      {/* ABOUT */}
      <div name="about" id="about" className="bg-slate-50">
        <div className="w-full flex flex-col items-center px-4">
          <div className="max-w-screen-xl w-full mx-auto md:mx-8 py-8 lg:py-20">
            <p className="section-title">About Us</p>
            <div className="grid md:grid-cols-2 gap-8 md:gap-x-16 items-center">
              <div>
                <p className="text-base text-gray-700 leading-loose mb-6">
                  We take pride in providing top-notch fencing solutions
                  tailored to your needs. Our team offers a wide range of
                  fencing services to enhance your property&apos;s security and
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

      {/* SERVICES */}
      <div name="services" id="services" className="services-image-bg">
        <div className="w-full flex flex-col items-center px-4">
          <div className="max-w-screen-xl w-full mx-auto md:mx-8 py-8 lg:py-20">
            <p className="section-title">Services</p>
            <p className="font-medium">
              We install all types of fences and below is just a small example
              of the services we offer. To inquire more about a specific type of
              fence not listed; please call, text, or email us.
            </p>
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

      {/* PORTFOLIO */}
      <div name="portfolio" id="portfolio">
        <div className="w-full flex flex-col bg-slate-50 items-center px-4">
          <div className="max-w-screen-xl w-full mx-auto md:mx-8 py-8 lg:py-20">
            <p className="section-title">Portfolio</p>
            <div class="container mx-auto">
              <div class="flex flex-wrap">
                <div class="flex md:w-1/3 flex-wrap">
                  <div
                    class="w-1/2 p-1 md:p-2 cursor-pointer"
                    onClick={() => openImageModal("/photos/portfolio/pic1.jpg")}
                  >
                    <img
                      alt="gallery"
                      class="block h-full w-full rounded-lg object-cover object-center"
                      src="/photos/portfolio/pic1.jpg"
                    />
                  </div>
                  <div
                    class="w-1/2 p-1 md:p-2 cursor-pointer"
                    onClick={() => openImageModal("/photos/portfolio/pic2.jpg")}
                  >
                    <img
                      alt="gallery"
                      class="block h-full w-full rounded-lg object-cover object-center"
                      src="/photos/portfolio/pic2.jpg"
                    />
                  </div>
                  <div
                    class="w-full p-1 md:p-2 cursor-pointer"
                    onClick={() => openImageModal("/photos/portfolio/pic3.jpg")}
                  >
                    {" "}
                    <img
                      alt="gallery"
                      class="block h-full w-full rounded-lg object-cover object-center"
                      src="/photos/portfolio/pic3.jpg"
                    />
                  </div>
                  <div
                    class="w-1/2 p-1 md:p-2 cursor-pointer"
                    onClick={() => openImageModal("/photos/portfolio/pic4.jpg")}
                  >
                    {" "}
                    <img
                      alt="gallery"
                      class="block h-full w-full rounded-lg object-cover object-center"
                      src="/photos/portfolio/pic4.jpg"
                    />
                  </div>
                  <div
                    class="w-1/2 p-1 md:p-2 cursor-pointer"
                    onClick={() => openVideoModal("/videos/vid5.mp4")}
                  >
                    {" "}
                    <video
                      src="/videos/vid5.mp4"
                      muted
                      controls
                      playsInline
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <div class="flex md:w-1/3 flex-wrap">
                  <div
                    class="w-full p-1 md:p-2 cursor-pointer"
                    onClick={() => openImageModal("/photos/portfolio/pic6.jpg")}
                  >
                    {" "}
                    <img
                      alt="gallery"
                      class="block h-full w-full rounded-lg object-cover object-center"
                      src="/photos/portfolio/pic6.jpg"
                    />
                  </div>

                  <div
                    class="w-1/2 p-1 md:p-2 cursor-pointer"
                    onClick={() => openVideoModal("/videos/vid2.mp4")}
                  >
                    {" "}
                    <video
                      src="/videos/vid2.mp4"
                      muted
                      controls
                      playsInline
                      className="rounded-lg"
                    />
                  </div>
                  <div
                    class="w-1/2 p-1 md:p-2 cursor-pointer"
                    onClick={() => openVideoModal("/videos/vid1.mp4")}
                  >
                    {" "}
                    <video
                      src="/videos/vid1.mp4"
                      muted
                      controls
                      playsInline
                      className="rounded-lg"
                    />
                  </div>

                  <div
                    class="w-1/2 p-1 md:p-2 cursor-pointer"
                    onClick={() => openImageModal("/photos/portfolio/pic9.jpg")}
                  >
                    {" "}
                    <img
                      alt="gallery"
                      class="block h-full w-full rounded-lg object-cover object-center"
                      src="/photos/portfolio/pic9.jpg"
                    />
                  </div>

                  <div
                    class="w-1/2 p-1 md:p-2 cursor-pointer"
                    onClick={() => openImageModal("/photos/portfolio/pic7.jpg")}
                  >
                    {" "}
                    <img
                      alt="gallery"
                      class="block h-full w-full rounded-lg object-cover object-center"
                      src="/photos/portfolio/pic7.jpg"
                    />
                  </div>
                </div>

                <div class="flex md:w-1/3 flex-wrap">
                  <div
                    class="w-1/2 p-1 md:p-2 cursor-pointer"
                    onClick={() => openVideoModal("/videos/vid3.mp4")}
                  >
                    {" "}
                    <video
                      src="/videos/vid3.mp4"
                      muted
                      controls
                      playsInline
                      className="rounded-lg"
                    />
                  </div>
                  <div
                    class="w-1/2 p-1 md:p-2 cursor-pointer"
                    onClick={() => openVideoModal("/videos/vid4.mp4")}
                  >
                    {" "}
                    <video
                      src="/videos/vid4.mp4"
                      muted
                      controls
                      playsInline
                      className="rounded-lg"
                    />
                  </div>
                  <div
                    class="w-1/2 p-1 md:p-2 cursor-pointer"
                    onClick={() =>
                      openImageModal("/photos/portfolio/pic11.jpg")
                    }
                  >
                    {" "}
                    <img
                      alt="gallery"
                      class="block h-full w-full rounded-lg object-cover object-center"
                      src="/photos/portfolio/pic11.jpg"
                    />
                  </div>
                  <div
                    class="w-1/2 p-1 md:p-2 cursor-pointer"
                    onClick={() =>
                      openImageModal("/photos/portfolio/pic12.jpg")
                    }
                  >
                    {" "}
                    <img
                      alt="gallery"
                      class="block h-full w-full rounded-lg object-cover object-center"
                      src="/photos/portfolio/pic12.jpg"
                    />
                  </div>

                  <div
                    class="w-full p-1 md:p-2 cursor-pointer"
                    onClick={() =>
                      openImageModal("/photos/portfolio/pic15.jpg")
                    }
                  >
                    {" "}
                    <img
                      alt="gallery"
                      class="block h-full w-full rounded-lg object-cover object-center"
                      src="/photos/portfolio/pic15.jpg"
                    />
                  </div>
                </div>
              </div>

              {/* Image modal */}
              {isImageModalOpen && (
                <ImageModal
                  imageUrl={selectedImage}
                  onClose={closeImageModal}
                />
              )}

              {/* Video modal */}
              {isVideoModalOpen && (
                <VideoModal
                  videoUrl={selectedVideo}
                  onClose={closeVideoModal}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <div name="contact" id="contact" className="contact-image-bg">
        <div className="w-full flex flex-col items-center px-4">
          <div className="max-w-screen-xl w-full mx-auto md:mx-8 py-8 lg:py-20">
            <p className="section-title">Contact Us</p>
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
