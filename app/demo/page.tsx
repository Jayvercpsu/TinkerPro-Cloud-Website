"use client";

import { useEffect, useState } from "react";
import { BadgeCheck, Menu, Users, X } from "lucide-react";
import Modal from "../new-includes/modal";

export default function DemoPage() {
  const [showModal, setShowModal] = useState(false);
  const [activeSection, setActiveSection] = useState("demo");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id: string) => {
    if (id === "demo") {
      window.location.href = "/demo";
    } else if (id === "home") {
      window.location.href = "/";
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveSection(id);
      }
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["home", "demo"];

  return (
    <div className="min-h-screen bg-[#f3f9fd] flex flex-col">
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-lg' 
            : 'bg-white/95 backdrop-blur-sm shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full overflow-x-hidden">

<div className={`flex items-center justify-between flex-wrap transition-all duration-300 ${
  scrolled ? 'py-3' : 'py-4'
}`}>

            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
              <div className="relative flex items-center">
                <img
                  src="/logo/tinkerpro-logo-dark.png"
                  alt="TinkerPro Cloud POS"
className={`h-8 sm:h-10 w-auto max-w-[160px] sm:max-w-none transition-all duration-300`}

                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const textFallback = document.createElement("div");
                    textFallback.className = `font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 ${
                      scrolled ? 'text-xl' : 'text-2xl'
                    }`;
                    textFallback.textContent = "TinkerPro";
                    target.parentNode?.appendChild(textFallback);
                  }}
                />
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((section, index) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  className={`relative px-4 py-2 font-medium transition-all duration-300 group animate-fadeInDown ${
                    activeSection === section
                      ? "text-[#FF7D00]"
                      : "text-gray-700"
                  }`}
                >
                  <span className="relative z-10">
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </span>
                  
                  <span
                    className={`absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-300 ${
                      activeSection === section
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                  
                  <span className="absolute inset-0 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                </button>
              ))}
            </nav>

            <div className="hidden md:flex items-center">
              <button
                onClick={() => scrollToSection("contact")}
                className="relative px-6 py-2.5 rounded-lg font-medium text-white overflow-hidden group animate-fadeInRight"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 transition-transform duration-300 group-hover:scale-105"></div>
                
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full transform"></div>
                
                <span className="relative z-10 flex items-center">
                  Contact
                  <svg 
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                
                <div className="absolute inset-0 rounded-lg bg-orange-400 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
              </button>
            </div>

<button
  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  className="md:hidden p-2 text-gray-700 hover:text-[#FF7D00] transition-colors duration-300 relative group z-50"
>

              <div className="absolute inset-0 bg-orange-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 animate-spin-in" />
                ) : (
                  <Menu className="w-6 h-6 animate-fade-in" />
                )}
              </div>
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4 overflow-hidden">
              <div className="space-y-1 animate-slide-down">
                {navItems.map((section, index) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    style={{ 
                      animationDelay: `${index * 0.05}s`,
                      opacity: 0,
                      animation: `fadeSlideIn 0.3s ease-out ${index * 0.05}s forwards`
                    }}
                    className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                      activeSection === section
                        ? "text-[#FF7D00] bg-orange-50 font-semibold translate-x-2"
                        : "text-gray-700 hover:text-[#FF7D00] hover:bg-orange-50 hover:translate-x-2"
                    }`}
                  >
                    <span className="flex items-center">
                      <span className={`w-1 h-1 rounded-full mr-3 transition-all duration-300 ${
                        activeSection === section ? 'bg-[#FF7D00] w-2 h-2' : 'bg-gray-400'
                      }`}></span>
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </span>
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection("contact")}
                  style={{ 
                    animationDelay: `${navItems.length * 0.05}s`,
                    opacity: 0,
                    animation: `fadeSlideIn 0.3s ease-out ${navItems.length * 0.05}s forwards`
                  }}
                  className="block w-full px-4 py-3 rounded-lg text-white bg-gradient-to-r from-orange-500 to-orange-600 font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 mt-2"
                >
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 mt-16 sm:mt-20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left animate-fadeInLeft order-2 lg:order-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#FF7D00] mb-4 sm:mb-6 leading-tight">
                Get Early Access to
                <span className="block text-gray-900 mt-2">
                  TinkerPro Cloud POS
                </span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
                Be one of the first to explore our cloud-based POS system for{" "}
                <strong className="text-[#FF7D00]">
                  retail and restaurant businesses
                </strong>
                . Simplify your sales, track inventory, and manage operations
                all in one platform.
              </p>

              <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-6 sm:mb-10 px-2 sm:px-0">
                Register now and we'll notify you once the full version
                launches!
              </p>

              <button
                onClick={() => setShowModal(true)}
                className="relative px-6 sm:px-8 py-3 sm:py-4 bg-[#FF7D00] text-white rounded-xl font-bold text-base sm:text-lg shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:scale-105 animate-fadeInUp w-full sm:w-auto"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Try FREE Demo
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-700 -translate-x-full group-hover:translate-x-full"></span>
              </button>

              <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 text-xs sm:text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0"
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
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0"
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
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0"
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
                <div className="absolute -top-10 -right-10 w-40 sm:w-60 md:w-72 h-40 sm:h-60 md:h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute -bottom-10 -left-10 w-40 sm:w-60 md:w-72 h-40 sm:h-60 md:h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

                <div className="p-4 sm:p-6 md:p-8">
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

                <div className="absolute top-4 sm:top-10 -left-2 sm:-left-5 z-20 bg-white rounded-lg sm:rounded-xl shadow-xl p-2 sm:p-4 animate-float">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] sm:text-xs text-gray-500 whitespace-nowrap">Active Clients</div>
                      <div className="text-sm sm:text-lg font-bold text-gray-900 whitespace-nowrap">
                        1,000+
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-16 sm:bottom-20 -right-2 sm:-right-5 z-20 bg-white rounded-lg sm:rounded-xl shadow-xl p-2 sm:p-4 animate-float animation-delay-1000">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#FF7D00] rounded-full flex items-center justify-center flex-shrink-0">
                      <BadgeCheck className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] sm:text-xs text-gray-500 whitespace-nowrap">
                        BIR Accredited
                      </div>
                      <div className="text-sm sm:text-lg font-bold text-gray-900 whitespace-nowrap">
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

      <style jsx>{`
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
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes blob {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
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
      `}</style>
    </div>
  );
}