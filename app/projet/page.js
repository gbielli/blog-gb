'use client';

import React from 'react';
import LocomotiveScroll from '../utils/LocomotiveScroll';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ProjectTitle from './components/ProjectTitle';
import ProjectImage from './components/ProjectImage';





const page = () => {
    return (
        <LocomotiveScroll>
            <div className='pt-10 px-6'>
                <ProjectTitle />
                <ProjectImage />

            </div>
        </LocomotiveScroll>
    )
}

export default page