import React from 'react';
import { useSignInWithFacebook } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import fb from '../../images/login/facebook.png';

const SocialLogin = () => {
    const [signInWithFacebook, user, loading, error] = useSignInWithFacebook(auth);
    const navigate = useNavigate();
    
  if (user) {
    navigate("/");
  }
    return (
        <div className="">
        <div className="d-flex align-items-center w-50 mx-auto">
          <div style={{ height: "1px" }} className="bg-primary w-50"> </div>
          <p className="mt-2 px-2">or</p>
          <div style={{ height: "1px" }} className="bg-primary w-50">
            {" "}
          </div>
        
        </div>
        {/* {errorElement} */}
  
        <div className="">
          {/* <button
            onClick={() => signInWithGoogle()}
            className="btn btn-info w-50 d-block mx-auto my-2"
          >
            <img style={{ width: "30px" }} src={google1} alt="google" />
            <span className="px-2">Google Sign In</span>
          </button> */}
          <button 
              onClick={() => signInWithFacebook()}
          className="btn btn-info w-50 d-block mx-auto my-2">
            <img style={{ width: "30px" }} src={fb} alt="google" />
            <span className="px-2">Facebook Sign In</span>
          </button>
          {/* <button
              onClick={() => signInWithGithub()}
           className="btn btn-info w-50 d-block mx-auto ">
            <img style={{ width: "30px" }} src={github1} alt="google" />
            <span className="px-2">Github Sign In</span>
          </button> */}
        </div>
      </div>
    );
};

export default SocialLogin;