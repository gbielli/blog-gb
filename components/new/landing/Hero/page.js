'use client';

import React, { useRef, useLayoutEffect } from 'react';
import ReactCurvedText from 'react-curved-text';
import Image from 'next/image';
import arrow from '@/public/image/arrow.svg'
import { motion } from 'framer-motion';
import { ScrollTrigger } from 'gsap/all';
import {animation, fadeIn} from './animation';
import { gsap } from 'gsap';

const Hero = () => {



  const textAnimation = useRef(null);
  let xPercent = 0;
  let direction = 5;

  useLayoutEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(textAnimation.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -5
      }})
    requestAnimationFrame(animate);
  })

  const animate = () => {
    gsap.set(textAnimation.current, {rotate: xPercent})
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }


  const text = ["Digital", "worker" ];




  return (
    <>

      <div className='flex items-center bg-grey' data-scroll-container >

        <div className='px-6 mt-10 w-full text-gray-200 flex flex-col items-center flex-1 gap-20' >

          <div className='img self-start relative'>
            <Image
            priority
            src={arrow}
            alt='arrow'
            className='w-[30px] h-[30px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/>
            <div ref={textAnimation}>
            <ReactCurvedText
            width={140}
            height={140}
            cx={70}
            cy={70}
            rx={60}
            ry={60}
            startOffset={20}
            reversed={false}
            text="- digital specialist - digital specialist"
            textProps={{ style: { fontSize: 23 } }}
            textPathProps={null}
            tspanProps={null}
            ellipseProps={null}
            svgProps={null}
            className="absolute bottom-0"
        />
        </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 mx-auto gap-10'>

          <h1 className="col-span-2 w-full">
      {
      text.map((word, index) => {
    return <span className='overflow-hidden relative inline-flex leading-[17vw]' key={index}><motion.span className="text-[24vw] md:text-[17vw] font-clash text-black md:leading-[17vw] leading-[24vw]" custom={index} variants={animation} initial="initial" animate='enter' viewport={{ once: true }} style={{ display: "inline-block" }}>{word}</motion.span></span>
            
        })
        }
    </h1>
            <div className='col col-span-1 self-end max-w-xs overflow-hidden relative'>
              <motion.p className='text-[16px]  text-black pb-5 lg:pb-10' variants={fadeIn} initial="initial" whileInView={"enter"} viewport={{ once: true }}>J&apos;aide les entreprises à développer l&apos;acquisition client et à construire une expérience utilisateur hors norme.</motion.p>
              </div>
          </div>

        </div>
      </div>
    </>

  )

}

export default Hero