'use client'
import React from 'react';
import { useEffect } from 'react';

const LocomotiveScroll = ({children}) => {

    useEffect( () => {
        const initializeLocomotiveScroll = async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default;
          const locomotiveScroll = new LocomotiveScroll();
    
        }
        initializeLocomotiveScroll(); 
      
      }, [])

  return (
    <> 
    {children}
    </>
  )
}

export default LocomotiveScroll