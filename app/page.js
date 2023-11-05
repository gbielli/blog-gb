'use client'

import React, {useEffect} from "react";
import Hero from '@/components/new/landing/Hero/page';
import MaskText from '@/components/new/landing/Mask/page';
import Slider from '@/components/new/landing/Slider/page';
import Skill from '@/components/new/landing/Skill/page';
import Testimonials from '@/components/new/landing/Testimonials/page'



export default function Home() {


      useEffect(() => {

          (
            async () => {
             const LocomotiveScroll = ((await import('locomotive-scroll')).default)
             const locomotiveScroll = new LocomotiveScroll()
            }
            
            )()
      },[]);





    return (
        <>
            <div>
            <Hero />
            <MaskText />
            <Slider />
            <Skill />
            <Testimonials />
            </div>
        </>
    )
}