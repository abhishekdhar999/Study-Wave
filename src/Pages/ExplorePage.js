import React from 'react'
import Educator from '../Components/Educator'
import { FaLaptop } from "react-icons/fa";
export default function ExplorePage() {
  return (
    <>
      <div className=' bg-zinc-300'>
        <div className='heading flex justify-center items-center my-4'>
          <h1 className='text-shadows font-bold  font-serif'>Discover Knowledge in LimitLess Realms.</h1>
        </div>

        <div className='btn flex justify-center items-center'>
        <button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
        <FaLaptop />

<span className='mx-2'>Click here to Book a Free Class </span>
</button>
        </div>

        <div className='subjects'>
          {/* first row */}
          <div className='one flex md:flex-row flex-col mx-4 p-4  justify-center  items-center'>
            {/* first subject */}
            <div className='flex-1'>
              <a href="/" className="  flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full h-96 rounded-t-lg  md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://imgs.search.brave.com/4C74hdcynwwoaZYoohL3LtR-H-7KX8U0X3xCHaMWsBQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIy/MDYxMDA3My9waG90/by9waHlzaWNzLXRl/YWNoZXItd3JpdGlu/Zy1tYXRoLWVxdWF0/aW9ucy1vbi1hLWJs/YWNrYm9hcmQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWhr/MTEyVEh6RnVDOWxp/QjF4dkRXaTk3MjZr/YlJnTHZqUUYzVTJt/YWduSjg9" alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Physics</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Explore the universe's secrets through engaging, interactive physics lessons.</p>
                </div>
              </a>
            </div>

            {/* second subject */}
            <div className='flex-1 my-2'>
              <a href="/" className="  mx-2 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://imgs.search.brave.com/4C74hdcynwwoaZYoohL3LtR-H-7KX8U0X3xCHaMWsBQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIy/MDYxMDA3My9waG90/by9waHlzaWNzLXRl/YWNoZXItd3JpdGlu/Zy1tYXRoLWVxdWF0/aW9ucy1vbi1hLWJs/YWNrYm9hcmQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWhr/MTEyVEh6RnVDOWxp/QjF4dkRXaTk3MjZr/YlJnTHZqUUYzVTJt/YWduSjg9" alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Mathematics</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Unlock the language of the universe with intuitive, problem-solving math tutorials.</p>
                </div>
              </a>
            </div>
          </div>

          {/* second row */}
          <div className='two flex md:flex-row flex-col mx-4 p-4  justify-center  items-center'>
            {/* first subject */}
            <div className='flex-1'>
              <a href="/" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://imgs.search.brave.com/4C74hdcynwwoaZYoohL3LtR-H-7KX8U0X3xCHaMWsBQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIy/MDYxMDA3My9waG90/by9waHlzaWNzLXRl/YWNoZXItd3JpdGlu/Zy1tYXRoLWVxdWF0/aW9ucy1vbi1hLWJs/YWNrYm9hcmQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWhr/MTEyVEh6RnVDOWxp/QjF4dkRXaTk3MjZr/YlJnTHZqUUYzVTJt/YWduSjg9" alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">English</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Master the art of communication with comprehensive, immersive English courses.</p>
                </div>
              </a>
            </div>
            {/* second subject */}
            <div className='flex-1 my-2'>
              <a href="/" className="flex mx-2 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://imgs.search.brave.com/4C74hdcynwwoaZYoohL3LtR-H-7KX8U0X3xCHaMWsBQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIy/MDYxMDA3My9waG90/by9waHlzaWNzLXRl/YWNoZXItd3JpdGlu/Zy1tYXRoLWVxdWF0/aW9ucy1vbi1hLWJs/YWNrYm9hcmQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWhr/MTEyVEh6RnVDOWxp/QjF4dkRXaTk3MjZr/YlJnTHZqUUYzVTJt/YWduSjg9" alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Chemistry</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Dive into the world of matter and reactions with dynamic chemistry explorations.</p>
                </div>
              </a>
            </div>
          </div>



          {/* third row */}
          <div className='three flex md:flex-row flex-col mx-2 p-2  justify-center  items-center'>

            {/* first subject */}
            <div className='flex-1'>
              <a href="/" className="flex mx-2 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://imgs.search.brave.com/4C74hdcynwwoaZYoohL3LtR-H-7KX8U0X3xCHaMWsBQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIy/MDYxMDA3My9waG90/by9waHlzaWNzLXRl/YWNoZXItd3JpdGlu/Zy1tYXRoLWVxdWF0/aW9ucy1vbi1hLWJs/YWNrYm9hcmQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWhr/MTEyVEh6RnVDOWxp/QjF4dkRXaTk3MjZr/YlJnTHZqUUYzVTJt/YWduSjg9" alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Biology</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Discover life's wonders from the microscopic to the macroscopic with our biology series.</p>
                </div>
              </a>
            </div>
            {/* second subject */}
            <div className='flex-1 my-2'>
              <a href="/" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://imgs.search.brave.com/4C74hdcynwwoaZYoohL3LtR-H-7KX8U0X3xCHaMWsBQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIy/MDYxMDA3My9waG90/by9waHlzaWNzLXRl/YWNoZXItd3JpdGlu/Zy1tYXRoLWVxdWF0/aW9ucy1vbi1hLWJs/YWNrYm9hcmQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWhr/MTEyVEh6RnVDOWxp/QjF4dkRXaTk3MjZr/YlJnTHZqUUYzVTJt/YWduSjg9" alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Data Structure & Algo </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Elevate your coding with efficient algorithms and data structures mastery.




                  </p>
                </div>
              </a>
            </div>

          </div>


          {/* fourt row */}
          <div className='three flex md:flex-row flex-col mx-2 p-2  justify-center  items-center'>
            {/* first subject */}
            <div className='flex-1'>
              <a href="/" className="flex mx-2 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://imgs.search.brave.com/4C74hdcynwwoaZYoohL3LtR-H-7KX8U0X3xCHaMWsBQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIy/MDYxMDA3My9waG90/by9waHlzaWNzLXRl/YWNoZXItd3JpdGlu/Zy1tYXRoLWVxdWF0/aW9ucy1vbi1hLWJs/YWNrYm9hcmQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWhr/MTEyVEh6RnVDOWxp/QjF4dkRXaTk3MjZr/YlJnTHZqUUYzVTJt/YWduSjg9" alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Backend Development</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Power the web with efficient, scalable backend solutions taught here.</p>
                </div>
              </a>
            </div>

            {/* second subject */}
            <div className='flex-1 my-2'>
              <a href="/" className="flex  flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://imgs.search.brave.com/4C74hdcynwwoaZYoohL3LtR-H-7KX8U0X3xCHaMWsBQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIy/MDYxMDA3My9waG90/by9waHlzaWNzLXRl/YWNoZXItd3JpdGlu/Zy1tYXRoLWVxdWF0/aW9ucy1vbi1hLWJs/YWNrYm9hcmQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWhr/MTEyVEh6RnVDOWxp/QjF4dkRXaTk3MjZr/YlJnTHZqUUYzVTJt/YWduSjg9" alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">FrontEnd Development</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Craft beautiful, responsive websites with our expert-led frontend development guides.</p>
                </div>
              </a>
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

      </div>
    </>
  )
}
