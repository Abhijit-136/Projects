import React from 'react'
import {HERO_CONTENT} from '../constants'
import profilepic from '../assets/AbhijitMohapatra.webp'
import {motion} from "framer-motion"

const containerVarients={
  hidden:{opacity:0,x:-100},
  visible:{
    opacity:1,
    x:0,
    transition:{
      duration:0.5,
      staggerChildren:0.5,
    }
  }
}

const childVarients={
  hidden:{opcity:0,x:-100},
  visible:{opcity:1,x:0 ,
    transition:{
    }}
}

const Hero=()=> {
  return (
    <div className='pb-4 lg:mb-36'>
        <div className='flex flex-wrap lg:flex-row-reverse'>
            <div className='w-full lg:w-1/2'>
            <div className='flex justify-center lg:p-8'>
                <motion.img 
                src={profilepic} 
                alt="Abhijit mohapatra"
                 className='border border-stone-900 rounded-3xl'
                 width={650}
                 height={650}
                 intial={{x:100,opacity:0}}
                 animate={{x:0,opcity:1}}
                 transition={{duration:1,delay:1.5}}/>
            </div>
            </div>
            <div className='w-full lg:w-1/2'>
            <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVarients}
            className='flex flex-col items-center lg:items-start mt-10'>
                <motion.h2
                variants={{childVarients}}
                 className='pb-2 text-4xl tracking-tighter lg:text-8xl'>Abhijit Mohapatra</motion.h2>
                <motion.span
                variants={childVarients}
                 className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent'>Python full stack devloper</motion.span>
                <motion.p 
                variants={childVarients}
                className='my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter'>{HERO_CONTENT}</motion.p>
                <motion.a 
                variants={childVarients}
                href="/resume.pdf"
                target='_blank'
                rel='noopener noreferrer'
                download
                className='bg-white rounded-full p-4 text-sm text-stone-800 mb-10'>Download Resume</motion.a>
            </motion.div>
            </div>

        </div>
      
    </div>
  )
}

export default Hero

