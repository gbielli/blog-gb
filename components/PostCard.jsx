import React from 'react'
import moment from 'moment';
import 'moment/locale/fr'
import Link from 'next/link';


const PostCard = ({post}) => {

  
  const reducedExcerpt = post.excerpt.substring(0, 130);


  return (
    <Link href={`/blog/post/${post.slug}`} className="font-mulish" >

    <article className='grid grid-cols-1 md:grid-cols-1 lg:grid-rows-articles lg:grid-cols-1 gap-2'>
      <div className='overflow-hidden  h-[250px]'>
        <img src={post.featuredImage.url}
          alt={post.title}
          className='w-full h-full object-cover rounded-sm'/>
      </div>
      <div>
      <span className=' rounded-md border-primary mr-3 font-mulish text-primary hover:no-underline text-md'>{post.categories[0].name}</span>

      <span className='font-mulish text-sm'>{moment(post.createdAt).format('DD MMMM')}</span>
        <h3 className='text-lg font-bold cursor-pointer font-mulish'>
            {post.title}       
        </h3>
        <div className='mt-1'>
        {/* <p className='border-2 w-fit px-2 py-1 rounded-md border-primary mr-3 font-mulish text-primary hover:no-underline text-sm'>{post.categories[0].name}</p> */}
        </div>
        {/* <p className='font-mulish'>{reducedExcerpt}...</p> */}

      </div>
      
    </article>
    </Link> 
  )
}

export default PostCard
