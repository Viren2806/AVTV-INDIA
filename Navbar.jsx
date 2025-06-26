import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../css/Navbar.css';
import Logo from '../Image/Logo.PNG'; // Adjust the path as necessary

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { name: 'હોમ', href: '/', icon: '🏠' },
    { name: 'સમાચાર', href: '/news', icon: '📰' },
    { name: 'રમત-ગમત', href: '/sports', icon: '⚽' },
    { name: 'વ્યાપાર', href: '/business', icon: '💼' },
    { name: 'મનોરંજન', href: '/manoranjan', icon: '🎭' },
    { name: 'ટેકનોલોજી', href: '/technology', icon: '💻' },
    { name: 'આરોગ્ય', href: '/health', icon: '🏥' },
    { name: 'રાશિફળ', href: '/astrology', icon: '🔯' },
    { name: 'વિડિઓ', href: '/shorts', icon: '🎬' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo Section */}
        <div className="nav-logo">
          <div className="logo-wrapper">
            <img 
              src={Logo} 
              alt="AVTV INDIA" 
              className="logo-image"
              style={{
                height: '50px',
                width: 'auto',
                objectFit: 'contain'
              }}
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-menu">
          {navItems.map((item, index) => (
            <div 
              key={index} 
              className={`nav-item ${item.dropdown ? 'has-dropdown' : ''} ${location.pathname === item.href ? 'active' : ''}`}
              onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
              onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
            >
              <a href={item.href} className="nav-link">
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-text">{item.name}</span>
                {item.dropdown && <span className="dropdown-arrow">▼</span>}
              </a>

              {item.dropdown && (
                <div className={`dropdown-menu ${activeDropdown === index ? 'show' : ''}`}>
                  {item.dropdown.map((dropItem, dropIndex) => (
                    <a key={dropIndex} href={dropItem.href} className="dropdown-item">
                      {dropItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="nav-actions">
          {/* <div className="search-wrapper">
            <input 
              type="text" 
              placeholder="સમાચાર શોધો..." 
              className="search-input"
            />
            <button className="search-btn">🔍</button>
          </div> */}

          {/* Google Translate Language Selector */}
          {/* <div className="language-selector" id="google_translate_element"></div> */}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-search">
          <input type="text" placeholder="સમાચાર શોધો..." />
          <button>🔍</button>
        </div>

        {navItems.map((item, index) => (
          <div key={index} className="mobile-nav-item">
            <a 
              href={item.href} 
              className={`mobile-nav-link ${location.pathname === item.href ? 'active' : ''}`}
            >
              <span className="mobile-nav-icon">{item.icon}</span>
              <span>{item.name}</span>
              {item.dropdown && (
                <button 
                  className="mobile-dropdown-toggle"
                  onClick={() => handleDropdownToggle(index)}
                >
                  ▼
                </button>
              )}
            </a>

            {item.dropdown && (
              <div className={`mobile-dropdown ${activeDropdown === index ? 'show' : ''}`}>
                {item.dropdown.map((dropItem, dropIndex) => (
                  <a key={dropIndex} href={dropItem.href} className="mobile-dropdown-item">
                    {dropItem.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;