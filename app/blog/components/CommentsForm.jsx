'use client'

import React, { useState } from 'react'
import { submitComment } from '@/services/index'

const CommentsForm = ({slug}) => {


  const [error, setError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');


  const handleCommentSubmission = (e) => {

    e.preventDefault()

    if (!comment || !name || !email ) {
      setError(true);
      return;
  }

  const commentsObj = { name, email, comment, slug }

  submitComment(commentsObj)
  .then((res) => {
    if (res.ok) {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);},
        3000);
    }
  })
}


  return (
    <div className='py-3 lg:py-6 mx-auto w-full flex gap-5 flex-col max-w-3xl mb-10'>
      <h3 className='font-abril text-2xl border-b pb-6'>Publier un commentaire</h3>
      
      <div className='pt-4'>
        <input type="text" 
        onChange={(e) => setName(e.target.value)}
        placeholder='Prenom'
        name='name'
        className='py-3 border rounded-md font-mulish text-base px-2 w-full' />
      </div>
      <div>
        <input type="text" 
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email'
        name='email' 
        className='py-3 border rounded-md font-mulish text-base px-2 w-full'/>
      </div>
      <div className=''>
        <textarea className='py-3 border  rounded-md font-mulish px-2 w-full text-base'
         onChange={(e) => setComment(e.target.value)}
         placeholder="Commentaires"
         name="Commentaires" 
         id="" 
         cols="10" 
         rows="3">
          
        </textarea>
      </div>
      {error && <p className='text-red-500'>Veuillez remplir tous les champs</p>}
      <div>
        <button type='button'
        onClick={handleCommentSubmission}
        className='form-button block mt-5 text-center relative cursor-pointer'>
          <span className='border px-8 py-3 rounded-full border-black'>Envoyer</span>
        </button>
        {showSuccessMessage && <p className='text-green-500'>Votre commentaire a bien été envoyé</p>}
      </div>
    </div>
  )
}

export default CommentsForm
