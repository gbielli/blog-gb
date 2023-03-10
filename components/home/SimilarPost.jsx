import React, { useEffect, useState } from 'react'
import { getSimilarPosts } from '../../services'
import moment from 'moment';
import Link from 'next/link';

const SimilarPost = ({categories, slug}) => {

    const [similarPosts, setSimilarPosts] = useState([]);

    useEffect(
        () => {
            getSimilarPosts(categories, slug)
            .then((result) => setSimilarPosts(result))
        }, [slug]
    )

  return (
    <div className='max-w-3xl mx-auto pb-20'>
                    <h3 className='font-abril text-2xl mb-2'>sur le même thème</h3>
                    <div className='flex flex-col gap-3 justify-left'>
        {similarPosts.map((similarPost) => (
          <Link href={`/blog/${similarPost.slug}`}>
            <div className='max-w-3xl'>
            <p className='text-xl font-mulish text-primary underline hover:text-blue-600'>{similarPost.title}</p>
            </div>
            </Link>
        ) )}
    </div>
    </div>
  )
}

export default SimilarPost