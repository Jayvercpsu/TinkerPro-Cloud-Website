import { Star } from "lucide-react";
import React from "react";

export default function Clients() {
  return (
    <section id="testimonial" className="py-20 bg-[#f3f9fd]">
      <div className="container mx-auto px-4">
        <div
          className="text-center mb-16 wow fadeInDown"
          data-wow-duration="1s"
          data-wow-delay="0.1s"
        >
          <p className="text-[#FF7D00] font-semibold mb-2">Clients Feedback</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Voices of Delights Testimonials That
            <br />
            Speak to Our Excellence
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Sarah Johnson",
              business: "TechRetail Store",
              rating: 5,
              text: "TinkerPro Cloud POS has transformed how we manage our multi-location retail business. The cloud accessibility is a game-changer!",
              delay: "0.2s",
            },
            {
              name: "Michael Chen",
              business: "Urban Cafe Network",
              rating: 5,
              text: "Real-time inventory sync across all our cafe locations has saved us countless hours. The cloud reporting is incredibly detailed.",
              delay: "0.3s",
            },
            {
              name: "Emma Rodriguez",
              business: "Fashion Boutique",
              rating: 5,
              text: "Easy to use, accessible anywhere, and the support team is amazing. Our sales have increased by 40% since switching to cloud POS!",
              delay: "0.4s",
            },
          ].map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay={testimonial.delay}
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF7D00] to-orange-300 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.business}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <div className="flex space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#FF7D00] text-[#FF7D00]"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
