
import PostDetail from '../components/PostDetail'
import SimilarPost from '../components/SimilarPost';
import LocomotiveScroll from '../../utils/LocomotiveScroll';
import { notFound } from "next/navigation"





export async function generateMetadata({ params }) {
  const slug = params;
  const post = await getPost(slug);

  if (!post) {
    return notFound()
  }
  
  return {
    title:post.title,
    description:post.excerpt,
  }

}

const getPost = async (post) => {

  

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



    const post = await getPost(params)

   

  return (
    <>
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
            <SimilarPost slug={post.slug} categories={post.categories.map((category) => category.slug)}/>
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
