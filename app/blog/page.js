import Head from 'next/head';
import ArticleList from './components/ArticleList';
import BlogTitle from './components/BlogTitle/BlogTitle';
import LocomotiveScroll from './components/LocomotiveScroll';
import { getCategories } from '@/services';
import SearchCategory from './components/SearchCategory';




export default async function Home() {


  const categories = await getCategories() || [];


  return (
    <LocomotiveScroll>
    <div className="mx-auto mb-8">
      <Head>
        <title>Les actualités sur le web | Le blog </title>
        <link rel="icon" href="/image/gbico.ico" />
      </Head>

      <BlogTitle />
      <SearchCategory categories={categories} />

      <div className='px-6 mx-auto'>

      <ArticleList />

        
      </div>

    </div>
    </LocomotiveScroll>
  )
}

