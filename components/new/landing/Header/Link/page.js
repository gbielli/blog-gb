'use client';

import React, { useState } from 'react';
import Nav from '../Nav/page';


const navItems = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "Blog",
        href: "/blog"
    },
    {
        title: "Contact",
        href: "/contact"
    }
  ]

const Link = () => {

    const [selectedLink, setSelectedLink] = useState({isHover: false, index:0});


  return (
    <Nav links={navItems} selectedLink={selectedLink} setSelectedLink={setSelectedLink} />
  )
}

export default Link