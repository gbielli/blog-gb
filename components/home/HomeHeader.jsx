import React from 'react'
import ButtonFit from './ButtonFit'
import Image from 'next/image'

const HomeHeader = () => {

  return (
      <section className="home_container bg-secondary">
        <div className="container px-6 mx-auto home_content grid grid-cols-header md:grid-cols-header-large py-20">
        <div className='home_data col-start-1 row-start-2 col-span-2  md:row-start-1 md:col-span-1 self-center'>
            <h1 className='lg:text-5xl text-4xl font-abril font-bold mb-1'>Hé, <span id='underline'>c'est Guillaume.</span></h1>
            <h3 className='lg:text-xl text-lg font-mulish mb-3'>Growth Hacker & Frontend Lover</h3>
            <p className='font-mulish'> Passionné par le web avec quatre années d'expérience dans le digital, le produit, le web analytics et l'experience utilisateur.</p>
            <ButtonFit text="ça m'intéresse"/>
          </div>
          <div className='home_img row-start-1 col-start-2  auto-cols-min self-center justify-self-center'>
            <svg className='block' width="auto" height="auto" viewBox="0 0 559 616" fill="#3C80F6" xmlns="http://www.w3.org/2000/svg">
              <path id="mask" fillRule="evenodd" clipRule="evenodd" d="M332.807 1.13245C461.718 10.677 502.693 161.468 537.533 285.948C566.352 388.917 577.579 507.517 492.755 572.618C402.381 641.98 278.587 620.781 184 557.283C74.6543 483.877 -26.7984 373.91 7.24251 246.686C46.0856 101.514 182.939 -9.96386 332.807 1.13245Z" fill="#3C80F6"></path>
              <mask id="mask1_202_37" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="90" y="93" width="696" height="571">
              <path id="mask" fillRule="evenodd" clipRule="evenodd" d="M332.807 1.13245C461.718 10.677 502.693 161.468 537.533 285.948C566.352 388.917 577.579 507.517 492.755 572.618C402.381 641.98 278.587 620.781 184 557.283C74.6543 483.877 -26.7984 373.91 7.24251 246.686C46.0856 101.514 182.939 -9.96386 332.807 1.13245Z" fill="#3C80F6"></path>
              </mask>
    
              <g mask="url(#mask1_202_37)">
              <image className='w-full z-10' href="/image/gb-contour.png" xlink="http://www.w3.org/1999/xlink"></image>
              </g>
            </svg>
          </div>
          <div className='col-start-3 row-start-1 w-[30px] home_social justify-self-end self-center'>
          <Image className='w-full h-auto mb-5' sizes='100vw' src='/image/linkedin.svg' alt='linkedin' width="0" height="0" />
          <Image className='w-full h-auto' sizes='100vw' src='/image/github.svg' alt='linkedin' width="0" height="0" />

          </div>
        </div>
      </section>
    
  )
}

export default HomeHeader

