import React from 'react';
import './home.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Service = () => {
  return (
    <>
      {/* Header Section */}
      <header className="main-header clearfix" role="banner">
        <div className="logo">
          <a href="#top">
          <img src="/assets/images/logo.png" alt="Grad School Logo" style={{ width: '200px', height: 'auto' }} />
          </a>
        </div>
        <a href="#menu" className="menu-link">
          <i className="fa fa-bars"></i>
        </a>
        <nav id="menu" className="main-nav" role="navigation">
          <ul className="main-menu">
            <li><a href="/">Home</a></li>
           
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="/service">Service</a></li>
            <li><a href="/prize">Prize</a></li>
            <li><a href="/contactus">Contact</a></li>
          </ul>
        </nav>
      </header>


      {/* Service Section */}
      <section className="section courses" data-section="section4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Our Services</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <Card className="service-card">
                <Card.Img variant="top" src="assets/images/courses-02.jpg" />
                <Card.Body>
                  <Card.Title>Guidance and Inspiration</Card.Title>
                  <Card.Text>
                    Members with religious backgrounds, including pastors and spiritual guides, and individuals who have personally witnessed and supported the transformative journey of others.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="service-card">
                <Card.Img variant="top" src="assets/images/2.jpg" />
                <Card.Body>
                  <Card.Title>Support and Encouragement</Card.Title>
                  <Card.Text>
                    Dedicated supporters who actively encourage and foster a positive and sober lifestyle. Local leaders actively engaged in promoting a healthier and more sober community.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="service-card">
                <Card.Img variant="top" src="assets/images/courses-04.jpg" />
                <Card.Body>
                  <Card.Title>Educational Advocacy</Card.Title>
                  <Card.Text>
                    Teachers, academics, and students actively involved in advocating for a healthier lifestyle.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="service-card">
                <Card.Img variant="top" src="assets/images/3.avif" />
                <Card.Body>
                  <Card.Title>Media Amplification</Card.Title>
                  <Card.Text>
                    Journalists who spread awareness, destigmatize sobriety, and share stories of transformation.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="service-card">
                <Card.Img variant="top" src="assets/images/download.jpg" />
                <Card.Body>
                  <Card.Title>Community Well-being and Financial Support</Card.Title>
                  <Card.Text>
                    Owners and leaders of NGOs focusing on health and community well-being. Medical practitioners, healthcare experts, business owners, and corporate allies contributing to overall well-being and financial support.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p><i className="fa fa-copyright"></i> Copyright 2024 by Gama Global Network</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Service;
