import React from 'react';
import Link from 'next/link';

const BlogTitle = ({title, underline}) => {
    return (
        <div className='bg-secondary'>
        <div className='container text-center lg:w-3/5 mx-auto pt-40 pb-40 px-6 flex flex-col gap-2'>
            <h1 className='text-4xl' data-font='abril'>Découvrez <span id="underline">tous les articles</span> sur le web analytics, l'automation et le SEO.</h1>
            <div className='flex flex-wrap justify-center items-center gap-3 font-mulish py-4'>
            <p className='border-2 border-black rounded-lg px-3 py-1'>Matomo</p>
            <p className='border-2 border-black rounded-lg px-3 py-1'>Google tag manager</p>
            <p className='border-2 border-black rounded-lg px-3 py-1'>Automation</p>
            <p className='border-2 border-black rounded-lg px-3 py-1'>SEO</p>
            </div>
          

        </div>
       
    </div>
    )
}

export default BlogTitle
