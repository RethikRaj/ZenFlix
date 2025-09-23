import { useRef, useState } from "react";
import validateForm from "../utils/validateForm";
import {createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from "../utils/firebase"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BANNER } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();

  const toggleSignInAndSignUp = ()=>{
    if(usernameRef.current) usernameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
    setErrorMessage("");
    setIsSignIn(!isSignIn);
  }

  const handleSubmission = async ()=>{
    // step 1 : Validate form data
    let message = "";
    if(isSignIn){
      message = validateForm(emailRef.current.value, passwordRef.current.value);
    }else{
      message = validateForm(emailRef.current.value, passwordRef.current.value,usernameRef.current.value,);
    }
    setErrorMessage(message);

    if(message !== null) return;

    // Step 2 : If validation is succesful sign up or sign in that user.
    // const auth = getAuth(); // this is used in every firebase api thus keep it in central place like firebase.js
    if(!isSignIn){
      // sign up logic
      try{
        await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
        // Step 3 : Update data of user in User Slice => But this i am not doing here instead i will use onAuthStateChanged API.
        // Step 4 : Update displayname of user
        await updateProfile(auth.currentUser,{displayName : usernameRef.current.value});
        // Step 5 : Update data of user in User Slice => This must be done here only since onAuthStateChanged is not triggered .
        const {uid, email, displayName} = auth.currentUser;
        dispatch(addUser({
          uid,
          email,
          displayName
        }))
      }catch(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + " : " + errorMessage);
      }
      

    }else{
      // sign in logic
      try{
        await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
      }catch(error){
        const errorCode = error.code;
        // const errorMessage = error.message;
        if(errorCode === "auth/invalid-credential"){
          setErrorMessage("Check your email id or password");
        }
      }

    }
    
  }

  return (
    <div className="min-h-screen relative flex justify-center items-center">
      <div className="absolute inset-0">
        <img src={BANNER} alt="background-image"/>

        {/* Gradient Overlay (z-10 to be above the image but under the header) */}
        <div className="absolute inset-0 bg-gradient-to-br from-black to-transparent z-10"></div>
      </div>

      <form onSubmit={(e)=>e.preventDefault()} className="absolute z-20 bg-black/60 w-3/12 p-8 text-white">
        <h1 className="mb-4 font-bold text-2xl">{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && <input ref={usernameRef} className="w-full my-4 text-gray-300 bg-gray-600 p-4 rounded-lg outline-none" type="text" placeholder="Full Name" />}
        <input ref={emailRef} className="w-full my-4 text-gray-300 bg-gray-600 p-4 rounded-lg outline-none" type="text" placeholder="Email"/>
        <input ref={passwordRef} className="w-full my-4 text-gray-300 bg-gray-600 p-4 rounded-lg outline-none" type="password" placeholder="Password"/>
        <p className="text-red-700 text-lg font-bold">{errorMessage}</p>
        <button className="bg-red-700 w-full my-2 p-4 rounded-lg cursor-pointer" onClick={handleSubmission}>{isSignIn ? "Sign In" : "Sign Up"}</button>
        <p className="m-2">{isSignIn ? "New To ZenFlix?" : "Already an User?"}<span className="hover:underline cursor-pointer" onClick={toggleSignInAndSignUp}>{isSignIn ? "Sign Up Now.":"Sign In Now."}</span></p>

      </form>
      
    </div>
  )
}

export default Login;