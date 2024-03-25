import React from 'react'
import girl from '../utils/images/callingAboutImg.svg'

export default function CallingAbout() {
  return (
    <>
      <div className='flex md:flex-row flex-col justify-around items-center mx-2'>

        <div className='left w-1/3'>
            <div className='img '>
<img className='h-[500px] w-[600px] rounded-xl' src={girl} alt="" />
            </div>
        </div>
        <div className='right w-1/3'>
<div className='text'>
    <div className='heading'>
        <h1 className='text-4xl font-medium'>Learn Anything From Anywhere With <span className=' text-cyan-600 font-extrabold'>The Study Wave</span></h1>
    </div>
    <div className='sub-heading my-2'>
<p className='text-gray-500'>We Provide a Convenient and accessible platform for individuals to access educational content and courses from the comfort of their homes</p>
    </div>

    <div>
    <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Learn About Us</button>
    </div>
</div>
        </div>
      </div>

    </>
  )
}
