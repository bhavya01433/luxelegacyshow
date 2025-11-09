import { useEffect, useRef } from "react";

const founderStory = `
  Kshitij Mathur, Founder and Creative Director of The Luxe Legacy Show, is a 21-year-old visionary whose journey blends literature, medicine, and entrepreneurship into a unique narrative of passion and purpose. Born in Sawai Madhopur, Rajasthan, he was deeply inspired by his mother, a Hindi and Sanskrit teacher, who instilled in him a love for learning, language, and storytelling from an early age. By 2020, Kshitij authored his first heartfelt novel exploring the meaning of friendship and human connection.

  Beyond writing, Kshitij discovered his true calling in podcasting, where his engaging conversations with India’s most respected thought leaders—Swami Ramdev, Swami Chidanand Saraswati, Bhagwati Saraswati, and Sadhvi Ritambhara—elevated his platform into a hub for culture, spirituality, and thought leadership. His ability to engage diverse and influential personalities has made The Luxe Legacy Show a unique space for inspiring narratives and meaningful dialogue.
`;

const founderImage = "images/founder.jpg";

const FounderSection = () => {
  const textBlockRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          textBlockRef.current?.classList.add("opacity-100", "translate-y-0", "scale-100");
        }
      },
      { threshold: 0.3 }
    );
    if (textBlockRef.current) observer.observe(textBlockRef.current);

    const imgObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          imageRef.current?.classList.add("opacity-100", "translate-y-0", "scale-100");
        }
      },
      { threshold: 0.2 }
    );
    if (imageRef.current) imgObserver.observe(imageRef.current);

    return () => {
      observer.disconnect();
      imgObserver.disconnect();
    };
  }, []);

  return (
    <section
      className="relative min-h-screen bg-gradient-to-br from-[#191919] via-[#232323] to-[#fbe58d] overflow-hidden font-[Montserrat]"
    >
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none z-0"></div>

      <div className="relative flex flex-col md:flex-row items-center justify-center min-h-screen gap-6 md:gap-8 w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-16 py-8 md:py-0 z-10">
        
        {/* Image Side */}
        <div className="flex justify-center items-center flex-1 w-full max-w-full md:max-w-none ">
          <div
            ref={imageRef}
            className="relative flex justify-center items-center rounded-full p-[10px] sm:p-[12px] md:p-[13px] bg-gradient-to-tr from-[#fbe58d] to-[#c2b370] shadow-[0_0_110px_rgba(229,216,140,0.18),0_6px_44px_#222] w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[400px] md:h-[400px] lg:w-[460px] lg:h-[460px] opacity-0 scale-110 translate-y-12 transition-all duration-[1700ms] ease-[cubic-bezier(0.44,1.4,0.74,0.59)]"
          >
            <img
              src={founderImage}
              alt="Founder Kshitij Mathur"
              loading="lazy"
              draggable="false"
              className="rounded-full w-full h-full object-cover object-center shadow-[0_4px_32px_rgba(229,216,140,0.19)] brightness-[1.09] contrast-[1.1] transition-all duration-1000 ease-in-out animate-[founderZoom_2.8s_cubic-bezier(0.44,1.4,0.74,0.59)_both]"
            />
            <div className="absolute bottom-0 left-0 right-0 h-[36%] bg-gradient-to-t from-[rgba(229,216,140,0.15)] to-[rgba(10,10,10,0.01)] rounded-full blur-[1px] z-10"></div>
          </div>
        </div>

        {/* Text Side */}
        <div
          ref={textBlockRef}
          className="flex-1.2 w-full max-w-full md:max-w-none bg-[rgba(27,27,27,0.74)] rounded-[20px] sm:rounded-[24px] md:rounded-[26px] shadow-[0_0_44px_rgba(229,216,140,0.17)] border-2 border-[#fbe58d44] p-6 sm:p-8 md:p-10 backdrop-blur-md text-white opacity-0 translate-y-10 scale-95 transition-all duration-[1300ms] ease-[cubic-bezier(0.44,1.4,0.74,0.59)]"
        >
          <h2 className="font-[Playfair_Display] text-[2rem] sm:text-[2.3rem] md:text-[2.7rem] text-[#fbe58d] tracking-[0.08em] sm:tracking-[0.1em] mb-3 sm:mb-4 drop-shadow-[0_2px_18px_#000,0_2px_22px_#b7a76b]">
            <span className="border-b-[2px] sm:border-b-[3px] border-[#e7c95a] pb-[4px] sm:pb-[5px] inline-block">
              Founder
            </span>
          </h2>

          <blockquote className="font-[Cormorant] text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem] text-[#fbe58d] italic mb-5 sm:mb-6 md:mb-7 opacity-90 tracking-[0.04em] sm:tracking-[0.05em] drop-shadow-[0_1px_8px_#e7c95a77] leading-[1.5]">
            "Visionaries blend literature, medicine, and entrepreneurship into a narrative of passion and purpose."
          </blockquote>

          <p className="text-[0.95rem] sm:text-[1.05rem] md:text-[1.18rem] leading-[1.65] sm:leading-[1.7] opacity-95 tracking-[0.01em] text-white drop-shadow-[0_2px_12px_#191919,0_1px_4px_#222]">
            {founderStory}
          </p>
        </div>
      </div>

      {/* Keyframe animation for the image */}
      <style jsx>{`
        @keyframes founderZoom {
          0% {
            transform: scale(1.08) translateY(40px);
            filter: brightness(0.88) blur(2px);
          }
          80% {
            transform: scale(1.02) translateY(0);
            filter: brightness(1.09) blur(0);
          }
          100% {
            transform: scale(1) translateY(0);
            filter: brightness(1.13);
          }
        }
        
        @media (max-width: 640px) {
          @keyframes founderZoom {
            0% {
              transform: scale(1.05) translateY(30px);
              filter: brightness(0.88) blur(1.5px);
            }
            80% {
              transform: scale(1.01) translateY(0);
              filter: brightness(1.09) blur(0);
            }
            100% {
              transform: scale(1) translateY(0);
              filter: brightness(1.13);
            }
          }
        }
      `}</style>
    </section>
  );
};

export default FounderSection;
