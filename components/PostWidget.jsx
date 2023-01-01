import React, {useState, useEffect } from 'react'
import moment from 'moment';
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '../services';

const PostWidget = ({categories, slug }) => {
const [relatedPosts, setRelatedPosts] = useState([])

useEffect(
  () => {
    if (slug) {
      getSimilarPosts(categories, slug)
      .then((result) => setRelatedPosts(result) )
    } else {
      getRecentPosts()
      .then((result) => setRelatedPosts(result) )
    }

  }, [slug]
)

  return (
    <div className='p-8 mb-8 font-heading'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        {slug ? 'Les articles similaires' : 'Les articles récents' }
      </h3>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
      {relatedPosts.map(relatedPost => (
                    <Link className='flex-1' href={`/post/${relatedPost.slug}`} key={relatedPost.title}>

        <div key={relatedPost.title} className='flex flex-col items center w-full'>
          <div className='h-[235px]'>
            <img 
            alt={relatedPost.title}
            className='align-middle object-cover h-full w-full rounded-lg'
            src={relatedPost.featuredImage.url}
            ></img>
          </div>
          <div className='pt-4'>
            <p > {moment(relatedPost.createdAt).format('DD MM YYYY')}</p>
            
              <h3 className='text-2xl font-bold'>{relatedPost.title}</h3>
            
            
          </div>
          <div className='mt-4 flex flex-wrap'>{relatedPost.categories.map((category, index) => (
            <span key={index} className='border-2 w-fit px-2 py-1 rounded-lg border-primary mr-3 text-primary r'>{category.name}</span>
          ))}</div>
          </div>
          </Link>
      ))}
    </div>
    </div>
  )
}

export default PostWidget
