import React, { useRef, useEffect } from 'react';
import './home.css';

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play(); // Ensures the video starts playing automatically
    }
  }, []);

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
            <li><a href="/contactus">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Video Section */}
      <section className="section main-banner" id="top" data-section="section1">
        <video ref={videoRef} autoPlay muted loop id="bg-video" style={{ width: '100%', height: 'auto' }}>
          <source src="/assets/images/video.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay header-text">
          <div className="caption">
            <h6>Welcome to Gama Global Network</h6>
            <h2>
            <p>We are excited to have you with us on this journey of learning and innovation.</p>
            </h2>
            <div className="main-button">
              <div className="scroll-to-section">
                <a href="/aboutus">Discover more</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-12">
              <div className="features-post">
                <div className="features-content">
                  <div className="content-show">
                    <h4><i className="fa fa-book"></i>About Us</h4>
                  </div>
                  <div className="content-hide">
                    <p>We are Gama Global Network, committed to delivering top-notch educational content and interactive learning experiences for students all over the world.</p>
                    
                    <div className="scroll-to-section"><a href="#section2">Read More</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="features-post second-features">
                <div className="features-content">
                  <div className="content-show">
                    <h4><i className="fa fa-book"></i>Our Mission</h4>
                  </div>
                  <div className="content-hide">
                    <p>Our mission is to provide accessible and high-quality education through a digital platform that empowers students to reach their full potential.</p>
                    
                    <div className="scroll-to-section"><a href="#section3">Read More</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="features-post third-features">
                <div className="features-content">
                  <div className="content-show">
                    <h4><i className="fa fa-book"></i>Our Vision</h4>
                  </div>
                  <div className="content-hide">
                    <p>We envision a world where education is not limited by geography, cost, or access, ensuring that every learner can thrive and succeed.</p>
                    
                    <div className="scroll-to-section"><a href="#section4">Read More</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
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
    </>
  );
};

export default Home;
