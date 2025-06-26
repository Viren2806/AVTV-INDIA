import React, { useState, useEffect, useRef } from 'react';
import '../css/Health.css';
// Import your health-related images
// import healthImage1 from '../Image/health1.jpg';
// import healthImage2 from '../Image/health2.jpg';
// import healthImage3 from '../Image/health3.jpg';
// import healthImage4 from '../Image/health4.jpg';
// import healthImage5 from '../Image/health5.jpg';
// import healthImage6 from '../Image/health6.jpg';
// import healthImage7 from '../Image/health7.jpg';

const healthNews = [
  {
    id: 1,
    title: 'Revolutionary Gene Therapy Shows Promise',
    location: 'Stanford Medical Center',
    date: '2024-06-05',
    author: 'Dr. Sarah Mitchell',
    readTime: '5 min read',
    description: 'Breakthrough gene therapy treatment demonstrates remarkable success in treating rare genetic disorders, offering new hope for patients worldwide.',
    // image: healthImage1,
    category: 'medical-breakthrough'
  },
  {
    id: 2,
    title: 'Mental Health in Digital Age',
    location: 'Harvard Health Institute',
    date: '2024-06-04',
    author: 'Dr. James Chen',
    readTime: '7 min read',
    description: 'Comprehensive study reveals the complex relationship between social media usage and mental health outcomes in teenagers and young adults.',
    // image: healthImage2,
    category: 'mental-health'
  },
  {
    id: 3,
    title: 'AI-Powered Diagnosis Revolution',
    location: 'Mayo Clinic Research',
    date: '2024-06-03',
    author: 'Dr. Elena Rodriguez',
    readTime: '6 min read',
    description: 'Artificial intelligence systems now capable of detecting early-stage diseases with 95% accuracy, transforming preventive healthcare.',
    // image: healthImage3,
    category: 'technology'
  },
  {
    id: 4,
    title: 'Longevity Science Breakthrough',
    location: 'MIT Aging Research Lab',
    date: '2024-06-02',
    author: 'Prof. Michael Thompson',
    readTime: '8 min read',
    description: 'Scientists identify key cellular mechanisms that could extend healthy human lifespan by decades through targeted interventions.',
    // image: healthImage4,
    category: 'longevity'
  },
  {
    id: 5,
    title: 'Pandemic Preparedness 2024',
    location: 'WHO Global Health Security',
    date: '2024-06-01',
    author: 'Dr. Amira Hassan',
    readTime: '4 min read',
    description: 'New international protocols and rapid response systems designed to prevent future pandemic outbreaks and protect global health.',
    // image: healthImage5,
    category: 'public-health'
  },
  {
    id: 6,
    title: 'Personalized Medicine Advances',
    location: 'Johns Hopkins Genomics',
    date: '2024-05-31',
    author: 'Dr. Robert Kim',
    readTime: '6 min read',
    description: 'Precision medicine approaches now allow for individualized treatment plans based on genetic profiles and lifestyle factors.',
    // image: healthImage6,
    category: 'personalized-medicine'
  }
];

