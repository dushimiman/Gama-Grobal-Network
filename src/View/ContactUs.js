import React from 'react';
import './home.css';

const ContactUs = () => {
  return (
    <>
      <header className="main-header clearfix" role="banner">
        <div className="logo">
          <a href="#top">
            <img src="/assets/images/logo.png" alt="Grad School Logo" style={{ width: '70px', height: 'auto' }} />
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
            <li><a href="#section6">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="section why-us" id="section2">
        <section className="contact" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-md-12">
                    <div className="info-box" >
                      <i className="bx bx-map"></i>
                      <h3 style={{ color: 'white' }}>Our Address</h3>
                      <p style={{ color: 'white' }}>Kigali city, Kicukiro, Kagarama</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-box" >
                      <i className="bx bx-envelope"></i>
                      <h3 style={{ color: 'white' }}>Email Us</h3>
                      <p style={{ color: 'white' }}><strong>Email:</strong> gamaglobalnetwork@gmail.com</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-box" >
                      <i className="bx bx-phone-call"></i>
                      <h3 style={{ color: 'white' }}>Call Us</h3>
                      <p style={{ color: 'white' }}>+250788872060</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <form action="contact.php" method="post" role="form" className="php-email-form">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                  </div>
                  <div className="form-group mt-3">
                    <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                  </div>
                
                  <div className="text-center">
                    <input type="submit" value="Send Message" className="btn btn-primary" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Footer Section */}
      <footer className="footer" >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                <i className="fa fa-copyright"></i> Copyright 2024 by Gama Global Network
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactUs;
