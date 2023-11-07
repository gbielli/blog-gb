'use client'
import React from 'react';
import LocomotiveScroll from '../utils/LocomotiveScroll';
import Image from 'next/image';
import {motion} from 'framer-motion'

const page = () => {
  return (
    <LocomotiveScroll>
    <div className='pt-20 px-6'>
    <div className=' text-[10vw] leading-[10vw] font-clash'>Parcours client<span className='block'>Mypangee®</span></div>
    <p className='text-2xl max-w-xl pt-10'>Refont complète du parcours client web de Mypangee, qui propose un parcours intégré par API en marque blanche sur les sites e-commerce de ses clients.</p>
        <div class="tag mt-10 flex gap-3">
            <p className='border-black border px-6 py-2 rounded-full inline-block text-xl'>UX/UI</p>
            <p className='border-black border px-6 py-2 rounded-full inline-block text-xl'>Analytics</p>
        </div>
        {/* <div className='h-[1px] bg-[#d4d4d4] w-full mt-20'></div> */}

        <div className='mt-20'>
            <div className='flex justify-between mb-5'>
                <p className='text-xl'>Parcours web</p>
                <p className='text-xl'>2023</p>
            </div>


        <motion.div initial={{y:"70px", opacity:0}} animate={{y:"0", opacity:1, transition: {duration: 1, ease: [0.83, 0, 0.17, 1]}}} className='w-full'>
            <Image className='rounded-xl' src={"/image/test.webp"} width={1920} height={300}/>
        </motion.div>
            
        </div>

    </div>
</LocomotiveScroll>
  )
}

export default page