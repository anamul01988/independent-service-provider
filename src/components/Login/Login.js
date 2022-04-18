import React, { useRef } from "react";
import './Login.css';
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import SocialLogin from "./SocialLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, error1] =
    useSendPasswordResetEmail(auth);

  if (loading || sending) {
    return <Loading />;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  let errorElement;
  if (error || error1) {
    errorElement = <p className="text-danger">Error: {error?.message} {error1?.message} </p>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // console.log(email, password)
    signInWithEmailAndPassword(email, password);
  };
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("check your email");
    } else {
      toast("Please enter your email address");
    }
  };
  return (
    <div className="container my-5 ">
      <h3 className="text-secondary text-center mt-3">Please login.</h3>
      <Form onSubmit={handleSubmit} className="login-form mx-auto">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="name@example.com"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="password"
          />
        </Form.Group>
        {errorElement}
        <div className="login-content d-flex justify-content-between align-item-center">
 
          <p className="mt-1">
            New User?{" "}
            <Link
              to="/register"
              className="text-primary pointer-cursor pe-auto text-decoration-none"
            >
              Please Register
            </Link>
          </p>
          <p>
            Forget Password?{" "}
            <Button
              onClick={resetPassword}
            >
              Reset Password
            </Button>
          </p>
        </div>
        <Button className="login-btn  mx-auto d-block my-4 bg-warning text-dark " type="submit">
          Login
        </Button>
        <SocialLogin />
      </Form>
     
      <ToastContainer />
    </div>
  );
};

export default Login;
