"use client";

import React, { useRef } from "react";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Statistic = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const yearRef = useRef<HTMLParagraphElement | null>(null);
  const patientsRef = useRef<HTMLParagraphElement | null>(null);
  const satisfactionRef = useRef<HTMLParagraphElement | null>(null);

  useGSAP(() => {
    // Animation du titre
    gsap.from(".statistictitle", {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
    });

    // Animation carte globale
    gsap.from(".stats-card", {
      opacity: 0,
      scale: 0.9,
      duration: 1.5,
      ease: "back.out(3)",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
    });

    gsap.from('.imageBanner',{
      opacity:0,
      scale:1.5,
      duration:1,
      ease:'back.out(1.7)',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
    })

    // Fonction pour animer un chiffre
    const animateNumber = (
      ref: React.RefObject<HTMLParagraphElement |null>,
      endValue: number,
      suffix: string = "",
      duration: number = 2
    ) => {
      const obj = { value: 0 };
      return gsap.to(obj, {
        value: endValue,
        duration,
        ease: "power3.out",
        onUpdate: () => {
          if (ref.current) {
            ref.current.innerText = Math.floor(obj.value) + suffix;
          }
        },
      });
    };

    // Timeline séquentielle pour les chiffres
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    tl.add(animateNumber(yearRef, 2010, "", 1.5)) // Depuis
      .add(animateNumber(patientsRef, 5000, "", 2), "+=0.3") // Patients
      .add(animateNumber(satisfactionRef, 95, "%", 1.5), "+=0.3"); // Satisfaction
  }, []);

  return (
    <div
      ref={sectionRef}
      id="statistic"
      className="pt-[180px] py-12 px-4 max-w-7xl mx-auto flex flex-col gap-4"
    >
      {/* Titre */}
      <div className="statistictitle flex items-center gap-4 mb-8">
        <TfiLayoutLineSolid size={40} color="#0044ff" />
        <h1 className="uppercase text-2xl md:text-3xl font-bold text-[#0044ff]">
          Statistics
        </h1>
      </div>


      <div className=" flex gap-5 justify-between ">
        <div className="  imageBanner flex w-1/2">
          <img src="assets/medical-banner.webp" className="hover:scale-110 transition-transform  h-[70%]   object-cover shadow-2xl rounded-2xl  " alt="" />


        </div>



        {/* Carte stats */}
    <div className="stats-card w-1/2 shadow-2xl bg-white rounded-2xl py-6 px-4 md:px-10 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 h-auto md:h-[300px]">
        {/* Bloc 1 */}  
        <div className="w-1/3 flex flex-col items-center space-y-4">
          <p className="text-3xl font-bold h-[70px] text-center ">Depuis</p>
          <p
            ref={yearRef}
            className="w-full flex justify-center items-center h-20 text-3xl text-white font-medium bg-black/60 rounded-xl p-1 backdrop-blur-sm shadow-md hover:scale-120 transition-transform "
          >
            0
          </p>
        </div>

        {/* Bloc 2 */}
        <div className="w-1/3 flex flex-col items-center space-y-4">
          <p className="text-3xl text-center font-bold h-[70px]">Patients traités</p>
          <p
            ref={patientsRef}
            className="hover:scale-120 transition-transform  font-medium w-full flex justify-center items-center h-20 text-3xl text-white  bg-black/60 rounded-xl p-1 backdrop-blur-sm shadow-md"
          >
            0
          </p>
        </div>

        {/* Bloc 3 */}
        <div className="w-1/3 flex flex-col items-center space-y-4">
          <p className="text-3xl text-center font-bold h-[70px]">Taux de satisfaction</p>
          <p
            ref={satisfactionRef}
            className="hover:scale-120 transition-transform  w-full flex justify-center items-center h-20 text-3xl text-white font-medium bg-black/60 rounded-xl p-1 backdrop-blur-sm shadow-md"
          >
            0%
          </p>
        </div>
      </div>

      </div>
      
    </div>
  );
};

export default Statistic;
