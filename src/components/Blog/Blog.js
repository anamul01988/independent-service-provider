import React from "react";
import { Button, Card } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="container">
      <Card className="my-5 w-50 mx-auto shadow ">
        <Card.Header>Question 1 With Answer</Card.Header>
        <Card.Body>
          <Card.Title>Difference between Authrization and Authentication.</Card.Title>
          <Card.Text>
            1. Authentication is first process of authorization that allows our identity to grant access to the system. Whereas Authorization determines whether user is authorized to access the resources or not and authorized is happend after authentication. <br />
            2. Authentication provides the validating user credentials to gain user acces whereas authurization is the process of verifying before permit allowed. <br />
            3. Authentication recquires user's login details on the other hand authorization need user's security level.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="my-5 w-50 mx-auto shadow ">
        <Card.Header>Question 1 With Answer</Card.Header>
        <Card.Body>
          <Card.Title>Why firebase is used? What other options do we have to implement authentication?</Card.Title>
          <Card.Text>
              Firebase store data as NoSQL categorised database program . It stored user's details and other metadata. It alos provides Authenticaton, Database , Remote Config , hoistiong opportunity including Cloud storage as well as messaging.
              Firebase is built on Google's infrastructure. As it is Providing a variety of significant tools and services so  i think it is very essential to develop a quality apps.
              <br />
              <br />
              Firebase is used for many purposes especially for authentication. For Authentication , Token Authentication that allow digitally encoded signature. It is used to authenticate and authorize  a user to access specific resources.
              Additionally , Standard Authentication, Multi Factor Authentication, Password Authentication and Social Authentication also use to implement Authentication.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="my-5 w-50 mx-auto shadow">
        <Card.Header>Question 1 With Answer</Card.Header>
        <Card.Body>
          <Card.Title>What othe service does firebase provide except Authentication?</Card.Title>
          <Card.Text>
              Firebase is called as Baas that means Backend as a service. It provides a number of significant tools and services to build a quality apps . Firebase is built on Google's infrastructure . So it is much secured. It is categorized as a NOSQL database programme.
              Firebase provides many faicility among them if i consider the free services of firebase we will get Cloud storage, Cloud Firestore, Firebase Realtime data and firebase Hoisting.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blog;
