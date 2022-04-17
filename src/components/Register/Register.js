import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Register.css';
import SocialLogin from '../Login/SocialLogin';
import Loading from '../Shared/Loading/Loading'
const Register = () => {
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating] = useUpdateProfile(auth);

      if(loading ||updating ){
        return <Loading/>
      }
      if(user){
        // navigate('/');
        console.log('user', user)
    }
      const handleRegisterForm = async(event) =>{
        event.preventDefault();
        // console.log(event.target.email.value)
        // console.log(event.target.password.value)
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
       
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');
      }
    return (
        <div className='register-form my-5'>
        <h3 className='mb-3' style={{textAlign: 'center'}}>Registration Form. </h3>
        <form onSubmit={handleRegisterForm}  action="">
            <input type="text" name='name' id='' placeholder='your name' required />
     
            <input type="email" name='email' id='' placeholder='email address' required />
        
            <input type="password" name='password' id='' placeholder='password' required />
            <input onClick={() => setAgree(!agree)}  type="checkbox" name="terms" id="terms" />
            {/* <label className={agree ? ' ps-2 text-primary' : ' ps-2 text-danger'} htmlFor="terms">Accept terms & condition</label> */}
            <label className={`ps-2 ${agree? '': 'text-danger'}`} htmlFor="terms">Accept terms & condition</label>
            <input disabled={!agree}  className='w-50 mx-auto btn btn-primary mt-2' type="submit" value='Register' />
        </form>
        <p>Already have an account? <Link to='/login' className="text-primary pointer-cursor pe-auto text-decoration-none" >Please Login</Link></p>
        <SocialLogin/>

    </div>
    );
};

export default Register;