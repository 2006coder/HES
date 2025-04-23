import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { logoutUser } from '../../services/authService';
import './NavbarStyles.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    // Prevent body scrolling when menu is open
    document.body.style.overflow = menuOpen ? 'auto' : 'hidden';
  };

  // Close menu when clicking on a link
  const handleLinkClick = () => {
    setMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleLogout = async () => {
    try {
      // Call the logout function from authService
      await logoutUser();
      
      // Force navigate to home page after logout (prevent hackers :) )
      navigate('/');
      
      // Clear any local authentication data if needed
      localStorage.removeItem('authToken'); // If you're using local storage
      
      // Optional: display logout success message
      console.log('Logged out successfully');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={handleLinkClick}>
          <img src={logo} alt="HES Logo" className="logo-img" />
        </Link>
        
        <button 
          className={`menu-toggle ${menuOpen ? 'active' : ''}`} 
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        
        <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/#services" onClick={handleLinkClick}>Services</a>
            </li>
            <li className="nav-item">
              <a href="/#mission" onClick={handleLinkClick}>Mission</a>
            </li>
            <li className="nav-item">
              <a href="/#team" onClick={handleLinkClick}>Team</a>
            </li>
            <li className="nav-item">
              <a href="/#faq" onClick={handleLinkClick}>FAQ</a>
            </li>
            <li className="nav-item sign-in">
              {isAuthenticated ? (
                <button className="login-button" onClick={handleLogout}>Logout</button>
              ) : (
                <button className="login-button" onClick={() => navigate('/login')}>Login / Sign Up</button>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;