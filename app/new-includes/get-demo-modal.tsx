"use client";

import { Check, X } from "lucide-react";
import React, { useState } from "react";

interface ModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

const allCountries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
  "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
  "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
  "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica",
  "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt",
  "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
  "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
  "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel",
  "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan",
  "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar",
  "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
  "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal",
  "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan",
  "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar",
  "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia",
  "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
  "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan",
  "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan",
  "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City",
  "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

export default function Modal({ showModal, setShowModal }: ModalProps) {
  const [step, setStep] = useState<"form" | "selectDemo" | "loading" | "success">("form");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "",
    country: "",
  });
  const [selectedDemo, setSelectedDemo] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.businessType || !formData.country) {
      return;
    }
    
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsAnimating(true);
    await new Promise((resolve) => setTimeout(resolve, 400));
    setStep("selectDemo");
    setIsAnimating(false);
  };

  const handleDemoSelect = async (demo: string) => {
    setSelectedDemo(demo);
    setIsAnimating(true);
    await new Promise((resolve) => setTimeout(resolve, 400));
    setStep("loading");
    setIsAnimating(false);
    
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsAnimating(true);
    await new Promise((resolve) => setTimeout(resolve, 400));
    setStep("success");
    setIsAnimating(false);
  };

  const handleClose = () => {
    setShowModal(false);
    setTimeout(() => {
      setStep("form");
      setSelectedDemo(null);
      setIsAnimating(false);
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        businessType: "",
        country: "",
      });
    }, 300);
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-md animate-fadeIn"
            onClick={() => step === "form" && !isAnimating && handleClose()}
          ></div>

          <div className="relative z-10 w-full max-w-sm sm:max-w-lg md:max-w-2xl animate-slideFromTop">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 border border-gray-300 relative overflow-hidden">
              {/* background glow */}
              <div className="absolute -top-10 -right-10 w-32 sm:w-40 h-32 sm:h-40 bg-[#FF7D00]/20 rounded-full blur-3xl animate-pulse"></div>
              <div
                className="absolute bottom-0 left-0 w-40 sm:w-56 h-40 sm:h-56 bg-[#FF7D00]/10 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>

              {/* Close button */}
              {step !== "loading" && (
                <button
                  type="button"
                  onClick={handleClose}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-lg hover:bg-gray-200 transition-all duration-200 z-10 transform hover:rotate-90"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                </button>
              )}

              {/* FORM STEP */}
              {step === "form" && (
                <div className={`transition-all duration-700 ease-in-out text-black ${isAnimating ? 'animate-slideOutTop' : 'animate-slideInDown'}`}>
                  <div className="text-center mb-6 sm:mb-8">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 text-[#FF7D00]">
                      Get Early Access to
                    </h2>
                    <img
                      src="/logo/tinkerpro-logo-dark.png"
                      alt="TinkerPro Logo"
                      className="mx-auto w-40 sm:w-48 md:w-56 mb-4"
                    />
                    <p className="text-sm sm:text-base text-gray-700 max-w-xl mx-auto">
                      Submit your details below to try our demo and join our
                      exclusive pre-launch list.
                    </p>
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#FF7D00] focus:ring-4 focus:ring-orange-100 transition-all outline-none bg-white/90 placeholder-gray-500 text-sm sm:text-base"
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#FF7D00] focus:ring-4 focus:ring-orange-100 transition-all outline-none bg-white/90 placeholder-gray-500 text-sm sm:text-base"
                        placeholder="john@example.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        Business Type
                      </label>
                      <select
                        value={formData.businessType}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            businessType: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#FF7D00] focus:ring-4 focus:ring-orange-100 transition-all outline-none bg-white/90 text-sm sm:text-base"
                        required
                      >
                        <option value="">Select your business type</option>
                        <option value="retail">Retail Store</option>
                        <option value="restaurant">Restaurant / Cafe</option>
                        <option value="grocery">Grocery / Supermarket</option>
                        <option value="pharmacy">Pharmacy</option>
                        <option value="fashion">Fashion / Apparel</option>
                        <option value="electronics">Electronics</option>
                        <option value="services">Services</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        Country
                      </label>
                      <input
                        type="text"
                        list="countryList"
                        value={formData.country}
                        onChange={(e) =>
                          setFormData({ ...formData, country: e.target.value })
                        }
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#FF7D00] focus:ring-4 focus:ring-orange-100 transition-all outline-none bg-white/90 placeholder-gray-500 text-sm sm:text-base"
                        placeholder="Search your country..."
                        required
                      />
                      <datalist id="countryList">
                        {allCountries.map((country) => (
                          <option key={country} value={country} />
                        ))}
                      </datalist>
                    </div>

                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full py-3 sm:py-4 bg-[#FF7D00] text-white rounded-lg font-bold text-base sm:text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <span className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin"></span>
                          Processing...
                        </span>
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* SELECT DEMO STEP */}
              {step === "selectDemo" && (
                <div className={`text-black ${isAnimating ? 'animate-slideOutLeft' : 'animate-slideInRight'}`}>
                  <div className="text-center mb-4 sm:mb-6 md:mb-8 px-4">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-2 sm:mb-3 text-[#FF7D00]">
                      Choose Your Demo
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700">
                      Select the demo that matches your business type
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 px-4">
                    {/* Retail Demo */}
                    <button
                      onClick={() => handleDemoSelect("retail")}
                      className="group relative bg-white/80 backdrop-blur-sm border-2 border-gray-300 rounded-xl sm:rounded-2xl overflow-hidden hover:border-[#FF7D00] transition-all duration-300 hover:shadow-2xl active:scale-95 sm:hover:scale-105 touch-manipulation"
                    >
                      <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                        <img
                          src="/images/retail.png"
                          alt="Retail Demo"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-3 sm:p-4 md:p-6">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                          Retail Demo
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                          Wholesale and Retail
                        </p> 
                        <div className="inline-block px-4 py-2 bg-[#FF7D00] text-white rounded-lg font-semibold group-hover:bg-orange-600 group-active:bg-orange-700 transition-colors text-xs sm:text-sm">
                          Select
                        </div>
                      </div>
                    </button>

                    {/* Food & Beverage Demo */}
                    <button
                      onClick={() => handleDemoSelect("resto")}
                      className="group relative bg-white/80 backdrop-blur-sm border-2 border-gray-300 rounded-xl sm:rounded-2xl overflow-hidden hover:border-[#FF7D00] transition-all duration-300 hover:shadow-2xl active:scale-95 sm:hover:scale-105 touch-manipulation"
                    >
                      <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                        <img
                          src="/images/resto.png"
                          alt="Food and Beverage Demo"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-3 sm:p-4 md:p-6">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                          Food and Beverage
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                          Restaurant and Cafe
                        </p> 
                        <div className="inline-block px-4 py-2 bg-[#FF7D00] text-white rounded-lg font-semibold group-hover:bg-orange-600 group-active:bg-orange-700 transition-colors text-xs sm:text-sm">
                          Select
                        </div>
                      </div>
                    </button>
                  </div>

                  <p className="text-center text-xs sm:text-sm text-gray-600 mt-4 sm:mt-6 px-4">
                    Note: For a better demo experience, please use a high-resolution screen.
                  </p>
                </div>
              )}

              {/* LOADING STEP */}
              {step === "loading" && (
                <div className="text-center py-8 sm:py-12 animate-scaleIn">
                  <div className="flex flex-col items-center">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-6">
                      <div className="absolute inset-0 border-4 border-[#FF7D00]/30 rounded-full"></div>
                      <div className="absolute inset-0 border-4 border-transparent border-t-[#FF7D00] rounded-full animate-spin"></div>
                      <div className="absolute inset-2 border-4 border-transparent border-t-orange-400 rounded-full animate-spin-slow"></div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">
                      Loading Your Demo...
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Please wait while we prepare your experience
                    </p>
                  </div>
                </div>
              )}

              {/* SUCCESS STEP */}
              {step === "success" && (
                <div className={`text-center py-8 sm:py-12 text-black select-none ${isAnimating ? 'animate-slideOutLeft' : 'animate-scaleIn'}`}>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-successPop">
                    <Check className="w-8 h-8 sm:w-12 sm:h-12 text-white animate-checkmark" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 animate-fadeInUp">
                    Thank You for Subscribing!
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 px-2 animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
                    We're finalizing the TinkerPro Cloud POS platform.
                    <br />
                    <strong>
                      You'll receive an email once we officially launch.
                    </strong>
                    <br />
                    You're now part of our priority launch list!
                  </p>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="px-5 sm:px-6 py-2.5 sm:py-3 bg-[#FF7D00] text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm sm:text-base animate-fadeInUp"
                    style={{ animationDelay: "0.2s" }}
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideFromTop {
          0% {
            opacity: 0;
            transform: translateY(-100px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(100px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideOutLeft {
          0% {
            opacity: 1;
            transform: translateX(0);
          }
          100% {
            opacity: 0;
            transform: translateX(-100px);
          }
        }

        @keyframes scaleIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes successPop {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes checkmark {
          0% {
            opacity: 0;
            transform: scale(0) rotate(-45deg);
          }
          50% {
            transform: scale(1.2) rotate(0deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spinSlow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-360deg);
          }
        }

        .animate-slideFromTop {
          animation: slideFromTop 0.35s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.4s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        .animate-slideOutLeft {
          animation: slideOutLeft 0.4s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        .animate-successPop {
          animation: successPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-checkmark {
          animation: checkmark 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          animation-delay: 0.3s;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          opacity: 0;
        }

        .animate-spin-slow {
          animation: spinSlow 1.5s linear infinite;
        }
      `}</style>
    </>
  );
}