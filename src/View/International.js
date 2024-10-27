import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ApplicationForm.css';
import { Layout, Typography, Card, Button } from "antd";

const { Content } = Layout;
const { Title, Paragraph } = Typography;
function International() {
    return (
        <>
            <header id="header" className="header sticky-top">
                <div className="topbar d-flex align-items-center dark-background">
                    <div className="container d-flex justify-content-center justify-content-md-between">
                        <div className="contact-info d-flex align-items-center">
                            <i className="bi bi-envelope d-flex align-items-center">
                                <a href="mailto:contact@example.com">gamariel9@gmail.com</a>
                            </i>
                            <i className="bi bi-phone d-flex align-items-center ms-4">
                                <span>(+250) 788872060</span>
                            </i>
                            <i className="bi bi-geo-alt d-flex align-items-center ms-4">
                                <span>Rwanda, Kigali, Kicukiro</span>
                            </i>
                        </div>
                        <div className="social-links d-none d-md-flex align-items-center">
                            <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                            <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                            <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </div>

                <div className="branding d-flex align-items-center">
                    <div className="container d-flex align-items-center justify-content-between position-relative">
                        {/* Left logo */}
                        <a href="index.html" className="d-flex align-items-center" style={{ position: 'absolute', left: 0 }}>
                            <img
                                src="assets/images/logo.png"
                                alt="Left Logo"
                                style={{
                                    width: '150px', // Default width for small screens
                                    height: 'auto',
                                }}
                                className="img-fluid"
                            />
                        </a>

                        {/* Right logo */}
                        <a href="index.html" className="d-flex align-items-center" style={{ position: 'absolute', right: 0 }}>
                            <img
                                src="assets/images/logo1.png"
                                alt="Right Logo"
                                style={{
                                    width: '80px', // Default width for small screens
                                    height: 'auto',
                                }}
                                className="img-fluid"
                            />
                        </a>
                    </div>
                </div>
            </header>

            <main className="main">
                <section id="hero" className="hero section dark-background">
                    <img src="assets/img/hero-bg.jpg" alt="Hero Background" data-aos="fade-in" />
                    <div className="container position-relative">
                        <div className="welcome position-relative" data-aos="fade-down" data-aos-delay="100">
                            <h2>Explore Rwanda with WSSU & Gama Global Network (GGN Ltd)’s </h2>
                            <p>Professional Internship Program Summer 2025</p>
                        </div>

                        <div className="content row gy-4">
                            <div className="col-lg-4 d-flex align-items-stretch">
                                <div className="why-box" data-aos="zoom-out" data-aos-delay="200">
                                    <h3>Your Global Adventure Starts Here!</h3>
                                    <p>
                                        Winston-Salem State University (WSSU) and Gama Global Network (GGN Ltd) are excited to co-organize a life-changing 30 day professional internship in Rwanda, “The Land of a Thousand Hills.” This unique collaboration provides WSSU students with the opportunity to gain hands-on experience, immerse themselves in Rwandan culture, and build their professional skills in one of Africa's most beautiful countries.
                                    </p>
                                    <div className="text-center">
                                        <a href="/" className="more-btn"><span>Learn More</span> <i className="bi bi-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-8 d-flex align-items-stretch">
                                <div className="d-flex flex-column justify-content-center">
                                    <div className="row gy-4">
                                        <div className="col-xl-4 d-flex align-items-stretch">
                                            <div className="icon-box" data-aos="zoom-out" data-aos-delay="300">
                                                <i className="bi bi-clipboard-data"></i>
                                                <h4>Winston-Salem State University (WSSU) </h4>
                                                <p>is a top-ranked HBCU in North Carolina, committed to global learning experiences that empower students for success in international careers. WSSU brings academic excellence and innovative learning opportunities to its students through partnerships like this.</p>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 d-flex align-items-stretch">
                                            <div className="icon-box" data-aos="zoom-out" data-aos-delay="400">
                                                <i className="bi bi-gem"></i>
                                                <h4>Gama Global Network (GGN Ltd)</h4>
                                                <p>based in Kigali, Rwanda, is a fully registered company in Rwanda known for management consultancy activities, research and experimental development on social sciences and humanities, professional scientific and technical activities, activities of employment placement agencies and other educational activities.  </p>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 d-flex align-items-stretch">
                                            <div className="icon-box" data-aos="zoom-out" data-aos-delay="500">
                                                <i className="bi bi-inboxes"></i>
                                                <h4>By partnering with WSSU</h4>
                                                <p>Gama Global Network (GGN Ltd) offers international students access to unique, hands-on professional opportunities in Rwanda.
                                                    Together, WSSU and Gama Global Network (GGN Ltd) ensure an enriching experience for students that combines academic growth, practical training, and cultural immersion.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="services" className="services section light-background">
                    <div className="container section-title" data-aos="fade-up">
                        <h2>Target Internship areas in Rwanda </h2>
                        {/* <p>Explore opportunities tailored to a variety of academic disciplines, including</p> */}
                    </div>

                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                                <div className="service-item position-relative">
                                    <div className="icon">
                                        <i className="bi bi-activity"></i>
                                    </div>
                                    <a href="#" className="stretched-link">
                                        <h3>Gama Global Network (GGN LTD)</h3>
                                    </a>
                                    <p>Students can immerse themselves in Rwanda's growing entrepreneurial ecosystem, learning about market entry strategies, financial models, and innovation in emerging markets.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                                <div className="service-item position-relative">
                                    <div className="icon">
                                        <i className="bi bi-broadcast"></i>
                                    </div>
                                    <a href="#" className="stretched-link">
                                        <h3>Sober Club Rwanda</h3>
                                    </a>
                                    <p>Students can collaborate with Rwandan youth to provide training in areas such as entrepreneurship, communication, and technology. The cross-cultural exchange will allow U.S. students to share their expertise while learning from a Rwandan context.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                                <div className="service-item position-relative">
                                    <div className="icon">
                                        <i className="bi bi-easel"></i>
                                    </div>
                                    <a href="#" className="stretched-link">
                                        <h3>East African University Rwanda (EAUR)</h3>
                                    </a>
                                    <p>With established incubation programs, American students can gain exposure to early-stage business development and research innovation that aligns with the university’s academic goals.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                                <div className="service-item position-relative">
                                    <div className="icon">
                                        <i className="bi bi-easel"></i>
                                    </div>
                                    <a href="#" className="stretched-link">
                                        <h3>Strive Foundation Rwanda (SFR)</h3>
                                    </a>
                                    <p>Students can experience firsthand how entrepreneurship is driving positive change in underprivileged communities, offering a rich field-based learning environment.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                                <div className="service-item position-relative">
                                    <div className="icon">
                                        <i className="bi bi-easel"></i>
                                    </div>
                                    <a href="#" className="stretched-link">
                                        <h3>Health Development Initiative (HDI)</h3>
                                    </a>
                                    <p>HDI can offer students the chance to work on impactful health initiatives, developing entrepreneurial solutions that address healthcare challenges in a developing context.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                                <div className="service-item position-relative">
                                    <div className="icon">
                                        <i className="bi bi-easel"></i>
                                    </div>
                                    <a href="#" className="stretched-link">
                                        <h3>AETAR GROUP</h3>
                                    </a>
                                    <p>U.S. students can gain practical experience in organizing and managing events, learning how to coordinate large-scale operations while understanding the dynamics of event entrepreneurship in Rwanda.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                                <div className="service-item position-relative">
                                    <div className="icon">
                                        <i className="bi bi-easel"></i>
                                    </div>
                                    <a href="#" className="stretched-link">
                                        <h3>RICEM</h3>
                                    </a>
                                    <p>With Rwanda’s strong cooperative movement, students can gain practical insights into how local businesses operate within a cooperative </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="alt-services" class="alt-services section">
                    <div className="container section-title" data-aos="fade-up">
                        <h2>Discover Rwanda’s Beauty </h2>
                        <p>While building your professional skills, explore Rwanda’s incredible natural beauty and cultural heritage</p>
                    </div>

                    <div class="container" data-aos="fade-up" data-aos-delay="100">

                        <div class="row gy-4">

                            <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="200">
                                <div class="service-item position-relative">
                                    <div class="img">
                                        <img src="assets/images/akagera.jpg" class="img-fluid" alt=""
                                            style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div class="details">
                                        <a href="service-details.html" class="stretched-link">
                                            <h3>Akagera National Park</h3>
                                        </a>
                                        <p>Trek through rainforests to encounter endangered mountain gorillas.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="300">
                                <div class="service-item position-relative">
                                    <div class="img">
                                        <img src="assets/images/lake.jpg" class="img-fluid" alt=""
                                            style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div class="details">
                                        <a href="service-details.html" class="stretched-link">
                                            <h3>Lake Kivu</h3>
                                        </a>
                                        <p>Relax by the serene shores of one of Africa’s Great Lakes</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="400">
                                <div class="service-item position-relative">
                                    <div class="img">
                                        <img src="assets/images/kigali.jpg" class="img-fluid" alt=""
                                            style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div class="details">
                                        <a href="service-details.html" class="stretched-link">
                                            <h3>Kigali City</h3>
                                        </a>
                                        <p>Explore the vibrant and modern capital of Rwanda, full of markets, art, and history.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="500">
                                <div class="service-item position-relative">
                                    <div class="img">
                                        <img src="assets/images/culture.jpg" class="img-fluid" alt=""
                                            style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div class="details">
                                        <a href="service-details.html" class="stretched-link">
                                            <h3>Cultural Immersion</h3>
                                        </a>
                                        <p>Participate in local festivals and learn about Rwanda’s traditions and history.</p>
                                        <a href="service-details.html" class="stretched-link"></a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </section>
                <Layout className="application-form">


                    <Content className="content-container">



                        <div className="container">
                            <div className="row justify-content-center text-center">
                                <div className="col-12">
                                    {/* Additional content if needed */}
                                </div>
                            </div>

                            <div className="row justify-content-center info-section">
                                {[
                                    
                                    {
                                        title: "Fields of Internship",
                                        content: [
                                            "✅Education",
                                            "✅Healthcare",
                                            "✅Tourism & Hospitality",
                                            "✅Business & Finance",
                                            "✅Marketing & Social Work",
                                            "✅Computer Science & Technology",
                                            "✅Exercise Science & Nursing"
                                        ]
                                    },
                                    
                                    {
                                        title: "Why You Should Apply",
                                        content: [
                                            "✅ International exposure: Enhance your skills in real-world settings abroad.",
                                            "✅ Cultural Immersion: Experience Rwanda’s rich culture and history",
                                            "✅ Networking Opportunities: Build connections with Rwandan professionals and fellow students.",
                                            "✅ Excursions: Enjoy trips to Rwanda’s top natural and cultural landmarks.",
                                            "✅ Global Perspective: Gain a deeper understanding of your field on an international scale."
                                            
                                        ]
                                    },
                                    {
                                        title: "Program Details",
                                        content: [
                                            "✅Expected Number of students: 10-100 Americans (including 9-90 students and 1-10 chaperons) ",
                                            "⏰When: Summer 2025 ( June-July 2025)",
                                            "✅Where: Kigali, Rwanda",
                                            "⏰Duration: 30 days",
                                            "✅Cost: under discussion ",
                                            "✅Chaperone Fee: under discussion"
                                          
                                        ]
                                    },
                                    {
                                        title: "Apply Today!",
                                        content: [
                                            "⏰ Deadline:  January , 2025",
                                            <a className="btn btn-primary btn-lg mt-2" href="/registerforInternationalInternship" target="_blank" rel="noopener noreferrer">Apply Here</a>
                                            
                                        ]
                                    },
                                  
                                 
                                ].map((card, index) => (
                                    <div key={index} className="col-12 col-sm-6 col-lg-4">
                                        <Card className="info-card" title={card.title} bordered={false}>
                                            {card.content.map((text, idx) => (
                                                <Paragraph key={idx}>{text}</Paragraph>
                                            ))}
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Content>

                    <footer>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <p><i className="fa fa-copyright"></i> Copyright 2024 by Gama Global Network</p>
                                </div>
                            </div>
                        </div>
                    </footer>
                </Layout>

            </main>
        </>
    );
}

export default International;
