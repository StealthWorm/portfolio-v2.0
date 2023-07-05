'use client';
import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard';
import { Experience } from '../../typings';

type Props = {
  experiences: Experience[];
}

export default function WorkExperience({ experiences }: Props) {
  
  return (
    <motion.div
      initial={{ opacity: 0, }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative overflow-hidden flex-col h-screen text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className='absolute top-32 uppercase tracking-[20px] text-gray-400 text-2xl pl-6'>
        Experience
      </h3>

      <div className='absolute bottom-2 mx-4 w-full flex space-x-5 overflow-x-scroll px-10 pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-track-transparent scrollbar-thumb-emerald-400/80'>
        {experiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  )
}