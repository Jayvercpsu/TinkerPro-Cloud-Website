import { ArrowUp, Facebook } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
      useEffect(() => {
        const handleScroll = () => {
          setShowScrollTop(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };


  return (
    <>
      <footer className="bg-gray-900 text-white py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 mb-12">
            {/* Logo & Description */}
            <div
              className="space-y-4 text-center wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
            >
              <img
                src="/logo/tinkerpro-logo-light.png"
                alt="TinkerPro Cloud POS"
                className="h-10 w-auto mx-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const textFallback = document.createElement("div");
                  textFallback.className = "text-2xl font-bold text-[#FF7D00]";
                  textFallback.textContent = "TinkerPro Cloud POS";
                  target.parentNode?.appendChild(textFallback);
                }}
              />
              <p className="text-gray-400 max-w-2xl mx-auto">
                TINKERPRO POS – Your trusted cloud POS solution. Streamlining
                business operations across multiple branches with cutting-edge
                cloud technology.
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.facebook.com/TinkerProHQ/"
                  target="_blank"
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-all duration-300 transform hover:scale-110"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Branches Inline */}
            <div
              className="wow fadeInUp text-gray-400 mt-12"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div className="flex flex-col lg:flex-row justify-center gap-12 text-center">
                <div>
                  <p className="font-semibold text-white">NCR Branch</p>
                  <p>Building Q, Sorrento Oasis, Brgy. Rosario, Pasig City</p>
                  <p>Email: office@tinkerpro.com.ph / sales@tinkerpro.com.ph</p>
                  <p>Phone: 0962-132-4545</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Cebu Branch</p>
                  <p>
                    Elviro Cometa Bldg., Tiangue Rd., Brgy. Gun-ob, Lapu-Lapu
                    City
                  </p>
                  <p>Email: office@tinkerpro.com.ph / sales@tinkerpro.com.ph</p>
                  <p>Phone: 0976-316-8478 / (032) 384-8586</p>
                </div>
                <div>
                  <p className="font-semibold text-white">
                    Cagayan de Oro Branch
                  </p>
                  <p>Zone 9 Phase 3 Macanhan Carmen, Cagayan de Oro City</p>
                  <p>Email: office@tinkerpro.com.ph / sales@tinkerpro.com.ph</p>
                  <p>Phone: 0966-822-6024</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>
              &copy; Copyright 2025. TinkerPro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-[#FF7D00] text-white rounded-full flex items-center justify-center hover:bg-orange-600 hover:shadow-2xl transition-all duration-300 transform hover:scale-110 z-50 animate-bounce"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
}
