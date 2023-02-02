import React from "react";
import Head from "next/head";
import { HomeAbout, HomeHeader, HomePriority, HomeSkills } from "../components/home/";
import * as mailjet from 'node-mailjet';


export default function Home() {
    return (
        <>
            <Head>
                <title>Guillaume Bielli | Growth Hacker & Frontend Lover</title>
                <link rel="icon" href="/favicon.ico" />
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