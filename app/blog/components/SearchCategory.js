'use client'
import React, { useEffect, useState } from 'react';


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

const SearchCategory = ({ categories }) => {

    const [isActive, setIsActive] = useState({isHover: true, index:-1})
    
    



    

  return (
    <div className='button text-black flex flex-wrap gap-5 mb-10 md:mb-10 mt-10 px-6'>

        <button
        onClick={() => setIsActive({ isHover: true, index: -1 })}
        className={`${
          isActive.isHover && isActive.index === -1 ? "bg-black text-white" : ""
        } flex gap-3 border border-black px-10 py-4 rounded-full items-center`}
      >
        <span>Tous</span>
      </button>

    {categories.map((item, index) => (
       <button 
       onClick={() => setIsActive({isHover: true, index})}
       className={`${isActive.isHover && isActive.index == index ? "bg-black text-white" : "" } flex gap-3 border border-black px-10 py-4 rounded-full items-center`} key={index}>
       <span>{item.name}</span></button>
    ))}
        </div>
  )
}

export default SearchCategory