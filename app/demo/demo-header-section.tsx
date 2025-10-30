import { Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";

export default function DemoHeader() { 
  const [activeSection, setActiveSection] = useState("demo");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
  
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } 
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (id: string) => { 
    if (id === "demo") {
      window.location.href = "/demo";
      setMobileMenuOpen(false);
      return;
    }
    if (id === "home") {
      window.location.href = "/";
      setMobileMenuOpen(false);
      return;
    }
  };

  const handleContactClick = () => {
    setIsModalOpen(true);
    setMobileMenuOpen(false);
  };

  const navItems = ["home", "demo"];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-lg' 
            : 'bg-white/95 backdrop-blur-sm shadow-sm'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? 'py-3' : 'py-4'
          }`}>
            {/* Logo with animated glow */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
              <div className="relative flex items-center">
                <img
                  src="/logo/tinkerpro-logo-dark.png"
                  alt="TinkerPro Cloud POS"
                  className={`w-auto transition-all duration-300 ${
                    scrolled ? 'h-8' : 'h-10'
                  }`}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const textFallback = document.createElement("div");
                    textFallback.className = `font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 ${
                      scrolled ? 'text-xl' : 'text-2xl'
                    }`;
                    textFallback.textContent = "TinkerPro Cloud POS";
                    target.parentNode?.appendChild(textFallback);
                  }}
                />
              </div>
            </div>

            {/* Desktop Navigation */}
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
                  
                  {/* Animated underline */}
                  <span
                    className={`absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-300 ${
                      activeSection === section
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                  
                  {/* Hover background effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                </button>
              ))}
            </nav>

            {/* Contact Button with gradient animation */}
            <div className="hidden md:flex items-center">
              <button
                onClick={handleContactClick}
                className="relative px-6 py-2.5 rounded-lg font-medium text-white overflow-hidden group animate-fadeInRight"
              >
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 transition-transform duration-300 group-hover:scale-105"></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full transform"></div>
                
                {/* Button text */}
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
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-lg bg-orange-400 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
              </button>
            </div>

            {/* Mobile Menu Toggle with animation */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-[#FF7D00] transition-colors duration-300 relative group"
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

          {/* Mobile Navigation with staggered animation */}
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
                  onClick={handleContactClick}
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

        <style jsx>{`
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

          .animate-fadeInDown {
            animation: fadeInDown 0.6s ease-out backwards;
          }

          .animate-fadeInRight {
            animation: fadeInRight 0.6s ease-out;
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
        `}</style>
      </header>

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

                  <form className="space-y-3 md:space-y-4" onSubmit={(e) => { e.preventDefault(); }}>
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
    </>
  );
}