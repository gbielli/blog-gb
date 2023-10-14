import Head from 'next/head';
import ArticleList from './components/ArticleList';
import BlogTitle from './components/BlogTitle/BlogTitle';
import LocomotiveScroll from './components/LocomotiveScroll';
import { getCategories, getPosts } from '@/services';




export default async function Home() {


  const posts = await getPosts() || [];
  const categories = await getCategories() || [];


  return (
    <LocomotiveScroll>
    <div className="mx-auto mb-8">
      <Head>
        <title>Les actualités sur le web | Le blog </title>
        <link rel="icon" href="/image/gbico.ico" />
      </Head>

      <BlogTitle />

      <div className='px-6 mx-auto'>

      <ArticleList posts={posts} categories={categories} />

        
      </div>

    </div>
    </LocomotiveScroll>
  )
}

