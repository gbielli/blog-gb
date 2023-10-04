'use client'

import Head from 'next/head'
import { PostCard, Categories, PostWidget, BlogTitle, FeaturedArticle } from '../../components/old/list'
import { getPosts } from '../../services'
import ArticleList from './components/ArticleList'
import { useEffect } from 'react'





export default function Home() {


  useEffect( () => {
    const initializeLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();

    }
    initializeLocomotiveScroll(); 
  
  }, [])
  


  return (
    <div className="mx-auto mb-8">
      <Head>
        <title>Les actualités sur le web | Le blog </title>
        <link rel="icon" href="/image/gbico.ico" />
      </Head>

      <BlogTitle />

      <PostWidget />

      <div className='container mx-auto'>
      <h3 className='text-3xl px-6 mb-6 mt-10' data-font='abril'>Les articles du moment</h3>

      <ArticleList />

        
      </div>

    </div>
  )
}

// export async function getStaticProps() {
//   const posts = (await getPosts()) || [];
//   return {
//     props: { posts }
//   }
// }

