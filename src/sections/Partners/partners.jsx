import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import partnerLogos from "../../data/partnersData";

const OurPartners = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="relative w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-[#0b0b0b] to-[#141414] overflow-hidden px-4 sm:px-6 md:px-8">
      {/* Title */}
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide sm:tracking-wider text-center mb-8 sm:mb-12 md:mb-16 text-white/90 px-4"
      >
        OUR PARTNERS
      </motion.h2>

      {/* Glassy Carousel */}
      <div className="relative flex items-center justify-center overflow-hidden max-w-full">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
          className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 min-w-[200%]"
        >
          {[...partnerLogos, ...partnerLogos].map((logo, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-32 h-20 sm:w-36 sm:h-24 md:w-40 md:h-28 lg:w-44 lg:h-28 flex items-center justify-center rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md shadow-lg hover:shadow-white/20 transition-all duration-500 border border-white/10 flex-shrink-0"
            >
              <img
                src={logo}
                alt={`Partner ${i + 1}`}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain select-none opacity-80 hover:opacity-100 transition-all duration-500"
                draggable="false"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Gradient fade edges for cinematic depth - Responsive */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 md:w-32 lg:w-40 bg-gradient-to-r from-[#0b0b0b] via-[#0b0b0b]/70 to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 md:w-32 lg:w-40 bg-gradient-to-l from-[#0b0b0b] via-[#0b0b0b]/70 to-transparent"></div>
    </section>
  );
};

export default OurPartners;
