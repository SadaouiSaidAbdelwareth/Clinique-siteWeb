'use client'
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import ButtonUi from '../ui/button'
import { FlipWords } from "@/components/ui/flip-words"

const Hero = () => {
  const words = ["Priorité", "Confort", "Bien-être", "Innovation"]

  const heroRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        y: 80,
        opacity: 0,
        scale: 0.95,
        duration: 1.2,
        ease: "power4.out",
      })

      gsap.from(".hero-sub", {
        y: 50,
        opacity: 0,
        delay: 0.4,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(".hero-btn", {
        y: 30,
        opacity: 0,
        delay: 0.8,
        duration: 1,
        ease: "back.out(1.7)",
      })

      gsap.from(".hero-bg", {
        opacity: 0,
        scale: 1.05,
        duration: 1.5,
        ease: "power2.out",
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={heroRef}
      id="Home"
      className="relative w-full flex h-[600px] items-center"
    >
      {/* Texte */}
      <div className="flex flex-col gap-5 w-[60%] ml-20 z-10">
        <h1 className="hero-title text-7xl font-bold text-[#0044ff] drop-shadow-lg">
          Clinique Les Sources
        </h1>
        <p className="hero-sub text-3xl font-medium text-gray-800">
          Votre Santé, Notre{" "}
          <span className="text-[#0044ff] font-bold">
            <FlipWords words={words} duration={1500} />
          </span>
        </p>
        <div className="hero-btn w-[50%]">{ButtonUi("Rendez-vous", "/")}</div>
      </div>

      {/* Image Background */}
      <img
        src="/assets/home3.png"
        alt="Clinique"
        className="hero-bg absolute w-full h-full object-cover opacity-80 rounded-2xl -z-10"
      />
    </div>
  )
}

export default Hero
