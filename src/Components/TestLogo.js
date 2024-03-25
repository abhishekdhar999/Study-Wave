import React from 'react'
import test1 from '../utils/images/img1.png'
import test2 from '../utils/images/img2.png'
import test3 from '../utils/images/img3.png'
import test4 from '../utils/images/img4.jpg'
import test5 from '../utils/images/img5.svg'
import test6 from '../utils/images/img6.png'
import test7 from '../utils/images/img7.png'
export default function TestLogo() {
  return (
    <>

      <div className='flex justify-center items-center'>
        <div className='h-1 w-[10vw] bg-cyan-500 mx-2'></div>
            <h2 className=' text-lg font-serif text-cyan-600 font-semibold'>"Master the test, master your destiny—we're here to guide you."</h2>
            <div className='h-1 w-[10vw] bg-cyan-500 mx-2'></div>
        </div>

      <div className='flex sm:flex-row flex-col justify-between mx-56 items-center  p-4 my-0'>
        
<div className='img-1 w-[50px] h-12'>
<img className='w-[50px] h-12' src={test1} alt="" />
</div>
<div className='img-2 w-[100px] h-24'>
<img className='w-[100px] h-24' src={test2} alt="" />
</div>
<div className='img-3 w-[70px] h-12'>
<img className='w-[70px] h-12' src={test3} alt="" />
</div>
<div className='img-4 mx-1 w-[50px] h-12'>
<img className='w-[50px] h-12' src={test4} alt="" />
</div>
<div className='img-5 mx-1 w-[50px] h-12'>
<img className='w-[50px] h-12' src={test5} alt="" />
</div>
<div className='img-6 mx-1 w-[50px] h-12'>
<img className='w-[80px] h-12' src={test6} alt="" />
</div>
<div className='img-7 mx-1 w-[50px] h-12'>
<img className='w-[80px] h-12' src={test7} alt="" />
</div>
      </div>
    </>
  )
}
