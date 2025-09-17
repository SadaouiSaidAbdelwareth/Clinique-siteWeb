'use client'
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

// Logos partenaires



export const Partners = () => { 
  const sliderRef = useRef(null);
  const partners = ["assets/CASNOS_logo.png", "assets/cnasLogo.webp"];

  useEffect(() => {
    const slider = sliderRef.current;

    gsap.to(slider, {
      xPercent: -100, // défile sur la moitié (car doublé)
      repeat: -1, // boucle infinie
      ease: "linear",
      duration: 80, // vitesse
    });
  }, []);

  return (
    <section className="w-full overflow-hidden bg-white py-8 space-y-12">
      {/* Nos partenaires locaux */}
      <div className="relative w-full">
        <h1 className="text-center font-extrabold text-4xl text-[#0044ff] mb-20">
          Nos partenaires locaux
        </h1>
        <div
          ref={sliderRef}
          className="flex gap-12 w-max"
          style={{ willChange: "transform" }}
        >
          {[...partners, ...partners,...partners,...partners,...partners].map((logo, index) => (
            <img
              key={index}
              src={typeof logo === "string" ? logo : logo}
              alt={`Partner ${index}`}
              className=" size-50 object-contain"
            />
          ))}
        </div>
      </div> 

    
    </section>
  );
};
