import React from 'react'

const SkeletonCard = () => {
    return (
      <>
       <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-rows-articles lg:grid-cols-1 gap-2 animate-pulse'>
      <div className='overflow-hidden h-[250px] bg-gray-300'>
      </div>
      <div>
      <div className='h-6 w-12/12 mb-2 rounded-md border-primary mr-3 font-mulish text-primary hover:no-underline text-md bg-gray-300'></div>
      <div className='h-6 w-6/12 mb-2 rounded-md border-primary mr-3 font-mulish text-primary hover:no-underline text-md bg-gray-300'></div>



     

      </div>
      
    </div>
      </>
    );
  };

  export default SkeletonCard;