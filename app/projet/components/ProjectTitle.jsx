import React from 'react'
import {motion} from 'framer-motion';


export const animation = {
    initial: {y: "100%"},
    enter: i => ({y: "0", transition: {duration: 0.75, ease: [0.85, 0, 0.15, 1],  delay: 0.095 * i}})
  }

export const opacity = {
    initial:{opacity:0},
    enter:{opacity:1,transition:{duration:0.4, delay:0.65}}
}

  const text = ["Parcours client", "Mypangee®"]

const ProjectTitle = () => {
  return (
    <div>
        {
      text.map((word, index) => {
    return <span className='overflow-hidden relative inline-flex leading-[17vw]' key={index}><motion.span className="text-[10vw] font-clash text-black leading-[10vw]" custom={index} variants={animation} initial="initial" whileInView={"enter"} viewport={{ once: true }} style={{ display: "inline-block" }}>{word} {index < word.length - 1 && <span>&nbsp;</span>} </motion.span></span>
            
        })
        }
    <motion.p variants={opacity} initial="initial" animate={"enter"} className='text-2xl max-w-xl pt-10'>Refont complète du parcours client web de Mypangee, qui propose un parcours intégré par API en marque blanche sur les sites e-commerce de ses clients.</motion.p>
        <motion.div initial={{y:"70%", opacity:0}} animate={{y:0, opacity:1, transition: {duration: 1, ease: [0.83, 0, 0.17, 1], delay:0.4}}} className="tag mt-10 flex gap-3">
      
            <p className='border-black border px-6 py-2 rounded-full inline-block text-xl'>UX/UI</p>
            <p className='border-black border px-6 py-2 rounded-full inline-block text-xl'>Analytics</p>
        </motion.div>
        {/* <div className='h-[1px] bg-[#d4d4d4] w-full mt-20'></div> */}

        <div className='mt-20'>
            <div className='overflow-hidden mb-5'>
            <motion.div initial={{y:"100%"}} animate={{y:0, transition:{delay:1, ease: [0.83, 0, 0.17, 1], duration:0.8}}} className='flex justify-between relative'>
                <div className='text-xl'>
                    <p>Parcours web</p>
                    </div>
                <div className='text-xl'>
                <p>2023</p>
                </div>
            </motion.div>
            </div>
    </div>
    </div>
  )
}

export default ProjectTitle