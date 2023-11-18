'use client'

import React, { useState } from 'react';  
import PostCard from './PostCard';
import SearchCategory from './SearchCategory'
import { useSearchParams, usePathname, useRouter } from 'next/navigation';





const ArticleList = ({ posts, categories } ) => {

    const [isActive, setIsActive] = useState({isHover: true, index:-1, title:"" });

   const filteredpost = (posts) => {
    if (isActive.index != -1 ) {
        return posts.filter( post => post.node.categories.some((category) => category.name.toLowerCase().includes(isActive.title.toLowerCase())))
    }
    return posts;

   }

    

  return (
    <>
     <SearchCategory isActive={isActive} setIsActive={setIsActive} categories={categories} />

    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-60'>
      
      
      
          {filteredpost(posts).map((post, index) => {


              return (
                
                  <PostCard post={post.node} key={index} /> 
                  

              )
          } 
        
           )}
      </div>
      </>
  )
}

export default ArticleList