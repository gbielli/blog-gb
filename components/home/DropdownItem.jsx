import React from 'react'
import Image from 'next/image';

const DropdownItem = ({ src, title, percentage }) => {

  return (
    <div className=''>
        <div className='mb-2'>
            <div className="title flex items-center gap-2 font-mulish font-semibold text-md">
                <div className='w-[30px] h-[30px]'>
                <Image className='w-full h-full object-contain' sizes='100vw' src={src} alt={title} width="0" height="0" />
                  </div>
                <h3>{title}</h3>
                <span className='ml-auto'>{percentage}</span>
            </div>
        </div>
        <div className='bg-secondary h-[8px] rounded-lg'>
          <div className={`bg-primary h-[8px] rounded-lg`}  style={{width:`${percentage}`}}>
          </div>
              
        </div>
    </div>
  )
}

export default DropdownItem