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
          <div className='flex gap-20'>
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
                <textarea onChange={(e) => setMessage(e.target.value)} value={message} className='py-6 border-b border-[#1b1b1b] font-mulish px-2 bg-[#f8f8f8] focus:outline-none' type="text" name="message" id="message" rows="5" cols="33" maxLength="1500"></textarea>
            </div>
        </div>
        

        {/* <div className="">
            <input type="checkbox" id="checkbox" required/>
            <label className='font-mulish' htmlFor="checkbox">Je consent consentir à reçevoir un mail de Guillaume Bielli </label>
        </div> */}
        <button type='submit' disabled={loading} className="disabled:opacity-50 border border-black px-20 py-5 rounded-full text-center relative overflow-hidden mt-10">
        Envoyer
        </button>
        </>}      

                </form>
                </div>
  )
}

export default ContactForm