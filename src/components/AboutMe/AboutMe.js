import React from "react";
import './AboutMe.css';
import { Button, Card } from "react-bootstrap";
import pic from '../../asset/about/main_pic.jpg';
const AboutMe = () => {
  return (
    <div className="container about d-flex justify-content-center my-5 py-5">
      <Card style={{ width: "20rem" }} className="shadow rounded p-3">
        <Card.Img className="img" variant="top" src={pic}  />
        <Card.Body>
          <Card.Title>My Goal</Card.Title>
          <Card.Text>
            I would like to be a full Stack Web Developer. Now i am working with front end developer on react. I just trying to boost my skill on programming. I have been working hard so that i can be a entrepreneur in It sector.
          </Card.Text>
          <Button variant="secondary">More Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AboutMe;
