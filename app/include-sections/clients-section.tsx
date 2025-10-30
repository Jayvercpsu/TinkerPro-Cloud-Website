import React from "react";

export default function OurClients() {
  return (
    <>
      <section className="py-20 bg-[#FFFFFF] relative overflow-hidden">
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
              Our Valued Clients
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent">
              Trusted by Leading Businesses Nationwide
            </h2>
            <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg leading-relaxed">
              We’re proud to be the POS provider of choice for cafes,
              restaurants, pharmacies, and retail brands across the country. Our
              clients rely on
              <strong className="text-[#FF7D00]"> TinkerPro Cloud POS </strong>
              to keep their operations running seamlessly every day.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#FF7D00] to-transparent mx-auto mt-8 animate-pulse"></div>
          </div>

          {(() => {
            const clients = [
              "/images/clients/cupcafe.png",
              "/images/clients/durhan1.png",
              "/images/clients/lounge.png",
              "/images/clients/megscafe.png",
              "/images/clients/Ole1.png",
              "/images/clients/outback.png",
              "/images/clients/pharmacy.png",
              "/images/clients/primepharma.png",
              "/images/clients/soulsierra.png",
              "/images/clients/sugbowings.png",
              "/images/clients/tapawarma.png",
              "/images/clients/tongdak.png",
            ];

            return (
              <>
                {/* Desktop Marquee Animation */}
                <div className="relative overflow-hidden hidden md:block">
                  <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                  <div className="flex animate-marquee gap-16 py-6">
                    {[...Array(2)].map((_, repeatIndex) =>
                      clients.map((client, idx) => (
                        <div
                          key={`${repeatIndex}-${idx}`}
                          className="flex-shrink-0 flex items-center justify-center"
                        >
                          <img
                            src={client}
                            alt={`Client ${idx + 1}`}
                            className="max-h-32 w-auto object-contain md:max-h-36 lg:max-h-40 transition-all duration-500"
                          />
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* Mobile Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:hidden">
                  {clients.map((client, idx) => (
                    <div key={idx} className="flex items-center justify-center">
                      <img
                        src={client}
                        alt={`Client ${idx + 1}`}
                        className="max-h-20 sm:max-h-28 w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </>
            );
          })()}
        </div>
      </section>
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
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </>
  );
}
