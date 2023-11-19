'use client'

import React, { useEffect, useState } from 'react';
import moment from 'moment';
import parse from 'html-react-parser';
import Image from 'next/image';

import { getComments } from '../../../services';

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
        <div className=" lg:py-6 mx-auto w-full max-w-3xl lg:pb-20">
          <h3 className="mb-8 text-2xl border-b pb-4">
            {comments.length}
            {' '}
            commentaires
          </h3>
            {comments.map((comment, index) => (
              <div key={index} className="mb-4 pb-8">
                <div className='mb-2 flex gap-3 justify-between'>
                <div className="flex items-center gap-3">
                  <div className='relative w-12 h-12  bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-500 to-indigo-700 rounded-full p-[1px]'>
                    <div className='w-full h-full bg-[#F8F8F8] rounded-full'>
                  <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-clip-text text-transparent bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-pink-500 to-violet-500'>{comment.name.charAt(0).toUpperCase()}</span>
                  </div>
                  </div>
                  <span className="font-semibold first-letter:uppercase">{comment.name} <span className='font-normal text-slate-500'> • {moment(comment.createdAt).format('HH:mm')}</span> </span>
                </div>
                <div className='flex items-center'>
                <p className='text-base text-slate-500'>{moment(comment.createdAt).format('DD MMMM YYYY')}</p>
                </div>
                </div>
                <p className="whitespace-pre-line px-4 py-4 first-letter:uppercase border border-slate-200 bg-white rounded-lg ml-14">{parse(comment.comment)}</p>
                {comment.response && (<div className=' bg-slate-50 '>
                <div className='mb-4 flex gap-3 justify-between'>
                {/* <div className="flex items-center gap-3 ml-14">
                  <Image src="/image/gb-avatar.png" width={50} height={50} alt="avatar" />
                  <span className="font-semibold">Guillaume Bielli</span>
                </div> */}
                <div className='flex items-center'>
                {/* <p className='text-base'>{moment(comment.createdAt).format('DD MMMM YYYY')}</p> */}
                </div>
                </div>
                <div className='text-slate-500 ml-40 text-right mb-2'>Réponse de Guillaume Bielli</div>
                <p className="whitespace-pre-line border bg-blue-500 text-white rounded-lg ml-20 sm:ml-40 px-4 py-4 block">{comment.response}</p>
                </div>)}
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default Comments;