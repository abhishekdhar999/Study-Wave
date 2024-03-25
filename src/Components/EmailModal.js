import React from 'react'
import { useState } from 'react'
import img from '../utils/images/emailmodalImg.avif'
import { useNavigate } from 'react-router-dom'
export default function EmailModal() {
const [input,setInput] = useState({name:"",email:"",number:""})
const navigate = useNavigate()

const handleChange = (e)=>{
    setInput({...input,[e.target.name]:e.target.value})
}
    const handleSubmit = async () => {

if(!input.name || !input.email || !input.number){
    navigate("/")
}else if(input.number.length <9){
    navigate("/")
}

else{


        const response = await fetch("http://localhost:3001/sendEmail", {
            method: "POST",
            
            headers: {
              "Content-Type": "application/json",
            
            },
            body: JSON.stringify({name:input.name,email:input.email, number:input.number}), // body data type must match "Content-Type" header
          });
          const json = await response.json();
          console.log("createuser",json)
          
            if(json){
              console.log("success")
              alert("email send successfully")
            }
      }
    } 
    
    return (
    <>
            <div>
                <div className='heading'>
                    <div className='flex flex-col justify-center items-center text-center'>
                        <h1 className='font-bold text-4xl head1 '>Book A Class With Us..</h1>
                        <p className='font-light font-serif text-xl my-4  mx-12 text-gray-600'>Embark on a journey of discovery and growth with us. Booking a class is your first step towards unlocking a world of knowledge, tailored learning experiences, and interactive sessions designed to elevate your understanding and skills. Whether you're a beginner eager to learn the basics or an advanced learner looking to deepen your expertise, our diverse range of classes offers something for everyone. Join us and transform your potential into achievement.</p>
                    </div>
                </div>

                <div className='email flex justify-center items-center md:flex-row flex-col '>
<div className='img  flex-1'>
<img className=' rounded-3xl ' src={img} alt="" />
</div> 

                    <div className='form my-[-50px] flex-1'>
                        {/* {/* <section className="bg-gray-50 dark:bg-white"> */}
                            <div className="flex flex-col items-center justify-center px-4 py-4 mx-auto md:h-screen lg:py-0"> 

                                <div className="w-full my-12 bg-white rounded-lg   shadow-slate-600 shadow-lg md:mt-0 sm:max-w-md xl:p-0 dark:bg-white ">
                                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-blue-800">
                                            Join Us Now
                                        </h1>
                                        <form className="space-y-4 md:space-y-6" action="#">
                                            
                                        <div>
                                                <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Name</label>
                                                <input onChange={handleChange}
                                                value={input.name} type="name" name="name" id="name" className=" bor bg-gray-50 border border-white text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="More than Five Characters" required />
                                            </div>

                                            <div>
                                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your email</label>
                                                <input onChange={handleChange} 
                                                value={input.email} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                            </div>
                                            <div>
                                                <label for="mobileno" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Mobile</label>
                                                <input onChange={handleChange} 
                                                value={input.number} type="text" name="number" id="number" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                                required />
                                            </div>
                                            
                                            <button onClick={handleSubmit} type="submit" className={`w-full text-white bg-blue-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ${!(input.name.length > 5 && input.email.length > 5 && input.number.length > 5) ? "opacity-50 cursor-not-allowed" : ""}`} >Book A Free Demo Class</button>
                                            
                                            <p className='  font-serif'>After registring with us we will get in touch with u shortly </p>
                                        </form>
                                    </div>
                                </div>
                             </div>
                        {/* </section> */} 
                    </div>
                    </div>

                </div>
            </>
            )
}
