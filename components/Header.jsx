import { useContext, useState } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router'


const categories = { name:'Matomo', slug:'matomo'}
const menu = [{name: 'mon ku·ri·ku·lom'}, { name:'get in touch'}]



const Header = ({click}) => {
  const router = useRouter();

  const [toggle, setToggle] = useState(false);
  const [menu, setMenu] = useState('')

  const handleToggle = () => {
    {toggle ? setToggle(false) : setToggle(true)}
    {toggle ? setMenu('') : setMenu('show-menu')}
  }
  

  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-6">
        <div className="container mx-auto border-blue-400 py-6 flex align-center">
          <div className="self-center">
            <Link className="text-lg" href="/">
              <span className="text-secondary2">./</span>
              <span className="font-abril">Guillaume Bielli</span>
            </Link>
          </div>
          <div className={`ml-auto flex align-center font-mulish text-lg gap-3`}>
            {router.pathname === '/' ?
            
              <div className={`flex align-center gap-6 ${menu}`}>
             {/* <a className="self-center" id="underline" href="" onClick={click} >mon ku·ri·ku·lom</a> */}
             <Link className="self-center" href="/blog">
                  <span id="underline" className="self-center md:float-right align-middle text-black cursor-pointer">
                  blog
                  </span>
              </Link>
              </div>
             : 
             
              <Link className="ml-8" key={categories.slug} href={`/blog/category/${categories.slug}`}>
                  <span id="underline" className="self-center md:float-right align-middle text-black cursor-pointer">
                  {categories.name}
                  </span>
              </Link>              
            }
          </div>
          {/* <div className="nav__btns self-center">
                <div onClick={handleToggle} className={toggle ? 'nav__toggle active' : 'nav__toggle'} id="nav-toggle">
                    <span></span>
                </div>
                </div> */}
        </div>
      </div>
    </div>
  )
}

export default Header
