'use client'
import React from 'react'
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const Team = () => {
  const testimonials = [
    {
      quote:
        "Dr. Martin's expertise and compassion made my recovery smooth and reassuring. Highly recommended for anyone seeking quality care.",
      name: "Dr. Alice Martin",
      designation: "Cardiologist",
      src: "assets/doctor1.jpg",
    },
    {
      quote:
        "Dr. Singh's attention to detail and patient-centered approach truly set him apart. I felt heard and cared for throughout my treatment.",
      name: "Dr. Raj Singh",
      designation: "Orthopedic Surgeon",
      src: "assets/doctor2.jpg",
    },
    {
      quote:
        "Dr. Lopez combines professionalism with genuine empathy. Her guidance was invaluable during a challenging time.",
      name: "Dr. Maria Lopez",
      designation: "Pediatrician",
      src: "assets/doctor3.jpg",
    }
  ];
  return(
    <div className=' flex flex-col'>
      <h1 className=' self-center text-4xl text-[#0044ff] font-bold uppercase'>Decouvrit notre equipe</h1>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  )
}

export default Team