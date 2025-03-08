import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { auth } from '../utils/firebase';
import {onAuthStateChanged } from "firebase/auth";

const AuthListener = () => {
  const dispatch = useDispatch();

  // OnAuthStatusChanged is like an event listener => we must use useEffect hook and it must run only once.
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        const {uid , email, displayName} = user;
        dispatch(addUser({
          uid,
          email,
          displayName
        }));
      } else {
        dispatch(removeUser());
      }
    });

    return ()=> unsubscribe();
  },[dispatch])

  return null;
}

export default AuthListener