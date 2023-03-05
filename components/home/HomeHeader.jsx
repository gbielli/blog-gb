import React from 'react'
import ButtonFit from './ButtonFit'
import Image from 'next/image'
import Link from 'next/link'

const HomeHeader = () => {

  const redirect = () => {
    <Link href='#title' />
  }

  return (
      <section className="home_container bg-secondary">
        <div className="container px-6 mx-auto home_content grid grid-cols-header md:grid-cols-header-large py-40">
        <div className='home_data col-start-1 row-start-2 col-span-2  md:row-start-1 md:col-span-1 self-center'>
            <h1 className='lg:text-5xl text-4xl font-abril font-bold mb-1'>Hé, <span id='underline'>c'est Guillaume.</span></h1>
            <h3 className='lg:text-xl text-lg font-mulish mb-3'>Growth Hacker & Frontend Lover</h3>
            <p className='font-mulish md:max-w-md'> Passionné par le web et le developpement front-end avec quatre années d'expérience dans le digital.</p>
            <div>
            <ButtonFit text="ça m'intéresse" />
            </div>
          </div>
          <div className='home_img w-full row-start-1 col-start-2 h-[350px]  auto-cols-min self-center justify-self-center'>
          <Image className='w-full h-full object-contain' sizes='100vw' src='/image/gb4.png' alt='linkedin' width="0" height="0" />
          </div>
          <div className='col-start-3 row-start-1 w-[30px] home_social justify-self-end self-center'>
          <a target='_blank' href='https://www.linkedin.com/in/guillaume-bielli/' rel="noopener noreferrer">
          <Image className='w-full h-auto mb-5' sizes='100vw' src='/image/linkedin.svg' alt='linkedin' width="0" height="0" />
          </a>
          <a target='_blank' href='https://github.com/gbielli' rel="noopener noreferrer">
          <Image className='w-full h-auto' sizes='100vw' src='/image/github.svg' alt='linkedin' width="0" height="0" />
          </a>

          </div>
        </div>
      </section>
    
  )
}

export default HomeHeader

