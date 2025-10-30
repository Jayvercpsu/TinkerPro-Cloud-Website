"use client";

import { useEffect, useState } from "react";
import { BadgeCheck, Menu, Users, X } from "lucide-react";
import Modal from "../include-sections/get-demo-modal"; 
import DemoHeader from "./demo-header-section";

export default function DemoPage() {
  const [showModal, setShowModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); 
 

  return (
    <>    
    <div className="min-h-screen bg-[#f3f9fd] flex flex-col">
   <DemoHeader/>

  <div className="flex-1 flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12 mt-14 sm:mt-16 md:mt-20">
    <div className="container mx-auto max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center">
        <div className="text-center lg:text-left animate-fadeInLeft order-2 lg:order-1 px-2 sm:px-0">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-[#FF7D00] mb-3 sm:mb-4 md:mb-6 leading-tight">
            Get Early Access to
            <span className="block text-gray-900 mt-1 sm:mt-2">
              TinkerPro Cloud POS
            </span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 mb-4 sm:mb-6 md:mb-8 leading-relaxed">
            Be one of the first to explore our cloud-based POS system for{" "}
            <strong className="text-[#FF7D00]">
              retail and restaurant businesses
            </strong>
            . Simplify your sales, track inventory, and manage operations
            all in one platform.
          </p>

          <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-600 mb-4 sm:mb-6 md:mb-10">
            Register now and we'll notify you once the full version
            launches!
          </p>

          <button
            onClick={() => setShowModal(true)}
            className="relative px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-[#FF7D00] text-white rounded-lg sm:rounded-xl font-bold text-sm sm:text-base md:text-lg shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl active:scale-95 sm:hover:scale-105 animate-fadeInUp w-full sm:w-auto touch-manipulation"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Try FREE Demo
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-700 -translate-x-full group-hover:translate-x-full"></span>
          </button>

          <div className="mt-4 sm:mt-6 md:mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 md:gap-6 text-[10px] sm:text-xs md:text-sm text-gray-600">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="whitespace-nowrap">No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-blue-500 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="whitespace-nowrap">Cloud-Based System</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-orange-500 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="whitespace-nowrap">Easy Setup</span>
            </div>
          </div>
        </div>

        <div className="relative animate-fadeInRight order-1 lg:order-2">
          <div className="relative">
            <div className="absolute -top-6 sm:-top-10 -right-6 sm:-right-10 w-32 sm:w-40 md:w-60 lg:w-72 h-32 sm:h-40 md:h-60 lg:h-72  opacity-30 animate-blob"></div>
            <div className="absolute -bottom-6 sm:-bottom-10 -left-6 sm:-left-10 w-32 sm:w-40 md:w-60 lg:w-72 h-32 sm:h-40 md:h-60 lg:h-72  opacity-30 animate-blob animation-delay-2000"></div>

            <div className="p-2 sm:p-4 md:p-6 lg:p-8">
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-500 max-w-4xl mx-auto">
                <div className="relative w-full h-auto">
                  <img
                    src="/images/h-removebg-preview.png"
                    alt="TinkerPro Cloud POS System"
                    className="w-full h-auto drop-shadow-2xl animate-slideshow"
                  />

                  <img
                    src="/images/tinkerpro.png"
                    alt="TinkerPro Cloud POS System"
                    className="w-full h-auto drop-shadow-2xl absolute top-0 left-0 animate-slideshow-delayed"
                  />
                </div>
              </div>
            </div>

            <div className="absolute top-2 sm:top-4 md:top-10 -left-1 sm:-left-2 md:-left-5 z-20 bg-white rounded-md sm:rounded-lg md:rounded-xl shadow-xl p-1.5 sm:p-2 md:p-4 animate-float">
              <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <div className="text-[8px] sm:text-[10px] md:text-xs text-gray-500 whitespace-nowrap">Active Clients</div>
                  <div className="text-xs sm:text-sm md:text-lg font-bold text-gray-900 whitespace-nowrap">
                    1,000+
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-12 sm:bottom-16 md:bottom-20 -right-1 sm:-right-2 md:-right-5 z-20 bg-white rounded-md sm:rounded-lg md:rounded-xl shadow-xl p-1.5 sm:p-2 md:p-4 animate-float animation-delay-1000">
              <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-[#FF7D00] rounded-full flex items-center justify-center flex-shrink-0">
                  <BadgeCheck className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <div className="text-[8px] sm:text-[10px] md:text-xs text-gray-500 whitespace-nowrap">
                    BIR Accredited
                  </div>
                  <div className="text-xs sm:text-sm md:text-lg font-bold text-gray-900 whitespace-nowrap">
                    Certified
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

      <Modal showModal={showModal} setShowModal={setShowModal} />

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto animate-slideDown">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Contact Form Content */}
            <div className="p-4 sm:p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                {/* Left Image */}
                <div className="relative hidden lg:block">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-200/30 to-orange-300/30 rounded-3xl blur-2xl"></div>
                  <img
                    src="/images/m.jpg"
                    alt="Contact Us"
                    className="relative rounded-2xl shadow-xl w-full h-auto"
                  />
                </div>

                {/* Right Form */}
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <p className="text-[#FF7D00] font-semibold mb-2 text-sm md:text-base">Contact Us</p>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                      Get in Touch! Reach Out to Us Today
                    </h2>
                  </div>

                  <form className="space-y-3 md:space-y-4" onSubmit={(e) => { e.preventDefault(); /* Handle form submission */ }}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                      <input
                        type="text"
                        placeholder="Full Name*"
                        className="px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:border-[#FF7D00] focus:ring-2 focus:ring-orange-100 outline-none transition-all duration-300 text-sm md:text-base"
                        required
                      />
                      <input
                        type="email"
                        placeholder="Email*"
                        className="px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:border-[#FF7D00] focus:ring-2 focus:ring-orange-100 outline-none transition-all duration-300 text-sm md:text-base"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                      <input
                        type="tel"
                        placeholder="Mobile*"
                        className="px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:border-[#FF7D00] focus:ring-2 focus:ring-orange-100 outline-none transition-all duration-300 text-sm md:text-base"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Subject*"
                        className="px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:border-[#FF7D00] focus:ring-2 focus:ring-orange-100 outline-none transition-all duration-300 text-sm md:text-base"
                        required
                      />
                    </div>

                    <textarea
                      rows={4}
                      placeholder="Write Project Details*"
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:border-[#FF7D00] focus:ring-2 focus:ring-orange-100 outline-none resize-none transition-all duration-300 text-sm md:text-base"
                      required
                    ></textarea>

                    <button
                      type="submit"
                      className="px-6 md:px-8 py-2.5 md:py-3 bg-[#FF7D00] text-white rounded-lg hover:bg-orange-600 hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold w-full sm:w-auto text-sm md:text-base"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>

    <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideDown {
        from {
          transform: translateY(-100px);
        }
        to {
          transform: translateY(0);
        }
      }

      .animate-slideDown {
        animation: slideDown 0.5s ease-out forwards;
      }

      @keyframes slideshow {
        0% {
          opacity: 1;
        }
        40% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
        90% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }

      @keyframes slideshowDelayed {
        0% {
          opacity: 0;
        }
        40% {
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
        90% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }

      .animate-slideshow {
        animation: slideshow 10s ease-in-out infinite;
        transition: opacity 1.5s ease-in-out;
      }

      .animate-slideshow-delayed {
        animation: slideshowDelayed 10s ease-in-out infinite;
        transition: opacity 1.5s ease-in-out;
      }

      @keyframes fadeInDown {
        from {
          opacity: 0;
          transform: translateY(-10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes fadeInRight {
        from {
          opacity: 0;
          transform: translateX(20px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes fadeInLeft {
        from {
          opacity: 0;
          transform: translateX(-30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes fadeSlideIn {
        from {
          opacity: 0;
          transform: translateX(-20px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes spin-in {
        from {
          transform: rotate(-90deg);
          opacity: 0;
        }
        to {
          transform: rotate(0deg);
          opacity: 1;
        }
      }

      @keyframes fade-in {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @keyframes float {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-10px);
        }
      }


      .animate-fadeInDown {
        animation: fadeInDown 0.6s ease-out backwards;
      }

      .animate-fadeInRight {
        animation: fadeInRight 0.8s ease-out;
      }

      .animate-fadeInLeft {
        animation: fadeInLeft 0.8s ease-out;
      }

      .animate-fadeInUp {
        animation: fadeInUp 0.6s ease-out 0.3s backwards;
      }

      .animate-spin-in {
        animation: spin-in 0.3s ease-out;
      }

      .animate-fade-in {
        animation: fade-in 0.3s ease-out;
      }

      .animate-slide-down {
        animation: fadeSlideIn 0.3s ease-out;
      }

      .animate-float {
        animation: float 3s ease-in-out infinite;
      }

      .animation-delay-1000 {
        animation-delay: 1s;
      }

      .animation-delay-2000 {
        animation-delay: 2s;
      }

      .animate-blob {
        animation: blob 7s infinite;
      }
      `}} /> 

    </>

  );
}