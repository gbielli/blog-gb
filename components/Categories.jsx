import React, { useEffect, useState } from 'react'
import { getCategories } from '../services'

const Categories = () => {
  
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories()
    .then((newCategories) => setCategories(newCategories))
  }, [])


  return (
    <>
    <div className='h-20'>
      {categories.map((category) => ( 
        <span key={category.slug}>{category.name}</span>
      ))}
    </div>
    </>
  )
}

export default Categories
