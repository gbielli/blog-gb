'use client'

import React, {useEffect} from "react";
import Head from "next/head";
import Hero from '@/components/new/landing/Hero/page';
import MaskText from '@/components/new/landing/Mask/page';
import Slider from '@/components/new/landing/Slider/page';
import Skill from '@/components/new/landing/Skill/page';





export default function Home() {

    // useEffect( () => {
        
    //     const initializeLocomotiveScroll = async () => {
    //         if (typeof window !== 'undefined') {
    //       const LocomotiveScroll = (await import('locomotive-scroll')).default;
    //       const locomotiveScroll = new LocomotiveScroll();
    //         }
    //     }
    //     initializeLocomotiveScroll(); 
      
    //   }, [])

    // useEffect(() => {
    //     let scroll
    //     import("locomotive-scroll").then((locomotiveModule) => {
    //       scroll = new locomotiveModule.default();
    //     });
    
    //    // cleanup phase
    //     return () => {
    //       if (scroll) scroll.destroy();
    //     };
    //   },[]);


      useEffect(() => {
        (
       async () => {
        const LocomotiveScroll = ((await import('locomotive-scroll')).default)
        const locomotiveScroll = new LocomotiveScroll({
            smooth: true,
            tablet: {
              breakpoint: 0, 
            }
        })
       }
       )()
      },[]);





    return (
        <>
            <Head>
                <title>Guillaume Bielli | Growth Hacker & Frontend Lover</title>
                <link rel="icon" href="/image/gbico.ico" />
            </Head>
            <div>
            <Hero />
            <MaskText />
            <Slider />
            <Skill />
            </div>
        </>
    )
}
