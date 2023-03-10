import Head from 'next/head'
import Image from 'next/image'
import { Key } from 'react';
import { PostCard, Categories, PostWidget, BlogTitle, FeaturedArticle } from '../../components/'
import { getPosts } from '../../services'


export default function Home({ posts }) {
  return (
    <div className="mx-auto mb-8">
      <Head>
        <title>Les actualités sur le web | Le blog </title>
        <link rel="icon" href="/image/gbico.ico" />
      </Head>

      <BlogTitle />

      <PostWidget />

      <div className='container mx-auto'>
      <h3 className='text-3xl font-abril px-6 mb-6 mt-10'>Les articles du moment</h3>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 px-6'>
      
          {posts.map((post) =>  
          
            <PostCard post={post.node} key={post.title} /> 
           )}
      </div>

        
      </div>

    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts }
  }
}

