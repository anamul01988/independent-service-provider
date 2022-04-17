import React from 'react';
import { Link, useParams } from 'react-router-dom';

const CheckOut = () => {
    const {serviceId, service} = useParams();
    console.log(serviceId, service)
    return (
        <div className='container my-5 text-secondary'>
            <h3> Thank you for selecting {serviceId} no service.</h3>
            {/* <h3>{service?.name}</h3> */}
           <div className="text-center my-5">
              <Link to="/proceed" >
              <button className='btn btn-link text-decoration-none'>Proceed Checkout</button>
              </Link>
           </div>
        </div>
    );
};

export default CheckOut;