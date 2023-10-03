import React from 'react';
import HomeTitle from './HomeTitle';
import AboutItem from './AboutItem';

const HomeAbout = () => {
  return (
    <section className='container mx-auto px-6'>
      <HomeTitle
      title='À propos'
      description="Mon introduction" />
      <p className='text-center font-mulish md:max-w-3xl mx-auto'>
      Aficionado du web et de ses nouveautés avec un solde capillaire négatif, je me suis spécialisé dans le web analytics, l'acquisition et l'expérience utilisateur.
      </p>
      <div className='grid grid-cols-1 gap-6 sm:gap-0 sm:grid-cols-3 pb-20 pt-10'>
        <AboutItem number='04+' subtitle="années d'expériences" />
        <AboutItem number='29' subtitle="années sur terre" />
        <AboutItem number='~0' subtitle="cheveux sur le crâne" />
      </div>
    </section>
  )
}

export default HomeAbout