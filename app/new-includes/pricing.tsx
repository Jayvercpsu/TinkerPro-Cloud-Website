import { Check, Store, X } from "lucide-react";
import React, { useState } from "react";

export default function Pricing() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <section
      id="pricing"
      className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden"
    >
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#FF7D00]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div
          className="text-center mb-16 wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.1s"
        >
          <p className="text-[#FF7D00] font-semibold mb-2">Our Pricing</p>
          <h2 className="text-3xl lg:text-4xl font-bold">
            Transparent Cloud Pricing Plans, Find the
            <br />
            Perfect Fit for Your Needs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Starter Cloud",
              price: "$29",
              desc: "For small business",
              delay: "0.2s",
              features: [
                { text: "Single location access", included: true },
                { text: "Cloud inventory management", included: true },
                { text: "Sales report & analysis", included: true },
                { text: "Multi-location support", included: false },
                { text: "Advanced analytics", included: false },
                { text: "Priority 24/7 support", included: false },
              ],
            },
            {
              name: "Professional Cloud",
              price: "$59",
              desc: "For professionals",
              popular: true,
              delay: "0.3s",
              features: [
                { text: "Up to 3 locations", included: true },
                { text: "Cloud inventory management", included: true },
                { text: "Sales report & analysis", included: true },
                { text: "Multi-location support", included: true },
                { text: "Advanced analytics", included: false },
                { text: "Priority 24/7 support", included: false },
              ],
            },
            {
              name: "Enterprise Cloud",
              price: "$99",
              desc: "For enterprise level",
              delay: "0.4s",
              features: [
                { text: "Unlimited locations", included: true },
                { text: "Cloud inventory management", included: true },
                { text: "Sales report & analysis", included: true },
                { text: "Multi-location support", included: true },
                { text: "Advanced analytics", included: true },
                { text: "Priority 24/7 support", included: true },
              ],
            },
          ].map((plan, idx) => (
            <div
              key={idx}
              className={`relative bg-white text-gray-900 rounded-2xl p-8 wow bounceIn transform hover:scale-105 transition-all duration-500 ${
                plan.popular ? "ring-4 ring-[#FF7D00] scale-105" : ""
              }`}
              data-wow-duration="1s"
              data-wow-delay={plan.delay}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#FF7D00] text-white px-6 py-1 rounded-full text-sm font-bold animate-pulse">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-6">
                <Store className="w-12 h-12 mx-auto mb-3 text-[#FF7D00]" />
                <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                <p className="text-gray-600 text-sm">{plan.desc}</p>
              </div>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-600"> / month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center space-x-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                    )}
                    <span
                      className={
                        feature.included ? "text-gray-700" : "text-gray-400"
                      }
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => scrollToSection("contact")}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? "bg-[#FF7D00] text-white hover:bg-orange-600 hover:shadow-xl"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
