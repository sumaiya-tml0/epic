import React from 'react'
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

import logo from "../assets/logo.png"
function Header() {
  return (
    <div className='flex items-center justify-between'>
        <img src={logo} alt="" />

        <div>
            <ul className='uppercase flex items-center gap-6 !text-xl text-gray-500'>
                
                <li><a href="">our company</a></li>
                <li><a href="">our purpose</a></li>
                <li><a href="">our capabilities</a></li>
                <li><a href="">our career</a></li>
            </ul>
        </div>
        <div>
            <ul className='flex items-center gap-6 !text-xl'>
                <li><a href=""><FaLinkedin />
</a></li>
                <li><a href=""><FaFacebook /></a></li>
                <li><a href=""><FaInstagramSquare /></a></li>
                <li><a href="">our career</a></li>
            </ul>
        </div>

        
    </div>
  )
}

export default Header