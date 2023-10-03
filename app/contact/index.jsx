import React from "react";
import Head from "next/head";
import { ContactForm } from "../../components/";
import {Abril_Fatface} from 'next/font/google'



const abril = Abril_Fatface({
    subsets: ['latin'],
    weight:['400'],
    variable:'--font-abril',
  })

export default function Contact() {
    return (
        <>
            <Head>
                <title>Guillaume Bielli | Contact </title>
                <link rel="icon" href="/image/gbico.ico" />
            </Head>
            <div className={`${abril.variable} font-abril`} >
            <ContactForm />
            </div>
        </>
    )
}
