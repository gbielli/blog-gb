'use client'

import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { buttonSlide } from './anim';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import {animation} from './anim'
import { useRef } from 'react';


const skillItem = [
    {
        title: "Acquisition client",
        description: "Je développe votre stratégie SEO et SEA avec une logique data-driven."
    },
    {
        title: "User experience",
        description: "Je vous accompagne sur le plan créatif et technique pour développer une expérience utilisateur mémorable."
    },
    {
        title: "Web Analytics",
        description: "Je mets en place un suivi utilisateurs first party avec des outils RGPD compliant comme Matomo ou Piwik Pro."
    },
    {
        title: "Automation",
        description: "J'automatise des tâches et je connecte vos outils pour maximiser le ROI."
    }
  ]

const Skill = () => {

    const [isHover, setIsHover] = useState(false);
    const [isActive, setIsActive] = useState(false);    

    const { ref, inView } = useInView({
        threshold: 0.75,
        triggerOnce: true,
        amount:0,
      });

    const handleHover = () => {
        setIsHover(true)
    }

    const handleLeave = () => {
        setIsHover(false)
    }



  return (
    <section className='py-40 px-2 md:px-20 z-1 relative'  >
        <div className=''>
            <div>
            <h2 className='font-archivo text-xl text-[#808080]'>Je peux vous aider sur ...</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 mt-10" >

                {skillItem.map((skill, index) => {
                    return (
                        <div className="border-b border-t border-[#d4d4d4]" key={index}>
                
                <div  className='item font-archivo flex items-center justify-between my-[3.5rem] overflow-hidden w-full' >
                <motion.div variants={animation} initial="initial" custom={index} whileInView={"enter"} viewport={{ once: true}} className='flex items-center md:gap-10 h-full flex-col md:flex-row md:text-left w-full' >
                    <div className="title flex w-full" >
                    <h3 className='font-skills text-[55px] font-clash pb-4 relative'>{skill.title}</h3>
                    <div className='font-archivo text-[#c3c4c9] text-sm font-normal ml-1 translate-y-3'>0{index+1}</div>
                    </div>
                    <p className='md:w-2/3'>{skill.description}</p>
                    </motion.div>
                </div>
            </div>
                    )
                })}

            {/* <div ref={ref} className="border-b border-t border-[#d4d4d4]"
            >
                
                <div  className='item font-archivo flex items-center justify-between my-[3.5rem] overflow-hidden w-full'>
                <motion.div variants={animation} initial="initial" animate={inView ? "enter" : ""} className='flex items-center md:gap-10 h-full flex-col md:flex-row md:text-left w-full'>
                    <div className="title flex w-full" >
                    <h3 className='font-skills text-[55px] font-clash pb-4 relative'>Acquisition client</h3>
                    <div className='font-archivo text-[#c3c4c9] text-sm font-normal ml-1 translate-y-3'>01</div>
                    </div>
                    <p className='md:w-2/3'>Je développe votre stratégie SEO et SEA avec une logique data-driven.</p>
                    </motion.div>
                </div>
            </div>

                <div className="border-b border-t border-[#d4d4d4]" >
                <div className='item font-archivo flex items-center justify-between py-[3.5rem]'>
                    <div className='flex items-center md:gap-10 h-full flex-col md:flex-row md:text-left w-full'>
                    <div className="title flex w-full">
                    <h3 className='font-skills text-[55px] font-clash pb-4 relative'>User experience</h3>
                    <div className='font-archivo text-[#c3c4c9] text-sm font-normal ml-1 translate-y-3'>02</div>
                    </div>
                    <p className='md:w-2/3'>Je vous accompagne sur le plan créatif et technique pour développer une expérience utilisateur mémorable.</p>
                    </div>
                </div>
                </div>

                <div className="border-b border-t border-[#d4d4d4]">
                <div className='item font-archivo flex items-center justify-between py-[3.5rem] '>
                    <div className='flex items-center md:gap-10 h-full flex-col md:flex-row md:text-left w-full'>
                        <div className="title flex w-full">
                    <h3 className='font-skills text-[55px] font-clash pb-4 relative'>Web Analytics</h3>
                    <div className='font-archivo text-[#c3c4c9] text-sm font-normal ml-1 translate-y-3'>03</div>
                    </div>
                    <p className='md:w-2/3 '>Je mets en place un suivi utilisateurs first party avec des outils RGPD compliant comme Matomo ou Piwik Pro.</p>
                    </div>
                </div>
            </div>

                <div className="border-b border-t border-[#d4d4d4]">
                <div className='item font-archivo flex items-center justify-between py-[3.5rem] '>
                    <div className='flex items-center md:gap-10 h-full flex-col md:flex-row md:text-left w-full'>
                    <div className="title flex w-full">
                    <h3 className='font-skills text-[55px] font-clash pb-4 relative'>Automation</h3>
                    <div className='font-archivo text-[#c3c4c9] text-sm font-normal ml-1 translate-y-3'>04</div>
                    </div>
                    <p className='md:w-2/3'>J&apos;automatise des tâches et je connecte vos outils pour maximiser le ROI.</p>
                    </div>
                </div>
                </div> */}

               

            
            </div>
            <div className='mt-20 text-center' >

            <Link href="/contact">
            <button className={`border border-black px-20 py-5 rounded-full text-center relative overflow-hidden`}
              onMouseEnter={() => setIsActive(true)}
              onMouseLeave={() => setIsActive(false)}>
            <span className=' text-black'>En savoir plus</span>
            <div className='overflow-hidden flex justify-center items-center'>
            <motion.span  variants={buttonSlide} initial="initial" animate={isActive ? "enter" : "initial"} className='bg-black absolute py-5 bottom-0 w-full rounded-full text-white'>Lets go !</motion.span>
            </div>
          </button>
          </Link>    

          </div>
        </div>
        
    </section>
  )
}

export default Skill