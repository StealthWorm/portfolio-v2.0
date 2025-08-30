'use client';
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import { Social } from '../../typings';

type Props = {
  socials: Social[]
}

export default function Header({ socials }: Props) {

  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-row items-center'
      >
        {socials.map((social) => (
          <div className="hover:brightness-150 transition-all duration-300 ease-in-out" key={social._id}>
            <SocialIcon
              url={social.url}
              fgColor='rgb(52, 211, 153)'
              bgColor='transparent'
              className='drop-shadow-[0_0_10px_rgba(110,231,183,0.8)]'
            />
          </div>
        ))}
      </motion.div>

      <motion.div
        suppressHydrationWarning={true}
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className='flex flex-row items-center text-emerald-400 drop-shadow-[0_0_10px_rgba(110,231,183,0.8)] cursor-pointer'
      >
        <a href="#contact" className='hover:brightness-150 transition-all duration-300 ease-in-out'>
          <SocialIcon className="cursor-pointer" network='email' fgColor='rgb(52, 211, 153)' bgColor='transparent' />
          <p className="uppercase hidden md:inline-flex text-sm text-emerald-400">Get in touch</p>
        </a>
      </motion.div>
    </header>
  )
}