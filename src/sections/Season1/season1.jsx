import { useRef, useState, useEffect } from 'react';
import season1Data from '../../data/season1Data';

const Season1 = () => {
    const scrollContainerRef = useRef(null);
    const autoScrollActive = useRef(true);
    const parallaxRef = useRef(null);
    const [parallaxY, setParallaxY] = useState(0);
  
    const scrollByAmount = (direction = 1) => {
      const container = scrollContainerRef.current;
      if (!container) return;
      
      // Pause auto-scroll when user clicks arrow
      autoScrollActive.current = false;
      
      // Calculate scroll amount based on card width + gap
      const cardWidth = container.querySelector('div')?.offsetWidth || 400;
      const gap = 32; // 2vw gap
      const scrollAmount = cardWidth + gap;
      
      container.scrollBy({ 
        left: direction * scrollAmount, 
        behavior: "smooth" 
      });
      
      // Resume auto-scroll after a delay
      setTimeout(() => {
        autoScrollActive.current = true;
      }, 2000);
    };
  
    // Infinite auto-scroll
    useEffect(() => {
      const container = scrollContainerRef.current;
      if (!container) return;
  
      let animationId;
      const speed = 1;
  
      const scrollStep = () => {
        if (!autoScrollActive.current) {
          animationId = requestAnimationFrame(scrollStep);
          return;
        }
        if (container.scrollLeft >= container.scrollWidth - container.offsetWidth) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += speed;
        }
        animationId = requestAnimationFrame(scrollStep);
      };
      animationId = requestAnimationFrame(scrollStep);
  
      const pauseScroll = () => { autoScrollActive.current = false; };
      const resumeScroll = () => { autoScrollActive.current = true; };
  
      container.addEventListener("mouseenter", pauseScroll);
      container.addEventListener("touchstart", pauseScroll);
      container.addEventListener("mouseleave", resumeScroll);
      container.addEventListener("touchend", resumeScroll);
  
      return () => {
        cancelAnimationFrame(animationId);
        container.removeEventListener("mouseenter", pauseScroll);
        container.removeEventListener("touchstart", pauseScroll);
        container.removeEventListener("mouseleave", resumeScroll);
        container.removeEventListener("touchend", resumeScroll);
      };
    }, []);
  
    // Smooth parallax effect for cinematic reveal
    useEffect(() => {
      let rafId = null;
      const handleScroll = () => {
        if (rafId) return;
        rafId = requestAnimationFrame(() => {
          const section = parallaxRef.current;
          if (!section) {
            rafId = null;
            return;
          }
          const rect = section.getBoundingClientRect();
          const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
          const scrollY = window.scrollY || window.pageYOffset;
          
          let progress = 0;
          if (rect.top < viewportHeight && rect.bottom > 0) {
            const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
            const totalHeight = rect.bottom - rect.top;
            progress = Math.max(0, Math.min(1, visibleHeight / totalHeight));
          }
          
          const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
          const easedProgress = easeOutCubic(progress);
          const translateY = Math.round(easedProgress * -15);
          
          setParallaxY(translateY);
          rafId = null;
        });
      };
      
      handleScroll();
      window.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("resize", handleScroll, { passive: true });
      
      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleScroll);
        if (rafId) cancelAnimationFrame(rafId);
      };
    }, []);
  
    const duplicatedData = [...season1Data, ...season1Data, ...season1Data, ...season1Data];
  
    return (
      <section className="relative w-screen min-h-screen bg-transparent overflow-visible z-10 text-white font-montserrat pointer-events-auto">
        {/* Spacer to push content below Hero */}
        <div className="h-screen w-full"></div>
        <div className="h-[60vh] w-full"></div>
        
        <div className="relative">
          {/* Content Overlay */}
          <div
            ref={parallaxRef}
            className="relative bg-transparent z-[2] pointer-events-auto pt-[8vh] pb-[8vh]"
            style={{ 
              transform: `translate3d(0, ${parallaxY}px, 0)`,
              willChange: 'transform',
              backfaceVisibility: 'hidden',
              perspective: '1000px'
            }}
          >
            {/* Title */}
            <h1 
              className="font-playfair text-[5.5rem] md:text-[3.8rem] max-[600px]:text-[4.5rem] font-black text-center tracking-[0.12em] text-white mt-[4vw] md:mt-[7vw] max-[600px]:mt-[10vw] mb-[3vw] md:mb-[5vw] max-[600px]:mb-[8vw] animate-fadeInUp"
              style={{
                textShadow: '0 10px 40px rgba(10, 10, 12, 0.9), 0 4px 12px #e4d7b3',
                letterSpacing: '0.12em'
              }}
            >
              SEASON 1
            </h1>
  
            {/* BIGGER Description Box */}
            <div 
              className="w-[85vw] md:w-[90vw] max-[600px]:w-[92vw] max-w-[1200px] md:max-w-[750px] max-[600px]:max-w-[92vw] mx-auto mb-[3vw] md:mb-[4vw] max-[600px]:mb-[6vw] px-12 md:px-8 max-[600px]:px-6 py-10 md:py-7 max-[600px]:py-5 rounded-[24px] md:rounded-2xl max-[600px]:rounded-xl text-center text-white z-[3] animate-fadeInUp"
              style={{
                background: 'linear-gradient(180deg, rgba(16, 16, 20, 0.85) 0%, rgba(32, 30, 36, 0.75) 100%)',
                backdropFilter: 'blur(12px) saturate(130%)',
                WebkitBackdropFilter: 'blur(12px) saturate(130%)',
                border: '2px solid rgba(228, 215, 179, 0.65)',
                boxShadow: '0 16px 52px rgba(0, 0, 0, 0.55), 0 4px 24px rgba(228, 215, 179, 0.35)'
              }}
            >
              <h2 
                className="font-playfair font-black tracking-[0.06em] text-[2.5rem] md:text-[2rem] max-[600px]:text-[1.6rem] mt-2 md:mt-1 max-[600px]:mt-0 mb-4 md:mb-3 max-[600px]:mb-2 text-[#f7f3ea]"
                style={{
                  textShadow: '0 8px 28px rgba(10, 10, 12, 0.9), 0 3px 10px rgba(228, 215, 179, 0.95)'
                }}
              >
                The Dawn of Luxe Legacy
              </h2>
              <p 
                className="font-montserrat text-[1.2rem] md:text-[1.1rem] max-[600px]:text-[1rem] leading-[1.8] md:leading-[1.75] max-[600px]:leading-[1.7] mx-auto max-w-[950px] md:max-w-[680px] max-[600px]:max-w-[88vw]"
                style={{
                  color: 'rgba(246, 246, 246, 0.98)',
                  textShadow: '0 2px 8px rgba(10, 10, 12, 0.6)'
                }}
              >
                Step into the debut season—where fashion's visionaries unveil dramatic silhouettes, opulent textures, and avant-garde artistry. Experience the spectacle, the energy, and the timeless elegance that sets the Luxe Legacy apart.
              </p>
            </div>
  
            {/* Carousel - CRISP CLEAR IMAGES */}
            <div className="relative w-[90vw] md:w-screen max-[600px]:w-screen max-w-[1580px] md:max-w-full max-[600px]:max-w-full mx-auto mb-[2vw] md:mb-[2vw] max-[600px]:mb-[6vw] py-[2vw] md:py-0 max-[600px]:py-0 flex items-center justify-center md:justify-start max-[600px]:justify-start z-[3] bg-transparent">
              <div
                ref={scrollContainerRef}
                className="flex items-center md:items-end max-[600px]:items-end gap-[2vw] md:gap-[3vw] max-[600px]:gap-[4vw] overflow-x-auto scroll-smooth pt-[50px] pb-[50px] md:pb-[2vw] max-[600px]:pb-[2.5vw] scrollbar-hide will-change-scroll w-full md:w-screen max-[600px]:w-screen md:min-w-screen max-[600px]:min-w-screen"
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  scrollBehavior: 'smooth',
                  WebkitOverflowScrolling: 'touch'
                }}
              >
                {duplicatedData.map((project, index) => (
                  <div
                    key={index}
                    className="flex-none w-[420px] h-[650px] md:w-[75vw] md:max-w-[320px] md:min-w-[200px] md:h-[85vw] md:max-h-[580px] md:min-h-[320px] max-[600px]:w-[70vw] max-[600px]:min-w-[200px] max-[600px]:max-w-[90vw] max-[600px]:h-[85vw] max-[600px]:max-h-[500px] max-[600px]:min-h-[280px] rounded-[32px] md:rounded-[22px] max-[600px]:rounded-[14px] overflow-hidden relative mr-[2vw] md:mr-[2vw] max-[600px]:mr-[3vw] cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-1 animate-cardFadeIn"
                    style={{
                      background: 'rgba(22, 21, 27, 0.97)',
                      boxShadow: '0 12px 48px 0 rgba(0, 0, 0, 0.45), 0 2px 20px #e4d7b3',
                      border: '1.5px solid #23202a',
                      filter: 'drop-shadow(0 2px 20px #e4d7b3)',
                      willChange: 'transform'
                    }}
                    onMouseEnter={() => (autoScrollActive.current = false)}
                    onMouseLeave={() => (autoScrollActive.current = true)}
                  >
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover object-center block rounded-[32px] md:rounded-t-[22px] md:rounded-b-none max-[600px]:rounded-t-[14px] max-[600px]:rounded-b-none transition-all duration-200"
                      style={{
                        filter: 'brightness(1.05) saturate(1.25) contrast(1.12)',
                        imageRendering: 'auto',
                        WebkitFontSmoothing: 'antialiased',
                        backfaceVisibility: 'hidden'
                      }}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
  
            {/* Tags */}
            <div className="flex flex-wrap justify-center items-stretch gap-[2vw] md:gap-y-[3vw] md:gap-x-[2vw] max-[600px]:gap-y-[2vw] max-[600px]:gap-x-[1vw] z-[4] mb-[30px] md:mt-[5vw] md:mb-[2vw] max-[600px]:mt-[14vw] max-[600px]:mb-[3vw] w-full md:w-screen max-[600px]:w-screen">
              {["450+ Gathering", "Benecci", "Luxury", "Linetribe"].map((tag, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-[1vw] text-[1.09rem] md:text-[1.1rem] max-[600px]:text-base font-montserrat font-semibold rounded-[13px] md:rounded-xl max-[600px]:rounded-[9px] px-[1.4vw] md:px-[3.5vw] max-[600px]:px-[4vw] py-[0.6vw] md:py-[1vw] max-[600px]:py-[1vw] md:min-w-[120px] max-[600px]:min-w-[90px] md:text-center max-[600px]:text-center md:mb-[2vw] max-[600px]:mb-0 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(90deg, #222225 92%, #444448 100%)',
                    color: '#e4d7b3',
                    boxShadow: '0 2px 12px #e4d7b3, 0 1px 4px #181417',
                    border: '1.2px solid #e4d7b3'
                  }}
                >
                  <span className="text-white font-bold ml-[0.5em]">{tag}</span>
                </div>
              ))}
            </div>
          </div>
  
          {/* Navigation Arrows */}
          <button
            type="button"
            className="absolute top-[62%] left-[2vw] -translate-y-1/2 w-[54px] h-[54px] md:w-11 md:h-11 max-[600px]:w-[38px] max-[600px]:h-[38px] rounded-full flex items-center justify-center text-[2.3rem] md:text-[1.7rem] max-[600px]:text-[1.2rem] z-10 opacity-[0.88] md:opacity-95 max-[600px]:opacity-95 transition-all duration-200 hover:opacity-100"
            style={{
              background: 'rgba(22, 21, 27, 0.92)',
              color: '#e4d7b3',
              border: 'none',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.16)',
              filter: 'drop-shadow(0 2px 10px #e4d7b3)',
              willChange: 'filter, background, color'
            }}
            onMouseEnter={() => (autoScrollActive.current = false)}
            onMouseLeave={() => (autoScrollActive.current = true)}
            onClick={() => scrollByAmount(-1)}
            aria-label="Scroll left"
          >
            ‹
          </button>
          <button
            type="button"
            className="absolute top-[62%] right-[2vw] -translate-y-1/2 w-[54px] h-[54px] md:w-11 md:h-11 max-[600px]:w-[38px] max-[600px]:h-[38px] rounded-full flex items-center justify-center text-[2.3rem] md:text-[1.7rem] max-[600px]:text-[1.2rem] z-10 opacity-[0.88] md:opacity-95 max-[600px]:opacity-95 transition-all duration-200 hover:opacity-100"
            style={{
              background: 'rgba(22, 21, 27, 0.92)',
              color: '#e4d7b3',
              border: 'none',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.16)',
              filter: 'drop-shadow(0 2px 10px #e4d7b3)',
              willChange: 'filter, background, color'
            }}
            onMouseEnter={() => (autoScrollActive.current = false)}
            onMouseLeave={() => (autoScrollActive.current = true)}
            onClick={() => scrollByAmount(1)}
            aria-label="Scroll right"
          >
            ›
          </button>
        </div>
  
        <style>{`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(44px) scale(0.97);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          @keyframes cardFadeIn {
            0% {
              opacity: 0;
              transform: translateY(80px) scale(0.88);
            }
            100% {
              opacity: 1;
              transform: none;
            }
          }
          .animate-fadeInUp {
            animation: fadeInUp 1.2s cubic-bezier(0.4, 0, 0.2, 1) both;
          }
          .animate-cardFadeIn {
            animation: cardFadeIn 0.8s cubic-bezier(0.44, 1.4, 0.74, 0.59);
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </section>
    );
  };
  
  export default Season1;