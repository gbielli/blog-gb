import React from 'react';
import HomeTitle from './HomeTitle';

const HomeAbout = () => {
  return (
    <section className='container mx-auto'>
      <HomeTitle
      title='À propos'
      description="Mon introduction" />
      <p className='text-center font-mulish'>
      Le web est devenu une réelle passion pour moi, je ne cesse d'être animé par l'envie d'apprendre de nouvelles connaissances et de mettre en place ces apprentissages dans le cadre de mon travail.
      </p>
    </section>
  )
}

export default HomeAbout