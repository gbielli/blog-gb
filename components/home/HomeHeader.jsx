import React from 'react'

const HomeHeader = () => {
  return (
      <section className="home_container bg-secondary">
        <div className="container mx-auto home_content grid grid-cols-9 py-20">
        <div className='home_data col-span-4 self-center'>
            <h1 className='text-5xl font-abril font-bold'>Hé, <span id='underline'>c'est Guillaume</span></h1>
            <h3 className='text-xl font-mulish'>Growth Hacker</h3>
            <p className='font-mulish'>Passionné par le web avec quatre années d'expérience dans le digital, le produit, le web analytics et l'experience utilisateur.</p>
          </div>
          <div className='home_img col-span-4 self-center justify-self-end'>
          {/* npm */}
          </div>
          <div className='home_social justify-self-end self-center'>
            <img src="https://via.placeholder.com/24x30" alt="" />
          </div>
        </div>
      </section>
    
  )
}

export default HomeHeader

