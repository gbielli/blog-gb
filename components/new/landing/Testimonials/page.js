import React from 'react'


const testimonial = [
    {
        prenom:"Sebastien Bonnefis",
        poste:"CEO @Yose",
        img: "https://placeholder.co/70x70",
        avis:"J'ai eu le plaisir de travailler avec Guillaume sur plusieurs missions. Son investissement, sa rigueur et sa qualité de travail ont été des atouts majeurs dans la réussite de ces divers projets. Son enthousiasme au quotidien permet de travailler sérieusement dans une atmosphère très agréable.",
        tag: ["UX/UI", "Analytics"]
        
    },
    {
        prenom:"Cindy Tardres",
        poste:"Freelance",
        img: "https://placeholder.co/70x70",
        avis:"J'ai eu le plaisir de travailler avec Guillaume sur plusieurs missions. Son investissement, sa rigueur et sa qualité de travail ont été des atouts majeurs dans la réussite de ces divers projets. Son enthousiasme au quotidien permet de travailler sérieusement dans une atmosphère très agréable.",
        tag: ["UX/UI", "Acquisition"]
    }
]

const Testimonials = () => {
  return (
    <div className='px-10'>
    <div className=" font-clash text-4xl mb-10 mt-20">
        <h2>On a travaillé ensemble</h2>
    </div>

    
    <div className='flex gap-10'>
    {testimonial.map((avis, index) => {
                return (
   <div className="card border border-black-2 rounded-3xl w-1/3" key={index}>
        <div className="name flex items-center gap-3 px-5 py-6 mb-5">
            <img className='rounded-full' src='https://placeholder.co/70x70'/>
            <div>
            <p className='font-bold'>{avis.prenom}</p>
            <p className='block text-[#808080]'>{avis.poste}</p>
            
            </div>
        </div>
        <div className="testimonial px-5 mb-10">
            <p>{avis.avis}</p>
        </div>
        <div className='bg-[#d4d4d4] h-[1px] mx-5'></div>
        <div className='px-5 py-6 flex justify-between items-center'>
            <div className='flex gap-3'>
                {avis.tag.map((tag, index) => {
                    return  <span key={index} className='border-black border px-6 py-2 rounded-full'>{tag}</span>
                })}
            </div>
            <div>
                <p className='text-[#808080]'>2023</p>
            </div>
            
        </div>
   </div>
                )
            })}

</div>
   </div>

  )
}

export default Testimonials