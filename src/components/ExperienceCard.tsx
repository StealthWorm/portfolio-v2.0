import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '../../typings'
import { urlFor } from '../../sanity/lib/client'

type Props = {
  experience: Experience;
}

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className='h-[32rem] flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[800px] snap-center backdrop-blur-sm bg-white/10 p-10 transition-opacity duration-200 overflow-hidden py-4'>
      <motion.img
        initial={{ y: -50, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 0.3, y: 0 }}
        viewport={{ once: true }}
        className="z-0 absolute  -left-6 -top-6 object-cover h-28 w-28 rounded-full object-center xl:w-[150px] xl:h-[150px]"
        src={typeof experience?.companyImage === 'string' ? experience?.companyImage : urlFor(experience?.companyImage).url()}
        alt=""
      />

      <div className='px-0 md:px-6 text-left z-10'>
        <h4 className="text-2xl font-semibold drop-shadow-[0_0_10px_rgba(110,231,183,0.8)]">{experience.jobTitle}</h4>
        <p className='font-bold text-md mt-2 text-gray-300 uppercase tracking-[8px]'>{experience.company}</p>
        <div className='flex space-x-2 my-2'>
          {experience.technologies.map((tech) => (
            <img
              key={tech._id}
              className='h-8 w-8 rounded-full '
              title={tech.title}
              src={typeof tech.image === 'string' ? tech.image : urlFor(tech.image).url()}
              alt={tech.title}
            />
          )
          )}
        </div>

        <p className='uppercase py-2 text-sm text-emerald-600 mt-2'>
          {new Date(experience.dateStarted).toLocaleString('en-US', { month: 'short', year: 'numeric' })} - {" "}
          {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toLocaleString('en-US', { month: 'short', year: 'numeric' })}
        </p>

        <ul className='w-full list-disc px-2 space-y-3 text-md mt-3 font-poppins max-h-60 overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-emerald-500/80'>
          {experience.points.map((point, i) => (
            <li key={i}>⚪ {point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}