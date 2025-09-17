'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef, useState } from 'react'
import { TfiLayoutLineSolid } from "react-icons/tfi";
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const ref = useRef(null)

  const fullText = `Notre clinique offre une gamme complète de services médicaux, allant des consultations spécialisées aux soins préventifs. Nous nous engageons à fournir des soins personnalisés et de haute qualité à tous nos patients.

Notre équipe médicale expérimentée est composée de spécialistes dans divers domaines, assurant une prise en charge globale et adaptée à chaque besoin. Nous disposons d’équipements modernes pour garantir des diagnostics précis et des traitements efficaces.

La Clinique les Sources met également l’accent sur l’accompagnement humain, l’écoute et le respect de la confidentialité. Nous proposons des programmes de suivi, des ateliers de prévention et un accueil chaleureux pour assurer le bien-être de nos patients tout au long de leur parcours de soins.
`;
  const [displayedText, setDisplayedText] = useState("");             
  const indexRef = useRef(0);
  const animationStarted = useRef(false);

   // Animation du titre
  useGSAP(() => {
    gsap.from('.title', {
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 60%',
      }
    });
  }, []);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 70%',
      onEnter: () => {
        if (!animationStarted.current) {
          animationStarted.current = true;
          typeText();
        }
      }
    });

    return () => trigger.kill();
  }, []);

  const typeText = () => {
    if (indexRef.current < fullText.length) {
      // Utilisation de Array.from pour gérer correctement les caractères Unicode
      const characters = Array.from(fullText);
      setDisplayedText(characters.slice(0, indexRef.current + 1).join(''));
      indexRef.current += 1;
      gsap.delayedCall(0.02, typeText);
    }
  };
  return (
    <div ref={ref} id='About' className='  py-12 px-4 max-w-7xl mx-auto pt-[180px]  flex flex-col  space-y-20'>
         <div className="title flex items-center space-x-3">
        <TfiLayoutLineSolid size={'40px'} color="#0044ff" />
        <h1
          className="uppercase text-3xl font-bold text-[#0044ff]"
          
        >
          présentation de Clinique les Sources
        </h1>
      </div> 
      <div className=' flex flex-col gap-3 lg:justify-between lg:flex-row'>
        <div className="text-lg font-light whitespace-pre-wrap leading-relaxed w-full lg:w-2/3 ">
          {displayedText}
          <span className="inline-block w-[2px] h-[20px] bg-black animate-pulse ml-1 align-middle" />
        </div>
        <Image src="/assets/clinique.png" alt="Présentation de la clinique" className=' w-full lg:w-fit  border-4 rounded-3xl' width={250} height={250} />
      </div>
      

    </div>
  )
}

export default About