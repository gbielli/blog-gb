import React from "react";
import Head from "next/head";
import ContactForm from "../../components/old/ContactForm";



export default function Contact() {
    return (
        <>
            <Head>
                <title>Guillaume Bielli | Contact </title>
                <link rel="icon" href="/image/gbico.ico" />
            </Head>
            <div>
            <ContactForm />
            </div>
        </>
    )
}
