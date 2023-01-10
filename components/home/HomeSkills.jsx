import React from 'react'
import HomeTitle from './HomeTitle'
import Dropdown from './dropdown'

// const carret = <svg class="carret carret-active" id="carret" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" points="208 96 128 176 48 96"></polyline></svg>



const HomeSkills = () => {
  return (
    <div>
      <div className='container mx-auto'>
        <HomeTitle title="Mes skills" description="Mes compétences" />
        <Dropdown title="Web analytics" subtitle="Plus de 4ans" />
      </div>
    </div>
  )
}

export default HomeSkills