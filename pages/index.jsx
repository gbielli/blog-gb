import React from "react";
import Head from "next/head";
import { HomeAbout, HomeHeader, HomePriority, HomeSkills } from "../components/home/";
import {Abril_Fatface } from 'next/font/google'

const montserrat = Abril_Fatface({
    subsets: ['latin'],
    weight:['400'],
  })

export default function Home() {
    return (
        <>
            <Head>
                <title>Guillaume Bielli | Growth Hacker & Frontend Lover</title>
                <link rel="icon" href="/image/gbico.ico" />
            </Head>
            <div className={montserrat.className}>
            <HomeHeader />
            <HomeAbout />
            <HomePriority />
            <HomeSkills />
            </div>
        </>
    )
}
