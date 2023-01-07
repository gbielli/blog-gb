import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Key } from 'react';
import { PostCard, Categories, PostWidget, BlogTitle, FeaturedArticle } from '../components'
import { getPosts } from '../services';


export default function Home({ posts }) {
  return (
    <div className="mx-auto mb-8">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BlogTitle />

      <PostWidget />

      <div className='container mx-auto'>
      <h3 className='text-2xl font-abril'>Les articles du moment</h3>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
      
          {posts.map((post: { node: any; title: Key | null | undefined; }) => 
          
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
