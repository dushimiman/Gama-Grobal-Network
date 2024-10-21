import React from "react";
import { Layout, Typography, Card, Button } from "antd";
import './ApplicationForm.css';
import Navbar from "./Components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const ApplicationForm = () => {
    return (
        <Layout className="application-form">
            <header className="main-header clearfix" role="banner">
                <Navbar />
            </header>

            <Content className="content-container">
                <Title level={3} className="main-title" style={{ color: '#fff', textAlign: 'center' }}>
                    Welcome to Gama International Language & Training Centre (GILTC)
                </Title>
                <h2 className="location-info" style={{ color: '#fff', textAlign: 'center' }}>
                    Find us at the former UTB University Building.
                </h2>

                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-12">
                            {/* Additional content if needed */}
                        </div>
                    </div>

                    <div className="row justify-content-center info-section">
                        {[
                            {
                                title: "We Offer",
                                content: [
                                    "Learn Online or Face-to-Face at our Kigali location (former UTB University Building, Sonatubes)",
                                    "Entrepreneurship and specialized unique trainings included."
                                ]
                            },
                            {
                                title: "Languages Offered",
                                content: [
                                    "German (Deutsch) and Arabic",
                                    "French and English",
                                    "Kinyarwanda and Spanish",
                                    "Portuguese and Chinese",
                                    "Swahili and Korean",
                                    "Japanese and more upon demand"
                                ]
                            },
                            {
                                title: "Specialized Unique Professional Trainings",
                                content: [
                                    "At Gama International Language & Training Centre (GILTC), we offer a variety of specialized unique professional training programs designed to equip participants with essential skills and knowledge for personal and professional growth. Our expert trainers provide insightful, hands-on guidance in multiple disciplines to meet global demands."
                                ]
                            },
                            {
                                title: "Our Specialized Trainings",
                                content: [
                                    "✅ Training in Designing and Supporting Income-Generating Projects",
                                    "✅ Training in Book Writing and Selling",
                                    "✅ Training in Visa Application (BYIKORERA NAWE) and Advice on Study, Work & Visit USA, Canada, Europe & Asia",
                                    "✅ Training in Organization of International Professional Internships",
                                    "✅ Training in Sober Fellowship",
                                    "✅ Training on Migration Laws",
                                    "✅ Training in Research, Projects, Thesis, and Dissertation Writing Techniques",
                                    "✅ Training in Videography, Photography, Editing, Filming, Animation, UI/UX Design, and Graphic Design"
                                ]
                            },
                            {
                                title: "Course Fees",
                                content: [
                                    "Face-to-Face: 100,000 RWF (100 USD) per month for 3 months",
                                    "Online: 75,000 RWF (75 USD) per month for 3 months",
                                    "Registration Fee: 30,000 RWF (30 USD)",
                                    "Pay through SOBER CLUB accounts at Bank of Kigali (Rwanda)",
                                    "RWF Account: 100147673188",
                                    "USD Account: 100163162247",
                                    "Swift Code: BKIGRWRW"
                                ]
                            },
                            {
                                title: "Why Choose SILT?",
                                content: [
                                    "✅ Programs for beginners and beyond",
                                    "⏰ Flexible schedules: Day, evening, and weekend classes",
                                    "Entrepreneurship and specialized unique trainings included.",
                                    "Easy Registration Process"
                                ]
                            },
                            {
                                title: "Easy Registration Process",
                                content: [
                                    "💵 Pay the registration fee and fill out our form.",
                                    "📞 Our team will contact you right away to get started!",
                                    <a className="btn btn-primary btn-lg mt-2" href="/register" target="_blank" rel="noopener noreferrer">Apply Here</a>
                                ]
                            },
                            {
                                title: "Contact Us",
                                content: [
                                    "📧 Email: gamaglobalnetwork@gmail.com",
                                    "🌐 Website: ",
                                    <a href="http://www.soberclubsrwanda.com" target="_blank" rel="noopener noreferrer">https://www.gamaglobalnetwork.com/</a>,
                                    "📞 Call:",
                                    "Dr. Gamariel: +250 788 872 060",
                                    "Ms. Patience: +250 788 702 881",
                                    "Dr. Fulgence: +250 785 846 400",
                                    "Dr. Amiel: +250 788 461 295",
                                    "Ms. Cynthia: +250 798 528 653"
                                ]
                            }
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
    );
};

export default ApplicationForm;
