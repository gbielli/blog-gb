import { useContext, useState } from "react";
import Logo from '../public/gb-logo.png'
import Link from 'next/link';
import { useRouter } from 'next/router'
import Form from '../components/home/form'


const categories = [{name: 'React', slug: 'react' }, { name:'Matomo', slug:'matomo'}]
const menu = [{name: 'mon ku·ri·ku·lom'}, { name:'get in touch'}]


const Header = ({click}) => {
  const router = useRouter();

  return (
    <div className="bg-secondary">
      <div className="container mx-auto">
        <div className="container mx-auto border-blue-400 py-6 flex align-center">
          <div className="self-center">
            <Link className="text-lg" href="/">
              <span className="text-secondary2">./</span>
              <span className="font-abril">Guillaume Bielli</span>
            </Link>
          </div>
          <div className="ml-auto flex align-center font-mulish text-lg">
            {router.pathname === '/' ?
            <>
             <a id="underline" href="" onClick={click} >mon ku·ri·ku·lom</a>
             <Link className="ml-8" key={category.slug} href={`/category/${category.slug}`}>
                  <span id="underline" className="self-center md:float-right align-middle text-black cursor-pointer">
                  {category.name}
                  </span>
              </Link>
             </> : 
              categories.map((category) => (
              <Link className="ml-8" key={category.slug} href={`/category/${category.slug}`}>
                  <span id="underline" className="self-center md:float-right align-middle text-black cursor-pointer">
                  {category.name}
                  </span>
              </Link>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
