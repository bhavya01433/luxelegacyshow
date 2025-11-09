"use client";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Akshita Mathur",
    position: "Co-Founder & Creative Head",
    description:
      "Akshita leads Luxe Legacy’s creative vision — fusing her sense of style and artistry with sharp attention to detail. As Co-Founder, she ensures every event tells a story of elegance, poise, and unforgettable moments.",
    image: "/images/Akshita.webp",
  },
  {
    name: "Daman",
    position: "Model Coordinator",
    description:
      "With unmatched organization and heart, Daman bridges coordination and management to create flawless experiences. Her calm leadership keeps the runway confident and the backstage smooth as silk.",
    image: "/images/Daman.webp",
  },
  {
    name: "Ravneet",
    position: "Fashion Choreographer & Show Director",
    description:
      "Ravneet crafts the rhythm of the runway — every step, every turn choreographed with grace. Her vision and precision transform Luxe Legacy shows into immersive stories of motion and magic.",
    image: "/images/Ravneet.webp",
  },
  {
    name: "Prachi",
    position: "Fashion Stylist & Creative Director",
    description:
      "Prachi defines the aesthetic soul of Luxe Legacy, shaping each look with confidence and creativity. Her taste blends bold modernity with timeless fashion cues, ensuring every frame speaks luxury.",
    image: "/images/Prachi.webp",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="relative bg-fixed bg-cover bg-center text-white py-24 md:py-32 overflow-hidden"
    //   style={{ backgroundImage: "url('/stats-bgg.jpeg')" }}
    >
      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.65)] backdrop-blur-[2px]" />

      {/* Heading */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[2.9rem] md:text-[3.3rem] font-playfair font-semibold text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.8)]"
        >
          Meet Our Team
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-[1.15rem] md:text-[1.25rem] font-montserrat text-gray-200 leading-relaxed mt-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
        >
          The creative force behind Luxe Legacy — blending artistry, precision, and timeless elegance.
        </motion.p>
      </div>

      {/* Team Grid */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="relative z-10 mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-8 max-w-7xl mx-auto"
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.04,
              rotateY: 3,
              boxShadow: "0 0 40px rgba(255, 255, 255, 0.18)",
            }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
            className="group relative overflow-hidden rounded-2xl bg-[rgba(20,20,20,0.55)] backdrop-blur-md border border-[rgba(255,255,255,0.08)] shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_50px_rgba(255,255,255,0.1)] transform-gpu"
          >
            {/* Soft Shimmer Light Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[2200ms] ease-out" />

            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[460px] object-cover rounded-t-2xl transition-transform duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6 text-center relative z-10">
              <h3 className="font-playfair text-[1.35rem] font-semibold text-white tracking-wide mb-1">
                {member.name}
              </h3>
              <p className="text-[0.9rem] uppercase text-[#d9b86c] font-semibold tracking-wider mb-3">
                {member.position}
              </p>
              <p className="text-[0.97rem] text-gray-300 leading-relaxed font-montserrat">
                {member.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
