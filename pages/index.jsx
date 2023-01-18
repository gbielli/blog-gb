import React from "react";
import { HomeAbout, HomeHeader, HomePriority, HomeSkills } from "../components/home/";
import * as mailjet from 'node-mailjet';


export default function Home() {
    return (
        <div>
        <div>
        <HomeHeader />
        <HomeAbout />
        <HomePriority />
        <HomeSkills />
        </div>
        </div>
    )
}
