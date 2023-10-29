'use client'

import React from 'react';
import ButtonBlock from '../../../components/old/home/ButtonBlock';
import { useState, useRef } from 'react';

const ContactForm = () => {

  


  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, isLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        isLoading(true);
        console.log('sending');


        let data = {
            name,
            email,
            message
        }

      const response = await fetch('/api/mailjet', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
            body: JSON.stringify(data),
          })

      if (response.ok) {
        console.log('success');
        console.log(JSON.stringify(data))
        setSubmitted(true);
        isLoading(false);
        setEmail('')
        setMessage('')
        setName('')
      }

      if (!response.ok) {
        console.log('message not send')
      }

    }

  return (
    <div className='py-20'>
    <form action="" method="" onSubmit={(e) => handleSubmit(e)} className='form px-10'>
    
        {submitted ?
        <div className="pb-10">
            <lottie-player
          id="firstLottie"
          ref={ref}
          autoplay
          mode="normal"
          src='https://assets6.lottiefiles.com/packages/lf20_uirgo35g.json'
          style={{ width: "150px", height: "150px", margin:"auto", marginBottom:"20px"}}
        ></lottie-player>
            <h2 className='font-abril text-2xl text-center'>🚀 Bingo ! L'email a été envoyé.</h2>
            <p className='text-center font-mulish'>Ton email a bien été envoyé <span id="underline">par les internets</span>, Je te réponds dès que possible ! </p>
        </div>     
         : 
        <>
        
        <div className='my-4 flex flex-col gap-20'>
          <div className='flex gap-20 flex-wrap'>
            <div className="form-element flex flex-col w-full">
            <label className='font-mulish' htmlFor="prenom">Prenom</label>
            <input  onChange={(e) => setName(e.target.value)} value={name} className='py-6 border-b border-[#1b1b1b] font-mulish text-md px-2 bg-[#f8f8f8] focus:outline-none' type="text" id="prenom" name="name" placeholder="Michel" required />
            </div>
            <div className="form-element flex flex-col w-full">
                <label className='font-mulish' htmlFor="email">Email</label>
                <input onChange={(e) => setEmail(e.target.value)} value={email} className='py-6 border-b border-[#1b1b1b]  font-mulish px-2 bg-[#f8f8f8] focus:outline-none' type="email" id="email" name="email" placeholder="michel@gmail.com" required />
            </div>

          </div>
            <div className="form-element flex flex-col">
                <label className='font-mulish'htmlFor="text">Message</label>
                <textarea onChange={(e) => setMessage(e.target.value)} value={message} className='py-6 border-b border-[#1b1b1b] font-mulish px-2 bg-[#f8f8f8] focus:outline-none' type="text" name="message" placeholder="Un michel vaut mieux que deux tu l'auras" id="message" rows="5" cols="33" maxLength="1500"></textarea>
            </div>
        </div>
        

        {/* <div className="">
            <input type="checkbox" id="checkbox" required/>
            <label className='font-mulish' htmlFor="checkbox">Je consent consentir à reçevoir un mail de Guillaume Bielli </label>
        </div> */}
        
        <button type='submit' disabled={loading} className="disabled:opacity-50 border border-black px-20 py-5 rounded-full text-center relative overflow-hidden mt-10">
       
        {loading ? 
         <svg aria-hidden="true" class="ml-3 inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
         <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
     </svg> : "Envoyer" }
        </button>
        </>}      

                </form>
                </div>
  )
}

export default ContactForm