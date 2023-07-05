'use client';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import { PageInfo } from '../../typings';
import { urlFor } from '../../sanity/lib/client';

type Props = {
  pageInfo: PageInfo
}

export default function Hero({ pageInfo }: Props) {

  const [text, count] = useTypewriter({
    words: [
      "Hi there! 👾",
      `My name is ${pageInfo?.name}`,
      "random-dev-with-random-thoughts",
      "moved_by_coffee ☕",
      "<code_lover/>"
    ],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <div className="flex flex-col h-screen space-y-8 items-center justify-center text-center overflow-hidden relative" suppressHydrationWarning >
      <BackgroundCircles />

      <div className="flex relative items-center justify-center drop-shadow-[0_0_50px_rgba(0,0,0,0.8)]">
        <Image
          src={pageInfo?.heroImage} //{urlFor(pageInfo.heroImage).url()}
          alt=""
          width={500}
          height={500}
          className="relative rounded-full h-32 w-32 mx-auto object-cover drop-shadow-[0_0_50px_rgba(36,36,36,0.8)]"
        />
        <Image
          src={pageInfo?.heroImage} //{urlFor(pageInfo.heroImage).url()}
          alt=""
          width={500}
          height={500}
          className="absolute rounded-full h-32 w-32 mx-auto object-cover translate-x-[-5%] animate-glitch"
        />
        <Image
          src={pageInfo?.heroImage} //{urlFor(pageInfo.heroImage).url()}
          alt=""
          width={500}
          height={500}
          className="absolute rounded-full h-32 w-32 mx-auto object-cover translate-x-[3%] translate-y-[3%] animate-glitch2"
        />
      </div>

      <div className='z-20'>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className='text-xl md:text-5xl lg:text-6xl font-semibold px-10 py-4'>
          <span>{text}</span>
          <Cursor cursorColor='rgb(52 211 153)' cursorBlinking={true} />
        </h1>

        <div className='pt-12 space-x-2'>
          <a href="#about">
            <button className="heroButton">About</button>
          </a>
          <a href="#experience">
            <button className="heroButton">Experience</button>
          </a>
          <a href="#skills">
            <button className="heroButton">Skills</button>
          </a>
          <a href="#projects">
            <button className="heroButton">Projects</button>
          </a>
          <a href="#contact">
            <button className="heroButton">Contact Me</button>
          </a>
        </div>
      </div>
    </div>
  )
}