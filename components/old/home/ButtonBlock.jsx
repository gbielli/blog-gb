import React from 'react'

const Button = ({ text, type }) => {
  return (
    <>
      <button type={type} className="submit form-button block px-2 py-3 bg-primary text-center relative cursor-pointer my-5 w-full">
          <span className='text-white font-mulish'>{text}</span>
          <span className="border-4 border-primary absolute block w-full h-full left-[8px] top-[8px]"></span>
      </button>
    </>
)
}

export default Button