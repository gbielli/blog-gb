import React from 'react';
import { Header } from './';
import { Footer } from './';
import { useState } from 'react';


const  Layout  = ({ children }) => {

  return (
    <div className="relative">
    <Header  />
    <main>{children}</main>
    <Footer />
    </div>
  )
}

export default  Layout

