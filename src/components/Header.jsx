import { signOut} from "firebase/auth"
import ZenFlixLogo from "../assets/ZenFlixLogo.png"
import { auth } from "../utils/firebase"
import { useSelector} from "react-redux"
import { useNavigate } from "react-router-dom"
import { USER_AVATAR } from "../utils/constants"
import useOnAuthStateChanged from "../hooks/useOnAuthStateChanged"


const Header = () => {
  const user = useSelector((store)=>store.user);
  const navigate = useNavigate();

  // OnAuthStatusChanged is like an event listener => we must use useEffect hook and it must run only once.
  useOnAuthStateChanged();

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
      
      {user && 
        <div className="flex">
          <img src={USER_AVATAR} alt="default user avatar" className="rounded-2xl w-12 mx-2"/>
          <button className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded" onClick={handleSignOut}>Sign Out</button>
        </div>
      }
      
    </div>
    
  )
}

export default Header