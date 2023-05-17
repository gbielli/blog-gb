import React from 'react';
import moment from 'moment';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import { RichText } from '@graphcms/rich-text-react-renderer';
import Link  from 'next/link';



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

  // const listes = post.content.raw.children;
  // console.log(listes)


  // const getContentFragment = (index, text, obj, type) => {
  //   let modifiedText = text;}

  const getContent = (index, text, type) => {
    let htext = text;

      switch (type) {
      default :
      return  text
 }

}
    
  

  //   console.log(obj)

  //   if (obj) {
  //     if (obj.bold) {
  //       modifiedText = (<b key={index}>{text}</b>);
  //     }

  //     if (obj.italic) {
  //       modifiedText = (<em key={index}>{text}</em>);
  //     }

  //     if (obj.underline) {
  //       modifiedText = (<u key={index}>{text}</u>);
  //     }

  //   }
  
  //   switch (type) {
  //     case 'heading-two':
  //       return <h2 key={index} className="text-4xl font-semibold font-abril mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h2>;
  //     case 'heading-three':
  //       return <h3 key={index} className="text-3xl font-semibold font-abril mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
  //     case 'paragraph':
  //       return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
  //     case 'heading-four':
  //       return <h4 key={index} className="text-md font-semibold mb-4 font-abril">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
  //       case 'code-block':
  //       return <pre key={index} className={`line-numbers language-${text.includes('</div>') ? "html" : "javascript"} w-full rounded-lg`} > {modifiedText.map((item, i) => <code key={i}>{item}</code>)}</pre>;
  //       case 'link':
  //       return <p>{<React.Fragment>tata</React.Fragment>}</p>;
  //     case 'image': 
  //       return (
  //         <img
  //           className='mb-8'
  //           key={index}
  //           alt={obj.title}
  //           height={obj.height}
  //           width={obj.width}
  //           src={obj.src}
  //         />
  //       );
        
  //     default:
  //       return modifiedText;
  //   }
    
  // };

  return (
    <div>
      <div className='relative overflow-hidden shadow-md mb-6'>
      </div>
      <div className="mt-20">
        <div className="flex flex-col items-center mx-auto mb-8 max-w-4xl gap-8">
          <h1 className='text-center font-bold text-4xl text-stroke-8 text-fill-black font-abril pt-10' id='abril'>{post.title}</h1>
        <h2 className='text-xl text-center font-mulish'>{post.excerpt}</h2>
        <span className='mx-auto text-gray-500 font-mulish'> {post.author.name} / {moment(post.createdAt).format('DD MMM YYYY')}</span>
        <div className='relative bg-black pb-sixty w-full'>
          <img 
          src={post.featuredImage.url}
          alt={post.title}
          className='absolute object-cover h-full w-full z-1'>
          </img>
        </div>

        <div className='border-2 border-gray w-full px-6 py-6 rounded-md max-w-3xl'>
          <div className='font-abril pb-2 text-xl'>Sommaire</div>
          {post.content.raw.children.map((typeObj, index) => {
     if (typeObj.type === 'heading-three') {
           const children = typeObj.children.map((item, indexItem) => {
              return (getContent(indexItem, item.text, item))
        })

        return  <div className='mb-2'> <a  className="before:content-summary before:self-center before:text-primary before:mr-2 font-mulish hover:text-primary" href={`/blog/${post.slug}#${slugify(getContent(index, children))}`} key={index}>{getContent(index, children, typeObj)}</a></div>
      }
            })
          }
          </div>
        

        </div>

        <div className="flex flex-col items-start mx-auto mb-8 max-w-3xl text-xl font-mulish leading-8">

          {<RichText content={post.content.raw.children}
          
           renderers={{
            p: ({ children }) => <p className="mb-8 break-words w-full">{children}</p>,


            h3: ({ children }) => <h3 className="before:mr-3 before:text-primary font-bold before:text-4xl text-3xl my-10 before:content-['#']" data-font='abril' id={slugify(children.props.content.map((item) => item.text))}>{children}</h3>,

            h4: ({ children }) => <h4 className="text-2xl my-10" data-font='abril'>{children}</h4>,

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
              <img className='mb-8' src={src} alt={altText}>
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
                    className="text-primary hover:text-blue-700"
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
