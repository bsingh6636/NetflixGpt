import React, { useRef, useState } from 'react'
import { Header } from './Header'
import { formvalidate } from '../utils/formvalidate';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const  [loginform, setloginform]=useState(true)
    const [formvalidateresult , setformvalidateresult] = useState(null)
    const email = useRef(""); const password = useRef(""); const displayName = useRef("");
    const handlesign = () =>{
        setloginform(!loginform)
    }
const formvalidation = () =>{
    // console.log(email.current.value,password.current.value)
    const formvalidatione = formvalidate(email.current.value,password.current.value)
    setformvalidateresult(formvalidatione);
    if(formvalidatione) return;
    if(loginform){
        console.log("Sing in form")
        signInWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            navigate("/browse")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setformvalidateresult(errorCode+"--"+errorMessage)
                    console.log(errorCode+"--"+errorMessage)
                });
       
    }
    else {
        console.log("Sing up form")
        createUserWithEmailAndPassword(auth, email.current.value,password.current.value,displayName.current.value)
        .then((userCredential) => {
            // Signed up  
            const user = userCredential.user;
                console.log(user)
                        updateProfile(auth.currentUser, {
                            displayName: displayName.current.value, photoURL: "https://avatars.githubusercontent.com/u/78442057?v=4"
                            }).then(() => {
                                console.log(user)
                            // ...
                            }).catch((error) => {
                                setformvalidateresult(error)
                            });
                navigate("browse")
             })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setformvalidateresult(errorCode+"--"+errorMessage)
            console.log(errorCode+"--"+errorMessage)
             });
    }
}
  return (
   <div>
    <Header/>
    <div className='relative'>
    <img  className='absolute' src='https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='login background'/>
    <form onSubmit={(e)=>e.preventDefault()} className='absolute p-12 w-[450px] bg-black my-44 ml-[550px]  text-white bg-opacity-70'>
        <h2 className='font-bold text-3xl py-4'>{loginform ? "Sign In" : "Sign Up"}</h2>
        {!loginform &&    <input type='text' ref={displayName} placeholder='Enter your full name' className='p-3  m-2 w-full bg-gray-700 bg-opacity-70'></input>}
        <input type='text'ref={email} placeholder='Email Address' className='p-3  m-2 w-full bg-gray-700 bg-opacity-70'></input><br></br>
        <input type='password' ref={password} placeholder='Password' className='p-3 m-2 w-full bg-gray-700 bg-opacity-70'></input><br></br>
        <p className='pl-3 py-1 text-red-600  font-bold'>{formvalidateresult}</p>
        <button className='p-3 m-2 bg-red-600 flex justify-center w-full rounded-lg' onClick={formvalidation}>{loginform ? "Sign In" : "Sign Up"}</button>
        
        <h4 className=' flex justify-center my-2 p-2 cursor-pointer'>Forgot Password?</h4>
        <div className='flex'>
        <h5>{loginform ? "New to " : "Already user of "}NetflixGPT?</h5><h3 className='ml-1 cursor-pointer font-bold' onClick={handlesign}>{loginform ? "SignUp" : "SignIn"} Now</h3>
        </div>
        

    </form>
    </div>
    </div>
  )
}

export default Login