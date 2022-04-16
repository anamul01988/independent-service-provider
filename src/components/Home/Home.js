import React from 'react';
import './Home.css';
import home from '../../asset/home.png'
const Home = () => {
    return (
        <div className='container-full home'>
           <div className="container py-3">
               <div className="row">
                   <div className="col-md-6 col-12">
                      <div className="home-content">
                          <h2>Medical Informatics</h2>
                          <h3><h4>Recognized With the </h4>
                          2021
                          <h4>Good Service Leadership award By United 
                              states Virtual Critical Care
                          </h4>
                          </h3>
                          <div className="home-content-btn  mt-4">
                          <button className='btn'>Read More</button>
                          </div>
                      </div>

                   </div>
                   <div className="col-md-6 col-12 my-3">
                       <img src={home} alt="" />
                   </div>
               </div>
           </div>
        </div>
    );
};

export default Home;