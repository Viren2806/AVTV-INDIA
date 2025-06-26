import React, { useState, useEffect } from 'react';
import '../css/Technology.css';

const Technology = () => {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('latest');
  const [featuredArticle, setFeaturedArticle] = useState(0);

  // Technology news data in Gujarati
  const featuredTechNews = [
    {
      id: 1,
      title: "ભારતમાં AI અને મશીન લર્નિંગનો વિકાસ, ટેક કંપનીઓની મોટી રોકાણ યોજના",
      summary: "બેંગલોર: મુખ્ય ટેકનોલોજી કંપનીઓએ આર્ટિફિશિયલ ઇન્ટેલિજન્સ અને મશીન લર્નિંગ ક્ષેત્રે ₹50,000 કરોડનું રોકાણ કરવાની જાહેરાત કરી છે...",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop",
      category: "આર્ટિફિશિયલ ઇન્ટેલિજન્સ",
      time: "1 કલાક પહેલાં",
      readTime: "5 મિનિટ વાંચન"
    },
    {
      id: 2,
      title: "5G નેટવર્કનું વિસ્તરણ, ગુજરાતના 50 શહેરોમાં હાઇ-સ્પીડ ઇન્ટરનેટ",
      summary: "ગાંધીનગર: ટેલિકોમ કંપનીઓએ ગુજરાતમાં 5G નેટવર્કનું વિસ્તરણ કરવાની યોજના બનાવી છે, જેથી ઉચ્ચ ગુણવત્તાની ઇન્ટરનેટ સેવા મળશે...",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=450&fit=crop",
      category: "ટેલિકોમ",
      time: "3 કલાક પહેલાં",
      readTime: "4 મિનિટ વાંચન"
    },
    {
      id: 3,
      title: "ભારતીય સ્ટાર્ટઅપ્સ માટે નવી ફંડિંગ, ટેક ઇનોવેશનને પ્રોત્સાહન",
      summary: "મુંબઈ: સરકારે ટેકનોલોજી સ્ટાર્ટઅપ્સ માટે ₹10,000 કરોડનું ફંડ જાહેર કર્યું છે, જે નવાચાર અને ઉદ્યોગસાહસિકતાને વેગ આપશે...",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=450&fit=crop",
      category: "સ્ટાર્ટઅપ",
      time: "5 કલાક પહેલાં",
      readTime: "6 મિનિટ વાંચન"
    }
  ];

  const latestTechNews = [
    {
      id: 4,
      title: "ક્વોન્ટમ કમ્પ્યુટિંગમાં નવી સફળતા",
      summary: "ભારતીય વૈજ્ઞાનિકોએ ક્વોન્ટમ કમ્પ્યુટિંગના ક્ષેત્રમાં મહત્વપૂર્ણ પ્રગતિ કરી છે...",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop",
      category: "ક્વોન્ટમ કમ્પ્યુટિંગ",
      time: "2 કલાક પહેલાં"
    },
    {
      id: 5,
      title: "ઇલેક્ટ્રિક વાહનોમાં નવી બેટરી ટેકનોલોજી",
      summary: "ભારતીય કંપનીએ લિથિયમ-આયન બેટરીની નવી ટેકનોલોજી વિકસાવી છે...",
      image: "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?w=400&h=250&fit=crop",
      category: "ઇલેક્ટ્રિક વાહન",
      time: "4 કલાક પહેલાં"
    },
    {
      id: 6,
      title: "બ્લોકચેઇન ટેકનોલોજીનો નવો ઉપયોગ",
      summary: "બેંકિંગ સેક્ટરમાં બ્લોકચેઇન ટેકનોલોજીનો વધુ ઉપયોગ થશે...",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop",
      category: "બ્લોકચેઇન",
      time: "6 કલાક પહેલાં"
    }
  ];

  const trendingTopics = [
    { name: "આર્ટિફિશિયલ ઇન્ટેલિજન્સ", count: 234, trend: "up" },
    { name: "5G નેટવર્ક", count: 189, trend: "up" },
    { name: "ક્રિપ્ટોકરન્સી", count: 156, trend: "down" },
    { name: "મેટાવર્સ", count: 143, trend: "up" },
    { name: "સાયબર સિક્યુરિટી", count: 128, trend: "up" }
  ];

  const techCategories = [
    { name: "AI/ML", icon: "🤖", articles: 45, color: "#667eea" },
    { name: "મોબાઇલ", icon: "📱", articles: 62, color: "#764ba2" },
    { name: "ગેમિંગ", icon: "🎮", articles: 38, color: "#f093fb" },
    { name: "ક્લાઉડ", icon: "☁️", articles: 29, color: "#4facfe" },
    { name: "IoT", icon: "🌐", articles: 34, color: "#43e97b" },
    { name: "રોબોટિક્સ", icon: "🤖", articles: 21, color: "#fa709a" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedArticle((prev) => (prev + 1) % featuredTechNews.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="tech-loading-screen">
        <div className="tech-spinner">
          <div className="tech-spinner-inner"></div>
        </div>
        <h2>ટેકનોલોજી સમાચાર લોડ થઈ રહ્યા છે...</h2>
        <p>નવીનતમ ટેક અપડેટ્સ તૈયાર કરી રહ્યા છીએ</p>
      </div>
    );
  }

  return (
    <div className="tech-page" style={{marginTop:"50px"}}>
      {/* Advertisement Space */}
              <div className="sidebar-section ad-space">
                <div className="ad-placeholder">
                  <p>જાહેરાત સ્થળ</p>
                  <span>300 x 250</span>
                </div>
              </div>
      {/* Hero Section */}
      <section className="tech-hero-section">
        <div className="tech-container">
          <div className="tech-hero-content">
            <div className="tech-hero-badge">
              <span className="tech-hero-icon">💻</span>
              ટેકનોલોજી સમાચાર
            </div>
            <h1 className="tech-hero-title">ડિજિટલ ભવિષ્યની સાથે જોડાઓ</h1>
            <p className="tech-hero-subtitle">
              નવીનતમ ટેકનોલોજી ટ્રેન્ડ્સ, ઇનોવેશન અને ડિજિટલ ક્રાંતિના સમાચાર
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article Carousel */}
      <section className="tech-featured-section">
        <div className="tech-container">
          <div className="tech-featured-carousel">
            {featuredTechNews.map((article, index) => (
              <div 
                key={article.id}
                className={`tech-featured-slide ${index === featuredArticle ? 'tech-active' : ''}`}
              >
                <div className="tech-featured-content">
                  <div className="tech-featured-image">
                    <img src={article.image} alt={article.title} />
                    <div className="tech-featured-overlay"></div>
                  </div>
                  <div className="tech-featured-info">
                    <div className="tech-featured-meta">
                      <span className="tech-category-badge">{article.category}</span>
                      <span className="tech-read-time">{article.readTime}</span>
                    </div>
                    <h2 className="tech-featured-title">{article.title}</h2>
                    <p className="tech-featured-summary">{article.summary}</p>
                    <div className="tech-featured-footer">
                      <span className="tech-article-time">{article.time}</span>
                      <button className="tech-read-btn">
                        વિગતમાં વાંચો
                        <span className="tech-btn-icon">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="tech-carousel-indicators">
              {featuredTechNews.map((_, index) => (
                <button
                  key={index}
                  className={`tech-indicator ${index === featuredArticle ? 'tech-active' : ''}`}
                  onClick={() => setFeaturedArticle(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="tech-main-content">
        <div className="tech-container">
          <div className="tech-content-grid">
            <div className="tech-primary-content">
              {/* Navigation Tabs */}
              <div className="tech-nav-tabs">
                <button 
                  className={`tech-tab ${activeTab === 'latest' ? 'tech-tab-active' : ''}`}
                  onClick={() => setActiveTab('latest')}
                >
                  તાજા સમાચાર
                </button>
                <button 
                  className={`tech-tab ${activeTab === 'trending' ? 'tech-tab-active' : ''}`}
                  onClick={() => setActiveTab('trending')}
                >
                  ટ્રેન્ડિંગ
                </button>
                <button 
                  className={`tech-tab ${activeTab === 'analysis' ? 'tech-tab-active' : ''}`}
                  onClick={() => setActiveTab('analysis')}
                >
                  વિશ્લેષણ
                </button>
              </div>

              {/* News Grid */}
              <div className="tech-news-grid">
                {latestTechNews.map((news) => (
                  <article key={news.id} className="tech-news-card">
                    <div className="tech-card-image">
                      <img src={news.image} alt={news.title} />
                      <div className="tech-card-overlay">
                        <span className="tech-card-category">{news.category}</span>
                      </div>
                    </div>
                    <div className="tech-card-content">
                      <h3 className="tech-card-title">{news.title}</h3>
                      <p className="tech-card-summary">{news.summary}</p>
                      <div className="tech-card-meta">
                        <span className="tech-card-time">{news.time}</span>
                        <div className="tech-card-actions">
                          <button className="tech-share-btn">શેર</button>
                          <button className="tech-bookmark-btn">📎</button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="tech-sidebar">
              {/* Trending Topics */}
              <div className="tech-sidebar-widget">
                <h3 className="tech-widget-title">ટ્રેન્ડિંગ ટોપિક્સ</h3>
                <div className="tech-trending-list">
                  {trendingTopics.map((topic, index) => (
                    <div key={index} className="tech-trending-item">
                      <div className="tech-trending-info">
                        <span className="tech-trending-name">{topic.name}</span>
                        <span className="tech-trending-count">{topic.count} લેખો</span>
                      </div>
                      <span className={`tech-trend-indicator tech-trend-${topic.trend}`}>
                        {topic.trend === 'up' ? '📈' : '📉'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="tech-sidebar-widget">
                <h3 className="tech-widget-title">કેટેગરીઝ</h3>
                <div className="tech-categories-grid">
                  {techCategories.map((category, index) => (
                    <div 
                      key={index} 
                      className="tech-category-item"
                      style={{'--category-color': category.color}}
                    >
                      <span className="tech-category-icon">{category.icon}</span>
                      <div className="tech-category-info">
                        <span className="tech-category-name">{category.name}</span>
                        <span className="tech-category-count">{category.articles}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stats */}
              <div className="tech-sidebar-widget">
                <h3 className="tech-widget-title">આજના આંકડા</h3>
                <div className="tech-stats">
                  <div className="tech-stat-item">
                    <span className="tech-stat-number">1.2M</span>
                    <span className="tech-stat-label">દૈનિક વાચકો</span>
                  </div>
                  <div className="tech-stat-item">
                    <span className="tech-stat-number">850+</span>
                    <span className="tech-stat-label">આજના લેખો</span>
                  </div>
                  <div className="tech-stat-item">
                    <span className="tech-stat-number">24/7</span>
                    <span className="tech-stat-label">લાઇવ અપડેટ્સ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech News Ticker */}
      <section className="tech-news-ticker">
        <div className="tech-ticker-container">
          <div className="tech-ticker-label">🚀 ટેક અપડેટ્સ</div>
          <div className="tech-ticker-content">
            <span>💻 નવી AI ચિપ લોન્ચ • 📱 સ્માર્ટફોન ટેકનોલોજીમાં ક્રાંતિ • 🌐 6G નેટવર્કના પ્રયોગ શરૂ • 🤖 રોબોટિક્સમાં નવા આવિષ્કાર • ⚡ ક્વોન્ટમ કમ્પ્યુટિંગની સફળતા</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;