import React from 'react';
import ButtonBlock from './home/ButtonBlock';
import { useState, useRef } from 'react';

const ContactForm = ({ close }) => {

  


  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('sending');

        let data = {
            name,
            email,
            message
        }


        fetch(`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/sendEmail`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          
          .then((res) => {
            if(res.status === 200) {
              console.log('Response succeeded!')
              console.log(data)
              setSubmitted(true)
              setName('')
              setEmail('')
              setMessage('')
            }
          })
    }

  return (
    <div className='py-40'>
    <form action="" method="" onSubmit={(e) => handleSubmit(e)} className='form box-border px-4 lg:px-10  py-3 lg:py-6  w-11/12 lg:w-6/12 mx-auto bg-white border border-black'>
    
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
        <> <div className='text-right cursor-pointer text-2xl' id="close-btn" onClick={close}>×</div>
        <h2 className='text-2xl' data-font='abril'>✋ Un message ? c'est par ici</h2>
        <p id="toto" className='font-mulish'> <span id="underline">Laisse moi ton message</span> et je te contacterai dès que possible !</p>
        
        <div className='my-4 flex flex-col gap-3'>
            <div className="form-element flex flex-col">
            <label className='font-mulish' htmlFor="prenom">Prenom</label>
            <input  onChange={(e) => setName(e.target.value)} className='py-3 border border-black rounded-sm font-mulish text-md px-2' type="text" id="prenom" name="name" placeholder="ton prenom" required />
            </div>
            <div className="form-element flex flex-col">
                <label className='font-mulish' htmlFor="email">Email</label>
                <input onChange={(e) => setEmail(e.target.value)} className='py-3 border border-black rounded-sm font-mulish px-2' type="email" id="email" name="email" placeholder="ton email" required />
            </div>
            <div class="form-element flex flex-col">
                <label className='font-mulish'htmlFor="text">Message</label>
                <textarea onChange={(e) => setMessage(e.target.value)} className='py-3 border border-black rounded-sm font-mulish px-2' type="text" name="message" id="message" rows="5" cols="33" maxlength="1500"></textarea>
            </div>
        </div>
        

        <div className="">
            <input type="checkbox" id="checkbox" required/>
            <label className='font-mulish' for="checkbox">Je consent consentir à recevoir par email le ku·ri·ku·lom de Guillaume Bielli </label>
        </div>
        {/* <button  className='h-12 w-12 bg-primary' type='submit'>submit</button> */}
        <ButtonBlock  type='submit' text="Envoyer"/>
        </>}      

                </form>
                </div>
  )
}

export default ContactForm