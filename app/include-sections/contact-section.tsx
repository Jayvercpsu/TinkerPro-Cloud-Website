import React from "react";
import { Mail, User, MessageSquare, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-orange-50/30 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image with Enhanced Animation */}
          <div className="relative group">
            {/* Glowing border effect */}
            <div className="absolute -inset-1   rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            
            {/* Floating elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-orange-400/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-orange-300/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            
            <div className="relative bg-white/50   rounded-3xl p-2">
              <img
                src="/images/m.jpg"
                alt="Contact Us"
                className="relative rounded-2xl w-full h-auto object-cover"
              />
               
            </div>

            {/* Decorative badge */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-6 py-3 shadow-xl border-2 border-orange-100">
              <p className="text-orange-600 font-bold text-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Available 24/7
              </p>
            </div>
          </div>

          {/* Right Form with Enhanced Design */}
          <div className="space-y-8">
            {/* Header Section */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold text-sm">
                <MessageSquare className="w-4 h-4" />
                Contact Us
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Get in Touch!
                <span className="block text-orange-500 mt-1">Reach Out Today</span>
              </h2>
              <p className="text-gray-600">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            </div>

            <div className="space-y-5">
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Full Name*"
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-300"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Email*"
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-300"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="relative">
                <MessageSquare className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Subject*"
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-300"
                />
              </div>

              {/* Message Textarea */}
              <div className="relative">
                <textarea
                  rows={5}
                  placeholder="Write Project Details*"
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-100 outline-none resize-none transition-all duration-300"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] font-semibold w-full sm:w-auto overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}