import React, { useRef, useState } from 'react'
import { Header } from './Header'
import { formvalidate } from '../utils/formvalidate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { netflixBG } from '../utils/Const';
import SmallDeviceMessage from './SmallDeviceMessage';

const Login = () => {
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loginform, setloginform] = useState(true)
    const [formvalidateresult, setformvalidateresult] = useState(null)
    const email = useRef(""); const password = useRef(""); const displayName = useRef("");
    const [showPassword, setShowPassword] = useState(false);


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const handlesign = () => {
        setloginform(!loginform)
    }
    const formvalidation = () => {
        const formvalidatione = formvalidate(email.current.value, password.current.value);
        setformvalidateresult(formvalidatione);
        if (formvalidatione) return;
        if (loginform) {
            // console.log("Sing in form")
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    // const user = userCredential.user;
                    // console.log(user);
                    // navigate("/browse")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setformvalidateresult(errorCode + "--" + errorMessage)
                    console.log(errorCode + "--" + errorMessage)
                });

        }
        else {
            // console.log("Sing up form")
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value, displayName.current.value)
                .then((userCredential) => {
                    // Signed up  
                    const user = userCredential.user;
                    // console.log(user)
                    updateProfile(auth.currentUser, {
                        displayName: displayName.current.value, photoURL: "https://avatars.githubusercontent.com/u/78442057?v=4"
                    }).then(() => {
                        // console.log(user)
                        const { uid, email, displayName, photoURL } = user;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                        // ...
                    }).catch((error) => {
                        setformvalidateresult(error)
                    });
                    // navigate("browse")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setformvalidateresult(errorCode + "--" + errorMessage)
                    console.log(errorCode + "--" + errorMessage)
                });
        }
    }
    
      function getScreenWidth() {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      }
      
      const size = getScreenWidth(); 
     if (size<500){return <SmallDeviceMessage/>}
     else {
    return (
        <div>
            <Header />
            <div className='relative'>
                <img className='absolute' src={netflixBG} alt='login background' />
                <form onSubmit={(e) => e.preventDefault()} className='absolute p-12 w-[450px] bg-black my-44 ml-[550px]  text-white bg-opacity-80'>
                    <h2 className='font-bold text-3xl py-4'>{loginform ? "Sign In" : "Sign Up"}</h2>
                    {!loginform && <input type='text' ref={displayName} placeholder='Enter your full name' className='p-3  m-2 w-full border border-white bg-black font-semibold placeholder-zinc-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'></input>}
                    <input type='text' ref={email} placeholder='Email Address' className='p-3 border border-white placeholder-zinc-50 m-2 w-full bg-black font-semibold bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'></input><br></br>
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Password'
                            ref={password}
                            className='p-3 m-2 w-full border border-white placeholder-zinc-50  font-semibold bg-black bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'

                        />
                        <button
                            className='absolute right-3 top-1/2 transform -translate-y-1/2 h-9 w-9 '
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ?
                                <img src="https://res.cloudinary.com/djo21zbg6/image/upload/v1715459571/hidepassword_gfaoyi.svg" alt='Hide Password' />
                                : <img src="https://img.icons8.com/glassmorphism/48/visible.png" alt='Show Password' />}
                        </button>
                    </div>
                    <p className='pl-3 py-1 text-red-600  font-bold'>{formvalidateresult}</p>
                    <button className='p-3 m-2 bg-red-600 flex justify-center w-full rounded-lg' onClick={formvalidation}>{loginform ? "Sign In" : "Sign Up"}</button>

                    <h4 className=' flex justify-center my-2 p-2 cursor-pointer'>Forgot Password?</h4>
                    <div className='flex'>
                        <h5>{loginform ? "New to " : "Already user of "}NetflixGPT?</h5><h3 className='ml-1 cursor-pointer font-bold' onClick={handlesign}>{loginform ? "SignUp" : "SignIn"} Now</h3>
                    </div>


                </form>
            </div>
        </div>
    ) }

}
export default Login