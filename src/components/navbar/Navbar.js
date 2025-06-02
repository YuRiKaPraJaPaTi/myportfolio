import React, { useState } from 'react'
import {Link} from "react-scroll"
import {logo} from "../../assets/index"
import {navLinksdata} from "../../constants"
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';


const Navbar = () => {

const [showMenu, setShowMenu] = useState(false);

  return (
    <div className='w-full h-20 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600'> 
       {/* Logo */}
       <div>
        <img src={logo} alt="logo" />
       </div>

       {/* Desktop Menu */}
       <div>
          <ul className='hidden md:flex items-center gap-10'>
            {
              navLinksdata.map(({_id, title, link})=>(
                <li className='text-base font-normal text-grey-400 tracking-wide cursor-pointer hover:text-designColor duration-300'
                    key={_id}>
                  <Link 
                    activeClass='active'
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                      {title}
                  </Link>
                </li>
              ))
            }
          </ul>
       </div>

       {/* Mobile Menu Icon */}
      <div className="md:hidden z-50" onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? (
          <HiX className="text-3xl text-designColor cursor-pointer" />
        ) : (
          <HiOutlineMenuAlt3 className="text-3xl text-gray-400 cursor-pointer" />
        )}
      </div>

      {/* Mobile Dropdown */}
      {showMenu && (
        <div className="absolute top-20 left-0 w-full bg-bodyColor p-6 flex flex-col items-center md:hidden shadow-md border-b border-gray-600">
          {navLinksdata.map(({ _id, title, link }) => (
            <Link
              key={_id}
              to={link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setShowMenu(false)} // close menu on click
              className="text-base font-medium text-gray-400 py-2 cursor-pointer hover:text-designColor"
            >
              {title}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Navbar