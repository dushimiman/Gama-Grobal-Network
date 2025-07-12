import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ApplicationForm.css';
import { Layout, Typography, Card, Button } from "antd";
import Navbar from './Components/Navbar'

const { Content } = Layout;
const { Title, Paragraph } = Typography;
function International() {
    return (
        <>
              <header className="main-header clearfix" role="banner">
      <Navbar />
      </header>

            <main className="main">
                <section id="hero" className="hero section dark-background">
                    <img src="assets/img/hero-bg.jpg" alt="Hero Background" data-aos="fade-in" />
                    <div className="container position-relative">
                        <div className="welcome position-relative" data-aos="fade-down" data-aos-delay="100">
                            <h2 style={{  color: '#0033a0' }}>Explore Rwanda with Gama Global Network (GGN Ltd)’s </h2>

                        </div>

                        <div className="content row gy-4">
                            <div className="col-lg-4 d-flex align-items-stretch">
                               <div className="why-box" style={{ backgroundColor: '#0033a0', color: 'white' }} data-aos="zoom-out" data-aos-delay="200">

                                    <h3>Your Global Adventure Starts Here!</h3>
                                    <p>
                                         Gama Global Network ( GGN Ltd) and its partners are excited to co-organize a life-changing 30 day professional internship/Education Tour in Rwanda, “The Land of a Thousand Hills.” This unique collaboration provides International students/Staff with the opportunity to gain hands-on experience, immerse themselves in Rwandan culture, and build their professional skills/Academic Skills in one of Africa's most beautiful countries.
                                    </p>
                                    <div className="text-center">
                                        <a href="/" className="more-btn"><span>Learn More</span> <i className="bi bi-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-8 d-flex align-items-stretch">
                                <div className="d-flex flex-column justify-content-center">
                                    <div className="row gy-4">
                                      

                                        <div className="col-xl-6 d-flex align-items-stretch">
                                            <div className="icon-box" data-aos="zoom-out" data-aos-delay="400">
                                                <i className="bi bi-gem"style={{  color: '#0033a0' }}></i>
                                                <h4>Gama Global Network (GGN Ltd)</h4>
                                                <p>based in Kigali, Rwanda, is a fully registered company in Rwanda known for management consultancy activities, research and experimental development on social sciences and humanities, professional scientific and technical activities, activities of employment placement agencies and other educational activities.  </p>
                                            </div>
                                        </div>

                                        <div className="col-xl-6 d-flex align-items-stretch">
                                            <div className="icon-box" data-aos="zoom-out" data-aos-delay="500">
                                                <i className="bi bi-inboxes"style={{  color: '#0033a0' }}></i>
                                                <h4>Offers for international students/Staff </h4>
                                                <p>Gama Global Network (GGN Ltd) offers for international students/Staff access to unique, hands-on professional opportunities in Rwanda.
                                                     Ensure an enriching experience for students/Staff that combines academic growth, practical training, and cultural immersion.</p>
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
                        <h2>Target Internship/Education Tour program areas in Rwanda </h2>
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
                                    <p>Students/Staff can immerse themselves in Rwanda's growing entrepreneurial ecosystem, learning about market entry strategies, financial models, and innovation in emerging markets.</p>
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
                                    <p>Students/Staff can collaborate with Rwandan youth to provide training in areas such as entrepreneurship, communication, and technology. The cross-cultural exchange will allow  students to share their expertise while learning from a Rwandan context.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                                <div className="service-item position-relative">
                                    <div className="icon">
                                        <i className="bi bi-easel"></i>
                                    </div>
                                    <a href="#" className="stretched-link">
                                        <h3>Selected Universities in Rwanda</h3>
                                    </a>
                                    <p>With established incubation programs,Students/Staff can gain exposure to early-stage business development and research innovation that aligns with the university’s academic goals.</p>
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
                                    <p>Students/Staff can experience firsthand how entrepreneurship is driving positive change in underprivileged communities, offering a rich field-based learning environment.</p>
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
                                    <p>HDI can offer students/Staff the chance to work on impactful health initiatives, developing entrepreneurial solutions that address healthcare challenges in a developing context.</p>
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
                                    <p>International Students/Staff can gain practical experience in organizing and managing events, learning how to coordinate large-scale operations while understanding the dynamics of event entrepreneurship in Rwanda.</p>
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
                                    <p>With Rwanda’s strong cooperative movement, students/Staff can gain practical insights into how local businesses operate within a cooperative </p>
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
                                            "✅Exercise Science & Nursing",
                                            "✅Other fields of Internships"
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
                                            "✅Expected Number of students and Staff: Unlimited",
                                            "⏰When: Open throughout year",
                                            "✅Where: Rwanda",
                                            "⏰Duration: 30 days",
                                            "✅Cost: under discussion ",
                                            "✅Cost of Chaperone( a senior staff accompanying students: Free accomodation for each of the 5 accompanied"
                                          
                                        ]
                                    },
                                    {
                                        title: "Apply Today!",
                                        content: [
                                            "⏰ Deadline:  Apply 3 months before",
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
