import React, { useRef, useEffect } from 'react';
import Navbar from './Components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faEye, faBullseye } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play(); // Ensures the video starts playing automatically
    }
  }, []);

  return (
    <>
      {/* Header Section */}
      <header className="main-header clearfix" role="banner">
        <Navbar />
      </header>

      {/* Video Section */}
      <section className="section main-banner" id="top" data-section="section1">
        <video ref={videoRef} autoPlay muted loop id="bg-video" >
          <source src="/assets/images/video.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay header-text">
          <div className="caption">
            <h6>Welcome to Gama Global Network (GGN Ltd)</h6>
            <h2>
              <em style={{ color: 'darkblue' }}>Your</em> global adventure starts here
            </h2>
            <div className="main-button" >
              <div className="scroll-to-section"  >
              <a href="#section4" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Static Card Features Section */}
      <section className="features mt-4">
        <div className="container">
          <div className="row text-center">

            {/* About Us Card */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100 feature-card">
                <div className="icon-circle">
                  <FontAwesomeIcon icon={faUsers} />
                </div>
                <div className="card-body">
                  <h4 className="card-title">ABOUT US</h4>
                  <p className="card-text">
                  We are Gama Global Network, committed to delivering top-notch educational content and interactive learning experiences for students all over the world.
                  </p>
                  <a href="#learn-more-about-us" className="btn btn-outline-light">Learn More</a>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100 feature-card">
                <div className="icon-circle">
                  <FontAwesomeIcon icon={faEye} />
                </div>
                <div className="card-body">
                  <h4 className="card-title">OUR VISION</h4>
                  <p className="card-text">
                    To be a global leader in fostering cross-cultural exchange, empowering individuals with skills, and promoting sustainable tourism while driving Rwanda’s position as a premier destination for international education, environmental protection, and business.
                  </p>
                  <a href="#learn-more-vision" className="btn btn-outline-light">Learn More</a>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100 feature-card">
                <div className="icon-circle">
                  <FontAwesomeIcon icon={faBullseye} />
                </div>
                <div className="card-body">
                  <h4 className="card-title">OUR MISSION</h4>
                  <p className="card-text">
                  To provide exceptional global tourism experiences, professional development opportunities, and promote environmental sustainability. We bring individuals from around the world to experience internships, language learning, and entrepreneurship training in Rwanda. Through our programs, we aim to empower individuals with the knowledge and skills needed to succeed while contributing to Rwanda’s commitment to environmental protection and biodiversity conservation.
                  </p>
                  <a href="#learn-more-mission" className="btn btn-outline-light">Learn More</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section class="service-details">
        <div class="container py-5">
          <h5 class="text-center mb-4">
            <a href="#" class="text-decoration-none text-dark">Our Key Activities</a>
          </h5>
          <div class="row g-4">
            <div class="col-md-6 col-lg-4" data-aos="fade-up">
              <div class="card h-100 shadow-sm">
                <div class="card-img">
                  <img src="assets/images/2.jpg" class="card-img-top img-fluid" alt="Education Support Activities" />
                </div>
                <div class="card-body">
                  <h5 class="card-title">
                    <a href="#" class="text-decoration-none">Education Support Activities</a>
                  </h5>
                  <p class="card-text">
                    Gama Global Network provides comprehensive educational support, offering courses in English, French, German, and Kiswahili, along with training in videography, photography, editing, filming, animation, and graphic design...
                  </p>
                  <div class="read-more">
                    <a href="#section4" className="btn btn-primary">Read More</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4" data-aos="fade-up">
              <div class="card h-100 shadow-sm">
                <div class="card-img">
                  <img src="assets/images/3.avif" class="card-img-top img-fluid" alt="Leveraging ICT for Empowerment" />
                </div>
                <div class="card-body">
                  <h5 class="card-title">
                    <a href="#" class="text-decoration-none">Leveraging ICT for Empowerment</a>
                  </h5>
                  <p class="card-text">
                    Initiate and leverage Information and Communication Technology (ICT) to empower individuals, fostering a unique sense of community well-being through innovative digital initiatives.
                  </p>
                  <div class="read-more">
                    <a href="#section4" className="btn btn-primary">Read More</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4" data-aos="fade-up">
              <div class="card h-100 shadow-sm">
                <div class="card-img">
                  <img src="assets/images/4.jpg" class="card-img-top img-fluid" alt="Promoting Sustainable Agriculture Practices" />
                </div>
                <div class="card-body">
                  <h5 class="card-title">
                    <a href="#" class="text-decoration-none">Promoting Sustainable Agriculture Practices</a>
                  </h5>
                  <p class="card-text">
                    Undertake projects that promote sustainable agricultural practices, contributing to both environmental consciousness and community development in a distinctive way.
                  </p>
                  <div class="read-more">
                    <a href="#section4" className="btn btn-primary">Read More</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4" data-aos="fade-up">
              <div class="card h-100 shadow-sm">
                <div class="card-img">
                  <img src="assets/images/6.png" class="card-img-top img-fluid" alt="Financial Literacy Initiatives" />
                </div>
                <div class="card-body">
                  <h5 class="card-title">
                    <a href="#" class="text-decoration-none">Financial Literacy and Responsible Banking Initiatives</a>
                  </h5>
                  <p class="card-text">
                    Implement initiatives related to financial literacy and responsible banking, cultivating a unique atmosphere of financial responsibility within the community.
                  </p>
                  <div class="read-more">
                    <a href="#section4" className="btn btn-primary">Read More</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4" data-aos="fade-up">
              <div class="card h-100 shadow-sm">
                <div class="card-img">
                  <img src="assets/images/9.jpg" class="card-img-top img-fluid" alt="Substance Abuse and Rehabilitation" />
                </div>
                <div class="card-body">
                  <h5 class="card-title">
                    <a href="#" class="text-decoration-none">Addressing Substance Abuse and Rehabilitation</a>
                  </h5>
                  <p class="card-text">
                    Develop and execute projects aimed at addressing substance abuse and supporting rehabilitation efforts, emphasizing a unique and comprehensive approach to recovery.
                  </p>
                  <div class="read-more">
                    <a href="#section4" className="btn btn-primary">Read More</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4" data-aos="fade-up">
              <div class="card h-100 shadow-sm">
                <div class="card-img">
                  <img src="assets/images/courses-04.jpg" class="card-img-top img-fluid" alt="Health and Well-being Initiatives" />
                </div>
                <div class="card-body">
                  <h5 class="card-title">
                    <a href="#" class="text-decoration-none">Health and Well-being Initiatives</a>
                  </h5>
                  <p class="card-text">
                    Launch initiatives that promote overall health and well-being, offering a distinctive perspective on community health programs.
                  </p>
                  <div class="read-more">
                    <a href="#section4" className="btn btn-primary">Read More</a>
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
              <p><i className="fa fa-copyright"></i> Copyright 2024 by Gama Global Network



              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
