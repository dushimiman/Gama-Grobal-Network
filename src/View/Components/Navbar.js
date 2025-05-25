import React, { useState, useEffect } from 'react';
import { Menu, Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css'; 
import './Navbar.css';

function Navbar() {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if screen size is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <header className="main-header clearfix" role="banner">
      <div className="logo">
        <a href="#top">
          <img src="/assets/images/logo.png" alt="Grad School Logo" style={{ width: '200px', height: 'auto' }} />
        </a>
      </div>
      {isMobile ? (
        <>
          <Button
            className="menu-button"
            type="primary"
            icon={<MenuOutlined />}
            onClick={showDrawer}
          />
          <Drawer
            title="Menu"
            placement="right"
            closable={true}
            onClose={onClose}
            open={visible}
          >
            <Menu mode="vertical">
              <Menu.Item key="1"><a href="/">Home</a></Menu.Item>
              <Menu.Item key="2"><a href="/aboutus">About Us</a></Menu.Item>
              <Menu.Item key="3"><a href="/service">Service</a></Menu.Item>
              <Menu.Item key="4"><a href="/prize">Prize</a></Menu.Item>
              <Menu.Item key="5"><a href="/ApplicationForm">Learn Languages</a></Menu.Item>
              <Menu.Item key="6"><a href="/TrainingPage">Training</a></Menu.Item> {/* NEW ITEM */}
              <Menu.Item key="7"><a href="/contactus">Contact</a></Menu.Item>
            </Menu>
          </Drawer>
        </>
      ) : (
        <nav id="menu" className="main-nav" role="navigation">
          <ul className="main-menu">
            <li><a href="/">Home</a></li>
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="/service">Service</a></li>
            <li><a href="/prize">Prize</a></li>
            <li><a href="/ApplicationForm">Learn Languages</a></li>
            <li><a href="/Training">Training</a></li> {/* NEW ITEM */}
            <li><a href="/contactus">Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
