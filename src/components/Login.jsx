import { useRef, useState } from "react";
import validateForm from "../utils/validateForm";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const toggleSignInAndSignUp = ()=>{
    setIsSignIn(!isSignIn);
  }

  const handleSubmission = ()=>{
    // step 1 : Validate form data
    let message = "";
    if(isSignIn){
      message = validateForm(emailRef.current.value, passwordRef.current.value);
    }else{
      message = validateForm(emailRef.current.value, passwordRef.current.value,usernameRef.current.value,);
    }
    setErrorMessage(message);

    // Sign In / Sign Up
  }

  return (
    <div className="min-h-screen relative flex justify-center items-center">
      <div className="absolute inset-0">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_large.jpg" alt="background-image"/>

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