'use client'
import React, { useState } from 'react'


const navItems = [
  {
      title: "Tous",
      href: "/apropos"
  },
  {
      title: "Matomo",
      href: "/blog"
  },
  {
      title: "Web Analytics",
      href: "/contact"
  },
  {
    title: "Automation",
    href: "/contact"
},
{
  title: "Google Tag Manager",
  href: "/contact"
},
{
  title: "Piwik Pro",
  href: "/contact"
}
]

const BlogTitle = () => {

  const [isActive, setIsActive] = useState({isHover: true, index:0})

  
  return (
 <>
<section className='pt-20 px-6'>
    <div className=' text-[12vw] leading-[10vw] font-clash'>Mes articles<span className='block'>& tutoriels</span></div>
    <p className='text-2xl max-w-xl pt-10'>Passionné par le web depuis longtemps, J&apos;explore et je vous partage mes expériences sur l&apos;Acquisition, le Web Analytics et l&apos;Automation.</p>
    <div className='h-[1px] bg-[#d4d4d4] w-full mt-20'></div>
    <div className='button text-black flex flex-wrap gap-5 mb-10 md:mb-10 mt-10'>
    {navItems.map((item, index) => (
       <button 
       onClick={() => setIsActive({isHover: true, index})}
       className={`${isActive.isHover && isActive.index == index ? "bg-black text-white" : "" } flex gap-3 border border-black px-10 py-4 rounded-full items-center`} key={index}>
       <span>{item.title}</span></button>
    ))}
        </div>
</section>
</>
  )
}

export default BlogTitle