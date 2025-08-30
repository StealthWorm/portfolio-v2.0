'use client';
import React, { useMemo } from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import { PageInfo } from '../../typings';

type Props = {
  pageInfo: PageInfo
}

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: useMemo(() => [
      "Hi there! 👾",
      `My name is ${pageInfo?.name}`,
      "random-dev-with-random-thoughts",
      "moved_by_coffee ☕",
      "<code_lover/>"
    ], [pageInfo?.name]),
    loop: true,
    delaySpeed: 2000,
  });

  const heroImage = useMemo(() => pageInfo?.heroImage, [pageInfo?.heroImage]);

  return (
    <div className="flex flex-col h-screen space-y-8 items-center justify-center text-center overflow-hidden relative" suppressHydrationWarning>
      <BackgroundCircles />

      <div className="flex relative items-center justify-center drop-shadow-[0_0_50px_rgba(0,0,0,0.8)]">
        {/* Main image */}
        <Image
          src={heroImage}
          alt={`${pageInfo?.name} profile picture`}
          width={500}
          height={500}
          className="relative rounded-full h-32 w-32 mx-auto object-cover drop-shadow-[0_0_50px_rgba(36,36,36,0.8)]"
          priority
        />
        <Image
          src={heroImage}
          alt=""
          width={500}
          height={500}
          className="absolute rounded-full h-32 w-32 mx-auto object-cover translate-x-[-5%] animate-glitch"
        />
        <Image
          src={heroImage}
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

        <nav className='pt-12 space-x-2' role="navigation" aria-label="Main navigation">
          <a href="#about" aria-label="Go to About section">
            <button className="heroButton">About</button>
          </a>
          <a href="#experience" aria-label="Go to Experience section">
            <button className="heroButton">Experience</button>
          </a>
          <a href="#skills" aria-label="Go to Skills section">
            <button className="heroButton">Skills</button>
          </a>
          <a href="#projects" aria-label="Go to Projects section">
            <button className="heroButton">Projects</button>
          </a>
          <a href="#contact" aria-label="Go to Contact section">
            <button className="heroButton">Contact Me</button>
          </a>
        </nav>
      </div>
    </div>
  )
}