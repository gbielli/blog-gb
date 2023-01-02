import React from 'react'

const FeaturedArticle = () => {
  return (
    <div className='container grid grid-cols-5 py-20'>
        <div className='col-span-2'>
            <h2>Nom de l'article</h2>
        </div>

        <div className='col-span-3'>
            <img src="https://via.placeholder.com/900x600" alt="" />
        </div>

      
    </div>
  )
}

export default FeaturedArticle
