import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image with Animation */}
          <div
            className="relative wow fadeInLeft"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-200/30 to-orange-300/30 rounded-3xl blur-2xl"></div>
            <img
              src="/images/m.jpg"
              alt="Contact Us"
              className="relative rounded-2xl shadow-xl transform w-full h-auto hover:scale-105 transition-all duration-500"
            />
          </div>

          {/* Right Form with Animation */}
          <div
            className="space-y-6 wow fadeInRight"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <div>
              <p className="text-[#FF7D00] font-semibold mb-2">Contact Us</p>
              <h2 className="text-3xl font-bold text-gray-900">
                Get in Touch! Reach
                Out to Us Today
              </h2>
            </div>

            <form className="space-y-4">
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name*"
                  className="px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:border-[#FF7D00] focus:ring-2 focus:ring-orange-100 outline-none transition-all duration-300"
                  required
                />
                <input
                  type="email"
                  placeholder="Email*"
                  className="px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:border-[#FF7D00] focus:ring-2 focus:ring-orange-100 outline-none transition-all duration-300"
                  required
                />
              </div>

              {/* Mobile and Subject */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
                <input
                  type="text"
                  placeholder="Subject*"
                  className="px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:border-[#FF7D00] focus:ring-2 focus:ring-orange-100 outline-none transition-all duration-300"
                  required
                />
              </div>

              {/* Message Textarea */}
              <textarea
                rows={5}
                placeholder="Write Project Details*"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:border-[#FF7D00] focus:ring-2 focus:ring-orange-100 outline-none resize-none transition-all duration-300"
                required
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="px-8 py-3 bg-[#FF7D00] text-white rounded-lg hover:bg-orange-600 hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold w-full sm:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
