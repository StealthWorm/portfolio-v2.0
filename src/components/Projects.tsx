'use client';
import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Project } from '../../typings';
import Image from 'next/image';

type Props = {
  projects: Project[]
}

export default function Projects({ projects }: Props) {
  const memoizedProjects = useMemo(() => projects, [projects]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-emerald-500/80'>
        {memoizedProjects?.map((project, i) => (
          <div
            className='relative w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 h-screen mt-6 md:mt-0'
            key={project._id}
          >
            <a
              className='flex w-auto h-auto hover:shadow-lg hover:shadow-emerald-500 transition-all duration-300 ease-in-out'
              href={project.linkToBuild}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} project`}
            >
              <motion.img
                initial={{
                  y: -200,
                  opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={project.image}
                alt={`${project.title} project screenshot`}
                className='h-[10rem] w-screen md:h-[12rem] md:w-[100%] object-fill'
                loading="lazy"
              />
            </a>

            <div className='space-y-8 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-xl md:text-3xl font-semibold text-center'>
                <span className='underline decoration-emerald-500'>
                  Case Study {i + 1} of {memoizedProjects.length}:
                </span>{" "}
                {project?.title}
              </h4>

              <div className='flex flex-row space-x-4 items-center justify-center flex-wrap'>
                {project.technologies.map(technology => (
                  <Image
                    className='h-6 w-6'
                    width={6}
                    height={6}
                    key={technology._id}
                    src={technology.image}
                    alt={technology.title}
                    title={technology.title}
                    loading="lazy"
                  />
                ))}
              </div>

              <p className='text-lg text-center md:text-left max-h-[6rem] w-full overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/10 scrollbar-thumb-emerald-400/80'>
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full absolute top-[27%] bg-gradient-to-r from-emerald-400 opacity-30 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  )
}