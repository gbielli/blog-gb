import React from 'react'

const AboutItem = (props) => {
  return (
    <div className='flex flex-col'>
        <span className='self-center text-4xl font-mulish font-bold'>{props.number}</span>
        <span className='self-center font-mulish'>{props.subtitle}</span>
    </div>
  )
}

export default AboutItem