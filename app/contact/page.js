import React from "react";
import ContactForm from "../../components/old/ContactForm";
import BlogTitle from '@/app/blog/components/BlogTitle/BlogTitle'


export const metadata = {
    title: 'Guillaume Bielli | Formulaire de contact',
    description: "..."
  }

export default function Contact() {
    return (
        <>
            <div>
            <BlogTitle />
            <ContactForm />
            </div>
        </>
    )
}
