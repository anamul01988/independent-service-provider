import React from "react";
import { Button, Form } from "react-bootstrap";

const Login = () => {
  return (
    <div className="container my-5 ">
      <h3 className="text-secondary text-center mt-3">Please login.</h3>
      <Form className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="password" />
        </Form.Group>
        <Button  className="w-50 mx-auto d-block my-4 bg-warning " type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
