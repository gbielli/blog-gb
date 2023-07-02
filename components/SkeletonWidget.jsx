import React from 'react'

const SkeletonWidget = () => {
  return (
    <div className='container mx-auto mb-8 animate-pulse '>
      <h3 className='h-10 w-3/12 text-3xl mt-20 mb-6 font-semibold bg-gray-300'></h3>
    <div className='h-[500px] w-full animate-pulse bg-gray-300'>
    </div>
    </div>
  )
}

export default SkeletonWidget