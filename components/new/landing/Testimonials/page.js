import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from './animation';
import Image from 'next/image';


const testimonial = [
    {
        prenom:"Sebastien Bonnefis",
        poste:"CEO @Yose",
        img: "seb-avatar.png",
        avis:"J'ai eu le plaisir de travailler avec Guillaume sur plusieurs missions. Son investissement, sa rigueur et sa qualité de travail ont été des atouts majeurs dans la réussite de ces divers projets. Son enthousiasme au quotidien permet de travailler sérieusement dans une atmosphère très agréable.",
        tag: ["UX/UI", "Analytics"],
        date:"2023"
        
    },
    {
        prenom:"Cindy Tardres",
        poste:"Freelance",
        img: "cindy-avatar.png",
        avis:"J’ai eu la chance de travailler avec Guillaume pendant plus d’un an. Ses qualités de formateur, sa rigueur et sa curiosité font de lui un excellent expert dans son domaine de prédilection, la data analyse et le tracking de données. Collaborer avec lui est une véritable chance de voir ses projets se concrétiser efficacement et dans la bonne humeur.",
        tag: ["UX/UI", "Acquisition"],
        date:"2023"
    },
    {
        prenom:"Maeva ",
        poste:"Mypangee",
        img: "maeva-avtr.png",
        avis:"Ayant travaillé avec Guillaume quelques années je ne peux que recommander sa force d'esprit au sein d'une entreprise. Guillaume est talentueux dans son domaine, il a un réel esprit d'équipe, c'est une personne investit et dynamique. Il a été une réelle clé de voûte au sein de notre entreprise et je le remercie pour nos nombreuses collaborations.",
        tag: ["Automation", "UX/UI"],
        date:"2022"
    },
]

const Testimonials = () => {
  return (
    <div className='px-10 mb-40 h-full' >
    <div className=" font-clash text-4xl mb-20">
        <h2>On a travaillé ensemble</h2>
    </div>

    
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 '>
    {testimonial.map((avis, index) => {
                return (
   <motion.div variants={fadeIn} custom={index} viewport={{ once: true }} initial="initial" whileInView="enter" className="card border border-black-2 rounded-3xl w-full flex flex-col xl:h-[470px]" key={index}>
        <div className="name flex items-center gap-3 px-5 py-6 mb-5">
            <Image src={`/image/${avis.img}`} width={70} height={70}/>
            <div>
            <p className='font-bold'>{avis.prenom}</p>
            <p className=' text-[#808080]'>{avis.poste}</p>
            
            </div>
        </div>
        <div className="testimonial px-5 mb-10">
            <p>{avis.avis}</p>
        </div>
        
        <div className='flex flex-col h-full justify-end'>
        <div className='bg-[#d4d4d4] h-[1px] mx-5'></div>
        <div className='px-5 py-6 flex justify-between items-center'>
            <div className='flex self-end gap-3'>
                {avis.tag.map((tag, index) => {
                    return  <span key={index} className='border-black border px-6 py-2 rounded-full'>{tag}</span>
                })}
            </div>
            <div>
                <p className='text-[#808080]'>{avis.date}</p>
            </div>
            </div>
        </div>


   </motion.div>
                )
            })}

</div>
   </div>

  )
}

export default Testimonials