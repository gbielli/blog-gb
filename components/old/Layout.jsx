import React from 'react';
import { Header } from './list';
import { Footer } from './list';


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

