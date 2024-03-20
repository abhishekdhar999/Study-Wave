import React from 'react'
import commentthumb from '../../src/commentThumb.png'
import tariyalImage from '../../src/tariyalgrey.svg'
import message from '../../src/message.png'
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
            <div className='flex justify-center items center mx-4'>
                <div className='one'>
                    <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://cdn.pixabay.com/photo/2018/07/05/16/59/students-3518726_1280.jpg" alt="Bonnie " />
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-blue-900">Easa</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-600">"This platform has truly revolutionized my learning experience! The lessons are engaging, comprehensive, and crafted with such clarity that even the most complex topics become accessible. It's not just an educational website; it's a beacon of knowledge that ignites a genuine passion for learning."</p>


                </div>


                <div className='two'>
                    <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://cdn.pixabay.com/photo/2018/07/05/16/59/students-3518726_1280.jpg" alt="Bonnie " />
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-blue-900">David</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-600">"I can't recommend this website enough! It's been a game-changer in my educational journey. The interactive elements and personalized learning paths have helped me grasp concepts more effectively than any textbook ever could. A must-visit for anyone looking to deepen their understanding and enjoy the process along the way."</p>


                </div>




                <div className='three'>
                    <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://cdn.pixabay.com/photo/2018/07/05/16/59/students-3518726_1280.jpg" alt="Bonnie " />
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-blue-900">Elena</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-600">"From the intuitive layout to the high-quality content, this educational website stands out as a top-tier learning platform. The expertly designed courses, accompanied by practical examples, have provided me with invaluable insights and significantly improved my academic performance. Truly a treasure trove for learners."</p>


                </div>



                {/* <div className='four'>
                    <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://cdn.pixabay.com/photo/2018/07/05/16/59/students-3518726_1280.jpg" alt="Bonnie " />
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Skand</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">"This platform has exceeded all my expectations! It offers a unique blend of comprehensive curriculum and interactive learning that caters to various learning styles. What sets it apart is its commitment to making education accessible, engaging, and enjoyable. It's not just about learning; it's about falling in love with the process of acquiring knowledge."</p>


                </div> */}
            </div >

<div className='founder flex justify-center items-center mb-[-100px] my-12 '>
    <h1 className='text-4xl font-bold text-cyan-800'>Words From Our Founder....</h1>
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
        </>
    )
}


