import {
  X,
  Check,
  ChevronDown,
  Menu,
  Star,
  Store,
  DollarSign,
  Zap,
  Palette,
  Package,
  CreditCard,
  BarChart3,
  Shield,
  ArrowUp,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Smile,
  FileText,
  Calendar,
  Users,
  Receipt,
  BadgeCheck,
} from "lucide-react";
import React from "react";

export default function Features() {
  return (
    <>
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div
            className="text-center mb-16 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.1s"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 relative inline-block">
              KEY FEATURES
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF7D00] to-transparent"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                title: "CONVENIENT GUI",
                desc: "Seamless and easy-to-navigate interface, allowing you to quickly and efficiently process transactions.",
                icon: Smile,
                delay: "0.1s",
              },
              {
                title: "MANAGE INVENTORY",
                desc: "A powerful feature that helps you keep track of your stock levels, set reorder points, and make informed decisions about your business.",
                icon: Package,
                delay: "0.2s",
              },
              {
                title: "GENERATE REPORTS",
                desc: "Stay on top of your business by checking out detailed and easy-to-understand reports on your sales, inventory, and other key business metrics.",
                icon: FileText,
                delay: "0.3s",
              },
              {
                title: "PRODUCT EXPIRY",
                desc: "A valuable feature that provides alerts for items nearing expiration, ensuring your products are always fresh and your customers happy.",
                icon: Calendar,
                delay: "0.4s",
              },
              {
                title: "MULTIPLE USERS",
                desc: "Provide access level for improved delegation of tasks and collaboration of your employees",
                icon: Users,
                delay: "0.5s",
              },
              {
                title: "OUTSTANDING SECURITY",
                desc: "Safeguards your business and customer data with our POS' robust security protocols",
                icon: Shield,
                delay: "0.6s",
              },
              {
                title: "RECORD SALES",
                desc: "Easily monitor and track all your sales transactions in one place.",
                icon: Receipt,
                delay: "0.7s",
              },
              {
                title: "BIR ACCREDITED",
                desc: "This reliable POS solution has been extensively tested and verified by the BIR to ensure compliance with government regulations.",
                icon: BadgeCheck,
                delay: "0.8s",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-3 wow zoomIn relative overflow-hidden cursor-pointer"
                  data-wow-duration="1s"
                  data-wow-delay={feature.delay}
                >
                  {/* Sliding orange background on hover - Left to Right */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF7D00] to-orange-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>

                  {/* Decorative animated circle in top-right corner */}
                  <div className="absolute -top-8 -right-8 w-24 h-24 bg-orange-200 rounded-full opacity-40 group-hover:opacity-60 group-hover:scale-150 transition-all duration-500"></div>

                  {/* Decorative dots pattern */}
                  <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-[#FF7D00] rounded-full"></div>
                      <div className="w-1 h-1 bg-[#FF7D00] rounded-full"></div>
                      <div className="w-1 h-1 bg-[#FF7D00] rounded-full"></div>
                    </div>
                    <div className="flex gap-1 mt-1">
                      <div className="w-1 h-1 bg-[#FF7D00] rounded-full"></div>
                      <div className="w-1 h-1 bg-[#FF7D00] rounded-full"></div>
                      <div className="w-1 h-1 bg-[#FF7D00] rounded-full"></div>
                    </div>
                  </div>

                  {/* Content container */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-[#FF7D00] rounded-full flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-2xl group-hover:bg-white">
                      <Icon className="w-8 h-8 text-white group-hover:text-[#FF7D00] transition-colors duration-500" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase group-hover:text-white transition-colors duration-500">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white transition-colors duration-500">
                      {feature.desc}
                    </p>
                  </div>

                  {/* Floating particles on hover */}
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"></div>
                  <div
                    className="absolute top-1/2 right-6 w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              );
            })}
          </div>

          <style jsx>{`
            @keyframes slideUp {
              from {
                transform: translateY(100%);
              }
              to {
                transform: translateY(0);
              }
            }
          `}</style>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> 
  <div
    className="relative wow fadeInLeft"
    data-wow-duration="1s"
    data-wow-delay="0.2s"
  >
    <div className="absolute inset-0 rounded-3xl blur-2xl"></div>
    <img
      src="/images/tinkerpro.png"
      alt="Cloud POS"
      className="relative transform hover:scale-105 transition-all duration-500 animate-float-slow"
    />
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
            <div
              className="space-y-8 wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div>
                <p className="text-[#FF7D00] font-semibold mb-2">
                  Software Key Features
                </p>
                <h2 className="text-3xl font-bold text-gray-900">
                  Powerful Cloud Features with Incredible Design
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    num: "01",
                    title: "Cloud Inventory Management",
                    desc: "Real-time inventory tracking across all locations from anywhere.",
                    icon: Package,
                    delay: "0.3s",
                  },
                  {
                    num: "02",
                    title: "Sales & Payment Process",
                    desc: "Accept payments online and offline with automatic sync.",
                    icon: CreditCard,
                    delay: "0.4s",
                  },
                  {
                    num: "03",
                    title: "Report and Analysis",
                    desc: "Advanced analytics and reporting accessible from any device.",
                    icon: BarChart3,
                    delay: "0.5s",
                  },
                  {
                    num: "04",
                    title: "Secure Cloud Transaction",
                    desc: "Bank-level security with encrypted cloud data storage.",
                    icon: Shield,
                    delay: "0.6s",
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="space-y-2 p-4 rounded-lg hover:bg-orange-50 transition-all duration-300 wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay={item.delay}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-[#FF7D00] text-white rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0">
                          {item.num}
                        </div>
                        <Icon className="w-6 h-6 text-[#FF7D00]" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="why-choose"
        className="py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white relative overflow-hidden"
      > 
        <div className="absolute top-10 left-10 w-[600px] h-[600px] bg-[#FF7D00]/15 rounded-full blur-[120px] animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-orange-400/15 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div
            className="text-center mb-20 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.1s"
          >
            <p
              className="text-[#FF7D00] font-bold mb-3 tracking-wide uppercase"
              style={{ fontSize: 18 }}
            >
              Why Choose TinkerPro?
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Discover the Global Advantage of Our POS System
            </h2>

            <p className="max-w-3xl mx-auto mt-6 text-gray-300 text-lg leading-relaxed">
              TinkerPro is trusted by growing businesses around the world from cafés and retail stores 
              to large scale enterprises. Our smart, cloud-based POS platform adapts seamlessly to 
              different markets, supports multiple currencies, and provides real-time insights 
              to help you manage sales, inventory, and customers anywhere you are.
            </p>

            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#FF7D00] to-transparent mx-auto mt-8 animate-pulse"></div>
          </div>

          {/** FEATURES DATA */}
          {(() => {
            const features = [
              { icon: "/images/best-seller.png", text: "1,000+ Clients" },
              { icon: "/images/nation-wide.png", text: "Nationwide Branches" },
              { icon: "/images/bir.png", text: "BIR Accredited" },
              { icon: "/images/onsite-installation.png", text: "On-site Installation" },
              { icon: "/images/free-delivery.png", text: "Free Delivery" },
              { icon: "/images/training.png", text: "On-site Training" },
              { icon: "/images/save-payment.png", text: "One-Time Payment" },
              { icon: "/images/lifetime-update.png", text: "Lifetime Updates" },
              { icon: "/images/chat.png", text: "Premium Support" },
            ];

            return (
              <>
                {/* Desktop Marquee */}
                <div className="relative overflow-hidden hidden md:block">
                  <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none"></div>

                  <div className="flex animate-marquee gap-8 py-4">
                    {[...Array(2)].map((_, repeatIndex) =>
                      features.map((feature, idx) => (
                        <div
                          key={`${repeatIndex}-${idx}`}
                          className="flex-shrink-0 w-72 flex flex-col items-center text-center"
                        >
                          <div className="relative p-8 rounded-2xl bg-white border border-gray-200 shadow-[0_0_30px_rgba(255,125,0,0.3)] w-full">
                            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                              <img
                                src={feature.icon}
                                alt={feature.text}
                                className="w-20 h-20 object-cover"
                              />
                            </div>
                            <p className="text-gray-900 font-semibold text-lg text-[#FF7D00]">
                              {feature.text}
                            </p>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* Mobile Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:hidden">
                  {features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-white border border-gray-200 shadow-[0_0_30px_rgba(255,125,0,0.3)] flex flex-col items-center text-center"
                    >
                      <div className="w-16 h-16 mb-4">
                        <img
                          src={feature.icon}
                          alt={feature.text}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <p className="text-gray-900 font-semibold text-sm sm:text-base text-[#FF7D00]">
                        {feature.text}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            );
          })()}
        </div>

        {/* Marquee Animation */}
        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 70s linear infinite;
          }
        `}</style>
      </section>

      <section className="py-20 bg-[#f3f9fd]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className="space-y-8 wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div>
                <p className="text-[#FF7D00] font-semibold mb-2">
                  Who Can Use TinkerPro Cloud POS
                </p>
                <h2 className="text-3xl font-bold text-gray-900">
                  Our Cloud Software Capable for Wide Range of Business and
                  Industries
                </h2>
              </div>
              <ul className="space-y-3">
                {[
                  "Retail Stores",
                  "Grocery Stores",
                  "Restaurants and Cafes",
                  "Convenience Stores",
                  "eCommerce Businesses",
                  "Hospitality and Hotels",
                  "And Many More..",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center space-x-3 wow fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay={`${0.2 + idx * 0.1}s`}
                  >
                    <div className="w-6 h-6 bg-[#FF7D00] rounded-full flex items-center justify-center flex-shrink-0 transform hover:scale-110 transition-all duration-300">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="relative wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <div className="absolute inset-0 rounded-3xl blur-2xl"></div>
              <img
                src="/images/new.png"
                alt="Business Types"
                className="relative transform hover:scale-105 transition-all duration-500 animate-float-slow"
              />
            </div>
          </div>
        </div>

        <style jsx>{`
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
        `}</style>
      </section>
    </>
  );
}
