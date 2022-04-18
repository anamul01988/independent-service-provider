import React from "react";
import './Satisfiction.css';
import img1 from "../../asset/patient/testimonial-1.jpg";
import img2 from "../../asset/patient/testimonial2.jpg";
import img3 from "../../asset/patient/testimonial3.jpg";
import satisfaction from '../../asset/satisfaction/satisfaction.jpg';
import {BsArrow90DegRight} from 'react-icons/bs'
const Satisfiction = () => {
  return (
    <div className="container satisfiction my-5">
      <div className="row">
        <div className="col-md-6 col-12 col-sm-12">
            <img className="img-fluid " src={satisfaction} alt="" />
        </div>
        <div className="col-md-6 col-12 col-sm-12">
          <h2>
            Patient & Family <br /> Satisfiction{" "}
          </h2>
          <p>
            My only only target to reach poor and helpless, forcless people. So
            that they can get their human rights. In order to this, i create a
            platform in which i keep contact more than 200 service provider. to
            where doctors are numerous. My duty is to provide doctor service ,
            nurse service , information coellecting and providing to the people.
            People are very much gratefull. I get around 1000 phone calls daily
            and trying my best to providing such an wonderfull service.
          </p>
          <div className="satisfiction-centent d-flex justify-content-around align-items-center">
              < BsArrow90DegRight className="icon"/>
          <div
            id="carouselExampleControls"
            className="carousel slide w-25"
            data-bs-ride="carousel"
            
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={img1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={img2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={img3} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev variant-secondary"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          </div>
          <button className="btn">Review & testimonial</button>
        </div>
      </div>
    </div>
  );
};

export default Satisfiction;
