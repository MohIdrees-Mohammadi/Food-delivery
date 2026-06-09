"use client"
import React from 'react'
import Header from './components/headSection'
import HeaderBottom from './components/headerBottom'

import { motion } from 'framer-motion'

const page = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50}}
    whileInView={{ opacity: 1, y: 0}}
    transition={{duration:1, ease: "easeOut"}}
    viewport={{once: false , amount: 0.2}}
    
    className='bg-gray-300 flex flex-col w-full min-h-screen '>
      <Header />
      <HeaderBottom />
    </motion.div>
  )
}

export default page
