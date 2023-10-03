import React from 'react'
import Head from 'next/head';
import Categories from '../Categories';


const CategoryTitle = ({ categoryName }) => {

    const capitalizeWords = (str) => {
        return str
          .toLowerCase()
          .split(' ')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      };

  return (
    <>
    <div className='bg-secondary'>
        <div className='container text-center lg:w-3/5 mx-auto pt-40 pb-40 px-6 flex flex-col gap-2'>
            <h1 className='text-4xl font-abril'>Les articles sur  <span id="underline">{capitalizeWords(categoryName)}</span></h1>
            <div className='flex flex-wrap justify-center items-center gap-3 font-mulish py-4'>
            <h2 className='px-3 py-1 text-xl md:max-w-lg font-mulish'>Découvrez tous mes conseils, mes avis et mes expériences sur {capitalizeWords(categoryName)}</h2>
            </div>
        </div>
   
</div>
</>
  )
}

export default CategoryTitle