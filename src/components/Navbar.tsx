import { useState, useEffect } from 'react';
import { Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHidden, setIsHidden] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;
      setIsFixed(currentScrollY > 0);
      setIsHidden(currentScrollY > lastScrollY);
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const menuItems = [
    { label: 'Home', href: 'hero' },
    { label: 'Features', href: 'features' },
    { label: 'FAQs', href: 'faqs' },
    { label: 'Blog', href: 'blog' },
  ];

  return (
    <nav className={`navbar justify-evenly ${isFixed ? 'fixed' : ''} ${isHidden ? 'hidden' : ''}`}>
      <div className="logo">
        Logo
      </div>

      {/* Desktop Navigation */}
      <div className="nav-links desktop">
        {menuItems.map((item) => (
          <Link 
            key={item.label} 
            to={item.href} 
            smooth={true} 
            duration={500}
          >
            {item.label}
          </Link>
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
            <Link 
              key={item.label} 
              to={item.href} 
              smooth={true} 
              duration={500} 
              onClick={onClose}
            >
              {item.label}
            </Link>
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