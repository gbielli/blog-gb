import React from 'react'
import moment from 'moment';
import Link from 'next/link';


const PostCard = ({post}) => {
  console.log(post);
  return (
    <div className='flex bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
      <div className='overflow-hidden shadow-md mb-6'>
        <img src={post.featuredImage.url}
          alt={post.title}
          className='object-top h-80 w-[276px] h-[144px] object-cover shadow-lg rounded-t-lg lg:rounded-lg' />
      </div>
      <div>
        <span>{post.categories[0].name}</span>
        <h3 className='text-lg font-bold cursor-pointer'>
          <Link href={`/post/${post.slug}`}>
            {post.title}
          </Link> 
        </h3>
        <span> {moment(post.createdAt).format('DD MMM YYYY')} </span>

      </div>
      
    </div>
  )
}

export default PostCard
