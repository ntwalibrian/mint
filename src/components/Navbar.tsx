import { useState, useEffect } from "react";
import { Button } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Link } from "react-scroll";
import "./Navbar.css";


const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    if (typeof window !== "undefined" && !isMobileMenuOpen) {
      const currentScrollY = window.scrollY;
      setIsFixed(currentScrollY > 0);
      setIsHidden(currentScrollY > lastScrollY);
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setIsHidden(false);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { label: "Home", href: "hero" },
    { label: "Features", href: "features" },
    { label: "FAQs", href: "faqs" },
    { label: "Blog", href: "blog" },
  ];

  return (
    <>
      <nav
        className={`navbar ${isFixed ? "fixed" : ""} ${
          isHidden ? "hidden" : ""
        }`}
      >
        <div className="logo">Mint</div>

        {/* Desktop Navigation */}
        <div className="nav-links desktop">
          {menuItems.map((item) => (
            <Link key={item.label} to={item.href} smooth={true} duration={500}>
              {item.label}
            </Link>
          ))}
          <Button type="primary">
            <a
              href="https://mint-livid-omega.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              Log In
            </a>
          </Button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="mobile-menu">
          <MenuOutlined className="menu-icon" onClick={toggleMobileMenu} />
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-nav ${isMobileMenuOpen ? "open" : ""}`}>
          <div className="mobile-nav-header">
            <CloseOutlined className="close-icon" onClick={closeMobileMenu} />
          </div>
          <div className="mobile-nav-content">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                smooth={true}
                duration={500}
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://mint-livid-omega.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button type="primary" block>
                Log In
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Add overlay div */}
      <div
        className={`mobile-nav-overlay ${isMobileMenuOpen ? "open" : ""}`}
        onClick={closeMobileMenu}
      />
    </>
  );
};

export default Navbar;
