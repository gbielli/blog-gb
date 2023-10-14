'use client'

import React from "react";
import Head from "next/head";
import { HomeAbout, HomePriority, HomeSkills } from "../components/old/home/list1"
import { useEffect } from "react";
import Hero from '@/components/new/landing/Hero/page';
import MaskText from '@/components/new/landing/Mask/page';
import Slider from '@/components/new/landing/Slider/page';
import Skill from '@/components/new/landing/Skill/page';
import LocomotiveScroll from "locomotive-scroll";





export default function Home() {

    // useEffect( () => {
    //     const initializeLocomotiveScroll = async () => {
    //       const LocomotiveScroll = (await import('locomotive-scroll')).default;
    //       const locomotiveScroll = new LocomotiveScroll();
    
    //     }
    //     initializeLocomotiveScroll(); 
      
    //   }, [])

    const locomotiveScroll = new LocomotiveScroll();

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
