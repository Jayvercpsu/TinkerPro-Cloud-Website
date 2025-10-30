import React, { useState } from "react";
import Modal from "./get-demo-modal";

export default function Demo() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="py-20 bg-gradient-to-r from-[#FF7D00] to-orange-600 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-6 wow fadeInDown"
            data-wow-duration="1s"
            data-wow-delay="0.1s"
          >
            Upgrade Your Business with Our
            <br />
            Cutting-Edge Cloud POS Solutions!
          </h2>
          <p
            className="text-xl mb-8 max-w-3xl mx-auto wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            Experience the future of cloud transactions! Schedule a demo today
            and witness how
            <br />
            our Cloud POS solution can revolutionize your business from
            anywhere.
          </p>
          <div
            className="flex flex-wrap justify-center gap-4 wow zoomIn"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <button
              onClick={() => setShowModal(true)}
              className="px-8 py-4 bg-white text-[#FF7D00] rounded-lg font-bold hover:bg-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Subscribe Now
            </button>
            <button
              onClick={() => setShowModal(true)}
              className="px-8 py-4 bg-gray-900 text-white rounded-lg font-bold hover:bg-gray-800 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Get Demo Access
            </button>
          </div>
        </div>
      </section>
       
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}