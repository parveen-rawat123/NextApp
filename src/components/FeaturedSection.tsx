'use client'
import React from 'react'
import courseData from "../data/music_compo.json"
import Link from 'next/link';
import { BackgroundGradient } from './ui/background-gradient';
import Image from 'next/image';
interface Course{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured:boolean,
    image: string 
}
const FeaturedSection = () => {
  const featuredcourses = courseData.courses.filter((course:Course) =>course.isFeatured)
  return (
    <div className='py-12 bg-gray-900'>
      <div>
        <div className=' text-center'>
        <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED COURSES</h2>
        <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn With The Best</p>
        </div>
      </div>
      <div className='mx-16 mt-10 '>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'> 
        {featuredcourses.map((cousre:Course)=>(
          <div key={cousre.id} className='flex justify-center'>
           <BackgroundGradient className='rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900'>
            <div className='h-[25rem]'>
              <Image className='rounded-lg'
              src={cousre?.image}
              alt='course'
              width={400}
              height={400}
              />
              <b className=' text-xl'>{cousre.title}</b>
              <p>{cousre.slug}</p>
              <p>{cousre.description}</p>
              <p>Price : {cousre.price}</p>
               <Link href={'/course'} className=' bg-slate-50 text-black py-1 px-3 rounded-lg mt-3 inline-block font-semibold text-[1.2rem]'>Learn More</Link>
            </div>
           </BackgroundGradient>
          </div>
        ))}
        </div>
      </div>
      <div className='mt-20 text-center'>
        <Link href={'/courses'}>
          View All Courses
        </Link>
      </div> 
    </div>
  )
}
export default FeaturedSection;