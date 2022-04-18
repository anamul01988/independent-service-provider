import React from 'react';
import { useSignInWithFacebook } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import fb from '../../images/login/facebook.png';
import Loading from '../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithFacebook, user, loading, error] = useSignInWithFacebook(auth);
    const navigate = useNavigate();
    
    let errorElement;
    if(loading ){
      return <Loading/>
    }
    if (error) {
      errorElement =  <p className="text-danger">Error: {error?.message} </p>
    }
  if (user) {
    navigate("/");
  }
    return (
        <div className="">
        <div className="d-flex align-items-center w-100 mx-auto">
          <div style={{ height: "1px" }} className="bg-primary w-50"> </div>
          <p className="mt-2 px-2">or</p>
          <div style={{ height: "1px" }} className="bg-primary w-50">
            {" "}
          </div>
        
        </div>
        {errorElement}
  
        <div className="">
          <button 
              onClick={() => signInWithFacebook()}
          className="btn bg-warning w-50 d-block mx-auto my-2">
            <img style={{ width: "30px" }} src={fb} alt="google" />
            <span className="px-2">Facebook Sign In</span>
          </button>
        </div>
      </div>
    );
};

export default SocialLogin;