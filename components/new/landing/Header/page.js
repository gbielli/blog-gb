'use client';

import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import styles from './style.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import Link from './Link/page';
import { buttonSlide } from './anim';


const Header = () => {
  

  const [isActive, setIsActive] = useState(false);
  const button = useRef(null);
  const container = useRef(null);


  useLayoutEffect( () => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(button.current, {
        scrollTrigger: {
            trigger: document.documentElement,
            start: 0,
            end: "15%",
            onLeave: () => {gsap.to(button.current, {scale: 1, duration: 0.25, ease: "power1.out"})},
            onEnterBack: () => {gsap.to(button.current, {scale: 0, duration: 0.25, ease: "power1.out"},setIsActive(false))}
        }
    })
}, [])




  return (
    <>
<div ref={container} className='menu flex justify-between w-full px-6 py-6 z-4'>
      <div className='logo'>
          <a href='/'>© Guillaume Bielli</a>
      </div>
      <div className='links flex gap-10'>
        <a className="relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:rounded-full after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"  href='/blog'>Blog</a>
        <a className="relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:rounded-full after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left" href='/contact'>Contact</a>
      </div>

      </div>

      
      <div className='flex justify-between'>
      

    <AnimatePresence mode='wait'> 
      {isActive && <Link />}
    </AnimatePresence>


<div ref={button} onClick={() => setIsActive(prev => !prev)} className={`${styles.button} ${isActive ? styles.buttonActive : ""}`}>
<motion.div variants={buttonSlide} initial="initial" animate={isActive ? "enter" : "initial"} className='bg-[#306bfd] absolute w-[80px] h-[80px] rounded-full'></motion.div>
  <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>

</div>


      </div>
      </>
  )
}

export default Header