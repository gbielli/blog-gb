import React from 'react'
import { useState } from 'react'
import SkillDetail from './SkillDetail'

const items = [{}]


// const carret = <svg className="carret carret-active" id="carret" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" points="208 96 128 176 48 96"></polyline></svg>

const Dropdown = ({title, subtitle, children}) => {


    const [showDropdown, setShowDropdown] = useState(false)

    const handleDropdown = () => {
        if(showDropdown === false){
            setShowDropdown(true);
        } else {
            setShowDropdown(false)
        }
    }

  return (
    <div>
        <div className=''>
            <div className='flex items-center'>
                <div className='flex flex-col cursor-pointer select-none' onClick={handleDropdown} >
                    <h1 className='text-2xl font-bold font-abril'>{title}</h1>
                    <span className='font-mulish'>{subtitle}</span>
                </div>
                {/* {showDropdown ?
                <span className='w-[32px] ml-auto rotate-180 transition ease-in-out delay-20'>{carret}</span> : 
                <span className='w-[32px] ml-auto rotate-0 transition ease-in-out delay-20'>{carret}</span>} */}

            </div>
            {showDropdown &&
            (<div className="flex flex-col gap-4">{children}</div>)
            }            
        </div>
    </div>
  )
}

export default Dropdown