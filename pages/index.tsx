import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Key } from 'react';
import { PostCard, Categories, PostWidget } from '../components'
import { getPosts } from '../services';


export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PostWidget categories={undefined} slug={undefined} />

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>

        <div className='lg:col-span-12 col-span-1'>
          {posts.map((post: { node: any; title: Key | null | undefined; }) => <PostCard post={post.node} key={post.title} /> )}
        </div>

        <div className='lg:col-span-12 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <Categories />
          </div>
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
