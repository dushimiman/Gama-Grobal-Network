import React from 'react';
import Navbar from './Components/Navbar';

function Services() {
  return (
    <div className="hero_area">
      <section className="section why-us" id="section2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4">
              <h6 className="card-title text-white" style={{ fontStyle: 'italic' }}>
                <a href="#">ENTREPRENEURSHIP OPPORTUNITIES FOR INTERNATIONAL STUDENTS</a>
              </h6>
              <h6 className="text-white mt-3" style={{ fontStyle: 'italic' }}>
                <a href="#">Summer School Program</a>
              </h6>
              <div className="pt-4">
                <ul className="list-unstyled">
                  <li className="text-white" style={{ fontStyle: 'italic' }}>
                    Our Summer School Program brings together international students with local students from various universities across Rwanda, focusing on fostering cultural and educational exchange. The program includes a blend of educational visits, activities, and leisure
                  </li>
                  <li className="text-white" style={{ fontStyle: 'italic' }}>
                    Focuses on cultural and educational exchange.
                  </li>
                  <h6 className="text-white mt-3" style={{ fontStyle: 'italic' }}>
                    <a href="#">Education Visits and Activities</a>
                  </h6>
                  <li className="text-white" style={{ fontStyle: 'italic' }}>
                    Students have the opportunity to visit factories, industrial zones, and service providers, gaining valuable insights into Rwanda’s key industries. Alongside these visits, the program includes engaging activities such as games and storytelling to enhance the learning experience.
                  </li>

                  <h6 className="text-white mt-3" style={{ fontStyle: 'italic' }}>
                    <a href="#">International Internship Programs</a>
                  </h6>
                  <li className="text-white" style={{ fontStyle: 'italic' }}>
                    Our International Internship Programs provide international students with hands-on experience in various industries, including business, tourism, media, and environmental conservation. Internships are designed to enhance both employability and professional growth, equipping students with practical skills that are in demand globally. Additionally, participants have the opportunity to collaborate with local professionals and industry experts, gaining international work exposure and valuable connections.
                  </li>
                  
                 
                 
      
                </ul>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="d-flex flex-column align-items-center">
                <div className="mb-3">
                  <img
                    src="assets/images/Picture1.jpg"
                    className="img-fluid rounded"
                    alt="Image 1"
                    style={{ objectFit: 'cover', maxHeight: '250px' }}
                  />
                </div>
                <div className="mb-3">
                  <img
                    src="assets/images/Picture2.jpg"
                    className="img-fluid rounded"
                    alt="Image 2"
                    style={{ objectFit: 'cover', maxHeight: '250px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <header className="main-header clearfix" role="banner">
      <Navbar />
      </header>




      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p><i className="fa fa-copyright"></i> Copyright 2024 by Gama Grobal Network
              
              
              
              </p>
            </div>
          </div>
        </div>
      </footer>


    </div>
  );
}

export default Services;
