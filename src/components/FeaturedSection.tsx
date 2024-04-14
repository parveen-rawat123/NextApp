import React from 'react'
import courseDta from "../data/music_compo.json"
import Link from 'next/link'
const FeaturedSection = () => {
  return (
    <div className='py-12 bg-gray-900'>
      <div>
        <div className=' text-center'>
        <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED COURSES</h2>
        <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn With The Best</p>
        </div>
      </div>
      <div className='mt-10 '>
        <div> </div>
      </div>
      <div className='mt-20 text-center'>
        <Link href={'/courses'}>
          View All Courses
        </Link>
      </div>
    </div>
  )
}
export default FeaturedSection