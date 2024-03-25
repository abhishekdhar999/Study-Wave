import React from 'react'
import Educator from '../Components/Educator'
import { FaLaptop } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
export default function ExplorePage() {
  return (
    <>
      <div className=' bg-zinc-300'>
        <div className='heading flex justify-center items-center my-4'>
          <h1 className='text-shadows font-bold  font-serif'>Discover Knowledge in LimitLess Realms.</h1>
        </div>



        <div className='btn flex justify-center items-center'>
          <Link to="/bookclass">
            <button type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
              <FaLaptop />

              <span className='mx-2'>Click here to Book a Free Class </span>
            </button>
          </Link>
        </div>

<div className='flex justify-center items-center my-4' >
  <h2 className='font-semibold text-2xl'>Why Join Us?</h2>
</div>



        <div className='heading  flex justify-center items-center my-4 md:flex-row flex-col '>
          <div className=' md:my-0 my-2'>
          <p className=' font-thin text-xl font-serif'>"Explore a rich tapestry of subjects on our educational platform, from Mathematics to Arts and Technology to Business, all designed to unlock your potential and guide your learning journey."</p>
          </div>

          <div className=''>
            <div className=' bg-black h-2 w-[40vw]'></div>
          </div>
        </div>

        <div className='heading  flex justify-center items-center my-6 md:flex-row flex-col '>

        <div className=''>
            <div className=' bg-black h-2 w-[40vw]'></div>
          </div>

          <div className=' md:my-0 my-2 mx-2'>
          <p className=' font-thin text-xl font-serif'>"Dive into a world where learning knows no bounds, meticulously crafted to awaken inspiration and foster empowerment. Join our journey to fuel curiosity and sculpt tomorrow's leaders."</p>
          </div>

          
        </div>

        <div className='flex justify-center items-center my-6' >
<Link to="/about">
            <button type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
              <span className='mx-2'>Learn More About Us </span>

              <FaArrowRight />
            </button>
          </Link>
</div>

<div className='flex justify-center items-center'>
  <h2 className='font-semibold text-3xl headExplore'>"Our Course Offerings"</h2>
</div>

        <div className='subjects lg:mx-12'>
          {/* first row */}
          <div className='one flex md:flex-row flex-col mx-4 p-4  justify-center  items-center'>
            {/* first subject */}
            <div className='flex-1 card'>
              <span className="  flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full h-96 rounded-t-lg  md:h-44 md:w-48 md:rounded-none md:rounded-s-lg" src="https://imgs.search.brave.com/4C74hdcynwwoaZYoohL3LtR-H-7KX8U0X3xCHaMWsBQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIy/MDYxMDA3My9waG90/by9waHlzaWNzLXRl/YWNoZXItd3JpdGlu/Zy1tYXRoLWVxdWF0/aW9ucy1vbi1hLWJs/YWNrYm9hcmQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWhr/MTEyVEh6RnVDOWxp/QjF4dkRXaTk3MjZr/YlJnTHZqUUYzVTJt/YWduSjg9" alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Physics</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Explore the universe's secrets through engaging, interactive physics lessons.</p>
                </div>
              </span>
            </div>

            {/* second subject */}
            <div className='flex-1 my-2 card'>
              <span className="  mx-2 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-auto md:h-44 md:w-48 md:rounded-none md:rounded-s-lg" src="https://imgs.search.brave.com/ej5V_DcFfMWzXs_wZB6kWVAizFCuO_mdHf_bm0k-jT8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOS8x/Mi8yMS8yMC80NC9t/YXRoLXdvcmstNDcx/MTMwMl82NDAuanBn" alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Mathematics</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Unlock the language of the universe with intuitive, problem-solving math tutorials.</p>
                </div>
              </span>
            </div>
          </div>

          {/* second row */}
          <div className='two flex md:flex-row flex-col mx-4 p-4  justify-center  items-center'>
            {/* first subject */}
            <div className='flex-1 card'>
              <span className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className=" object-cover w-full rounded-t-lg h-96 md:h-44 md:w-48 md:rounded-none md:rounded-s-lg" src="https://imgs.search.brave.com/92iyjt4hw-VfkNdgSMgT_z_4O6jHlFxoocqihJP7Cec/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzI0LzQxLzk1/LzM2MF9GXzQyNDQx/OTU4MF95c3BPRmxl/TXNuRjNoZERoTW1l/Y2M2cUJuRFR6RUdl/Mi5qcGc" alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">English</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Master the art of communication with comprehensive, immersive English courses.</p>
                </div>
              </span>
            </div>
            {/* second subject */}
            <div className='flex-1 my-2 card'>
              <span className="flex mx-2 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-44 md:w-48 md:rounded-none md:rounded-s-lg" src="https://imgs.search.brave.com/LwLejfrChPprFszdylQTIB2MKu479O5bjMRa1_yODPM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWM2LmRlcG9zaXRw/aG90b3MuY29tLzEw/NzQ0NDIvNjIwL2kv/NDUwL2RlcG9zaXRw/aG90b3NfNjIwMzA4/My1zdG9jay1waG90/by1jaGVtaXN0cnkt/cmVjaXBpZW50cy5q/cGc" alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Chemistry</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Dive into the world of matter and reactions with dynamic chemistry explorations.</p>
                </div>
              </span>
            </div>
          </div>



          {/* third row */}
          <div className='three flex md:flex-row flex-col mx-2 p-2  justify-center  items-center'>

            {/* first subject */}
            <div className='flex-1 card'>
              <span className="flex mx-2 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:h-44 md:rounded-none md:rounded-s-lg" src="https://imgs.search.brave.com/JUFEk3UZanDUvcig-hNnfxQngeGHiXYvz08eTrmkOkY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTY5/OTk5MjMyL3Bob3Rv/L2Jpb3RlY2hub2xv/Z3kuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPVV1eVdlYjBQ/WGlNSzVDTnd3UXBF/ZmVzUzE5RHh6RHN1/cUxEVm0tUVR4ZU09" alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Biology</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Discover life's wonders from the microscopic to the macroscopic with our biology series.</p>
                </div>
              </span>
            </div>
            {/* second subject */}
            <div className='flex-1 my-2 card'>
              <span className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-44 md:w-48 md:rounded-none md:rounded-s-lg" src="https://imgs.search.brave.com/B-0LqZ0l0QOoltpyE-Z3gMBszxoKduLhP8L9VIo4JFw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9oYWNr/ZXJub29uLmltZ2l4/Lm5ldC9pbWFnZXMv/cHE1ZmszejR0Lmpw/Zz93PTEyMDAmcT03/NSZhdXRvPWZvcm1h/dA" alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Data Structure & Algo </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Elevate your coding with efficient algorithms and data structures mastery.




                  </p>
                </div>
              </span>
            </div>

          </div>


          {/* fourt row */}
          <div className='three flex md:flex-row flex-col mx-2 p-2  justify-center  items-center'>
            {/* first subject */}
            <div className='flex-1 card'>
              <span className="flex mx-2 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-44 md:w-48 md:rounded-none md:rounded-s-lg" src="https://imgs.search.brave.com/ZjZ1lc8x1HWkTCVwHBShEfSy1fVeeO6cNhcEmMFUhug/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/Z3VydTk5LmNvbS9p/bWFnZXMvMS8wOTEz/MThfMDcxN19XaGF0/aXNCYWNrZTEucG5n" alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Backend Development</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Power the web with efficient, scalable backend solutions taught here.</p>
                </div>
              </span>
            </div>

            {/* second subject */}
            <div className='flex-1 my-2 card'>
              <span className="flex  flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-44 md:w-48 md:rounded-none md:rounded-s-lg" src="https://imgs.search.brave.com/HqfobQiKjUK3Ee9YcmDzhl6I9REUa2D9epSBkgXgYnw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzU0LzMzLzM2/LzM2MF9GXzI1NDMz/MzYxOF9DR0NvUWtY/bkN2MzdnaTZ2Znc4/aTF6RDZQVjFJUzBw/Vi5qcGc" alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">FrontEnd Development</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Craft beautiful, responsive websites with our expert-led frontend development guides.</p>
                </div>
              </span>
            </div>

          </div>
        </div>



        {/* mentors start */}



        <div className='mentor-heading flex justify-center items-center my-4'>
          <h1 className='head  shadow-slate-900 font-bold text-4xl font-serif'>Our Mentors</h1>
        </div>



        <div className='mentors  '>

          <div className='row-1 flex justify-around items-center  md:flex-row flex-col'>
            {/* first mentor */}
            <div className='row-1-first '>
              <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
                  <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="" />
                </div>
                <div class="p-6 text-center">
                  <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Natalie Paisley
                  </h4>
                  <p
                    class="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
                    CEO / Co-Founder
                  </p>
                </div>
                <div class="flex justify-center p-6 pt-2 gap-7">
                  <a href="#facebook"
                    class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400">
                    <i class="fab fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="#twitter"
                    class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-light-blue-600 to-light-blue-400">
                    <i
                      class="fab fa-twitter" aria-hidden="true">
                    </i>
                  </a>
                  <a href="#instagram"
                    class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-purple-600 to-purple-400"><i
                      class="fab fa-instagram" aria-hidden="true">
                    </i>
                  </a>
                </div>
              </div>
            </div>

            {/* second-mentor */}
            <div className='row-1-second '>
              <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
                  <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="" />
                </div>
                <div class="p-6 text-center">
                  <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Natalie Paisley
                  </h4>
                  <p
                    class="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
                    CEO / Co-Founder
                  </p>
                </div>
                <div class="flex justify-center p-6 pt-2 gap-7">
                  <a href="#facebook"
                    class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400">
                    <i class="fab fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="#twitter"
                    class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-light-blue-600 to-light-blue-400">
                    <i
                      class="fab fa-twitter" aria-hidden="true">
                    </i>
                  </a>
                  <a href="#instagram"
                    class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-purple-600 to-purple-400"><i
                      class="fab fa-instagram" aria-hidden="true">
                    </i>
                  </a>
                </div>
              </div>
            </div>

            {/* third-mentor */}

          </div>

          <div className='row-2 flex md:flex-row flex-col justify-around items-center my-4'>

            {/* third-mentor */}
            <div className='row-2-first '>
              <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
                  <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="" />
                </div>
                <div class="p-6 text-center">
                  <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Natalie Paisley
                  </h4>
                  <p
                    class="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
                    CEO / Co-Founder
                  </p>
                </div>
                <div class="flex justify-center p-6 pt-2 gap-7">
                  <a href="#facebook"
                    class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400">
                    <i class="fab fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="#twitter"
                    class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-light-blue-600 to-light-blue-400">
                    <i
                      class="fab fa-twitter" aria-hidden="true">
                    </i>
                  </a>
                  <a href="#instagram"
                    class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-purple-600 to-purple-400"><i
                      class="fab fa-instagram" aria-hidden="true">
                    </i>
                  </a>
                </div>
              </div>
            </div>

            {/* fourth- mentor */}
            <div className='row-2-second '>
              <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
                  <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="" />
                </div>
                <div class="p-6 text-center">
                  <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Natalie Paisley
                  </h4>
                  <p
                    class="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
                    CEO / Co-Founder
                  </p>
                </div>
                <div class="flex justify-center p-6 pt-2 gap-7">
                  <a href="#facebook"
                    class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400">
                    <i class="fab fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="#twitter"
                    class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-light-blue-600 to-light-blue-400">
                    <i
                      class="fab fa-twitter" aria-hidden="true">
                    </i>
                  </a>
                  <a href="#instagram"
                    class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-purple-600 to-purple-400"><i
                      class="fab fa-instagram" aria-hidden="true">
                    </i>
                  </a>
                </div>
              </div>
            </div>

            {/* second mentor */}



          </div>
        </div>


        <div className='flex justify-center items-center flex-col my-12'>
          <div className='heading '>
            <h2 className='headExplore'>"Learn, Grow, Conquer: Your Future Starts Here!"</h2>
          </div>

          <div className='subheading md:w-[700px]'>
            <p className=' font-medium text-lg my-6'>
              Discover a world of learning on our Explore page, where a curated selection of courses, interactive lessons, and engaging content awaits. From academic subjects to professional skills, this hub is designed for learners of all ages, making it easy to dive into new topics and fuel your passion for knowledge.
            </p>
          </div>

          <div className='btn flex justify-center items-center'>
            <Link to="/bookclass">
              <button type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
                <FaLaptop />

                <span className='mx-2'>Click here to Book a Free Class </span>
              </button>
            </Link>
          </div>
        </div>

      </div>


    </>
  )
}
