import React from 'react';

import {getPosts, getPostDetails } from '../../../services'

import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm } from '../../../components'

const PostDetails = ({ post }) => {

  return (
    <div className='container mx-auto px-10'>
      <div>
        <div>
            <PostDetail post={post} />
            <Author author={post.author} /> 
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />
        </div>
        <div>
            <div>
                <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug )}/>
                <Categories />
            </div>
        </div>
      </div>
    </div>
  )
}

export default PostDetails

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);

  return {
    props: {post: data }
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map(({node : {slug}}) => ( {params : { slug }})),
    fallback:false,
  }
}
