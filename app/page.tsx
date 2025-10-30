"use client";

import React, { useState, useEffect } from "react"; 
import Header from "./new-includes/header-section";
import Home from "./new-includes/home-section";
import Footer from "./new-includes/footer-section";
import Contact from "./new-includes/contact-section";
import Faq from "./new-includes/faq-section";
import Clients from "./new-includes/clients-feedback";
import Pricing from "./new-includes/pricing";
import Features from "./new-includes/features-section";
import Demo from "./new-includes/demo-section";
import Modal from "./new-includes/get-demo-modal";

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
        <Pricing />
        <Clients />
        <Demo />
        <Faq />
        <Contact />
      </main>

      <Footer />

      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}
