import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './RegistrationForm.css';

const InternationalRegister = () => {
  const [form] = Form.useForm();
  const [isRegistered, setIsRegistered] = useState(false);

  const onFinish = async (values) => {
    try {
      const response = await axios.post('https://sober-backend-dushimiman.onrender.com/api/registerinternational', values);
      if (response.status === 201) {
        message.success('Registration successful! Check your email for confirmation.');
        setIsRegistered(true); 
        form.resetFields(); 
      }
    } catch (error) {
      message.error('Registration failed. Please try again.');
      console.error('There was an error submitting the form:', error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    message.error('Please complete the required fields.');
  };

  return (
    <div className="container mt-5">
      {isRegistered ? (
        <div className="alert alert-success text-center">
          <h2>Registration successful!</h2>
          <p>Check your email for confirmation.</p>
        </div>
      ) : (
        <>
          <h2 className="text-center mb-4">Registration Form</h2>
          <Form
            form={form}
            layout="vertical"
            name="registrationForm"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="p-4 border rounded shadow-sm bg-light"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: 'Please enter your email!' },
                { type: 'email', message: 'Please enter a valid email!' },
              ]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>

            <Form.Item
              label="Your Full Names"
              name="fullName"
              rules={[{ required: true, message: 'Please enter your full name!' }]}
            >
              <Input placeholder="Enter your full name" />
            </Form.Item>

            <Form.Item
              label="Your University"
              name="university"
              rules={[{ required: true, message: 'Please enter your University!' }]}
            >
              <Input placeholder="Enter your University" />
            </Form.Item>

            <Form.Item
              label="Place Where You Are Located (Country, District)"
              name="location"
              rules={[{ required: true, message: 'Please enter your location!' }]}
            >
              <Input placeholder="Enter your location (Country, City)" />
            </Form.Item>

            <Form.Item
              label="Areas of Internship when you are in Rwanda"
              name="internshipArea"
              rules={[{ required: true, message: 'Please select at least one area!' }]}
            >
              <Checkbox.Group className="d-flex flex-column">
                <Checkbox value="Education" className="form-check">Education</Checkbox>
                <Checkbox value="Healthcare" className="form-check">Healthcare</Checkbox>
                <Checkbox value="Tourism & Hospitality" className="form-check">Tourism & Hospitality</Checkbox>
                <Checkbox value="Business & Finance" className="form-check">Business & Finance</Checkbox>
                <Checkbox value="Marketing & Social Work" className="form-check">Marketing & Social Work</Checkbox>
                <Checkbox value="Computer Science & Technology" className="form-check">Computer Science & Technology</Checkbox>
                <Checkbox value="Exercise Science & Nursing" className="form-check">Exercise Science & Nursing</Checkbox>
              </Checkbox.Group>
            </Form.Item>

            <Form.Item
              label="Any Comments on This Program"
              name="comments"
            >
              <Input.TextArea placeholder="Add any comments here" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="btn btn-primary btn-block">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </>
      )}
    </div>
  );
};

export default InternationalRegister;
