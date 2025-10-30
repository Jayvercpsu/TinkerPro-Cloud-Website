import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

export default function Faq() {
  const [activeAccordion, setActiveAccordion] = useState(0);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s">
          <p className="text-[#FF7D00] font-semibold mb-2">
            Have Any Question?
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Here Some Questions Answer
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              q: "How Does a Cloud POS System Benefit My Business?",
              a: "A cloud POS system allows you to access your business data from anywhere, provides real-time synchronization across all locations, reduces hardware costs, offers automatic updates, and ensures data security with cloud backups.",
            },
            {
              q: "Can I Access My Cloud POS from Multiple Devices?",
              a: "Yes! Our cloud POS works seamlessly on desktop, tablet, and mobile devices. You can manage your business from anywhere with an internet connection, making it perfect for multi-location businesses.",
            },
            {
              q: "Is My Data Safe in the Cloud?",
              a: "Absolutely. We use bank-level encryption and store your data in secure cloud servers with automatic backups. Your data is more secure in the cloud than on local devices that can be lost or damaged.",
            },
            {
              q: "What Happens If My Internet Connection Goes Down?",
              a: "Our cloud POS has offline mode capability. You can continue processing sales, and all data will automatically sync when your connection is restored.",
            },
            {
              q: "How Quickly Can I Get Started with Cloud POS?",
              a: "You can be up and running in minutes! Simply sign up, configure your products, and start selling. No complex installation or IT expertise required.",
            },
          ].map((faq, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg overflow-hidden wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay={`${0.1 + idx * 0.1}s`}
            >
              <button
                onClick={() =>
                  setActiveAccordion(activeAccordion === idx ? -1 : idx)
                }
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-all duration-300"
              >
                <span className="font-semibold text-gray-900 text-left">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                    activeAccordion === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeAccordion === idx ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 py-4 bg-gray-50 text-gray-600">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
