'use client'

import React from 'react';
import moment from 'moment';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import { RichText } from '@graphcms/rich-text-react-renderer';
import Link  from 'next/link';
import CommentsForm from '../../../components/old/CommentsForm';
import Comments from '../../../components/old/Comments';
import Image from 'next/image';
import Avatar from '@/public/image/gb-avatar.png'
import ArrowLeft from '@/public/image/arrow-top-left.svg';
import { useScroll } from 'framer-motion';
import { motion } from 'framer-motion';


const PostDetail = ( {post} ) => {

  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  const slugify = (str) => {
    return  str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
  }

  const getContent = (index, text, type) => {

      switch (type) {
      default :
      return  text
 }

}

const { scrollYProgress } = useScroll()
    


  return (
    <div>
    
      <div className="">
      <motion.div className='bg-black fixed  top-0 left-0 h-[9px] w-full' style={{  transformOrigin: 'left', scaleX: scrollYProgress }} />
        <div className="flex flex-col items-center mx-auto mb-8 max-w-4xl gap-8">
        
        <div className='mt-10 w-full flex gap-2'>
        <Image src={ArrowLeft} width={20} />
        <a className='text-left text-gray-500' href='/blog'>Retour sur les articles</a>
      </div>
          <h1 className='text-left font-bold text-5xl leading-tight text-stroke-8 text-fill-black font-abril pt-2 font-clash' >{post.title}</h1>
        <h2 className='text-2xl text-left font-archivo line-clamp-3'>{post.excerpt}</h2>
        <div className=" flex gap-3 relative self-start items-center">
          <div className='image'>
          <Image className='object-cover w-[60px] md:w-[50px]' src={Avatar} alt="Avatar" width={50} height={50} />
          </div>
          <div className=''>
          <h2 className=''> {post.author.name}</h2>
          <p className='block text-gray-500'>le {moment(post.createdAt).format('DD MMMM YYYY')} </p>

          </div>
        </div>
        <div className='mt-5 border-t border-blue-[#d4d4d4] h-8 w-full'></div>
        <div className='relative bg-black pb-sixty w-full'>
          <img 
          src={post.featuredImage.url}
          alt={post.title}
          className='absolute object-cover h-full w-full z-1'>
          </img>
        </div>

        <div className='border-2 border-gray w-full px-6 py-6 rounded-md max-w-3xl'>
          <div className='font-abril pb-2 text-2xl'>Sommaire</div>
          {post.content.raw.children.map((typeObj, index) => {
     if (typeObj.type === 'heading-three') {
           const children = typeObj.children.map((item, indexItem) => {
              return (getContent(indexItem, item.text, item))
        })

        return  <div className='mb-2' key={index}> <a  className="before:content-summary  before:self-center before:text-primary before:mr-2 font-mulish hover:underline text-lg" href={`/blog/${post.slug}#${slugify(getContent(index, children))}`} key={index}>{getContent(index, children, typeObj)}</a></div>
      }
            })
          }
          </div>
        

        </div>

        <div className="flex flex-col items-start mx-auto mb-8 max-w-3xl text-xl font-mulish leading-8">

          {<RichText content={post.content.raw.children}
          
           renderers={{
            p: ({ children }) => <p className="mb-8 break-words w-full">{children}</p>,


            h3: ({ children }) => <h3 className="before:mr-3 before:text-blue-500 font-bold font-clash before:text-2xl text-3xl my-10 before:content-['#']" id={slugify(children.props.content.map((item) => item.text))}>{children}</h3>,

            h4: ({ children }) => <h4 className="text-2xl my-10 font-clash">{children}</h4>,

            bold: ({ children }) => <strong className=''>{children}</strong>,

            li: ({ children }) => <li className="before:content-['_•'] before:mr-4 pb-4 ml-6">{children}</li>,



            code_block: ({ children }) => {
              return (
                <pre className="line-numbers language-none w-full mb-8">
                  <code>{children}</code>
                </pre>
              );
            },

            code: ({ children }) => {
              return (
                  <code className='bg-secondary px-2 py-1 rounded-lg text-primary font-body text-lg'>{children}</code>
              );
            },


            


            img : ({src, altText}) => {
              return(
              <img className='mb-8 border border-slate-200 rounded' src={src} alt={altText}>
              </img>)
            },

            blockquote: ({children}) => {
              return (
                <blockquote class="sm:ml-4 border-l-4 pl-4 sm:pl-6 border-primary mb-8">
                  <p class="text-2xl text-gray-600 ">
                  {children}
                  </p>
                </blockquote>
              )
            },

            class: ({ children, className }) => {
              return (
                <div className={className}>{children} </div>
              )
            },

            a: ({ children, openInNewTab, href, rel, ...rest }) => {
              if (href.match(/^https?:\/\/|^\/\//i)) {
                return (
                  <a
                    href={href}
                    className="text-blue-500 hover:text-blue-700"
                    target={openInNewTab ? '_blank' : '_self'}
                    rel={rel || 'noopener noreferrer'}
                    {...rest}
                  >
                    {children}
                  </a>
                );
              }
    
              return (
                <Link legacyBehavior href={href}>
                  <a {...rest}>{children}</a>
                </Link>
              );
            },
          }} />}

        {/* {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) => 
            getContentFragment(itemIndex, item.text, item))
       

          return getContentFragment(index, children, typeObj, typeObj.type)
          
        })} */}
       

       

        </div>

        </div>
      </div>
  )
}

export default PostDetail
