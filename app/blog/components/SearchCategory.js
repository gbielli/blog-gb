import React from 'react';


const SearchCategory = ({ categories, isActive, setIsActive }) => {

    

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

    {categories.map((category, index) => (
       <button 
       onClick={() => setIsActive({isHover: true, index, title:`${category.name}`})}
       className={`${isActive.isHover && isActive.index == index ? "bg-black text-white" : "" } flex gap-3 border border-black px-10 py-4 rounded-full items-center`} key={index}>
       <span>{category.name}</span></button>
    ))}
        </div>
  )
}

export default SearchCategory