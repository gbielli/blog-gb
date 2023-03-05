import React from 'react'
import { getCategoryPost, getCategories } from '../../../services'
import { useRouter } from 'next/router';
import { Categories, PostCard, PostWidget } from '../../../components';
import CategoryTitle from '../../../components/home/CategoryTitle';
import Head from 'next/head';

const matomo = ({posts}) => {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Chargement...</p>;
  }

  return (
    <>
    <Head>
    <title>
    {`Les articles sur ${router.query.slug} - Blog`}
    </title>
    </Head>

    <CategoryTitle categoryName={router.query.slug} />
    <div className='container mx-auto mt-20 mb-20'>
      <h3 className='text-3xl font-abril px-6 mb-6 mt-10'>Les articles du moment</h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 px-6'>
        {posts.map((post) =>
        <>
          <PostCard post={post.node} key={post.title} />
        </>
        )}
      </div>
    </div>
    </>

    

  )
}

export default matomo


// export async function getStaticProps() {
//   const posts = (await getPosts()) || [];
//   return {
//     props: { posts }
//   }
// }

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
