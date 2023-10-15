'use client';

import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';


const slider1 = [
  {
      color: "#e3e5e7",
      src: "c2.jpg"
  },
  {
      color: "#d6d7dc",
      src: "decimal.jpg"
  },
  {
      color: "#e3e3e3",
      src: "funny.jpg"
  },
  {
      color: "#21242b",
      src: "google.jpg"
  }
]

const slider2 = [
  {
      color: "#d4e3ec",
      src: "maven.jpg"
  },
  {
      color: "#e5e0e1",
      src: "panda.jpg"
  },
  {
      color: "#d7d4cf",
      src: "powell.jpg"
  },
  {
      color: "#e1dad6",
      src: "wix.jpg"
  }
]

const Slider = () => {
  const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])

    return (
        <div ref={container} className='w-full md:flex flex-col gap-10 relative pt-40 bg-grey overflow-hidden'>
            <motion.div style={{x: x1}} className='flex relative gap-10 left-[-10vw] w-[150vw]'>
                    {
                        slider1.map( (project, index) => {
                            return <div key={index} className='w-[40vw] h-[20vw] flex items-center justify-center' style={{backgroundColor: project.color}} >
                                <div className='relative w-3/4 h-3/4'>
                             
                                    <Image 
                                    fill={true}
                                    alt={`image ${index}`}
                                    src={`/image/${project.src}`}
                                    sizes="100vw"
                                    className='object-cover'/>
                                </div>
                            </div>
                        })
                    }
                </motion.div>
                <motion.div style={{x: x2}} className='flex relative gap-10 left-[-10vw] w-[150vw]'>
                    {
                        slider2.map( (project, index) => {
                            return <div key={index} className='w-[40vw] h-[20vw] flex items-center justify-center' style={{backgroundColor: project.color}} >
                                <div key={index} className='relative w-3/4 h-3/4'>
                                    <Image 
                                    fill={true}
                                    alt={`image ${index}`}
                                    src={`/image/${project.src}`}
                                    sizes="100vw"
                                    className='object-cover'/>
                                </div>
                            </div>
                        })
                    }
                </motion.div>
        </div>
    )
}

export default Slider