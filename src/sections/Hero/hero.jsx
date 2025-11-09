import React, { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const titleRef = useRef(null);
  const [titleParallaxY, setTitleParallaxY] = useState(0);

  // Parallax effect for title - moves upward on scroll
  useEffect(() => {
    let rafId = null;
    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY || window.pageYOffset;
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        
        // Calculate parallax progress
        // Title starts moving up immediately as user scrolls
        const maxScroll = viewportHeight * 1.5; // Maximum scroll distance for title movement
        const progress = Math.min(1, Math.max(0, scrollY / maxScroll));
        
        // Smooth easing function for cinematic feel
        const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
        const easedProgress = easeOutCubic(progress);
        
        // Move title upward (negative Y value)
        // Maximum movement: 60vh (60% of viewport height)
        const maxMovement = viewportHeight * 0.6;
        const translateY = -easedProgress * maxMovement;
        
        setTitleParallaxY(translateY);
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

  return (
    <div className="fixed inset-0 z-0 font-playfair" style={{ willChange: 'transform', transform: 'translateZ(0)' }}>
      {/* Hero Container - Fixed Background */}
      <div className="absolute inset-0 h-screen w-screen overflow-hidden bg-gradient-to-r from-[#fffaf3] to-[#fbeee6]" style={{ willChange: 'transform' }}>
        
        {/* Video for Mobile/Tablet */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover object-center lg:hidden bg-[#181818]"
          style={{
            filter: 'brightness(0.96)',
            transition: 'filter 0.5s cubic-bezier(0.44, 1.2, 0.74, 0.59)',
            willChange: 'transform',
            transform: 'translateZ(0)'
          }}
          loading="eager"
          fetchPriority="high"
        >
          <source src="/legacyy.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Image for Desktop */}
        <img
          src="/images/try.webp"
          alt="Fashion Show Hero"
          className="hidden lg:block absolute inset-0 w-screen h-screen object-cover object-center"
          style={{
            filter: 'brightness(0.98) contrast(1.15) saturate(1.25)',
            imageRendering: 'crisp-edges',
            WebkitImageRendering: 'crisp-edges',
            transition: 'filter 0.5s cubic-bezier(0.44, 1.2, 0.74, 0.59)',
            willChange: 'transform, filter',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transformStyle: 'preserve-3d'
          }}
          loading="eager"
          fetchPriority="high"
        />

        {/* Premium Depth Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none z-[2]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(30, 30, 30, 0.05) 50%, rgba(30, 30, 30, 0.1) 100%)',
            mixBlendMode: 'multiply'
          }}
        />

        {/* Glass Gradient Overlay */}
        <div 
          className="absolute inset-0 z-[3] pointer-events-none"
          style={{
            background: 'linear-gradient(120deg, rgba(255, 238, 230, 0.08) 0%, rgba(255, 220, 230, 0.06) 100%)',
            boxShadow: '0 8px 32px 0 rgba(40, 34, 52, 0.05)'
          }}
        />
        
        {/* Subtle Highlight Overlay for Premium Feel */}
        <div 
          className="absolute inset-0 z-[4] pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, transparent 30%, transparent 70%, rgba(0, 0, 0, 0.02) 100%)'
          }}
        />
      </div>

      {/* Floating Overlay - Fixed with Hero */}
      <div 
        ref={titleRef}
        className="absolute inset-0 z-[1] pointer-events-none flex items-end justify-center pb-8 md:pb-12 lg:pb-16"
        style={{
          transform: `translate3d(0, ${titleParallaxY}px, 0)`,
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          perspective: '1000px'
        }}
      >
        <div className="text-center max-w-[90vw]">
          {/* Glass Box with Content */}
          <div 
            className="inline-flex flex-col items-center justify-center px-8 py-6 rounded-3xl max-[480px]:rounded-xl border-[1.5px] animate-fadeIn"
            style={{
              background: 'rgba(41, 41, 38, 0.23)',
              backdropFilter: 'blur(7.5px) saturate(1.08)',
              WebkitBackdropFilter: 'blur(7.5px) saturate(1.08)',
              boxShadow: '0 8px 32px 0 rgba(200, 160, 120, 0.1)',
              borderColor: 'rgba(255, 220, 160, 0.09)'
            }}
          >
            {/* Main Title with Gradient */}
            <h1 
              className="text-[8rem] md:text-[4.0rem] max-[480px]:text-[3rem] font-extrabold tracking-[2px] max-[480px]:tracking-[1px] leading-[1.08] mb-5 font-playfair"
              style={{
                background: 'linear-gradient(90deg, #e2862b 40%, #942835 80%, #302f2d 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 3px 18px rgba(220, 152, 108, 0.1), 0 1px 0 #fffbe6'
              }}
            >
              The Luxe Legacy Show
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;