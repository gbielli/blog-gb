import React from 'react'



const BlogTitle = ({Title1, Title2, Subtitle}) => {


  
  return (
 <>
<section className='pt-20 px-6'>
    <div className=' text-[12vw] leading-[10vw] font-clash'>{Title1}<span className='block'>{Title2}</span></div>
    <p className='text-2xl max-w-xl pt-10'>Passionné par le web depuis longtemps, J&apos;explore et je vous partage mes expériences sur l&apos;Acquisition, le Web Analytics et l&apos;Automation.</p>
    <div className='h-[1px] bg-[#d4d4d4] w-full mt-20'></div>
    
</section>
</>
  )
}

export default BlogTitle