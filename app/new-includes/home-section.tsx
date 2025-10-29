import { Check, X } from "lucide-react";
import React, { useState } from "react";
import Modal from "./modal";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "",
    country: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
  };

  return (
    <section id="home" className="py-20 bg-[#f3f9fd] relative overflow-hidden">
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#FF7D00]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div
            className="flex-1 space-y-6 wow fadeInLeft"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          > 
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Empower Your Business with TinkerPro Cloud POS
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Experience the future of smart business management with TinkerPro’s powerful, cloud-based POS system. 
            Streamline sales, monitor inventory, and manage your operations effortlessly anytime, anywhere, on any device.
          </p>
            <div
              className="flex flex-wrap gap-4 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.4s"
            >
              <button
                onClick={() => setShowModal(true)}
                className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-medium"
              >
                Get Free Demo Access
              </button>
              <button
                onClick={() => setShowModal(true)}
                className="px-8 py-3 bg-[#FF7D00] text-white rounded-lg hover:bg-orange-600 hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-medium"
              >
                Subscribe Now
              </button>
            </div>
          </div>

          <div
            className="flex-1 wow fadeInRight"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl blur-3xl"></div>
              <img
                src="/images/h-removebg-preview.png"
                alt="Cloud POS System"
                className="relative transform hover:scale-105 transition-all duration-500"
                style={{
                  animation: "floatGlow 4s ease-in-out infinite",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      
  <Modal showModal={showModal} setShowModal={setShowModal} />
    </section>
  );
}
