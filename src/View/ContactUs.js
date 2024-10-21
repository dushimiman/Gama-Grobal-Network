import React from 'react';
import { Form, Input, Button, Row, Col, message, Card } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import './home.css'; // Your custom CSS file
import Navbar from './Components/Navbar'; // Your Navbar component

const { TextArea } = Input;

const ContactUs = () => {
  const onFinish = (values) => {
    message.success('Your message has been sent successfully!');
    console.log('Received values of form: ', values);
    // Submit form values to backend or API
  };

  const onFinishFailed = (errorInfo) => {
    message.error('Please complete the form correctly!');
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      {/* Navbar */}
      <header className="main-header" role="banner">
        <Navbar />
      </header>

      {/* Contact Section */}
      <div className="contact-container">
        <Row justify="center" gutter={16}>
          <Col xs={24} md={12}>
            <h2 className="contact-title">Contact Us</h2>
            <Form
              name="contact"
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="contact-form"
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please input your name!' }]}
              >
                <Input placeholder="Enter your name" />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { type: 'email', message: 'The input is not valid email!' },
                  { required: true, message: 'Please input your email!' },
                ]}
              >
                <Input placeholder="Enter your email" />
              </Form.Item>

              <Form.Item
                label="Subject"
                name="subject"
                rules={[{ required: true, message: 'Please input the subject!' }]}
              >
                <Input placeholder="Subject" />
              </Form.Item>

              <Form.Item
                label="Message"
                name="message"
                rules={[{ required: true, message: 'Please input your message!' }]}
              >
                <TextArea rows={4} placeholder="Enter your message" />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" className="submit-btn">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>

          <Col xs={24} md={8}>
            {/* <h3 className="contact-info-title">Contact Information</h3> */}
            <Card className="contact-info-card">
              <p>
                <EnvironmentOutlined className="icon" />
                <strong>Address:</strong> Kicukiro, Kigali, Rwanda
              </p>
              <p>
                <PhoneOutlined className="icon" />
                <strong>Phone:</strong> +250788872060
              </p>
              <p>
                <MailOutlined className="icon" />
                <strong>Email:</strong> gamaglobalnetwork@gmail.com
              </p>
              <p>
                <strong>Working Hours:</strong> Monday to Friday, 9AM - 5PM
              </p>
            </Card>
          </Col>
        </Row>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <p>© Copyright 2024 by Gama Global Network</p>
        </div>
      </footer>
    </>
  );
};

export default ContactUs;
