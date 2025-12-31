import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const categories = [
    { 
      name: 'Mobile Phones', 
      path: '/category/mobilephones', 
      icon: '📱',
      description: 'Top trending smartphones'
    },
    { 
      name: 'Laptops', 
      path: '/category/laptops', 
      icon: '💻',
      description: 'Best laptops for work & gaming'
    },
    { 
      name: 'Cars', 
      path: '/category/cars', 
      icon: '🚗',
      description: 'Trending automobiles'
    },
    { 
      name: 'Fashion', 
      path: '/category/fashion', 
      icon: '👗',
      description: 'Trending fashion & apparel'
    },
    { 
      name: 'Accessories', 
      path: '/category/accessories', 
      icon: '👜',
      description: 'Stylish accessories'
    },
    { 
      name: 'Components', 
      path: '/category/components', 
      icon: '🧩',
      description: 'UI & system components'
    }
  ];

  // Items for animation
  const animatedItems = [
    { name: 'Smartphone Pro', icon: '📱', category: 'Electronics' },
    { name: 'Gaming Laptop', icon: '💻', category: 'Electronics' },
    { name: 'Wireless Speakers', icon: '🔊', category: 'Electronics' },
    { name: 'Running Shoes', icon: '👟', category: 'Fashion' },
    { name: 'Headphones', icon: '🎧', category: 'Electronics' },
    { name: 'Smart Watch', icon: '⌚', category: 'Electronics' },
    { name: 'Camera', icon: '📷', category: 'Electronics' },
    { name: 'Backpack', icon: '🎒', category: 'Fashion' },
    { name: 'Coffee Maker', icon: '☕', category: 'Appliances' },
    { name: 'Gaming Console', icon: '🎮', category: 'Electronics' },
    { name: 'Sunglasses', icon: '🕶️', category: 'Fashion' },
    { name: 'Tablet', icon: '📱', category: 'Electronics' },
    { name: 'Keyboard', icon: '⌨️', category: 'Electronics' },
    { name: 'Mouse', icon: '🖱️', category: 'Electronics' },
    { name: 'Sneakers', icon: '👟', category: 'Fashion' },
    { name: 'Desk Lamp', icon: '💡', category: 'Home' },
  ];

  return (
    <div className="home-page">
      <section className="hero-section">
        {/* Animated Items Background */}
        <div className="animated-items-container">
          {animatedItems.map((item, index) => (
            <div 
              key={index} 
              className={`floating-item floating-item-${index + 1}`}
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <span className="item-icon">{item.icon}</span>
              <span className="item-name">{item.name}</span>
            </div>
          ))}
        </div>
        
        {/* Hero Content */}
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Item Gallery</h1>
          <p className="hero-subtitle">
            Explore our comprehensive collection of products and services across various categories.
            Click on any category below to discover amazing items tailored to your needs.
          </p>
        </div>
      </section>

      <section className="categories-section">
        <h2 className="section-title">Explore Categories</h2>
        <div className="category-grid">
          {categories.map((category, index) => (
            <Link 
              key={index} 
              to={category.path} 
              className="category-card"
            >
              <span className="category-icon">{category.icon}</span>
              <h3 className="category-name">{category.name}</h3>
              {category.description && (
                <p className="category-description-text">{category.description}</p>
              )}
              <p className="category-cta">Browse items →</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>🎯 Quality Selection</h3>
            <p>Carefully curated items across all categories</p>
          </div>
          <div className="feature-item">
            <h3>📋 Detailed Information</h3>
            <p>Comprehensive descriptions for every item</p>
          </div>
          <div className="feature-item">
            <h3>🚀 Easy Navigation</h3>
            <p>Intuitive interface for seamless browsing</p>
          </div>
        </div>
      </section>

      <section className="trending-categories-section">
        <div className="trending-header">
          <h2>🔥 Hot Trending Categories</h2>
          <p>Discover what's making waves in these popular categories</p>
        </div>
        <div className="trending-grid">
          <div className="trending-category-card electronics">
            <div className="trending-overlay">
              <span className="trending-icon">📱</span>
              <h3>Electronics</h3>
              <p className="trending-count">Latest gadgets & tech</p>
              <div className="trending-tags">
                <span className="tag">Mobile Phones</span>
                <span className="tag">Laptops</span>
              </div>
            </div>
          </div>
          <div className="trending-category-card automobiles">
            <div className="trending-overlay">
              <span className="trending-icon">🚗</span>
              <h3>Automobiles</h3>
              <p className="trending-count">Top vehicles of 2025</p>
              <div className="trending-tags">
                <span className="tag">Electric Cars</span>
                <span className="tag">SUVs</span>
              </div>
            </div>
          </div>
          <div className="trending-category-card fashion">
            <div className="trending-overlay">
              <span className="trending-icon">👗</span>
              <h3>Fashion</h3>
              <p className="trending-count">Style trends & apparel</p>
              <div className="trending-tags">
                <span className="tag">Streetwear</span>
                <span className="tag">Luxury</span>
              </div>
            </div>
          </div>
          <div className="trending-category-card accessories">
            <div className="trending-overlay">
              <span className="trending-icon">👜</span>
              <h3>Accessories</h3>
              <p className="trending-count">Must-have add-ons</p>
              <div className="trending-tags">
                <span className="tag">Watches</span>
                <span className="tag">Bags</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
