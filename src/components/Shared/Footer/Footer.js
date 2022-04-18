import React from "react";
import './Footer.css';
const Footer = () => {
  return (
    <div className="container-full text-center bg-dark text-light py-5">
      <div className="container footer">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="list d-flex">
              <h3 className="text-warning fw-bold">Human Right & Advocacy</h3>
              <h3>Privacy </h3>
              <h3 >Cookie </h3>
              <h3 >Term of Use</h3>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <h3 className="">
              Copyright © 2022 Medical Informatics, <span className="text-warning">All rights reserved</span>.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
