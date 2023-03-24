import React from 'react';
import { Header } from './';
import { Footer } from './';
import { useState } from 'react';
import { Form } from './';


const  Layout  = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault()
    {isOpen ? setIsOpen(false) : setIsOpen(true)}
  }

  return (
    <div className="relative">
      {isOpen ? 
    <div className='h-full w-screen mx-auto absolute'>
      <Form close={handleClick} />
    </div> : 
    <></>}
    <Header click={handleClick} />
    
    <main>{children}</main>
    <Footer />
    </div>
  )
}

export default  Layout

