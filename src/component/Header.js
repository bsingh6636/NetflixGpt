import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

export const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(store =>store.user)
  const navigate = useNavigate();
  const handlesignout = () =>{
    signOut(auth).then(() => {
     
    }).catch((error) => {
      // An error happened.
    });
  }
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        const{ uid , email , displayName , photoURL} = user;
        dispatch(addUser({uid: uid , email: email , displayName: displayName , photoURL:photoURL}));
        navigate("/browse")
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/")
      }
    });
   } ,[] )
  return (
    <div className='w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
    <img className=' w-64' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='netflix logo'/>
    {user && (<div className='flex p-2'> 
      <img className='w-12 h-12' alt='User Icon' src={user.photoURL}/>
      <button className='h-12 px-3 font-semibold mb-[35px] ml-5 bg-red-700 text-white rounded-lg' onClick={handlesignout}>Sign Out</button>
    </div>)
}
    </div>
  )
}
