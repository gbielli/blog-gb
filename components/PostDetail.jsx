import React from 'react';
import moment from 'moment';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';



const PostDetail = ( {post} ) => {

  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }

    }
  
    switch (type) {
      case 'heading-two':
        return <h2 key={index} className="text-4xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h2>;
      case 'heading-three':
        return <h3 key={index} className="text-3xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <div key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</div>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
        case 'code-block':
        return <pre key={index} className={`line-numbers language-${text.includes('</div>') ? "html" : "javascript"} w-full rounded-lg`} > {modifiedText.map((item, i) => <code key={i}>{item}</code>)}</pre>;
      case 'image': 
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
        
      default:
        return modifiedText;
    }
    
  };

  return (
    <div className=''>
      <div className='relative overflow-hidden shadow-md mb-6'>
        {/* <img 
        src={post.featuredImage.url}
        alt={post.title}
        className='object-top h-full w-full rounded-t-lg'>
        </img> */}
      </div>
      <div className="px-4 lg:px-0">
        <div className="flex flex-col items-center mx-auto mb-8 max-w-4xl gap-8">
          <h1 className='text-center font-bold text-4xl text-stroke-8 text-fill-black font-mulish'>{post.title}</h1>
        <h2 className='text-xl text-center font-mulish'>{post.excerpt}</h2>
        <span className='mx-auto text-gray-500'> {post.author.name} / {moment(post.createdAt).format('DD MMM YYYY')}</span>

        <img 
        src={post.featuredImage.url}
        alt={post.title}
        className='object-cover object-center h-[500px] h-full w-full rounded-t-lg'>
        </img>

        </div>

        <div className="flex flex-col items-start mx-auto mb-8 max-w-3xl text-xl font-mulish leading-8">

        {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) => 
            getContentFragment(itemIndex, item.text, item))
       

          return getContentFragment(index, children, typeObj, typeObj.type, typeObj.code)
          
        })}

       

        </div>

        </div>
      </div>
  )
}

export default PostDetail
