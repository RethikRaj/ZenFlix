import { signOut } from "firebase/auth"
import ZenFlixLogo from "../assets/ZenFlixLogo.png"
import { auth } from "../utils/firebase"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const Header = () => {
  const user = useSelector((store)=>store.user);
  const navigate = useNavigate();
  const handleSignOut = async ()=>{
    await signOut(auth);
    navigate("/");
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