const Health = () => {
  const [activeArticle, setActiveArticle] = useState(null);
  const [filter, setFilter] = useState('all');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const parallaxRef = useRef(null);
  const articlesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 800);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  // Filter articles based on category
  const filteredArticles = filter === 'all' 
    ? healthNews 
    : healthNews.filter(article => article.category === filter);

  const handleArticleClick = (article) => {
    setActiveArticle(article);
    document.body.classList.add('modal-open');
  };

  const closeModal = () => {
    setActiveArticle(null);
    document.body.classList.remove('modal-open');
  };

  const scrollToArticles = () => {
    articlesRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      className={`health-news-page ${isLoaded ? 'loaded' : ''}`}
      style={{
        '--mouse-x': `${mousePosition.x}px`,
        '--mouse-y': `${mousePosition.y}px`
      }}
    >
      <div className="loading-overlay" style={{opacity: isLoaded ? 0 : 1}}>
        <div className="health-loader">
          <div className="pulse-loader">
            <div className="pulse-ring"></div>
            <div className="pulse-ring"></div>
            <div className="pulse-ring"></div>
          </div>
        </div>
      </div>

      <div className="hero-section">
        <div className="health-particle"></div>
        <div className="health-particle secondary"></div>
        <div className="health-particle tertiary"></div>
        <div className="hero-content">
          <h1 className="health-text">Health News</h1>
          <p>Breakthrough. Innovation. Wellness.</p>
          <button className="health-button" onClick={scrollToArticles}>
            Explore Latest News
          </button>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">1000+</span>
            <span className="stat-label">Articles</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50+</span>  
            <span className="stat-label">Experts</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Updates</span>
          </div>
        </div>
      </div>

      <section className="health-articles" ref={articlesRef}>
        <div className="filter-controls">
          <button 
            className={filter === 'all' ? 'active' : ''} 
            onClick={() => setFilter('all')}
          >
            All News
          </button>
          <button 
            className={filter === 'medical-breakthrough' ? 'active' : ''} 
            onClick={() => setFilter('medical-breakthrough')}
          >
            Breakthroughs
          </button>
          <button 
            className={filter === 'mental-health' ? 'active' : ''} 
            onClick={() => setFilter('mental-health')}
          >
            Mental Health
          </button>
          <button 
            className={filter === 'technology' ? 'active' : ''} 
            onClick={() => setFilter('technology')}
          >
            Health Tech
          </button>
          <button 
            className={filter === 'public-health' ? 'active' : ''} 
            onClick={() => setFilter('public-health')}
          >
            Public Health
          </button>
        </div>

        <div className="articles-grid">
          {filteredArticles.map((article) => (
            <div 
              key={article.id} 
              className="article-card"
              onClick={() => handleArticleClick(article)}
            >
              <div className="card-image">
                <img src={article.image} alt={article.title} />
                <div className="category-badge">{article.category.replace('-', ' ')}</div>
                <div className="hover-info">
                  <span className="read-time">{article.readTime}</span>
                  <h3>{article.title}</h3>
                  <p>{article.author}</p>
                </div>
              </div>
              <div className="card-details">
                <div className="article-meta">
                  <span className="date">{new Date(article.date).toLocaleDateString()}</span>
                  <span className="read-time">{article.readTime}</span>
                </div>
                <h3>{article.title}</h3>
                <p className="author">By {article.author}</p>
                <p className="excerpt">{article.description.substring(0, 100)}...</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="health-innovation">
        <div className="innovation-content">
          <div className="innovation-text">
            <h2>The Future of Healthcare</h2>
            <p>Revolutionary advances in medical technology, personalized medicine, and preventive care are transforming how we approach health and wellness in the 21st century.</p>
            <ul className="innovation-list">
              <li>
                <span className="innovation-title">Precision Medicine</span>
                <p>Tailored treatments based on individual genetic profiles</p>
              </li>
              <li>
                <span className="innovation-title">AI Diagnostics</span>
                <p>Machine learning for early disease detection and prevention</p>
              </li>
              <li>
                <span className="innovation-title">Telemedicine</span>
                <p>Remote healthcare delivery and digital health monitoring</p>
              </li>
              <li>
                <span className="innovation-title">Gene Therapy</span>
                <p>Revolutionary treatments targeting genetic disorders</p>
              </li>
            </ul>
          </div>
          <div className="innovation-image">
            {/* <img src={healthImage7} alt="Healthcare Innovation" /> */}
            <div className="image-detail">Cutting-edge medical technology in action</div>
          </div>
        </div>
      </section>

      <section className="featured-video">
        <div className="video-container">
          <div className="video-placeholder">
            <div className="play-button">
              <svg viewBox="0 0 24 24" width="64" height="64">
                <path d="M8 5v14l11-7z" fill="currentColor"></path>
              </svg>
            </div>
          </div>
          <div className="video-caption">
            <h3>Health Today: Special Report</h3>
            <p>Watch our comprehensive analysis of the latest health trends and medical breakthroughs shaping our future</p>
          </div>
        </div>
      </section>

      <section className="newsletter-signup">
        <div className="newsletter-content">
          <h3>Stay Informed</h3>
          <p>Get the latest health news and medical breakthroughs delivered to your inbox</p>
          <div className="signup-form">
            <input type="email" placeholder="Enter your email address" />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>
      </section>

      {/* Article Modal */}
      {activeArticle && (
        <div className="article-modal">
          <div className="modal-backdrop" onClick={closeModal}></div>
          <div className="modal-content">
            <button className="close-modal" onClick={closeModal}>×</button>
            <div className="modal-image">
              <img src={activeArticle.image} alt={activeArticle.title} />
            </div>   
            <div className="modal-details">
              <div className="article-header">
                <div className="category-badge">{activeArticle.category.replace('-', ' ')}</div>
                <h2>{activeArticle.title}</h2>
              </div>
              <div className="article-metadata">
                <div className="metadata-item">
                  <span className="label">Published</span>
                  <span className="value">{new Date(activeArticle.date).toLocaleDateString()}</span>
                </div>
                <div className="metadata-item">
                  <span className="label">Author</span>
                  <span className="value">{activeArticle.author}</span>
                </div>
                <div className="metadata-item">
                  <span className="label">Source</span>
                  <span className="value">{activeArticle.location}</span>
                </div>
                <div className="metadata-item">
                  <span className="label">Read Time</span>
                  <span className="value">{activeArticle.readTime}</span>
                </div>
              </div>
              <p className="article-description">{activeArticle.description}</p>
              <div className="article-actions">
                <button className="action-button primary">Read Full Article</button>
                <button className="action-button">Share Article</button>
                <button className="action-button">Save for Later</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Health;