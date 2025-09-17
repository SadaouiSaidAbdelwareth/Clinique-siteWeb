'use '
import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const Reviews = () => {

    const reviews = [
        {
            fullName:'Ayoub Raki',
            description:'Un très bon service clientèle des femmes souriant gentil et plein dénergie positif ✨️On ça vais pas que cest just pour mère et enfant il sont nous orienté vers la clinique qui peut nous idée',
            image:'assets/review1.png'

        },
        {
            fullName:'Kawther Bout',
            description:'Très très satisfaite de mon expérienceBravo à toute léquipe de la clinique vous êtes vraiment professionnel ! Surtout la gynéco de la clinique Dr Ouznadi une perle machaallah',
            image:'assets/review2.png'

        },

    ]
  return (
    <div className=' relative w-full h-[700px] flex flex-col items-center  gap-20  ' >
        <h1 className=' text-5xl text-white font-bold uppercase pt-20'>Les Patients dit quoi sur nous</h1>
        <Carousel className=' w-[80%] lg:w-1/3   '>

          <CarouselContent className=' '>
            {reviews.map((item,id) => (
                <CarouselItem key={id} >
                    <div className="p-1">
                        <Card className=' bg-transparent shadow-none border-none w- '>
                            <CardContent className="flex flex-col gap-6    justify-center p-6 bg-transparent">
                            <span className="text-xl font-extrabold text-white">{item.description}</span>
                            <div className=' p-2 w-fit flex gap-5 bg-white rounded-xl'>
                                <img src={item.image} className=' border border-black rounded-full w-15 h-15' alt="" />
                                <div className=' flex flex-col gap-2'>
                                    <span className=' font-extrabold' >{item.fullName}</span>
                                    <span className=' text-gray-500'>client satisfait</span>

                                </div>

                            </div>
                            </CardContent>
                        </Card>
                    </div>
            </CarouselItem>
            )
        
        )}
        </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
      
                    
          

        </Carousel>

        <img src="assets/man-smile.jpg" className=' h-full w-full inset-0 absolute opacity-60 -z-10 object-cover' alt="" />



        
    </div>
  )
}

export default Reviews