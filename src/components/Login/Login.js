import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const location = useLocation();
  
  let from = location.state?.from?.pathname || "/";
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  
  if(loading ){
    return <Loading/>
  }
  if(user){
    navigate(from, {replace: true});
  }

  const handleSubmit = event =>{
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // console.log(email, password)
    signInWithEmailAndPassword(email, password)

  }
  return (
    <div className="container my-5 ">
      <h3 className="text-secondary text-center mt-3">Please login.</h3>
      <Form onSubmit={handleSubmit} className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="name@example.com" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="password" />
        </Form.Group>
        <Button  className="w-50 mx-auto d-block my-4 bg-warning " type="submit">
          Login
        </Button>
      </Form>
      <p>New User? <Link to='/register' className="text-primary pointer-cursor pe-auto text-decoration-none" >Please Register</Link></p>
      <p>Forget Password? <Button className=" btn btn-link text-dark pointer-cursor pe-auto text-decoration-none" >Reset Password</Button></p>
      <SocialLogin/>
    </div>
  );
};

export default Login;
