
import moment from 'moment';
import 'moment/locale/fr'
import Link from 'next/link';
import SkeletonCard from "../../../components/old/SkeletonCard";
import { React } from 'react';
import arrow from '@/public/image/arrow-top-right.svg'
import Image from 'next/image';


const PostCard = ({post}) => {

  

  return (
    <>
    <Link href={`/blog/${post.slug}`} className="font-mulish" legacyBehavior>
      
    <article className='grid grid-cols-1 sm:grid-cols-1 lg:grid-rows-articles lg:grid-cols-1 gap-2'>
      <div className='overflow-hidden h-[250px]'>
        <img src={post.featuredImage.url}
          alt={post.title}
          className='w-full h-full object-cover rounded-sm'/>
      </div>
      <div>
      {/* <span className=' rounded-md border-primary mr-3 font-mulish text-primary hover:no-underline text-md'>{post.categories[0].name}</span>

      <span className='font-mulish text-sm'>{moment(post.createdAt).format('DD MMMM')}</span> */}
      <div className='flex gap-5'>
        <h3 className='font-clash text-xl font-semibold cursor-pointer'>
            {post.title}       
        </h3>
        <Image className='self-start pt-1' src={arrow} />

      </div>
        <p className='mt-1'>Depuis la mise en demeure de Google analytics par la CNIL, des alternatives fleurissent dans le monde du web analytics, comme par exemple Matomo, l&apos;outil RGPD compliant par excellence.</p>

        <div className="tag mt-3 inline-flex gap-2">
          
            <p className='border border-black px-3 py-1 rounded-full'>{post.categories[0].name}</p>
          </div>
     

      </div>
      
    </article>
    </Link> 
 </>
  )
}

export default PostCard
