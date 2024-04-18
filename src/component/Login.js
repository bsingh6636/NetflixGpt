import React from 'react'
import { Header } from './Header'

const Login = () => {
  return (
   <div>
    <Header/>
    <div className='relative'>
    <img  className='absolute' src='https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='login background'/>
    <form className='absolute p-12 w-[450px] bg-black my-44 ml-[550px]  text-white bg-opacity-70'>
        <h2 className='font-bold text-3xl py-4'>Sign In</h2>
        <input type='text' placeholder='Email Adress' className='p-3  m-2 w-full bg-gray-700 bg-opacity-70'></input><br></br>
        <input type='password' placeholder='Password' className='p-3 m-2 w-full bg-gray-700 bg-opacity-70'></input><br></br>
        <button className='p-3 m-2 bg-red-600 flex justify-center w-full'>Log In</button>
        <h4 className=' flex justify-center my-2 p-2'>OR</h4>
        <h4 className=' flex justify-center my-2 p-2'>Forgot Password?</h4>
    </form>
    </div>
    </div>
  )
}

export default Login