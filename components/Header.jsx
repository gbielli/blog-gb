import { useContext } from "react";
import Logo from '../public/gb-logo.png'
import Link from 'next/link';

const categories = [{name: 'React', slug: 'react' }, { name:'Matomo', slug:'matomo'}]

const Header = () => {
  return (
    <div className="bg-secondary">
    <div className="container mx-auto px-10">
        <div className="container mx-auto border-blue-400 py-8 flex align-center">
          <div className="self-center">
            <Link className="text-lg" href="/">
              <span className="text-secondary2">./</span>
              <span className="font-abril">Guillaume Bielli</span>
            </Link>
          </div>
        <div className="ml-auto flex align-center font-mulish text-lg">
          {categories.map((category) => (
            <Link className="ml-8" key={category.slug} href={`/category/${category.slug}`}>
              <span id="underline" className="self-center md:float-right align-middle text-black cursor-pointer">
              {category.name}
              </span>
            </Link>
          ))}
        </div>
    </div>

    </div>
    </div>
  )
}

export default Header
