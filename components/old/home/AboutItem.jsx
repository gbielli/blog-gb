import React from 'react'

const AboutItem = (props) => {
  return (
    <div className='flex flex-col'>
        <span className='self-center text-4xl font-mulish font-bold text-center'>{props.number}</span>
        <span className='self-center font-mulish text-center'>{props.subtitle}</span>
    </div>
  )
}

export default AboutItem