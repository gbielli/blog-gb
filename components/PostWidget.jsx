import React, {useState, useEffect } from 'react'
import moment from 'moment';
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '../services';

const PostWidget = ({categories, slug }) => {
const [relatedPosts, setRelatedPosts] = useState([]);


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
    <div className='container mx-auto mb-8 font-heading'>
      <h3 className='text-2xl mb-8 font-semibold pb-4'>
        {slug ? 'Les articles similaires' : 'Les articles à la une' }
      </h3>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
      {relatedPosts.map((relatedPost) => (
                    <Link href={`/blog/post/${relatedPost.slug}`} key={relatedPost.title}>

        <article key={relatedPost.title} className='flex flex-col items center w-full'>
          <div className='h-[400px]'>
            <img 
            alt={relatedPost.title}
            className='align-middle object-cover h-full w-full'
            src={relatedPost.featuredImage.url}
            ></img>
          </div>
          <div className='pt-4'>
            <p > {moment(relatedPost.createdAt).format('DD MM YYYY')}</p>
            
              <h3 className="font-mulish font-bold text-2xl">{relatedPost.title}</h3>
            
            
          </div>
          <div className='mt-4 flex flex-wrap'>{relatedPost.categories.map((category, index) => (
            <span key={index} className='border-2 w-fit px-2 py-1 rounded-lg border-primary mr-3 text-primary hover:no-underline'>{category.name}</span>
          ))}</div>
          </article>
          </Link>
      ))}
    </div>
    </div>


  )
}

export default PostWidget
