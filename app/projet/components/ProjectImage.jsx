'use client';

import React from 'react';
import {motion} from 'framer-motion';
import Image from 'next/image';

const ProjectImage = () => {
  return (
    <div>
         <motion.div initial={{y:"70px", opacity:0}} animate={{y:"0", opacity:1, transition: {duration: 1, ease: [0.83, 0, 0.17, 1]}}} className='w-full'>
            <Image className='rounded-xl' src={"/image/test.webp"} width={1920} height={300}/>
        </motion.div>
    </div>
  )
}

export default ProjectImage