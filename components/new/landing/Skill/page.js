'use client'

import React, {useState} from 'react';
import arrowRight from '@/public/image/arrow-top-right.svg';
import {AnimatePresence, motion} from 'framer-motion';
import { buttonSlide } from './anim';


const Skill = () => {

    const [isHover, setIsHover] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const handleHover = () => {
        setIsHover(true)
    }

    const handleLeave = () => {
        setIsHover(false)
    }



  return (
    <section className='py-40 px-2 md:px-20 z-1 relative'>
        <div className=''>
            <div>
            <h2 className='font-archivo text-xl text-[#808080]'>Je peux vous aider sur ...</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 mt-10 cursor-pointer">

            <div className="border-b border-t border-[#d4d4d4]">
                <div className='item font-archivo flex items-center justify-between py-[3.5rem]'>
                <div className='flex items-center md:gap-10 h-full flex-col md:flex-row md:text-left w-full'>
                    <div className="title flex w-full">
                    <h3 className='font-skills text-[55px] font-clash pb-4 relative'>Acquisition client</h3>
                    <div className='font-archivo text-[#c3c4c9] text-sm font-normal ml-1 translate-y-3'>01</div>
                    </div>
                    <p className='md:w-2/3'>Je développe votre stratégie SEO et SEA avec une logique data-driven.</p>
                    </div>
                </div>
            </div>

                <div className="border-b border-t border-[#d4d4d4]">
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
                    <h3 className='font-skills text-[55px] font-clash pb-4 relative'>Automation</h3>
                    <div className='font-archivo text-[#c3c4c9] text-sm font-normal ml-1 translate-y-3'>03</div>
                    </div>
                    <p className='md:w-2/3'>J&apos;automatise des tâches et je connecte vos outils pour maximiser le ROI.</p>
                    </div>
                </div>
                </div>

                <div className="border-b border-t border-[#d4d4d4]">
                <div className='item font-archivo flex items-center justify-between py-[3.5rem] '>
                    <div className='flex items-center md:gap-10 h-full flex-col md:flex-row md:text-left w-full'>
                        <div className="title flex w-full">
                    <h3 className='font-skills text-[55px] font-clash pb-4 relative'>Web Analytics</h3>
                    <div className='font-archivo text-[#c3c4c9] text-sm font-normal ml-1 translate-y-3'>04</div>
                    </div>
                    <p className='md:w-2/3 '>Je mets en place un suivi utilisateurs first party avec des outils RGPD compliant comme Matomo ou Piwik Pro.</p>
                    </div>
                </div>
            </div>

            
            </div>
            <div className='mt-20 text-center' >
            <button className={`border border-black px-20 py-5 rounded-full text-center relative overflow-hidden`}
              onMouseEnter={() => setIsActive(true)}
              onMouseLeave={() => setIsActive(false)}>
            <span className=' text-black'>En savoir plus</span>
            <div className='overflow-hidden flex justify-center items-center'>
            <motion.span  variants={buttonSlide} initial="initial" animate={isActive ? "enter" : "initial"} className='bg-black absolute py-5 bottom-0 w-full rounded-full text-white'>Lets go !</motion.span>

            
            {/* <motion.span
            data-name={arrowRight}
            animate={isHover ? {y:-32, transition:{duration: 0.5, ease: [0.76, 0, 0.24, 1]}} : {y:0, transition:{duration: 0.5, ease: [0.76, 0, 0.24, 1]}}}
            aria-hidden
            className='inline-block mx-auto relative h-8 after:w-8 leading-8 after:absolute after:left-10 after:top-full after:leading-8 after:h-8 after:content-arrowIcon'
            >En savoir plus</motion.span> */}
            </div>
        
          </button>

          </div>
        </div>
        
    </section>
  )
}

export default Skill