'use client'

import React, {useEffect, useState } from "react";
import Hero from '@/components/new/landing/Hero/page';
import MaskText from '@/components/new/landing/Mask/page';
import Slider from '@/components/new/landing/Slider/page';
import Skill from '@/components/new/landing/Skill/page';



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
            </div>
        </>
    )
}