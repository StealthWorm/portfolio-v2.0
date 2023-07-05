'use client';
import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '../../typings';
import { urlFor } from '../../sanity/lib/client';

type Props = {
  pageInfo: PageInfo
}

export default function About({ pageInfo }: Props) {
  
  return (
    <motion.div
      initial={{ opacity: 0, }}
      whileInView={{ opacity: 1, }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}

        src={pageInfo?.profilePic}//{urlFor(pageInfo?.profilePic).url()}
        className='flex-shrink-0 w-24 h-24 rounded-full object-cover md:rounded-lg mt-32 md:w-64 md:h-96 md:mt-0 xl:w-[300px] xl:h-[400px]'
      />

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className="text-xl md:text-4xl font-semibold">
          Here is a <span className="underline decoration-emerald-400">little</span> background
        </h4>
        <p className="text-base md:overflow-y-auto">{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  )
}