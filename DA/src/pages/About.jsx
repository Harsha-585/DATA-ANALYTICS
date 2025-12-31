import React from 'react';
import './About.css';

const About = () => {
  const features = [
    {
      icon: '🎯',
      title: 'Data-Driven Insights',
      description: 'We analyze real-world data from multiple sources to identify trending products across various categories.'
    },
    {
      icon: '⚡',
      title: 'Real-Time Updates',
      description: 'Our platform continuously monitors market trends to keep you informed about the latest hot products.'
    },
    {
      icon: '🔍',
      title: 'Smart Scoring System',
      description: 'Each product is evaluated based on mentions, popularity, and user preferences with a transparent scoring system.'
    },
    {
      icon: '🌟',
      title: 'Curated Selection',
      description: 'We handpick and verify the best trending items to ensure quality and relevance for our users.'
    }
  ];

  const stats = [
    { number: '1000+', label: 'Products Tracked' },
    { number: '10+', label: 'Categories' },
    { number: '24/7', label: 'Trend Monitoring' },
    { number: '100%', label: 'Data Accuracy' }
  ];

  const teamValues = [
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Constantly evolving our platform with cutting-edge technology to deliver the best trend insights.'
    },
    {
      icon: '🤝',
      title: 'Transparency',
      description: 'Open and honest about our methodologies, data sources, and scoring algorithms.'
    },
    {
      icon: '👥',
      title: 'User-Centric',
      description: 'Your needs drive our decisions. We build features that truly matter to our community.'
    },
    {
      icon: '🚀',
      title: 'Excellence',
      description: 'Committed to providing accurate, timely, and valuable information for informed decisions.'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About TrendHub</h1>
          <p className="hero-tagline">Your Ultimate Destination for Discovering What's Trending</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p className="mission-text">
            TrendHub is dedicated to helping consumers make informed purchasing decisions by providing 
            comprehensive insights into the hottest trending products across multiple categories. We combine 
            advanced data analytics, market research, and user feedback to deliver a curated selection of 
            items that are making waves in their respective markets.
          </p>
          <p className="mission-text">
            Whether you're looking for the latest smartphones, trending automobiles, fashionable apparel, 
            or stylish accessories, TrendHub brings you closer to the products that matter most in today's 
            fast-paced consumer landscape.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>What Makes Us Different</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works-section">
        <h2>How TrendHub Works</h2>
        <div className="steps-container">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Data Collection</h3>
            <p>We gather data from various sources including social media, e-commerce platforms, and market research databases.</p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Analysis & Scoring</h3>
            <p>Our algorithms analyze mentions, ratings, and trends to calculate a comprehensive score for each product.</p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Curation & Verification</h3>
            <p>We verify the authenticity and relevance of products before adding them to our trending lists.</p>
          </div>
          <div className="step-card">
            <div className="step-number">4</div>
            <h3>Present to You</h3>
            <p>Access comprehensive product information, scores, and direct purchase links all in one place.</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          {teamValues.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Discover Trending Products?</h2>
          <p>Join thousands of users who trust TrendHub for their shopping decisions</p>
          <a href="/" className="cta-button">Explore Trends</a>
        </div>
      </section>
    </div>
  );
};

export default About;
