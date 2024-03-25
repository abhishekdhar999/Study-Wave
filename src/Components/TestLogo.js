import React from 'react'
import test1 from '../utils/images/img1.png'
import test2 from '../utils/images/img2.png'
import test3 from '../utils/images/img3.png'
import test4 from '../utils/images/img4.jpg'
import test5 from '../utils/images/img5.svg'
export default function TestLogo() {
  return (
    <>
    
      <div className='flex justify-center items-center'>
            <h2 className=' text-lg font-serif text-cyan-600 font-semibold'>"Master the test, master your destiny—we're here to guide you."</h2>
        </div>

      <div className='flex sm:flex-row flex-col justify-between mx-56 items-center  p-4 my-0'>
        
<div className='img-1'>
<img className='w-[50px]' src={test1} alt="" />
</div>
<div className='img-2'>
<img className='w-[100px]' src={test2} alt="" />
</div>
<div className='img-3'>
<img className='w-[70px]' src={test3} alt="" />
</div>
<div className='img-4'>
<img className='w-[50px]' src={test4} alt="" />
</div>
<div className='img-5'>
<img className='w-[80px]' src={test5} alt="" />
</div>
      </div>
    </>
  )
}
