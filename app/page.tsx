"use client";

import React, { useState, useEffect } from "react"; 
import Header from "./include-sections/header-section";
import Home from "./include-sections/home-section";
import Footer from "./include-sections/footer-section";
import Contact from "./include-sections/contact-section";
import Faq from "./include-sections/faq-section"; 
import Pricing from "./include-sections/pricing";
import Features from "./include-sections/features-section";
import Demo from "./include-sections/demo-section";
import Modal from "./include-sections/get-demo-modal"; 
import OurClients from "./include-sections/clients-section";
import ClientsFeedback from "./include-sections/clients-feedback";

export default function CloudPOSLanding() {
  const [showModal, setShowModal] = useState(false); 

  useEffect(() => {
    const loadWOW = async () => {
      try {
        const WOWModule = await import("wowjs");
        const WOW = (WOWModule as any).WOW;
        const wow = new WOW({
          boxClass: "wow",
          animateClass: "animated",
          offset: 100,
          mobile: true,
          live: true,
          callback: function (box: any) {
            console.log("WOW: animating <" + box.tagName.toLowerCase() + ">");
          },
        });
        wow.init();
      } catch (error) {
        console.error("WOW.js failed to load:", error);
      }
    };

    const timer = setTimeout(() => {
      loadWOW();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

 

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      <main className="pt-20">
        <Home />
        <Features />
        <OurClients/>
        <Pricing />
        <ClientsFeedback />
        <Demo />
        <Faq />
        <Contact />
      </main>

      <Footer />

      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}
