import React, { useState, useRef, useEffect } from 'react'
import { submitComment } from '../services';

const CommentsForm = ({slug}) => {


  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl =useRef();

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name');
    emailEl.current.value = window.localStorage.getItem('email');
    commentEl.current.value = window.localStorage.getItem('comment');
  }, [])

  const handleCommentSubmission = () => {
    setError(false);

    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;

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
    <div className='py-3 lg:py-6 mx-auto bg-white w-full flex gap-5 flex-col max-w-3xl border-t'>
      <h3 className='font-abril text-2xl'>Publier un commentaire</h3>
      
      <div>
        <input type="text" ref={nameEl}
        placeholder='name'
        name='name'
        className='py-3 border border-black rounded-sm font-mulish text-base px-2 w-full' />
      </div>
      <div>
        <input type="text" ref={emailEl}
        placeholder='email'
        name='email' 
        className='py-3 border border-black rounded-sm font-mulish text-base px-2 w-full'/>
      </div>
      <div className=''>
        <textarea className='py-3 border border-black rounded-sm font-mulish px-2 w-full text-base' ref={commentEl} placeholder="Commentaires" name="Commentaires" id="" cols="10" rows="3">
          
        </textarea>
      </div>
      {error && <p className='text-red-500'>Veuillez remplir tous les champs</p>}
      <div>
        <button type='button'
        onClick={handleCommentSubmission}
        className='form-button inline-block px-10 py-3 bg-primary text-center relative cursor-pointer'>
          <span className='text-white font-mulish text-base'>Envoyer</span>
          <span className="border-4 border-primary absolute block w-full h-full left-[8px] top-[8px]"></span>
        </button>
        {showSuccessMessage && <p className='text-green-500'>Votre commentaire a bien été envoyé</p>}
      </div>
    </div>
  )
}

export default CommentsForm
