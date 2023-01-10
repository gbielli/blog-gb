import React from 'react'

const DropdownItem = ({src, title, percentage, classs}) => {
  return (
    <div>
        <div>
            <div className="title flex items-center gap-2">
                <img src={src} alt="" />
                <h3>{title}</h3>
                <span className='ml-auto'>{percentage}</span>
            </div>
        </div>
        <div className='bg-secondary block h-[8px]'>
                <span className={classs}>

                </span>
        </div>
    </div>
  )
}

export default DropdownItem