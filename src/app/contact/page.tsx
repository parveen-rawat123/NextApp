import React from 'react'

const page = () => {
  return (
    <div className=' flex justify-center items-center min-h-screen bg-[rgb(16,21,36)]'>
      <div className='md:w-[60%] p-8 flex flex-col gap-10 mt-20  sm:w-[90%]'>
        <div className=' flex flex-col justify-center items-center gap-4
        '>
      <h1 className=' text-4xl md:text-7xl font-semibold sm:text-5xl'>Contact Us</h1>
      <p className=' text-center'> We're here to help with any questions about our courses, programs, or everits. Reach out and let us know how we can assist you in your musical Journey.</p>
        </div>
        <div className=' flex flex-col gap-8'>
            <input type="text" placeholder='Your email address' className='bg-black rounded-md py-4 px-5'/>
            <textarea name="" id="" placeholder='Your message' 
             rows={3}
            className=' bg-black  rounded-md p-6'></textarea>
            <button className='bg-green-600 self-start py-2 px-3 rounded-md'>Send Message</button>
        </div>
        </div>
    </div>
  )
}

export default page
