'use client'

import React, {useState, useEffect } from 'react'
import SkeletonWidget from './SkeletonWidget';
import moment from 'moment';
import 'moment/locale/fr'
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '../../services';

const PostWidget = ({categories, slug }) => {
const [relatedPosts, setRelatedPosts] = useState([]);
const [loading, setLoading] = useState(true);


useEffect(
  () => {
      getRecentPosts()
      .then((result) => setRelatedPosts(result))
      .then(() => setLoading(false))
  }, [slug]
)

  return (
    
    <div className='container mx-auto px-6 mb-8 font-heading'>
        {loading ? ( <SkeletonWidget /> ) : (
          <>
      <h3 className='text-3xl mt-20 mb-6 font-semibold' data-font='abril'>
        {slug ? 'Les articles similaires' : "L'article à la une" }
      </h3>
      <div className='grid grid-cols-1 gap-6'>
        {relatedPosts.map((relatedPost) => (
        
          <Link href={`/blog/${relatedPost.slug}`} key={relatedPost.title} legacyBehavior >
            <a>
              <article key={relatedPost.title} className='relative flex flex-col items center w-full'>
              
                  
                   <div className='h-[500px] w-full bg-black'>
                   <img 
                   alt={relatedPost.title}
                   className='align-middle object-cover h-full w-full bg-blend-darken opacity-60'
                   src={relatedPost.featuredImage.url}
                   id='gradient'
                   ></img>
                 </div>
                  <div className='pt-4 absolute bottom-6 px-6'>
                  {relatedPost.categories.map((category, index) => (
                    <span key={index} className='w-fit font-mulish text-white rounded-lg text-primary hover:no-underline'>{category.name} </span>
                  ))}
                    <span className='text-white font-mulish'>• {moment(relatedPost.createdAt).format('DD MMMM')}</span>
                    
                      <h3 className="font-mulish font-bold text-3xl text-white">{relatedPost.title}</h3>
                      <p className='text-white font-mulish md:w-4/5'>{relatedPost.excerpt.substring(0, 180)}...</p>
                    
                  </div>
                   
                </article>
                </a>
            </Link>
      ))}
      </div>
      </>)}
    </div>


  )
}

export default PostWidget
