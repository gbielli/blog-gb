import { useContext } from "react";
import Logo from '../public/gb-logo.png'
import Link from 'next/link';

const categories = [{name: 'React', slug: 'react' }, { name:'Matomo', slug:'matomo'}]

const Header = () => {
  return (
    <div className="mx-auto px-10 mb-8 bg-secondary">
        <div className="container mx-auto border-blue-400 py-8">
          <div className="md:float-left block">
            <Link href="/">
                <span className="cursor-pointer font-bold text-4L text-black">
                <img width="140px" src='https://media.graphassets.com/output=format:jpg/resize=width:200,height:200/6wGaVx6Qf22iyoi4YGjd'/>
                </span>
            </Link>
          </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer">
              {category.name}
              </span>
            </Link>
          ))}
        </div>
    </div>

    </div>
  )
}

export default Header
