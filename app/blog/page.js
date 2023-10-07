import Head from 'next/head'
import { PostCard, Categories, PostWidget, FeaturedArticle } from '../../components/old/list'
import { getPosts } from '../../services'
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
      <h3 className='text-3xl px-6 mb-6 mt-10' data-font='abril'>Les articles du moment</h3>

      <ArticleList />

        
      </div>

    </div>
    </LocomotiveScroll>
  )
}

// export async function getStaticProps() {
//   const posts = (await getPosts()) || [];
//   return {
//     props: { posts }
//   }
// }

