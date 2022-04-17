// import { Button } from 'bootstrap';
import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './ServiceDetail.css';
const ServiceDetail = ({ service }) => {
  const navigate = useNavigate();
  const { img, name, description, id, price } = service;
  // console.log(service);
  const navigateToServiceDetail = (id)=>{
    console.log('added',id,service)
    navigate(`/service/${id}`)
  }
  return (
    <div className="col-md-6 col-lg-4 col-12">
      {/* <h2>{service.name}</h2> */}
      <Card className="my-3 shadow cart">
        <Card.Img className="p-3 rounded" variant="top" height={250} src={img} />
        <Card.Body className="text-center">
          <Card.Title className="title">{name}</Card.Title>
          <Card.Text className="description">{description}</Card.Text>
          <Card.Text className=" price" >${price}</Card.Text>
          <Button onClick={()=>navigateToServiceDetail(id,service)} className="w-100 btn" variant="primary">Add To Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceDetail;
