import React from 'react'
import { motion } from 'framer-motion'
import { Skill } from '../../typings';
import { urlFor } from '../../sanity/lib/client';

type Props = {
  directionLeft?: boolean;
  skill: Skill;
}

function Skill({ directionLeft, skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer" title={skill.title}>
      <motion.img
        initial={{
          x: directionLeft ? 0 : 0,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={skill?.image}//{urlFor(skill?.image).url()}
        className='rounded-full border border-emerald-500 bg-gray-100 object-cover h-12 w-12 xl:h-20 xl:w-20 filter group-hover:grayscale  group-hover:drop-shadow-[0_0_10px_rgba(16,185,129,0.8)] transition duration-300 ease-in-out'
      />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-12 w-12 xl:h-20 xl:w-20 rounded-full z-0'>
          <div className="flex items-center justify-center h-full">
            <p className="text-xs font-bold text-black opacity-100 md:text-sm">{skill.progress}</p>
          </div>
        </div>
    </div>
  )
}

export default Skill