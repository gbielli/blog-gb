'use client'

import { useEffect, useState } from "react";
import Link from 'next/link';


const categories = { name: 'Matomo', slug: 'matomo' }



const Header = () => {

  const [toggle, setToggle] = useState(false);
  const [menu, setMenu] = useState('');
  const [navbar, setNavbar] = useState(false);
  const [custom, setCustom] = useState('');

  const handleToggle = () => {
    { toggle ? setToggle(false) : setToggle(true) }
    { toggle ? setMenu('') : setMenu('show-menu') }
  }


  useEffect(() => {

    function checkScroll() {
      if (window.scrollY >= 620) {
        setNavbar(true);
        setCustom('bg-white fixed')
      }
      else {
        setNavbar(false)
        setCustom('bg-secondary fixed')
      }
    }

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);

  }, []);


  return (
    <>
      <div className={`w-full z-10 fixed bg-secondary`}>
        <div className="container mx-auto px-6">
          <div className="container mx-auto border-blue-400 py-6 flex align-center">
            <div className="self-center">
              <Link className="text-lg" href="/">

                <span className="text-secondary2">./</span>
                <span className="font-abril" id="abril">Guillaume Bielli</span>

              </Link>
            </div>

            <div className={`ml-auto flex align-center font-mulish text-lg gap-3`}>


              <div className={`flex align-center gap-6 nav__menu`} onClick={handleToggle}>
                <Link className="self-center md:float-right align-middle text-black cursor-pointer" href="/contact" id="underline">

                  <span id="underline">contact</span>

                </Link>
                <Link className="self-center md:float-right align-middle text-black cursor-pointer" href="/blog" id="underline" >

                  <span id="underline">blog</span>

                </Link>
              </div>



            </div>
           
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
