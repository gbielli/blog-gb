import React, { use } from 'react'
import ButtonBlock from './ButtonBlock'
import { useState, useRef } from 'react';


const Form = ({ close }) => {

  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('sending');

        let data = {
            name,
            email
        }

        

        fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          
          .then((res) => {
            console.log('Response received')
            if(res.status === 200) {
              console.log('Response succeeded!')
              setSubmitted(true)
              setName('')
              setEmail('')
            }
          })
    }

  return (
    <>
    <div className='mx-auto fixed w-full h-full flex items-center' id="form">
    <form action="" method="" className='form px-10 py-4 w-96 m-auto bg-white border border-black'>
    
        {submitted ?
        <div className="pb-10">
            <div className='text-right cursor-pointer text-2xl' id="close-btn" onClick={close}>×</div>
            <lottie-player
          id="firstLottie"
          ref={ref}
          autoplay
          mode="normal"
          src="https://lottie.host/3d7d2c51-8936-4478-bfd1-655397e5a2ff/r3dE1ao7wp.json"
          style={{ width: "200px", height: "200px", margin:"auto"}}
        ></lottie-player>
            <h2 className='font-abril text-2xl text-center'>🚀 Bingo! L'email a été envoyé</h2>
            <p className='text-center font-mulish'>Je viens de t'envoyer mon ku·ri·ku·lom par les internet, check l'onglet promotion ou indésirable si tu ne le vois pas ! </p>
        </div>     
         : 
        <> <div className='text-right cursor-pointer text-2xl' id="close-btn" onClick={close}>×</div>
        <h2 className='text-2xl font-abril'>✋ Opopopopo ! Pas si vite !</h2>
        <p id="toto" className='font-mulish'>un bon marketeux ne peut pas te laisser partir comme ça ! <span class="underline">Laisse moi ton email</span> et je te transfert mon CV, promis ! </p>
        
        <div className='my-4 flex flex-col gap-3'>
            <div className="form-element flex flex-col">
            <label className='font-mulish' for="prenom">Prenom</label>
            <input  onChange={(e) => setName(e.target.value)} className='py-3 border border-black rounded-sm font-mulish text-md px-2' type="text" id="prenom" name="prenom" placeholder="ton prenom" required />
            </div>
            <div className="form-element flex flex-col">
                <label className='font-mulish' for="email">Email</label>
                <input onChange={(e) => setEmail(e.target.value)} className='py-3 border border-black rounded-sm font-mulish px-2' type="email" id="email" name="email" placeholder="ton email" required />
            </div>
        </div>
        

        <div className="">
            <input type="checkbox" id="checkbox" />
            <label className='font-mulish' for="checkbox">Je consent consentir à recevoir par email le ku·ri·ku·lom de Guillaume Bielli </label>
        </div>

        <ButtonBlock  text="Envoyer" click={(e) => {handleSubmit(e)}}/>
        </>}      

                </form>
                </div>
                </>
  )
}

export default Form