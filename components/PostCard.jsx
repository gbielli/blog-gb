import React from 'react'
import moment from 'moment';
import Link from 'next/link';


const PostCard = ({post}) => {
  return (
    <article className='flex flex-col mx-auto w-[387px] sm:w-auto'>
      <div className='overflow-hidden mb-6'>
        <img src={post.featuredImage.url}
          alt={post.title}
          className='object-top h-80 w-[387px] h-[225px] object-cover' />
      </div>
      <div>
        <span>{post.categories[0].name}</span>
        <h3 className='text-lg font-bold cursor-pointer font-abril'>
          <Link href={`/post/${post.slug}`}>
            {post.title}
          </Link> 
        </h3>
        <span> {moment(post.createdAt).format('DD MMM YYYY')} </span>

      </div>
      
    </article>
  )
}

export default PostCard
