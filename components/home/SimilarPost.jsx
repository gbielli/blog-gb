import React, { useEffect, useState } from 'react'
import { getSimilarPosts } from '../../services'
import moment from 'moment';

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
            <div className='max-w-3xl'>
            <p className='text-xl font-mulish text-primary underline'>{similarPost.title}</p>
            
            
            </div>
        ) )}
    </div>
    </div>
  )
}

export default SimilarPost