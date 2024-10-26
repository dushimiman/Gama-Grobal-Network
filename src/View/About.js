import React, { useRef, useEffect } from 'react';
import './home.css';
import Navbar from './Components/Navbar';

const AboutUs = () => {
  

  return (
    <>  <header className="main-header clearfix" role="banner">
    <Navbar />
    </header>

      <section class="section why-us" data-section="section2">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-heading">
            <h2>Why choose Gama Global Network?</h2>
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
                    <h4 style={{ color: 'black' }}>Educational Initiatives</h4>
                    <p style={{ color: 'black' }}>Conduct workshops, seminars, and awareness campaigns to disseminate knowledge about the dangers of substance abuse and promote a healthy lifestyle.</p>
                  </div>
                </div>
              </article>
              <article id='tabs-2'>
                <div class="row">
                  <div class="col-md-6">
                    <img src="assets/images/choose-us-image-02.png" alt=""/>
                  </div>
                  <div class="col-md-6">
                    <h4 style={{ color: 'black' }}>Support Services</h4>
                    <p style={{ color: 'black' }}>Establish support programs to assist individuals struggling with substance abuse, offering counseling and rehabilitation services.</p> 
                   
                  </div>
                </div>
              </article>
              <article id='tabs-3'>
                <div class="row">
                  <div class="col-md-6">
                    <img src="assets/images/choose-us-image-03.png" alt=""/>
                  </div>
                  <div class="col-md-6">
                    <h4 style={{ color: 'black' }}>Collaboration</h4>
                    <p style={{ color: 'black' }}>Foster partnerships with local organizations, government bodies, and community leaders to create a united front against substance abuse.  Crosscutting areas: Perform any other activities related to its core areas such as other health activities, Cultural education, other social education without accommodation, creative, arts, and entertainment activities.</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <img src="assets/images/choose-us-image-03.png" alt=""/>
                  </div>
                  <div class="col-md-6">
                    <h4 style={{ color: 'black' }}>
                    Crosscutting areas</h4>
                    <p style={{ color: 'black' }}>Perform any other activities related to its core areas such as other health activities, Cultural education, other social education without accommodation, creative, arts, and entertainment activities.</p>
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
            <h4>Watch the video to learn more <em>about Gama Global Network</em></h4>
            
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
              <p><i className="fa fa-copyright"></i> Copyright 2024 by Gama Global Network
              
              
              
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default AboutUs;
