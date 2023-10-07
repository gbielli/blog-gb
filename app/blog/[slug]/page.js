

import Head from 'next/head';
import PostDetail from '/components/old/PostDetail.jsx'
import SimilarPost from '../../../components/old/home/SimilarPost';
import LocomotiveScroll from '../components/LocomotiveScroll';




const getPostsTest = async (post) => {
    const response = await fetch('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clc6isprz1f8p01uvh99y3g8d/master', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: `{
                post(where: {slug: "${post.slug}"}) {
                  title
                  excerpt
                  featuredImage {
                    url
                  }
                  author{
                    name
                  }
                  createdAt
                  slug
                  content {
                    raw
                  }
                  categories {
                    name
                    slug
                  }
                }
              }`,
              variables: {
                slug: post.slug
            }
        })

    })

    const {data} = await response.json()

    return data.post
}


const PostDetails = async ({ params }) => {

    const post = await getPostsTest(params)

  return (
    <>
    <Head>
    <title>{post.title}</title>
    <meta name="description" content={post.excerpt} />
    <link rel="icon" href="/image/gbico.ico" />
    {/* <link rel='canonical' href={`https://guillaumebielli.fr${router.asPath}`} /> */}
  </Head>
  <LocomotiveScroll>
    <div className='container mx-auto px-4 md:px-6'>
      <div>
        <div>
            <PostDetail post={post} />
            {/* <Author author={post.author} /> 
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} /> */}
        </div>
        <div>
            <div>
            {/* <SimilarPost slug={post.slug} categories={post.categories.map((category) => category.slug)}/> */}
            {/* <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} /> */}
                {/* <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug )}/> */}
                
            </div>
        </div>
      </div>
    </div>
    </LocomotiveScroll>
    </>
  )
}

export default PostDetails

// export async function getStaticProps({ params }) {
//   const data = await getPostDetails(params.slug);

//   return {
//     props: {post: data }
//   };
// }

// export async function getStaticPaths() {
//   const posts = await getPosts();

//   return {
//     paths: posts.map(({node : {slug}}) => ( {params : { slug }})),
//     fallback:false,
//   }
// }
