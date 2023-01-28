import React from 'react'
import PriorityItem from '../PriorityItem'
import HomeTitle from './HomeTitle'

const HomePriority = () => {
  return (
    <div>
      <HomeTitle title='Mes priorités' description='4 pôles' />
      <div className='grid  grid-cols-1 px-6 md:grid-cols-2 container mx-auto gap-5 pb-20'>
      <PriorityItem />
      </div>
    </div>
  )
}

export default HomePriority