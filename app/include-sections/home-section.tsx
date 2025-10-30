import React, { useState } from "react";
import Modal from "./get-demo-modal";

export default function Home() {
  const [showModal, setShowModal] = useState(false); 

  return (
    <section id="home" className="py-20 bg-[#f3f9fd] relative overflow-hidden">
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#FF7D00]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-12"> 
        <div
          className="flex-1 wow fadeInRight order-1 lg:order-2 mt-8 lg:mt-0"
          data-wow-duration="1s"
          data-wow-delay="0.3s"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl blur-3xl"></div>
            <img
              src="/images/h-removebg-preview.png"
              alt="Cloud POS System"
              className="relative transform hover:scale-105 transition-all duration-500 animate-float-slow"
            />
          </div>
        </div>
 
        <div
          className="flex-1 space-y-6 wow fadeInLeft order-2 lg:order-1"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Empower Your Business with TinkerPro Cloud POS
          </h1>
      
          <p className="text-lg text-gray-600 mt-4 block lg:hidden">
            Experience the future of smart business management with TinkerPro’s powerful, cloud-based POS system. 
            Streamline sales, monitor inventory, and manage your operations effortlessly anytime, anywhere, on any device.
          </p>
      
          <p className="text-lg text-gray-600 mt-4 hidden lg:block">
            Experience the future of smart business management with TinkerPro’s powerful, cloud-based POS system. 
            Streamline sales, monitor inventory, and manage your operations effortlessly anytime, anywhere, on any device.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 wow fadeInUp items-center sm:items-start" data-wow-duration="1s" data-wow-delay="0.4s">
            <button
              onClick={() => setShowModal(true)}
              className="group relative w-full sm:w-auto px-8 py-3 bg-gray-900 text-white rounded-lg font-medium overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 transition-all duration-300">
                Get Free Demo Access
                <svg
                  className="w-5 h-5 transform -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>

            <button
              onClick={() => setShowModal(true)}
              className="group relative w-full sm:w-auto px-8 py-3 bg-[#FF7D00] text-white rounded-lg font-medium overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 transition-all duration-300">
                Subscribe Now
                <svg
                  className="w-5 h-5 transform -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-600 to-[#FF7D00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>
        </div>
      </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float-slow {
          animation: float-slow 3s ease-in-out infinite;
        }
      `}} />

      <Modal showModal={showModal} setShowModal={setShowModal} />
    </section>
  );
}
