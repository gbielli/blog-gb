import React, { useEffect, useState } from 'react';
import moment from 'moment';
import parse from 'html-react-parser';
import Image from 'next/image';

import { getComments } from '../services';

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => {
      setComments(result);
    });
  }, []);

  return (
    <>
      {comments.length > 0 && (
        <div className=" lg:py-6 mx-auto bg-white w-full max-w-3xl lg:pb-20">
          <h3 className="mb-8 font-semibold font-abril text-2xl border-b pb-4">
            {comments.length}
            {' '}
            commentaires
          </h3>
            {comments.map((comment, index) => (
              <div key={index} className="mb-4 pb-4">
                <div className='mb-4 flex gap-3 justify-between'>
                <div className="flex items-center gap-3">
                  <Image src="/image/test.png" width={50} height={50} alt="avatar" />
                  <span className="font-semibold">{comment.name}</span>
                </div>
                <div className='flex items-center'>
                <p className='text-base'>{moment(comment.createdAt).format('DD MMMM YYYY')}</p>
                </div>
                </div>
                <p className="whitespace-pre-line w-full px-4">{parse(comment.comment)}</p>
                {comment.response && (<div className='mt-4 bg-slate-50 px-4 py-6'>
                <div className='mb-4 flex gap-3 justify-between'>
                <div className="flex items-center gap-3">
                  <Image src="/image/test.png" width={50} height={50} alt="avatar" />
                  <span className="font-semibold">Guillaume Bielli</span>
                </div>
                <div className='flex items-center'>
                {/* <p className='text-base'>{moment(comment.createdAt).format('DD MMMM YYYY')}</p> */}
                </div>
                </div>
                <p className="whitespace-pre-line w-full px-4">{comment.response}</p>
                </div>)}
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default Comments;