import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="footer bg-secondary">
            <div className="content-footer container mx-auto pt-20 pb-40 md:pt-40 md:pb-60 px-6">
                <div className="content grid  grid-cols-1 md:grid-cols-2 gap-16">
                    <p className='text-5xl font-abril' id="abril">Tu souhaites <br></br> <span id='underline'>échanger ?</span></p>
                    <p className='font-mulish self-center text-md'>Tu veux boire un café, discuter d'un projet, m'envoyer un mail sans raison particulière ? tu peux me contacter à l'adresse email <span id='underline'>hello@guillaumebielli.fr</span></p>
                </div>
            </div>
            <div className='container mx-auto px-6 py-3'>©Guillaume Bielli - 2023</div>
        </div>
        
    </footer>
  )
}

export default Footer
