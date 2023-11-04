'use client'

import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Message from '../../../../public/image/message.svg';
import Phone from '../../../../public/image/phone.svg'
import Avatar from '../../../../public/image/gb-avatar.png'
import {animation} from './animation'

const Footer = () => {


  return (
    <div  className=' bg-black rounded-3xl relative md:mx-5 md:my-5'>
      <div className="bloc flex flex-col gap-5  px-10 py-5 mx-auto h-full justify-between">

        <div className='flex flex-col gap-10 pt-20'>
        <div className="title-footer flex gap-3 relative">
          <div className='image absolute md:top-0' >
          <Image className='object-cover w-[60px] md:w-[80px]' src={Avatar} alt="Avatar" width={80} height={80} />
          </div>

          <div className='indent-[70px] md:indent-[100px]'>
          <h2 className='footer-text font-clash text-white lg:w-3/4 xl:w-3/5  lg:leading-[72px]'>Et si on prenait le temps de se connaître ou de partager un café ?</h2>

          </div>
        </div>
      
        <div className='button text-white flex flex-wrap gap-5 mb-20 md:mb-40'>
          <a className='flex gap-3 border border-white px-10 py-5 rounded-full'
          href='mailto:guillaume.bielli@gmail.com'>
          <Image src={Message} alt="icone message" />
          <span>guillaume.bielli@gmail.com</span></a>
          <a className='flex gap-3 border border-white px-10 py-5 rounded-full'
          href='tel:0622895608'>
          <Image src={Phone} alt="icone téléphone" />
          <span>0622895608</span></a>
        </div>
        </div>
        <div className="link w-full text-white flex-col justify-between">
          
      
  
          <div className='w-full h-[0.5px] bg-white mx-auto mb-5 relative'>
          {/* <motion.div style={{ x }} className='h-6 w-6 bg-[#306bfdff] rounded-full absolute -top-[12px]'></motion.div> */}
          </div>

        


        <div className='flex justify-between'>
        <div>
          <p href="">©2023 - Guillaume Bielli</p>
          </div>
          <div className='flex gap-5'>
          <a className="relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:rounded-full after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left" href="https://www.linkedin.com/in/guillaume-bielli/">Linkedin</a>
        <a className="relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:rounded-full after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left" href="https://github.com/gbielli?tab=repositories">Github</a>
          </div>
        </div>
        
   
      

        </div>
      </div>
    </div>
  )
}

export default Footer