import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="footer bg-secondary">
            <div className="content-footer container mx-auto pt-40 pb-60 px-6">
                <div className="content grid  grid-cols-1 md:grid-cols-2 gap-16">
                    <h2 className='text-5xl font-abril'>Tu souhaites <br></br> <span id='underline'>échanger ?</span></h2>
                    <p className='font-mulish self-center text-md'>Tu veux boire un café, discuter d'un projet, m'envoyer un mail sans raison particulière ? tu peux me contacter à l'adresse email <span id='underline'>hello@guillaumebielli.fr</span></p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
