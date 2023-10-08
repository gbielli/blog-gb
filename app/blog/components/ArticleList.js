import 'server-only'
import React from 'react';  
import { getPosts } from '@/services';
import PostCard from './PostCard';
import SearchCategory from './SearchCategory';




const ArticleList = async () => {


    const posts = await getPosts() || [];


    

  return (
    <>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 mb-60'>
      
      
      
          {posts.map((post, index) => {

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