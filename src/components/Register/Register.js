import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
const Register = () => {
    return (
        <div className='register-form my-5'>
        <h3 className='mb-3' style={{textAlign: 'center'}}>Please Register. </h3>
        <form  action="">
            <input type="text" name='name' id='' placeholder='your name' />
     
            <input type="email" name='email' id='' placeholder='email address' required />
        
            <input type="password" name='password' id='' placeholder='password' required />
            <input  type="checkbox" name="terms" id="terms" />
            {/* <label className={agree ? ' ps-2 text-primary' : ' ps-2 text-danger'} htmlFor="terms">Accept terms & condition</label> */}
            <label  htmlFor="terms">Accept terms & condition</label>
            <input  className='w-50 mx-auto btn btn-primary mt-2' type="submit" value='Register' />
        </form>
        <p>Already have an account? <Link to='/login' className="text-primary pointer-cursor pe-auto text-decoration-none" >Please Login</Link></p>
        {/* <SocialLogin/> */}

    </div>
    );
};

export default Register;