import Head from 'next/head'
import ArticleList from './components/ArticleList'
import BlogTitle from './components/BlogTitle/BlogTitle'
import LocomotiveScroll from './components/LocomotiveScroll'




export default function Home() {


  


  return (
    <LocomotiveScroll>
    <div className="mx-auto mb-8">
      <Head>
        <title>Les actualités sur le web | Le blog </title>
        <link rel="icon" href="/image/gbico.ico" />
      </Head>

      <BlogTitle />


      <div className='px-6 mx-auto'>

      <ArticleList />

        
      </div>

    </div>
    </LocomotiveScroll>
  )
}

