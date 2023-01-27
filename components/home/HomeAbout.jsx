import React from 'react';
import HomeTitle from './HomeTitle';
import AboutItem from './AboutItem';

const HomeAbout = () => {
  return (
    <section className='container mx-auto px-4'>
      <HomeTitle
      title='À propos'
      description="Mon introduction" />
      <p className='text-center font-mulish'>
      Le web est devenu une réelle passion pour moi, je ne cesse d'être animé par l'envie d'apprendre de nouvelles connaissances et de mettre en place ces apprentissages dans le cadre de mon travail.
      </p>
      <div className='grid grid-cols-3 pb-20 pt-10'>
        <AboutItem number='04+' subtitle="années d'expériences" />
        <AboutItem number='29' subtitle="années sur terre" />
        <AboutItem number='~0' subtitle="cheveux sur le crâne" />
      </div>
    </section>
  )
}

export default HomeAbout