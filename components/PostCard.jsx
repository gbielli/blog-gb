import moment from 'moment';
import 'moment/locale/fr'
import Link from 'next/link';
import SkeletonCard from "./SkeletonCard";
import { React, useState, useEffect } from 'react';


const PostCard = ({post}) => {

const [loading, setLoading] = useState(true);

useEffect(() => {
    setLoading(false)
}, [post])

  return (
    <>
  {loading ? (
    <SkeletonCard />
  ) : (
    <Link href={`/blog/${post.slug}`} className="font-mulish" legacyBehavior>
      <a>
    <article className='grid grid-cols-1 sm:grid-cols-1 lg:grid-rows-articles lg:grid-cols-1 gap-2'>
      <div className='overflow-hidden h-[250px]'>
        <img src={post.featuredImage.url}
          alt={post.title}
          className='w-full h-full object-cover rounded-sm'/>
      </div>
      <div>
      <span className=' rounded-md border-primary mr-3 font-mulish text-primary hover:no-underline text-md'>{post.categories[0].name}</span>

      <span className='font-mulish text-sm'>{moment(post.createdAt).format('DD MMMM')}</span>
        <h3 className='text-lg font-semibold cursor-pointer font-mulish'>
            {post.title}       
        </h3>
     

      </div>
      
    </article>
    </a>
    </Link> )}
 </>
  )
}

export default PostCard
