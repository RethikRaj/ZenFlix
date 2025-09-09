import { signOut} from "firebase/auth"
import ZenFlixLogo from "../assets/ZenFlixLogo.png"
import { auth } from "../utils/firebase"
import { useDispatch, useSelector} from "react-redux"
import { useNavigate } from "react-router-dom"
import { USER_AVATAR } from "../utils/constants"
import useOnAuthStateChanged from "../hooks/useOnAuthStateChanged"
import { clearGptSliceState, toggleOnGptSearchPage } from "../utils/GptSlice"
import { useEffect } from "react"
import { clearMoviesState } from "../utils/moviesSlice"


const Header = () => {
  const user = useSelector((store)=>store.user);
  const gptSearch = useSelector((store)=>store.gpt.onGptSearchPage);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // OnAuthStatusChanged is like an event listener => we must use useEffect hook and it must run only once.
  useOnAuthStateChanged();

  const handleSignOut = async ()=>{
    try{
      await signOut(auth);
      dispatch(clearMoviesState());
      dispatch(clearGptSliceState());
    // eslint-disable-next-line no-unused-vars
    }catch(error){
      navigate("/error");
    }
  }

  const handleGptSearch = ()=>{
    dispatch(toggleOnGptSearchPage());
  }

  useEffect(()=>{
    if(!user) return;

    if(gptSearch){
      navigate("gptSearch");
    }else{
      navigate("browse");
    }
  },[gptSearch,navigate, user]);

  return (
    <div className="flex flex-row justify-between absolute z-20 w-full my-3 px-3">
      <div className="w-44">
        <img src={ZenFlixLogo} href="ZenFlix Logo"/>
      </div>
      
      {user && 
        <div className="flex mt-2">
          <img src={USER_AVATAR} alt="default user avatar" className="rounded-2xl mx-2 w-10"/>
          <button to="GPTSearch" className="bg-red-600 hover:bg-red-500 text-white font-bold py-2.5 px-6 rounded mr-2 cursor-pointer" onClick={handleGptSearch}>{gptSearch ? "Browse":"GPT Search"}</button>
          <button className="bg-red-600 hover:bg-red-500 text-white font-bold py-1 px-6 rounded cursor-pointer" onClick={handleSignOut}>Sign Out</button>
        </div>
      }
      
    </div>
    
  )
}

export default Header