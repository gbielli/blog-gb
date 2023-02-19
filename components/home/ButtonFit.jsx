import React from 'react'
import Link from 'next/link'

const ButtonFit = ({ text, onClick }) => {
  return (
    <>
      <a href='/#title' className="form-button inline-block px-10 py-3 bg-primary text-center relative cursor-pointer my-5">
          <span className='text-white font-mulish'>{text}</span>
          <span className="border-4 border-primary absolute block w-full h-full left-[8px] top-[8px]"></span>
      </a>
    </>
  )
}

export default ButtonFit