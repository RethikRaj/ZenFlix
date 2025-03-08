import { signOut, onAuthStateChanged  } from "firebase/auth"
import ZenFlixLogo from "../assets/ZenFlixLogo.png"
import { auth } from "../utils/firebase"
import { useSelector , useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect } from 'react'
import { addUser, removeUser } from '../utils/userSlice';


const Header = () => {
  const user = useSelector((store)=>store.user);
  const navigate = useNavigate();
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
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return ()=> unsubscribe();
  },[dispatch, navigate])


  const handleSignOut = async ()=>{
    try{
      await signOut(auth);
    }catch(error){
      console.log(error);
      navigate("/error");
    }
  }

  return (
    <div className="flex flex-row justify-between absolute z-20 w-full my-3 px-3">
      <div className="w-44">
        <img src={ZenFlixLogo} href="ZenFlix Logo"/>
      </div>
      <div>
        {user && <button className="bg-zinc-700 hover:bg-zinc-600 text-white font-bold py-2 px-4 rounded" onClick={handleSignOut}>Sign Out</button>}
      </div>
    </div>
    
  )
}

export default Header