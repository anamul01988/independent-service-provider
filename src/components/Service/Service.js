import React, { useEffect, useState } from "react";
import ServiceDetail from "../ServiceDetail/ServiceDetail";
import "./Service.css";
const Service = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className="container service my-5">
      <div className="row">
        <div className="service-content text-center">
          <h5 className="fs-6 text-secondary">What service actually provide</h5>
          <h2>Believe in us, we won't let you down </h2>
          <p>
            Medical information is plays an vital rule for every patience as
            well as visitor. People suffer a lot by lacking of valid news. So
            here it is a platform in whice all medical service is given.
          </p>
          
        </div>
        {
              service.map(service=><ServiceDetail key={service.id} service={service}/>)
          }
      </div>
    </div>
  );
};

export default Service;
