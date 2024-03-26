import React from 'react'
import commentthumb from '../../src/commentThumb.png'
import tariyalImage from '../../src/tariyalgrey.svg'
import message from '../../src/message.png'
import { Link } from 'react-router-dom'
import { SiGoogleclassroom } from "react-icons/si";
export default function Review() {
    return (
        <>
            <div className='heading flex justify-center items-center  my-[-10px]'>
                <h1 className='font-bold text-4xl text-cyan-800 m-0'>Review From Our Students</h1>
                <span>
                    <img className=' h-24 w-24' src={commentthumb} alt="" />
                </span>
            </div>

            <div className='line flex justify-between m-0'>
                <div className='h-2 w-[40vw] text-blue-900 bg-cyan-700'></div>
                <div className='h-2 w-[40vw] text-blue-900 bg-cyan-700'></div>
            </div>
            <div className='flex justify-center items center mx-4 md:flex-row flex-col '>
                <div className='one  flex-1 my-2'>
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://images.unsplash.com/photo-1517256673644-36ad11246d21?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bonnie " />
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-blue-900">Allison Grifith</h5>
                    <p className=" bg-slate-200 p-5 shadow-lg shadow-gray-900 font-normal text-gray-700 dark:text-gray-600 rounded-lg">"This platform has truly revolutionized my learning experience! The lessons are engaging, comprehensive, and crafted with such clarity that even the most complex topics become accessible. It's not just an educational website.It is a beacon of knowledge one can only wish for.It is Amazing platform i have come across with."</p>


                </div>


                <div className='two mx-2 flex-1 my-2'>
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bonnie " />
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-blue-900">David</h5>
                    <p className="bg-slate-200 p-5 shadow-lg shadow-gray-900 font-normal text-gray-700 dark:text-gray-600 rounded-lg">"I can't recommend this website enough! It's been a game-changer in my educational journey. The interactive elements and personalized learning paths have helped me grasp concepts more effectively than any textbook ever could. A must-visit for anyone looking to deepen their understanding and enjoy the process along the way."</p>


                </div>




                <div className='three mx-2 flex-1 my-2'>
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bonnie " />
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-blue-900">Elena</h5>
                    <p className="bg-slate-200 p-5 shadow-lg shadow-gray-900 font-normal text-gray-700 dark:text-gray-600 rounded-lg">"From the intuitive layout to the high-quality content, this educational website stands out as a top-tier learning platform. The expertly designed courses, accompanied by practical examples, have provided me with invaluable insights and significantly improved my academic performance. Truly a treasure trove for learners."</p>


                </div>



                {/* <div className='four'>
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://cdn.pixabay.com/photo/2018/07/05/16/59/students-3518726_1280.jpg" alt="Bonnie " />
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Skand</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">"This platform has exceeded all my expectations! It offers a unique blend of comprehensive curriculum and interactive learning that caters to various learning styles. What sets it apart is its commitment to making education accessible, engaging, and enjoyable. It's not just about learning; it's about falling in love with the process of acquiring knowledge."</p>


                </div> */}
            </div >

<div className='founder flex justify-center items-center mb-[-100px] my-12 '>
    <div className=' bg-cyan-800 h-2 w-32 mx-2'></div>
    <h1 className='text-4xl font-bold text-cyan-800'>Words From Our Founder</h1>
    <div className=' bg-cyan-800 h-2 w-32 mx-2'></div>
</div >


            <div className='tariyal flex md:flex-row flex-col justify-center items-center my-12 mx-24 ' >
                <div className='image w-1/3'>
                    <img className=' my-16' src={tariyalImage} alt="" />
                </div>
                <div className='text w-2/3 '>
                    <div className='textImg'>
                        <img className=' h-24 w-24' src={message} alt="" />
                    </div>
                    <div className='text-words text-xl font-serif flex justify-center items-center text-center '>
                        <p className='text-gray-600'>"Welcome to our learning community where passion meets purpose. As the founder, I'm thrilled to see your journey unfold. Our mission is to empower you with knowledge, skills, and confidence. Together, we'll explore new horizons and achieve greatness. Thank you for choosing us to be part of your educational adventure."</p>
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center'>
              <Link to="/bookclass">
            <button type="button" class="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2">
            <SiGoogleclassroom />
<span className='text-lg mx-2'>Book A Free Demo Class</span>
</button>
</Link> 
            </div>
        </>
    )
}


