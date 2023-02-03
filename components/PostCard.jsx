import React from 'react'
import moment from 'moment';
import Link from 'next/link';


const PostCard = ({post}) => {

  
  const reducedExcerpt = post.excerpt.substring(0, 130);


  return (
    <Link href={`/post/${post.slug}`} className="font-mulish" >

    <article className='grid grid-cols-2 lg:grid-rows-articles lg:grid-cols-1 gap-2'>
      <div className='overflow-hidden  max-h-[175px] md:max-h-[250px] w-full'>
        <img src={post.featuredImage.url}
          alt={post.title}
          className='w-full h-full object-cover rounded-sm' />
      </div>
      <div>
      <span className='font-mulish text-sm'> {moment(post.createdAt).format('DD MMM YYYY')}</span>
        <h3 className='text-lg font-bold cursor-pointer font-abril'>
            {post.title}       
        </h3>
        <div className='mt-1'>
        <p className='border-2 w-fit px-2 py-1 rounded-md border-primary mr-3 font-mulish text-primary hover:no-underline text-sm'>{post.categories[0].name}</p>
        </div>
        {/* <p className='font-mulish'>{reducedExcerpt}...</p> */}

      </div>
      
    </article>
    </Link> 
  )
}

export default PostCard
