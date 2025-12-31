import React, { useState } from 'react';
import './Development.css';

const Development = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    suggestion: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a backend
    console.log('Suggestion submitted:', formData);
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', suggestion: '' });
      setSubmitted(false);
    }, 3000);
  };

  const futurePlans = [
    {
      icon: '🤖',
      title: 'AI-Powered Recommendations',
      description: 'Implement machine learning algorithms to provide personalized product recommendations based on user preferences and browsing history.'
    },
    {
      icon: '📊',
      title: 'Advanced Analytics Dashboard',
      description: 'Create comprehensive analytics showing trend patterns, price comparisons, and market insights for each category.'
    },
    {
      icon: '🔔',
      title: 'Real-time Trend Alerts',
      description: 'Notify users when new trending items appear or when prices drop on their favorite products.'
    },
    {
      icon: '👥',
      title: 'User Reviews & Ratings',
      description: 'Enable community-driven reviews and ratings to help users make better purchasing decisions.'
    },
    {
      icon: '🌐',
      title: 'Multi-language Support',
      description: 'Expand TrendHub globally by supporting multiple languages and regional trending data.'
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Launch native iOS and Android apps for on-the-go trend tracking and shopping.'
    }
  ];

  return (
    <div className="development-page">
      <section className="development-hero">
        <h1>🚀 Future Development Plans</h1>
        <p>Exciting features and improvements coming to TrendHub</p>
      </section>

      <section className="roadmap-section">
        <h2>What's Coming Next</h2>
        <div className="roadmap-grid">
          {futurePlans.map((plan, index) => (
            <div key={index} className="roadmap-card">
              <div className="roadmap-icon">{plan.icon}</div>
              <h3>{plan.title}</h3>
              <p>{plan.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="suggestions-section">
        <div className="suggestions-container">
          <h2>💡 Share Your Ideas</h2>
          <p className="suggestions-intro">
            We value your feedback! Have a feature request or suggestion to make TrendHub better? 
            Let us know and help shape the future of our platform.
          </p>

          {submitted ? (
            <div className="success-message">
              <span className="success-icon">✓</span>
              <h3>Thank you for your suggestion!</h3>
              <p>We appreciate your feedback and will review it carefully.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="suggestion-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="suggestion">Your Suggestion</label>
                <textarea
                  id="suggestion"
                  name="suggestion"
                  value={formData.suggestion}
                  onChange={handleChange}
                  placeholder="Share your ideas, feature requests, or feedback..."
                  rows="6"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Submit Suggestion
              </button>
            </form>
          )}
        </div>
      </section>

      <section className="contribute-section">
        <h2>🤝 Want to Contribute?</h2>
        <p>
          TrendHub is constantly evolving, and we're always looking for talented individuals 
          to join our journey. Whether you're a developer, designer, data analyst, or simply 
          passionate about trends, there's a place for you here.
        </p>
        <div className="contribute-options">
          <div className="contribute-card">
            <h3>Open Source</h3>
            <p>Check out our GitHub repository and contribute to the codebase</p>
          </div>
          <div className="contribute-card">
            <h3>Beta Testing</h3>
            <p>Be among the first to test new features and provide feedback</p>
          </div>
          <div className="contribute-card">
            <h3>Content Creation</h3>
            <p>Help us curate and analyze trending products in your niche</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Development;
