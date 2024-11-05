import React, { useEffect, useState } from 'react';
import { Table, message, Input, Button } from 'antd';
import axios from 'axios';

const InternationalRegistrationsTable = () => {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (authenticated) {
      // Fetch registrations from the API if authenticated
      const fetchRegistrations = async () => {
        try {
          const response = await axios.get('https://sober-backend-dushimiman.onrender.com/api/internationalregistrations/registrations');
          setRegistrations(response.data);
        } catch (error) {
          message.error('Error fetching registrations');
        } finally {
          setLoading(false);
        }
      };

      fetchRegistrations();
    }
  }, [authenticated]);

  const handlePasswordSubmit = () => {
    if (password === 'International@123') {
      setAuthenticated(true);
      setLoading(true); // Set loading to true to show loading spinner while fetching data
    } else {
      message.error('Incorrect password. Please try again.');
    }
  };

  // Define table columns
  const columns = [
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Full Name',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: 'University',
      dataIndex: 'university',
      key: 'university',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Internship Areas',
      dataIndex: 'internshipArea',
      key: 'internshipArea',
      render: (areas) => areas.join(', '), // Display array as comma-separated string
    },
    {
      title: 'Comments',
      dataIndex: 'comments',
      key: 'comments',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>All International Students</h2>
      {!authenticated ? (
        <div>
          <Input.Password
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '300px', marginBottom: '10px' }}
          />
          <Button type="primary" onClick={handlePasswordSubmit}>
            Submit
          </Button>
        </div>
      ) : (
        <Table
          columns={columns}
          dataSource={registrations}
          loading={loading}
          rowKey={(record) => record._id} // Assuming MongoDB _id as unique key
          pagination={{ pageSize: 10 }}
        />
      )}
    </div>
  );
};

export default InternationalRegistrationsTable;
