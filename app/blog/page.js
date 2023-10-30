
import ArticleList from './components/ArticleList';
import BlogTitle from './components/BlogTitle/BlogTitle';
import LocomotiveScroll from '../utils/LocomotiveScroll';
import { getCategories, getPosts } from '@/services';




export const metadata = {
  title: 'Mes articles de blog et mes tutoriels',
  description: "Passionné par le web depuis longtemps, j'explore et je vous partage mes expériences sur l'Acquisition, le Web Analytics et l'Automation."
}


export default async function Home() {


  const posts = await getPosts() || [];
 
  const categories = await getCategories() || [];


  return (
    <LocomotiveScroll>
    <div className="mx-auto mb-8">
      <BlogTitle
      Title1="Mes articles"
      Title2="& tutoriels"
      Subtitle="Passionné par le web depuis longtemps, J'explore et je vous partage mes expériences sur l'Acquisition, le Web Analytics et l'Automation."
      />

      <div className='px-6 mx-auto'>

      <ArticleList posts={posts} categories={categories} />

        
      </div>

    </div>
    </LocomotiveScroll>
  )
}

