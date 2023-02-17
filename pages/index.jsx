import React from "react";
import Head from "next/head";
import { HomeAbout, HomeHeader, HomePriority, HomeSkills } from "../components/home/";


export default function Home() {
    return (
        <>
            <Head>
                <title>Guillaume Bielli | Growth Hacker & Frontend Lover</title>
                <link rel="icon" href="/image/gbico.ico" />
            </Head>
            <div>
            <div>
            <HomeHeader />
            <HomeAbout />
            <HomePriority />
            <HomeSkills />
            </div>
            </div>
        </>
    )
}
