'use client'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { animation } from './animation'



export default function MaskText() {

  const phrase2 = "Le marketing créé des tickets, Les développeurs débordés les réaliseront dans 6 mois. Et si on changeait la donne ?"

 const phrase = "Un développeur manque souvent de sensibilité marketing, et un marketeur manque souvent de connaissance en développement web. J'ai décidé de faire les deux."


    const { ref, inView, entry } = useInView({
      threshold: 0.75,
      triggerOnce: true
    });
  
    return(
        <section className='bg-grey block mt-10'>

      <div className='xl:w-2/4  md:w-4/5 w-full px-8 leading-10'>

     <h4 ref={ref} className="overflow-hidden">
      {
      phrase.split(" ").map((word, index) => {
    return <span className='overflow-hidden relative inline-flex gap-2' key={index}><motion.span className="block relative mr-1 text-4xl" custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""}>{word}</motion.span></span>

        })
        }

    </h4>
    </div>
      </section>
    )
  }