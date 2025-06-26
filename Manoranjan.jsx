import React, { useState, useEffect } from 'react';
import '../css/Manoranjan.css';

const Manoranjan = () => {
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Entertainment News Data in Gujarati
  const featuredNews = [
    {
      id: 1,
      title: "બોલિવૂડના સુપરસ્ટાર શાહરુખ ખાનની નવી ફિલ્મ 'જવાન' બોક્સ ઓફિસે તોડ્યા રેકોર્ડ",
      summary: "મુંબઈ: શાહરુખ ખાનની સિનેમા 'જવાન' રિલીઝ થતાં જ બોક્સ ઓફિસે તોડ્યા તમામ રેકોર્ડ. પહેલા જ દિવસે 100 કરોડનો કલેક્શન...",
      image: "https://images.unsplash.com/photo-1489599825065-bd9b1ad2b5d5?w=800&h=500&fit=crop",
      category: "બોલિવૂડ",
      time: "1 કલાક પહેલાં",
      readTime: "3 મિનિટ",
      isFeatured: true
    },
    {
      id: 2,
      title: "ગુજરાતી ફિલ્મ 'છેલ્લો દિવસ' કાન્સ ફિલ્મ ફેસ્ટિવલમાં પ્રવેશ, મોટી સિદ્ધિ",
      summary: "અમદાવાદ: ગુજરાતી સિનેમાને આંતરરાષ્ટ્રીય સ્તરે માન્યતા મળી છે. કાન્સ ફિલ્મ ફેસ્ટિવલમાં ગુજરાતી ફિલ્મનો પ્રવેશ...",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&h=500&fit=crop",
      category: "ગુજરાતી સિનેમા",
      time: "2 કલાક પહેલાં",
      readTime: "4 મિનિટ",
      isFeatured: true
    }
  ];

  const entertainmentNews = [
    {
      id: 3,
      title: "પ્રિયંકા ચોપ્રાની નવી હોલિવૂડ ફિલ્મનું ટ્રેલર રિલીઝ, ફેન્સમાં ઉત્સાહ",
      summary: "મુંબઈ: બોલિવૂડથી હોલિવૂડ સુધીની સફર કરનાર પ્રિયંકા ચોપ્રાની નવી ફિલ્મ...",
      image: "https://images.unsplash.com/photo-1512070750671-e7e8eac67d09?w=400&h=250&fit=crop",
      category: "હોલિવૂડ",
      time: "3 કલાક પહેલાં",
      readTime: "2 મિનિટ"
    },
    {
      id: 4,
      title: "સલમાન ખાનની 'ટાઇગર 3' ફિલ્મની શૂટિંગ પૂર્ણ, દિવાળીમાં રિલીઝ",
      summary: "મુંબઈ: બોલિવૂડના ભાઈજાન સલમાન ખાનની અપેક્ષિત ફિલ્મ ટાઇગર 3 તૈયાર...",
      image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400&h=250&fit=crop",
      category: "બોલિવૂડ",
      time: "4 કલાક પહેલાં",
      readTime: "3 મિનિટ"
    },
    {
      id: 5,
      title: "ગુજરાતી નાટ્ય જગતમાં નવી પ્રતિભા, અમદાવાદમાં શો હાઉસ ફુલ",
      summary: "અમદાવાદ: ગુજરાતી થિયેટરમાં યુવા કલાકારોનો ઉદય થઈ રહ્યો છે...",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      category: "થિયેટર",
      time: "5 કલાક પહેલાં",
      readTime: "4 મિનિટ"
    },
    {
      id: 6,
      title: "OTT પ્લેટફોર્મ પર ગુજરાતી કન્ટેન્ટની વધતી માંગ, નવા શો આવશે",
      summary: "અમદાવાદ: ડિજિટલ પ્લેટફોર્મ પર ગુજરાતી ભાષાના કન્ટેન્ટની માંગ વધી રહી છે...",
      image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=250&fit=crop",
      category: "OTT",
      time: "6 કલાક પહેલાં",
      readTime: "3 મિનિટ"
    },
    {
      id: 7,
      title: "રણવીર સિંહ અને દીપિકા પાદુકોણની નવી ફિલ્મની જાહેરાત",
      summary: "મુંબઈ: બોલિવૂડની પાવર કપલ રણવીર અને દીપિકા ફરી એકસાથે ફિલ્મમાં...",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=250&fit=crop",
      category: "બોલિવૂડ",
      time: "8 કલાક પહેલાં",
      readTime: "5 મિનિટ"
    },
    {
      id: 8,
      title: "વેબ સિરીઝ 'સ્કેમ 1992'ના નિર્માતાની નવી પ્રોજેક્ટ શરૂ",
      summary: "મુંબઈ: પ્રતિક ગાંધીને પ્રસિદ્ધ બનાવનાર 'સ્કેમ 1992'ના નિર્માતા હર્ષદ મહેતાની નવી વેબ સિરીઝ...",
      image: "https://images.unsplash.com/photo-1489599825065-bd9b1ad2b5d5?w=400&h=250&fit=crop",
      category: "વેબ સિરીઝ",
      time: "10 કલાક પહેલાં",
      readTime: "4 મિનિટ"
    }
  ];

  const boxOfficeData = [
    { name: "જવાન", collection: "₹350 કરોડ", change: "+15%", weeks: "2 અઠવાડિયા" },
    { name: "ગૌરી", collection: "₹45 કરોડ", change: "+8%", weeks: "1 અઠવાડિયું" },
    { name: "ધ કેરેલ કિસ", collection: "₹25 કરોડ", change: "-5%", weeks: "3 અઠવાડિયા" },
    { name: "મિશન મંગલ", collection: "₹80 કરોડ", change: "+12%", weeks: "4 અઠવાડિયા" }
  ];

  const categories = [
    { id: 'all', name: 'બધા સમાચાર', count: 134 },
    { id: 'bollywood', name: 'બોલિવૂડ', count: 56 },
    { id: 'gujarati', name: 'ગુજરાતી સિનેમા', count: 23 },
    { id: 'hollywood', name: 'હોલિવૂડ', count: 18 },
    { id: 'tv', name: 'ટીવી શો', count: 15 },
    { id: 'music', name: 'સંગીત', count: 22 }
  ];

  const trending = [
    "શાહરુખ ખાનની જવાન ફિલ્મ",
    "કાન્સમાં ગુજરાતી ફિલ્મ", 
    "પ્રિયંકાની હોલિવૂડ ફિલ્મ",
    "OTT પર ગુજરાતી કન્ટેન્ટ",
    "નવો વેબ સિરીઝ લોન્ચ"
  ];

  const upcomingReleases = [
    { title: "આદિપુરુષ", date: "16 જૂન", genre: "એક્શન/ડ્રામા" },
    { title: "રોકી અને રાણી", date: "28 જુલાઈ", genre: "રોમાન્સ" },
    { title: "ગૌરી 2", date: "15 ઓગસ્ટ", genre: "હોરર" },
    { title: "મિશન: ઇમ્પોસિબલ 8", date: "12 સપ્ટેમ્બર", genre: "એક્શન" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleCategoryFilter = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleNewsClick = (newsId) => {
    console.log('News clicked:', newsId);
    // Add navigation logic here
  };

  const handleShareNews = (newsId, e) => {
    e.stopPropagation();
    console.log('Share news:', newsId);
    // Add share functionality here
  };

  const handleBookmarkNews = (newsId, e) => {
    e.stopPropagation();
    console.log('Bookmark news:', newsId);
    // Add bookmark functionality here
  };

  const handleLoadMore = () => {
    console.log('Load more news');
    // Add load more functionality here
  };

  const handleNewsletterSubscribe = (email) => {
    console.log('Newsletter subscription:', email);
    // Add newsletter subscription logic here
  };

  if (loading) {
    return (
      <div className="manoranjan-loading">
        <div className="loading-spinner"></div>
        <h2>મનોરંજન સમાચાર લોડ થઈ રહ્યા છે...</h2>
      </div>
    );
  }

  return (
    <div className="manoranjan-page" style={{ marginTop:"120px"}}>
      {/* Header Section */}
      <section className="manoranjan-header">
        <div className="container">
          <div className="header-content">
            <h1 className="page-title">
              <span className="title-icon">🎬</span>
              મનોરંજન સમાચાર
            </h1>
            <p className="page-subtitle">બોલિવૂડ, હોલિવૂડ અને ગુજરાતી સિનેમાના તાજા સમાચાર</p>
          </div>
        </div>
      </section>

      {/* Box Office Ticker */}
      <section className="box-office-ticker">
        <div className="ticker-container">
          <div className="ticker-label">🎭 બોક્સ ઓફિસ</div>
          <div className="ticker-content">
            {boxOfficeData.map((movie, index) => (
              <div key={index} className="movie-item">
                <span className="movie-name">{movie.name}</span>
                <span className="movie-collection">{movie.collection}</span>
                <span className={`movie-change ${movie.change.startsWith('+') ? 'positive' : 'negative'}`}>
                  {movie.change}
                </span>
                <span className="movie-weeks">{movie.weeks}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">મુખ્ય સમાચાર</h2>
          <div className="featured-grid">
            {featuredNews.map((news) => (
              <article 
                key={news.id} 
                className="featured-card"
                onClick={() => handleNewsClick(news.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleNewsClick(news.id);
                  }
                }}
              >
                <div className="featured-image">
                  <img src={news.image} alt={news.title} loading="lazy" />
                  <div className="image-overlay"></div>
                  <span className="featured-badge">મુખ્ય સમાચાર</span>
                </div>
                <div className="featured-content">
                  <div className="news-meta">
                    <span className="category">{news.category}</span>
                    <span className="time">🕒 {news.time}</span>
                    <span className="read-time">📖 {news.readTime}</span>
                  </div>
                  <h3 className="featured-title">{news.title}</h3>
                  <p className="featured-summary">{news.summary}</p>
                  <button className="read-more-btn">
                    વિગતવાર વાંચો
                    <span className="btn-arrow">→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="main-content">
        <div className="container">
          <div className="content-wrapper">
            <div className="news-content">
              {/* Category Filter */}
              <div className="category-filter">
                <h3>વિભાગ પસંદ કરો</h3>
                <div className="filter-buttons">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                      onClick={() => handleCategoryFilter(cat.id)}
                      aria-pressed={selectedCategory === cat.id}
                    >
                      {cat.name}
                      <span className="count">({cat.count})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* News Grid */}
              <div className="news-grid">
                {entertainmentNews.map((news) => (
                  <article 
                    key={news.id} 
                    className="news-card"
                    onClick={() => handleNewsClick(news.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handleNewsClick(news.id);
                      }
                    }}
                  >
                    <div className="news-image">
                      <img src={news.image} alt={news.title} loading="lazy" />
                      <span className="category-tag">{news.category}</span>
                    </div>
                    <div className="news-content-area">
                      <h4 className="news-title">{news.title}</h4>
                      <p className="news-summary">{news.summary}</p>
                      <div className="news-footer">
                        <div className="news-meta">
                          <span className="time">🕒 {news.time}</span>
                          <span className="read-time">📖 {news.readTime}</span>
                        </div>
                        <div className="news-actions">
                          <button 
                            className="share-btn"
                            onClick={(e) => handleShareNews(news.id, e)}
                            aria-label={`શેર કરો: ${news.title}`}
                          >
                            શેર
                          </button>
                          <button 
                            className="bookmark-btn"
                            onClick={(e) => handleBookmarkNews(news.id, e)}
                            aria-label={`સેવ કરો: ${news.title}`}
                          >
                            સેવ
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More Button */}
              <div className="load-more-section">
                <button className="load-more-btn" onClick={handleLoadMore}>
                  વધુ સમાચાર લોડ કરો
                  <span className="loading-dots">...</span>
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="manoranjan-sidebar">
              {/* Trending Section */}
              <div className="sidebar-section trending-section">
                <h3 className="sidebar-title">
                  <span className="title-icon">🔥</span>
                  ટ્રેન્ડિંગ
                </h3>
                <div className="trending-list">
                  {trending.map((trend, index) => (
                    <div 
                      key={index} 
                      className="trending-item"
                      role="button"
                      tabIndex={0}
                      onClick={() => console.log('Trending clicked:', trend)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          console.log('Trending clicked:', trend);
                        }
                      }}
                    >
                      <span className="trend-number">{index + 1}</span>
                      <p className="trend-text">{trend}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Releases */}
              <div className="sidebar-section upcoming-releases">
                <h3 className="sidebar-title">
                  <span className="title-icon">🎥</span>
                  આવનારી ફિલ્મો
                </h3>
                <div className="releases-list">
                  {upcomingReleases.map((movie, index) => (
                    <div 
                      key={index} 
                      className="release-item"
                      role="button"
                      tabIndex={0}
                      onClick={() => console.log('Movie clicked:', movie.title)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          console.log('Movie clicked:', movie.title);
                        }
                      }}
                    >
                      <div className="release-info">
                        <h4 className="movie-title">{movie.title}</h4>
                        <span className="movie-genre">{movie.genre}</span>
                      </div>
                      <div className="release-date">{movie.date}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Box Office Summary */}
              <div className="sidebar-section box-office-summary">
                <h3 className="sidebar-title">
                  <span className="title-icon">💰</span>
                  બોક્સ ઓફિસ
                </h3>
                <div className="box-office-cards">
                  {boxOfficeData.map((movie, index) => (
                    <div key={index} className="box-office-card">
                      <div className="movie-info">
                        <span className="movie-name">{movie.name}</span>
                        <span className="movie-weeks">{movie.weeks}</span>
                      </div>
                      <div className="collection-info">
                        <span className="collection">{movie.collection}</span>
                        <span className={`change ${movie.change.startsWith('+') ? 'positive' : 'negative'}`}>
                          {movie.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="sidebar-section quick-links">
                <h3 className="sidebar-title">
                  <span className="title-icon">🔗</span>
                  ઉપયોગી લિંક્સ
                </h3>
                <div className="links-list">
                  <a href="https://www.imdb.com/" className="quick-link" target="_blank" rel="noopener noreferrer">IMDB રેટિંગ</a>
                  <a href="#" className="quick-link" onClick={(e) => e.preventDefault()}>બોક્સ ઓફિસ લાઇવ</a>
                  <a href="https://www.imdb.com/trailers/" className="quick-link" target="_blank" rel="noopener noreferrer">ફિલ્મ ટ્રેલર</a>
                  <a href="#" className="quick-link" onClick={(e) => e.preventDefault()}>સેલિબ્રિટી ઇન્ટરવ્યુ</a>
                  <a href="#" className="quick-link" onClick={(e) => e.preventDefault()}>મૂવી રિવ્યુ</a>
                </div>
              </div>

              {/* Advertisement Space */}
              <div className="sidebar-section ad-space">
                <div className="ad-placeholder">
                  <p>જાહેરાત સ્થળ</p>
                  <span>300 x 250</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h3>દરરોજ મનોરંજન સમાચાર મેળવો</h3>
              <p>તમારા ઇમેઇલ પર બોલિવૂડ, હોલિવૂડ અને ગુજરાતી સિનેમાના તાજા સમાચાર મેળવો</p>
            </div>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="તમારો ઇમેઇલ દાખલ કરો" 
                aria-label="ઇમેઇલ એડ્રેસ"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    const email = e.target.value;
                    console.log('Newsletter subscription:', email);
                  }
                }}
              />
              <button 
                className="subscribe-btn"
                onClick={(e) => {
                  const email = e.target.parentElement.querySelector('input').value;
                  console.log('Newsletter subscription:', email);
                }}
              >
                સબસ્ક્રાઇબ કરો
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manoranjan;