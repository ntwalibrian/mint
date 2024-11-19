
import  { useState } from 'react';
import { Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const menuItems = [
    { label: 'Home', href: '/home' },
    { label: 'Features', href: '/features' },
    { label: 'FAQs', href: '/faqs' },
    { label: 'News', href: '/news' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="navbar justify-evenly">
      <div className="logo">
        Logo
      </div>

      {/* Desktop Navigation */}
      <div className="nav-links desktop ">
        {menuItems.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
        <Button type="primary">Join Now</Button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="mobile-menu">
        <MenuOutlined className="menu-icon" onClick={showDrawer} />
      </div>

      {/* Mobile Sidebar */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        open={open}
        className="mobile-drawer"
      >
        <div className="mobile-nav-links">
          {menuItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              onClick={onClose}
            >
              {item.label}
            </a>
          ))}
          <Button type="primary" block>
            Join Now
          </Button>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;