import React from 'react'

const ButtonFit = ({ text, onClick }) => {
  return (
    <div className="form-button inline-block px-10 py-3 bg-primary text-center relative cursor-pointer my-5">
                            <button type="submit" className="submit" onClick={onClick}>
                                <span className='text-white font-mulish'>{text}</span></button>
                            <span className="border-4 border-primary absolute block w-full h-full left-[8px] top-[8px]"></span>
                        </div>
  )
}

export default ButtonFit