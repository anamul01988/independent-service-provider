import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
const CheckOut = () => {
    const {serviceId, service} = useParams();
    console.log(serviceId, service)
    const notify = () => toast("Thank you for shipping !");
    return (
        <div className='container my-5 text-secondary'>
            <h3> You have selected {serviceId} no service. I will contact soon.</h3>

            {/* <h3>{service?.name}</h3> */}
           <div className="text-center my-5">
              <Link to="" >
              <button onClick={notify} className='btn btn-link text-decoration-none'>Proceed Shipment</button>
              </Link>
              <ToastContainer/>
           </div>
        </div>
    );
};

export default CheckOut;