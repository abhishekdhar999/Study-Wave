import React from 'react'
import { Link } from 'react-router-dom';
import { TfiWorld } from "react-icons/tfi";
import { GiTeacher } from "react-icons/gi";
import { PiStudent } from "react-icons/pi";
import { FaLaptop } from "react-icons/fa";
import frontImg from '../../src/design.svg'
import { FaLongArrowAltRight } from "react-icons/fa";
import TestLogo from './TestLogo';
export default function Home() {
    return (

        <>
            <div className="bg-cyan-400 h-1 w-[100vw]"></div>
            <div className="bg-blue-400 h-1 w-[100vw] my-1"></div>
            <div className=' my-72 md:my-14 flex md:flex-row flex-col justify-center mx-4 h-[80vh] '>

                <div className='left md:w-[600px] flex flex-col justify-center '>

                    <div className='text '>
                        <h1 className='  text-6xl font-bold font-sens text-cyan-600 '> <span className=''>"Unlock Your</span>  <span className=''>Learning Potential"</span></h1>
                        <span className='my-4'>
                            <p className='text-gray-500 my-4 text-xl font-thin font-serif'>"Dive into a world where knowledge meets creativity, empowering you to reach your full potential. Explore a wide range of subjects and skills, tailored to inspire and engage learners of all ages. Start your journey to excellence today."

                            </p>
                        </span>
                    </div>

                    <div className='btns flex my-4'>
                        <Link to="/bookclass">
                            <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Book Free Class</button>
                        </Link>
                        <Link to="/explorepage">
                            <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Learn with us</button>
                        </Link>
                    </div>
                </div>
                {/* <div className='h-[80vh] w-[2000px]'>


</div> */}

                <div className=' md:w-[600px] my-12 right flex justify-center'>
                    <img className='w-[1200px] h-[500px] rounded-full' src={frontImg} alt="" />
                </div>
            </div>

            <div>
                <TestLogo />
            </div>

            <div className='flex sm:flex-row flex-col sm:justify-between justify-center text-center items-center sm:mx-24 my-12'>
                <div className='educators '>
                    <div className='logo'>
                        <span className='w-[500px]'><GiTeacher className='h-[100px] w-[100px] text-cyan-600 rounded-3xl' /></span>
                    </div>
                    <div className='text flex flex-col'>
                        <h2 className='font-bold text-xl'>200+</h2>
                        <h4 className='text-gray-600'>Educators</h4>
                    </div>
                </div>

                <div className='educators '>
                    <div className='logo'>
                        <span className='w-[500px]'><PiStudent className='h-[100px] w-[100px] text-cyan-600 rounded-3xl' /></span>
                    </div>
                    <div className='text flex flex-col'>
                        <h2 className='font-bold text-xl'>500+</h2>
                        <h4 className='text-gray-600'>Students</h4>
                    </div>
                </div>

                <div className='educators '>
                    <div className='logo'>
                        <span className='w-[500px]'><FaLaptop className='h-[100px] w-[100px] text-cyan-600 rounded-3xl' /></span>
                    </div>
                    <div className='text flex flex-col'>
                        <h2 className='font-bold text-xl'>2000+</h2>
                        <h4 className='text-gray-600'>Online Classes</h4>
                    </div>
                </div>

                <div className='educators '>
                    <div className='logo'>
                        <span className='w-[500px]'><TfiWorld className='h-[100px] w-[100px] text-cyan-600 rounded-3xl' /></span>
                    </div>
                    <div className='text flex flex-col my-2'>
                        <h2 className='font-bold text-xl'>6+</h2>
                        <h4 className='text-gray-600'>Countries</h4>
                    </div>
                </div>
            </div>

            <div className='working flex flex-col justify-center text-center '>
                <div className='heading'>
                    <h1 className='text-4xl text-gray-800  font-medium'>How Does <span className=' text-cyan-600 font-bold underline'>The Study Wave</span> Works ?</h1>
                </div>

                <div className='steps my-4'>
                    <div className='step1'>
                        <div className='flex items-center justify-center '>
                            <span >
                                <FaLongArrowAltRight className=' w-8 h-8' />
                            </span>
                            <h1 className='step-heading font-semibold text-3xl text-cyan-700 mx-4'>Step One</h1>
                        </div>
                        <div className='steps-text my-2'>
                            <p className='text-xl font-medium text-gray-600'>Register Yourself With Us by Booking a Class</p>
                        </div>
                    </div>

                    <div className='step2'>
                        <div className='flex items-center justify-center '>
                            <span >
                                <FaLongArrowAltRight className=' w-8 h-8' />
                            </span>
                            <h1 className='step-heading font-semibold text-3xl text-cyan-700 mx-6'>Step two</h1>
                        </div>
                        <div className='steps-text my-2'>
                            <p className='text-xl font-medium text-gray-600'>After registering we will Contact you for further Scheduling</p>
                        </div>
                    </div>

                    <div className='step3'>
                        <div className='flex items-center justify-center '>
                            <span >
                                <FaLongArrowAltRight className=' w-8 h-8' />
                            </span>
                            <h1 className='step-heading font-semibold text-3xl text-cyan-700 mx-4'>Step Three</h1>
                        </div>
                        <div className='steps-text my-2'>
                            <p className='text-xl font-medium text-gray-600'>Any Queries Reach Out to us</p>
                        </div>
                    </div>
                </div>
            </div>



        </>

    )
}
