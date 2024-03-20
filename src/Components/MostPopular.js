import React from 'react'

export default function MostPopular() {
    return (
        <>
            <div className='my-4  mb-12'>

                <div className='text flex md:flex-row flex-col justify-around  items-center'>
                    <div className='heding w-1/3 mx-24'>
                        <h1 className='text-4xl font-bold text-gray-600'>Most Popular</h1>
                        <h1 className='text-4xl font-bold text-amber-500'>Courses</h1>
                    </div>
                    <div className='btn w-1/3 my-2'>
                        <button type="button" class="text-gray-600 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">explore more</button>
                    </div>
                </div>

                <div className='subjects my-4'>
                    <div className='flex justify-center items-center md:flex-row flex-col p-4 my-2 mx-4'>
                        <div className='subone  '>


                            <div class="card max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-2">
                                <a href="/">
                                    <img class="rounded-t-lg" src="https://imgs.search.brave.com/E8L7drFLZgmlDVNhwJQSQ-G6Jb6f98TEeeCcUeJ-ANY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9zY2ll/bmNlLXJlc2VhcmNo/LWJhY2tncm91bmQt/Mjg0NDA3MTQuanBn" alt="" />
                                </a>
                                <div class="p-5 ">
                                    <a href="/">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Science</h5>
                                    </a>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">"Explore the marvels of science with our interactive lessons. From physics to biology, unlock the secrets of the universe and ignite your curiosity. Start your discovery journey now."</p>
                                    
                                </div>
                            </div>

                        </div>

                        <div className='two mx-2 my-1'>


                            <div class="card max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="/">
                                    <img class="rounded-t-lg" src="https://imgs.search.brave.com/R29PJj812nbWAWhexqJwnIEHcqtygRoMl_jvCfSssX8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9zY2llbmNlLWFs/Z2VicmEtY29uY2Vw/dF82NzAxNDctMjcx/NDYuanBnP3NpemU9/NjI2JmV4dD1qcGc" alt="" />
                                </a>
                                <div class="p-5">
                                    <a href="/">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Mathematics</h5>
                                    </a>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">"Master mathematics with our comprehensive tutorials. Embrace the logic of numbers, solve complex problems, and discover the beauty of math in everyday life. Begin your math adventure today."</p>

                                </div>
                            </div>

                        </div>


                        <div className='three'>


<div class="card max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="/">
        <img class="rounded-t-lg" src="https://imgs.search.brave.com/1Ka3D9vt6SNs37Px7DZa6EflajFZ-pqgihkoa7JCng8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/OS8wNy8xMC8wNy9l/bmdsaXNoLTI3MjQ0/NDJfNjQwLmpwZw" alt="" />
    </a>
    <div class="p-5">
        <a href="/">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">English</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">"Enhance your command of English with us. Dive into literature, sharpen your grammar, and elevate your communication skills. Join our vibrant community and unlock the power of words."</p>
        
    </div>
</div>

</div>


                    </div>
                </div>

            </div>
        </>
    )
}
