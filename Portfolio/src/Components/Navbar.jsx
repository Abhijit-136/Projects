import { FaLinkedin } from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import logo from '../assets/ravikumarLogo.webp'
import React from 'react'
const Navbar=()=> {
  return (
    <div className='flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <a href="/" aria-label='Home'>
            <img src={logo} className='mx-2' width={50} height={33} alt='logo
            '/>
            </a>
        </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkdin.com/in/your-linkdin-profile" 
        target='_blank' 
        rel='noopender norefrrer'
         aria-label='LinkedIn'>
        <FaLinkedin/>
        </a>

        <a href="https://www.github.com/in/your-github-profile" 
        target='_blank' 
        rel='noopender norefrrer'
         aria-label='GitHub'>
        <FaGithub/>
        </a>

        
        <a href="https://www.Instagram.com/in/your-Instagram-profile" 
        target='_blank' 
        rel='noopender norefrrer'
         aria-label='Instagram'>
        <FaInstagram/>
        </a>
        
        <a href="https://www.Twitter.com/in/your-Twitter-profile" 
        target='_blank' 
        rel='noopender norefrrer'
         aria-label='Twitter'>
        <FaTwitter/>
        </a>

      </div>
    </div>
  )
}

export default Navbar
