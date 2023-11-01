import React from "react";
import ContactForm from "./components/ContactForm";
import BlogTitle from '@/app/blog/components/BlogTitle/BlogTitle';
import LocomotiveScroll from "../utils/LocomotiveScroll";


export const metadata = {
    title: 'Guillaume Bielli | Formulaire de contact',
    description: "Vous avez une question ou souhaitez simplement échanger avec moi ? remplissez ce formulaire et je vous répondrai rapidement."
  }

export default function Contact() {
    return (
        <LocomotiveScroll>
            <div>
            <BlogTitle 
            Title1={"On échange ?"}
            Title2={"c'est par ici"}
            Subtitle={"Vous avez une question ou souhaitez simplement échanger avec moi ? Remplissez ce formulaire et je vous répondrai rapidement."}
             />
            <ContactForm />
            </div>
        </LocomotiveScroll>
    )
}
