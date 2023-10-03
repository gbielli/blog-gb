import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import {getPosts, getPostDetails } from '../../services'
import { useRouter } from 'next/router';
import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm } from '../../components'
import SimilarPost from '../../components/home/SimilarPost';

const PostDetails = ({ post }) => {
  const router = useRouter();

  return (
    <>
    <Head>
    <title>{post.title}</title>
    <meta name="description" content={post.excerpt} />
    <link rel="icon" href="/image/gbico.ico" />
    <link rel='canonical' href={`https://guillaumebielli.fr${router.asPath}`} />
  </Head>
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
    </>
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
