'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import { TfiLayoutLineSolid } from "react-icons/tfi";

const Services = () => {
const services = [
    {
        title: 'Gyneco-obstetrique',
        description: 'Nous avons des spécialistes en cardiologie, dermatologie et pédiatrie.',
        image: 'assets/service1.jpg',
    },
    {
        title: 'Maternite',
        description: 'Nous utilisons des technologies de pointe pour garantir votre santé.',
        image: 'assets/service2.jpg',
    },
    {
        title: 'Pediatrie',
        description: 'Notre équipe est composée de professionnels passionnés et qualifiés.',
        image: 'assets/service3.jpg',
    },
    {
        title: 'Neonatalogie',
        description: "Prise en charge spécialisée des nouveau-nés, soins intensifs et suivi médical pour assurer le meilleur départ dans la vie.",
        image: 'assets/service4.jpg',
    },
    {
        title: "Laboratoire d'analyse medicales",
        description: "Analyses médicales précises et rapides, incluant biologie, hématologie et microbiologie pour un diagnostic fiable.",
        image: 'assets/service5.jpg',
    },
    {
        title: 'Chirurgie',
        description: "Interventions chirurgicales réalisées par des experts, avec équipements modernes et suivi post-opératoire personnalisé.",
        image: 'assets/service6.jpg',
    },
]
const ref = useRef(null)    
 useGSAP(() => {
    gsap.from('.servicetitle', {
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
  

  return (
    <div ref={ref} id='Services' className=" pt-[180px]  py-12 px-4 max-w-7xl mx-auto flex flex-col gap-8">
        <div className="servicetitle flex items-center gap-4 mb-8">
            <TfiLayoutLineSolid size={40} color="#0044ff" />
            <h1 className="uppercase text-2xl md:text-3xl font-bold text-[#0044ff]">
                Découvrez nos services médicaux de qualité
            </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, id) => (
                <div
                    key={id}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-transform  hover:-translate-y-2 hover:border-4 hover:border-[#0044ff] p-6 flex flex-col items-center text-center"
                >
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-40 h-40 object-cover rounded-2xl   mb-4 border-2 border-[#0044ff]"
                    />
                    <h2 className="text-xl font-semibold text-[#0044ff] mb-2">{item.title}</h2>
                    <p className="text-gray-600">{item.description}</p>
                </div>
            ))}
        </div>
    </div>

    
  )
}

export default Services