'use client'

import React, { useEffect, useState } from 'react'
import { getSimilarPosts } from '@/services'
import moment from 'moment';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/public/image/link.svg';

const SimilarPost = ({categories, slug}) => {

    const [similarPosts, setSimilarPosts] = useState([]);

    useEffect(
        () => {
            getSimilarPosts(categories, slug)
            .then((result) => setSimilarPosts(result))
        }, [slug]
    )

   


  return (
    <div className='max-w-3xl mx-auto pb-12 border-2 px-10 py-10 rounded-md mb-20'>
                    <h3 className='font-clash text-3xl mb-2'>Les articles similaires</h3>
                    <div className='flex flex-col gap-3 justify-left mt-7'>
        {similarPosts.map((similarPost, index) => (
          <div className='max-w-3xl' key={index}>
          <Link className='text-xl font-mulish text-primary  hover:underline flex gap-3' href={`/blog/${similarPost.slug}`}>
            <Image src={Icon} width={20}/>
            <p>
              {similarPost.title}
            </p>
            </Link>
            </div>
        ) )}
    </div>
    </div>
  )
}

export default SimilarPost