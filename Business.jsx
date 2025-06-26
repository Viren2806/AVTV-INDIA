import React, { useState, useEffect } from 'react';
import '../css/Business.css';

const Business = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentTab, setCurrentTab] = useState('markets');
  const [highlightedNews, setHighlightedNews] = useState(0);

  // Business news data in Gujarati
  const featuredBusinessNews = [
    {
      id: 1,
      title: "શેર બજારમાં તેજી, સેન્સેક્સ 75,000 ને પાર કરી ગયો",
      summary: "મુંબઈ: ભારતીય શેર બજારમાં આજે જોરદાર તેજી જોવા મળી છે. BSE સેન્સેક્સ 75,000 ના મહત્વપૂર્ણ સ્તરને પાર કરી ગયો છે. મુખ્ય કંપનીઓના શેરભાવમાં વધારો...",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=450&fit=crop",
      category: "શેર બજાર",
      time: "15 મિનિટ પહેલાં",
      readTime: "4 મિનિટ વાંચન"
    },
    {
      id: 2,
      title: "ભારતની GDP વૃદ્ધિ 7.5% થવાની આગાહી, આર્થિક સુધારણા",
      summary: "નવી દિલ્હી: વર્લ્ડ બેંકે ભારતની GDP વૃદ્ધિ 7.5% થવાની આગાહી કરી છે. ઉદ્યોગ ક્ષેત્રમાં સુધારો અને નિકાસમાં વધારો...",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=450&fit=crop",
      category: "આર્થિક વિકાસ",
      time: "45 મિનિટ પહેલાં",
      readTime: "5 મિનિટ વાંચન"
    },
    {
      id: 3,
      title: "ગુજરાતમાં નવું ટેક હબ, 50,000 લોકોને રોજગાર",
      summary: "અમદાવાદ: ગુજરાત સરકારે નવું ટેક હબ સ્થાપવાની જાહેરાત કરી છે. આ પ્રોજેક્ટથી 50,000 લોકોને સીધો રોજગાર મળવાની શક્યતા...",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=450&fit=crop",
      category: "ટેકનોલોજી",
      time: "2 કલાક પહેલાં",
      readTime: "6 મિનિટ વાંચન"
    }
  ];

  const breakingBusinessNews = [
    {
      id: 4,
      title: "ક્રિપ્ટો કરન્સીમાં મોટા પ્રમાણમાં રોકાણ",
      summary: "ભારતીય કંપનીઓ ક્રિપ્ટો કરન્સીમાં રોકાણ વધારી રહી છે...",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=250&fit=crop",
      category: "ક્રિપ્ટો",
      time: "30 મિનિટ પહેલાં"
    },
    {
      id: 5,
      title: "ઓટોમોબાઈલ ઇન્ડસ્ટ્રીમાં ઇલેક્ટ્રિક વ્હીકલ્સનો વિકાસ",
      summary: "ઈવી સેક્ટરમાં મોટા રોકાણની જાહેરાત, નવા ચાર્જિંગ સ્ટેશન...",
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=250&fit=crop",
      category: "ઓટોમોબાઈલ",
      time: "1 કલાક પહેલાં"
    },
    {
      id: 6,
      title: "બેંકિંગ સેક્ટરમાં ડિજિટલ ઇનોવેશન",
      summary: "ડિજિટલ બેંકિંગ સેવાઓમાં વધારો, નવી ટેકનોલોજીનો ઉપયોગ...",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      category: "બેંકિંગ",
      time: "3 કલાક પહેલાં"
    }
  ];

  const trendingBusinessTopics = [
    { name: "શેર બજાર", count: 892, trend: "up" },
    { name: "ક્રિપ્ટો કરન્સી", count: 756, trend: "up" },
    { name: "ઈવી સેક્ટર", count: 634, trend: "up" },
    { name: "ગોલ્ડ પ્રાઈસ", count: 521, trend: "down" },
    { name: "સ્ટાર્ટઅપ", count: 398, trend: "up" }
  ];

  const businessCategories = [
    { name: "શેર બજાર", icon: "📈", articles: 234, color: "#2ecc71" },
    { name: "બેંકિંગ", icon: "🏦", articles: 187, color: "#3498db" },
    { name: "ટેકનોલોજી", icon: "💻", articles: 156, color: "#9b59b6" },
    { name: "ઓટોમોબાઈલ", icon: "🚗", articles: 134, color: "#e74c3c" },
    { name: "રિયલ એસ્ટેટ", icon: "🏢", articles: 98, color: "#f39c12" },
    { name: "ક્રિપ્ટો", icon: "₿", articles: 76, color: "#1abc9c" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedNews((prev) => (prev + 1) % featuredBusinessNews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className="business-loader-screen">
        <div className="business-loader-animation">
          <div className="business-pulse-chart"></div>
        </div>
        <h2>બિઝનેસ સમાચાર લોડ થઈ રહ્યા છે...</h2>
        <p>લેટેસ્ટ માર્કેટ અપડેટ્સ તૈયાર કરી રહ્યા છીએ...</p>
      </div>
    );
  }

  return (
    <div className="business-main-page" style={{marginTop:"60px"}}>
      {/* Hero Banner */}
      <section className="business-hero-banner">
        <div className="business-main-container">
          <div className="business-hero-wrapper">
            <div className="business-hero-badge-container">
              <span className="business-hero-icon">💼</span>
              બિઝનેસ ન્યૂઝ
            </div>
            <h1 className="business-hero-heading">બિઝનેસ અને ફાઇનાન્સની દુનિયા</h1>
            <p className="business-hero-description">
              શેર બજારથી ક્રિપ્ટો સુધી, લેટેસ્ટ માર્કેટ ન્યૂઝ અને આર્થિક અપડેટ્સ
            </p>
          </div>
        </div>
      </section>

      {/* Featured Business Carousel */}
      <section className="business-featured-carousel-section">
        <div className="business-main-container">
          <div className="business-carousel-wrapper">
            {featuredBusinessNews.map((article, index) => (
              <div 
                key={article.id}
                className={`business-carousel-slide ${index === highlightedNews ? 'business-slide-active' : ''}`}
              >
                <div className="business-slide-content">
                  <div className="business-slide-image-container">
                    <img src={article.image} alt={article.title} />
                    <div className="business-slide-gradient-overlay"></div>
                  </div>
                  <div className="business-slide-text-content">
                    <div className="business-slide-meta-info">
                      <span className="business-category-tag">{article.category}</span>
                      <span className="business-read-duration">{article.readTime}</span>
                    </div>
                    <h2 className="business-slide-heading">{article.title}</h2>
                    <p className="business-slide-excerpt">{article.summary}</p>
                    <div className="business-slide-bottom-bar">
                      <span className="business-published-time">{article.time}</span>
                      <button className="business-read-more-btn">
                        વધુ વાંચો
                        <span className="business-arrow-icon">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="business-carousel-dots">
              {featuredBusinessNews.map((_, index) => (
                <button
                  key={index}
                  className={`business-dot ${index === highlightedNews ? 'business-dot-active' : ''}`}
                  onClick={() => setHighlightedNews(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Business Content */}
      <section className="business-content-section">
        <div className="business-main-container">
          <div className="business-layout-grid">
            <div className="business-primary-column">
              {/* Tab Navigation */}
              <div className="business-navigation-tabs">
                <button 
                  className={`business-nav-tab ${currentTab === 'markets' ? 'business-tab-selected' : ''}`}
                  onClick={() => setCurrentTab('markets')}
                >
                  માર્કેટ્સ
                </button>
                <button 
                  className={`business-nav-tab ${currentTab === 'companies' ? 'business-tab-selected' : ''}`}
                  onClick={() => setCurrentTab('companies')}
                >
                  કંપનીઓ
                </button>
                <button 
                  className={`business-nav-tab ${currentTab === 'economy' ? 'business-tab-selected' : ''}`}
                  onClick={() => setCurrentTab('economy')}
                >
                  અર્થતંત્ર
                </button>
              </div>

              {/* Business News Cards Grid */}
              <div className="business-news-cards-grid">
                {breakingBusinessNews.map((news) => (
                  <article key={news.id} className="business-news-card">
                    <div className="business-card-image-wrapper">
                      <img src={news.image} alt={news.title} />
                      <div className="business-card-image-overlay">
                        <span className="business-card-category-badge">{news.category}</span>
                      </div>
                    </div>
                    <div className="business-card-text-section">
                      <h3 className="business-card-headline">{news.title}</h3>
                      <p className="business-card-description">{news.summary}</p>
                      <div className="business-card-bottom-section">
                        <span className="business-card-timestamp">{news.time}</span>
                        <div className="business-card-action-buttons">
                          <button className="business-share-button">શેર કરો</button>
                          <button className="business-bookmark-button">🔖</button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Business Sidebar */}
            <div className="business-secondary-column">
              {/* Trending Business Topics */}
              <div className="business-sidebar-panel">
                <h3 className="business-panel-title">ટ્રેન્ડિંગ બિઝનેસ</h3>
                <div className="business-trending-topics-list">
                  {trendingBusinessTopics.map((topic, index) => (
                    <div key={index} className="business-trending-topic-item">
                      <div className="business-topic-details">
                        <span className="business-topic-title">{topic.name}</span>
                        <span className="business-topic-article-count">{topic.count} સમાચાર</span>
                      </div>
                      <span className={`business-trend-arrow business-trend-${topic.trend}`}>
                        {topic.trend === 'up' ? '📈' : '📉'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Categories */}
              <div className="business-sidebar-panel">
                <h3 className="business-panel-title">બિઝનેસ કેટેગરી</h3>
                <div className="business-categories-list">
                  {businessCategories.map((category, index) => (
                    <div 
                      key={index} 
                      className="business-category-card"
                      style={{'--business-category-color': category.color}}
                    >
                      <span className="business-category-emoji">{category.icon}</span>
                      <div className="business-category-details">
                        <span className="business-category-title">{category.name}</span>
                        <span className="business-category-article-count">{category.articles}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Market Stats */}
              <div className="business-sidebar-panel">
                <h3 className="business-panel-title">આજના માર્કેટ આંકડા</h3>
                <div className="business-market-stats">
                  <div className="business-stat-box">
                    <span className="business-stat-figure">75,235</span>
                    <span className="business-stat-description">સેન્સેક્સ</span>
                  </div>
                  <div className="business-stat-box">
                    <span className="business-stat-figure">22,890</span>
                    <span className="business-stat-description">નિફ્ટી</span>
                  </div>
                  <div className="business-stat-box">
                    <span className="business-stat-figure">₹83.2</span>
                    <span className="business-stat-description">USD/INR</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business News Ticker */}
      <section className="business-live-ticker">
        <div className="business-ticker-wrapper">
          <div className="business-ticker-header">💼 લાઇવ માર્કેટ</div>
          <div className="business-ticker-feed">
            <span>📈 સેન્સેક્સ +2.5% • 💰 ગોલ્ડ ₹63,450/10g • ₿ બિટકોઈન $45,230 • 🛢️ ક્રૂડ ઓઈલ $78.5/બેરલ • 📊 નિફ્ટી +1.8% • 🏦 બેંક શેર્સમાં તેજી</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Business;