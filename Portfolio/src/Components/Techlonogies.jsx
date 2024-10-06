import React from 'react'
import {RiReactjsLine} from 'react-icons/ri'
import {FaPython} from 'react-icons/fa'
import { SiPostgresql } from "react-icons/si";
import { BiLogoDjango } from "react-icons/bi";
import { SiFlask } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import {motion} from 'framer-motion'

const iconvariants=(duration)=>({
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration:duration,
      case:"Linear",
      repeat:Infinity,
      repeatType:"reverse"

    }
  }
})
const Techlonogies=()=> {
  return (
    <div className='pb-24'>
        <motion.h2
        whileInView={{opacity:1 ,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
         className='my-20 text-center text-4xl'>
          Techlonogies
          </motion.h2>
        <motion.div
        whileInView={{opacity:1 ,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconvariants(2.5)}>
              
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconvariants(5)}>
              <FaPython
             className='text-7xl text-yellow-400 '/>
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconvariants(2.5)}>
            <SiPostgresql 
            className='text-7xl text-cyan-400' />
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconvariants(2)}>
            <BiLogoDjango className='text-7xl text-yellow-400'/>
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconvariants(6)}>
            <SiFlask className='text-7xl text-'/>
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconvariants(4)}>
            <SiJavascript className='text-7xl text-yellow-400' />
            </motion.div>
        </motion.div>
      
    </div>
  )
}

export default Techlonogies