import React from 'react'
import PriorityItem from '../PriorityItem'
import HomeTitle from './HomeTitle'

const HomePriority = () => {
  return (
    <div>
      <HomeTitle title='Mes priorités' description='4 pôles' />
      <div className='grid grid-cols-2 container mx-auto gap-5'>
      <PriorityItem />
      </div>
    </div>
  )
}

export default HomePriority