import React, { useRef, useEffect } from 'react';
import './home.css';

const AboutUs = () => {
  

  return (
    <> <header className="main-header clearfix" role="banner">
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
        <li><a href="#section6">Contact</a></li>
      </ul>
    </nav>
  </header>

      <section class="section why-us" data-section="section2">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-heading">
            <h2>Why choose Gama Grobal Network?</h2>
          </div>
        </div>
        <div class="col-md-12">
          <div id='tabs'>
            
            <section class='tabs-content'>
              <article id='tabs-1'>
                <div class="row">
                  <div class="col-md-6">
                    <img src="assets/images/choose-us-image-01.png" alt=""/>
                  </div>
                  <div class="col-md-6">
                    <h4>Educational Initiatives</h4>
                    <p>Conduct workshops, seminars, and awareness campaigns to disseminate knowledge about the dangers of substance abuse and promote a healthy lifestyle.</p>
                  </div>
                </div>
              </article>
              <article id='tabs-2'>
                <div class="row">
                  <div class="col-md-6">
                    <img src="assets/images/choose-us-image-02.png" alt=""/>
                  </div>
                  <div class="col-md-6">
                    <h4>Support Services</h4>
                    <p>Establish support programs to assist individuals struggling with substance abuse, offering counseling and rehabilitation services.</p> 
                   
                  </div>
                </div>
              </article>
              <article id='tabs-3'>
                <div class="row">
                  <div class="col-md-6">
                    <img src="assets/images/choose-us-image-03.png" alt=""/>
                  </div>
                  <div class="col-md-6">
                    <h4>Collaboration</h4>
                    <p>Foster partnerships with local organizations, government bodies, and community leaders to create a united front against substance abuse.  Crosscutting areas: Perform any other activities related to its core areas such as other health activities, Cultural education, other social education without accommodation, creative, arts, and entertainment activities.</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <img src="assets/images/choose-us-image-03.png" alt=""/>
                  </div>
                  <div class="col-md-6">
                    <h4>
                    Crosscutting areas</h4>
                    <p>Perform any other activities related to its core areas such as other health activities, Cultural education, other social education without accommodation, creative, arts, and entertainment activities.</p>
                  </div>
                </div>
              </article>
            </section>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  

  <section class="section video" data-section="section5">
    <div class="container">
      <div class="row">
        <div class="col-md-6 align-self-center">
          <div class="left-content">
            <span>our presentation is for you</span>
            <h4>Watch the video to learn more <em>about Gama Grobal Network</em></h4>
            
            <div class="main-button"><a href="/assets/images/video.mp4" class="play">learn More</a></div>
          </div>
        </div>
        <div class="col-md-6">
          <article class="video-item">
            
           <figure>
  <video class="play" controls>
    <source src="/assets/images/video.mp4" type="video/mp4" />
   
  </video>
  
</figure>
          </article>
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

export default AboutUs;
