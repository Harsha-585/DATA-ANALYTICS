import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [showElectronicsDropdown, setShowElectronicsDropdown] = useState(false);
  const [showAutomobilesDropdown, setShowAutomobilesDropdown] = useState(false);

  const categories = [
    { name: 'Fashion', path: '/category/fashion' },
    { name: 'Accessories', path: '/category/accessories' },
    { name: 'About', path: '/about' },
    { name: 'Development', path: '/development' }
  ];

  const electronicsSubcategories = [
    { name: 'Mobile Phones', path: '/category/mobilephones' },
    { name: 'Laptops', path: '/category/laptops' }
  ];

  const automobilesSubcategories = [
    { name: 'Cars', path: '/category/cars' }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-title">
          <img src="/H.png" alt="TrendHub Logo" className="navbar-logo" />
          rend-Hub 🛍️
        </Link>
        <ul className="navbar-categories">
          {/* Electronics with Dropdown */}
          <li 
            className="navbar-category navbar-dropdown"
            onMouseEnter={() => setShowElectronicsDropdown(true)}
            onMouseLeave={() => setShowElectronicsDropdown(false)}
          >
            <span className="navbar-link">
              Electronics ▾
            </span>
            {showElectronicsDropdown && (
              <ul className="dropdown-menu">
                {electronicsSubcategories.map((sub, index) => (
                  <li key={index} className="dropdown-item">
                    <Link to={sub.path} className="dropdown-link">
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Automobiles with Dropdown */}
          <li 
            className="navbar-category navbar-dropdown"
            onMouseEnter={() => setShowAutomobilesDropdown(true)}
            onMouseLeave={() => setShowAutomobilesDropdown(false)}
          >
            <span className="navbar-link">
              Automobiles ▾
            </span>
            {showAutomobilesDropdown && (
              <ul className="dropdown-menu">
                {automobilesSubcategories.map((sub, index) => (
                  <li key={index} className="dropdown-item">
                    <Link to={sub.path} className="dropdown-link">
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Other Categories */}
          {categories.map((category, index) => (
            <li key={index} className="navbar-category">
              <Link to={category.path} className="navbar-link">
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
