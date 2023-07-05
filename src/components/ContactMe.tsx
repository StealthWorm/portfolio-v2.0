'use client';

import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'
import { PageInfo } from '../../typings';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Props = {
  pageInfo: PageInfo
}

export default function ContactMe({ pageInfo }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:${pageInfo.email}?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-center mx-auto items-center">
      <h3 className='absolute top-32 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Contact
      </h3>

      <div className="flex flex-col space-y-32 mt-14 absolute top-32 mx-auto">
        <h4 className='text-lg md:text-4xl font-semibold text-center font-valorax w-full'>
          I have got just what you need.{" "}
          <span className="decoration-emerald-400/50 underline text-emerald-400 animate-pulse drop-shadow-[0_0_10px_rgba(110,231,183,0.8)]">Lets Talk.</span>
        </h4>

        <div className='space-y-2 space-x-0 md:space-x-4 md:space-y-0 absolute top-[-5rem] flex items-center justify-center flex-col md:flex-row w-full'>
          <div className='flex items-center space-x-5'>
            <PhoneIcon className='text-emerald-500 h-7 w-7 animate-pulse' />
            <p className='text-md md:text-xl min-w-5rem text-gray-500 w-[13rem] md:w-full'>{pageInfo.phoneNumber}</p>
          </div>
          <div className='flex items-center space-x-5'>
            <EnvelopeIcon className='text-emerald-500 h-7 w-7 animate-pulse' />
            <p className='text-md md:text-xl min-w-5rem text-gray-500 w-[13rem] md:w-full'>{pageInfo.email}</p>
          </div>
          <div className='flex items-center space-x-5'>
            <MapPinIcon className='text-emerald-500 h-7 w-7 animate-pulse' />
            <p className='text-md md:text-xl min-w-5rem text-gray-500 w-[13rem] md:w-full'>{pageInfo.address}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className='flex flex-col space-y-2 w-fit mx-auto'>
          <div className='flex space-x-2'>
            <input {...register('name')} placeholder='Name' type='text' className='contactInput' />
            <input {...register('email')} placeholder='Email' type='email' className='contactInput' />
          </div>

          <input {...register('subject')} placeholder='Subject' type='text' className='contactInput' />

          <textarea {...register('message')} placeholder='Message' className='contactInput' />
          <button className='bg-emerald-500 py-5 px-10 rounded-md text-black font-bold text-lg' type='submit'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}