import React from 'react'

const DropdownItem = ({src, title, percentage}) => {

  return (
    <div className=''>
        <div>
            <div className="title flex items-center gap-2">
                <img src={src} alt="" />
                <h3>{title}</h3>
                <span className='ml-auto'>{percentage}</span>
            </div>
        </div>
        <div className='block bg-secondary h-[8px]'>
                <span className={`block bg-primary h-[8px] w-[${percentage}]`}>
                </span>
        </div>
    </div>
  )
}

export default DropdownItem