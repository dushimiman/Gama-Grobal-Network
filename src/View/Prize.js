import React from 'react';
import './home.css';

const Prize = () => {
  return (
    <>
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

      <section className="section why-us" id="section2">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 entries">
              {/* Each article can be styled similarly */}
              <article className="entry">
                <h2 className="entry-title">
                  <a href="#">INTERNATIONAL ACADEMIC SOBER PRIZE</a>
                </h2>
                <div className="entry-content">
                  <p>
                    The International Academic Sober Prize, an innovative initiative by the Sober Club, aims to commend and celebrate university and higher learning institutions for their exceptional efforts in promoting a sober lifestyle and community engagement. This global groundbreaking prize is positioned to inspire positive change and resilience among current university students.
                  </p>
                  <div className="read-more">
                    <a href="#">Read More</a>
                  </div>
                </div>
              </article>

              <article className="entry">
                <h2 className="entry-title">
                  <a href="#">Background</a>
                </h2>
                <div className="entry-content">
                  <p>
                    In response to a critical concern revealed by a June 2022 survey from the Rwanda Biomedical Centre, indicating a worrisome increase in alcohol consumption and illegal drug use among Rwandan adolescents, the Sober Club, a dedicated social enterprise committed to community well-being, is launching the Academic Sober Prize.
                  </p>
                  <div className="read-more">
                    <a href="#">Read More</a>
                  </div>
                </div>
              </article>

              {/* Repeat similar structure for other sections */}
              <article className="entry">
                <h2 className="entry-title">
                  <a href="#">Objective of the Academic Sober Prize</a>
                </h2>
                <div className="entry-content">
                  <p>
                    The primary goal is to acknowledge and promote university and higher learning institution-led initiatives that cultivate a culture of sobriety and community development.
                  </p>
                  <div className="read-more">
                    <a href="#">Read More</a>
                  </div>
                </div>
              </article>

              {/* Continue with other sections... */}

            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p><i className="fa fa-copyright"></i> Copyright 2024 by Gama Global Network</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Prize;
