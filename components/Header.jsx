import { useContext } from "react";
import Logo from '../public/gb-logo.png'
import Link from 'next/link';

const categories = [{name: 'React', slug: 'react' }, { name:'Matomo', slug:'matomo'}]

const Header = () => {
  return (
    <div className="mx-auto px-10 mb-8 bg-secondary">
        <div className="container mx-auto border-blue-400 py-8 flex align-center">
          <div className="self-center">
            <Link className="" href="/">
                <img className="" width="120px" src='https://media.graphassets.com/output=format:jpg/resize=width:200,height:200/6wGaVx6Qf22iyoi4YGjd'/>
            </Link>
          </div>
        <div className="ml-auto flex align-center">
          {categories.map((category) => (
            <Link className="ml-3" key={category.slug} href={`/category/${category.slug}`}>
              <span className="self-center md:float-right align-middle text-black font-semibold cursor-pointer">
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
