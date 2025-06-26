import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/News.css';

const News = ({ category: initialCategory }) => {
  const location = useLocation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState(initialCategory || 'બધા');
  const [currentTime, setCurrentTime] = useState(new Date());

  const demoWeather = {
    temp: '32°C',
    desc: 'Clear Sky',
    humidity: '65%',
    wind: '12 km/h'
  };

  const featured = [
    { id: 1, category: 'ટેક', headline: 'AI ક્રાંતિ: નવી તકનીકી પ્રગતિ', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80', excerpt: 'આર્ટિફિશિયલ ઇન્ટેલિજન્સ હવે આરોગ્યથી લઈને શિક્ષણ સુધી દરેક ક્ષેત્રમાં ક્રાંતિ લાવી રહી છે.', time: '1 કલાક પહેલા', trending: true },
    { id: 2, category: 'અર્થવ્યવસ્થા', headline: 'શેર બજારમાં નવા રેકોર્ડ', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80', excerpt: 'આર્થિક સુધારાઓ અને નવી નીતિઓથી શેર માર્કેટમાં જોરદાર ઉછાળો જોવા મળ્યો છે.', time: '2 કલાક પહેલા', trending: false },
    { id: 3, category: 'રમતગમત', headline: 'ભારતીય ક્રિકેટ ટીમની શાનદાર જીત', image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80', excerpt: 'વિશ્વ કપમાં ભારતીય ટીમે અજેય પ્રદર્શન કરીને નવો ઇતિહાસ રચ્યો છે.', time: '3 કલાક પહેલા', trending: true }
  ];

  const articles = [
    { id: 4, category: 'રાજકારણ', headline: 'મુખ્યમંત્રી સમ્મેલનમાં મહત્વપૂર્ણ નિર્ણયો', image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&q=80', excerpt: 'રાજ્યના વિકાસ અને લોક કલ્યાણ માટે અનેક મહત્વપૂર્ણ યોજનાઓની જાહેરાત કરવામાં આવી.', time: '30 મિનિટ પહેલા', readTime: '3 મિનિટ' },
    { id: 5, category: 'આરોગ્ય', headline: 'નવી મેડિકલ સુવિધાઓની શરૂઆત', image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&q=80', excerpt: 'શહેરમાં આધુનિક તકનીકથી સજ્જ નવી હોસ્પિટલની શરૂઆત કરવામાં આવી છે.', time: '45 મિનિટ પહેલા', readTime: '4 મિનિટ' },
    { id: 6, category: 'મનોરંજન', headline: 'બોલિવૂડ સ્ટારની નવી ફિલ્મનું ટીઝર', image: 'https://images.unsplash.com/photo-1489599735734-79b4af736ba2?w=400&q=80', excerpt: 'આગામી મહિને રિલીઝ થનારી આ ફિલ્મને લઈને ચાહકોમાં મોટો ઉત્સાહ જોવા મળી રહ્યો છે.', time: '1 કલાક પહેલા', readTime: '2 મિનિટ' },
    { id: 7, category: 'ટેક', headline: '5G નેટવર્કનું વિસ્તરણ', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80', excerpt: 'દેશભરમાં 5G નેટવર્કના વિસ્તરણથી ડિજિટલ ઇન્ડિયાને નવી દિશા મળશે.', time: '1.5 કલાક પહેલા', readTime: '5 મિનિટ' },
    { id: 8, category: 'પર્યાવરણ', headline: 'વૃક્ષારોપણ અભિયાનમાં રેકોર્ડ સહભાગિતા', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80', excerpt: 'પર્યાવરણ બચાવવા માટે શરૂ કરાયેલા આ અભિયાનમાં હજારો લોકોએ ભાગ લીધો છે.', time: '2 કલાક પહેલા', readTime: '3 મિનિટ' },
    { id: 9, category: 'શિક્ષણ', headline: 'ડિજિટલ એજ્યુકેશનમાં નવી પહેલ', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80', excerpt: 'સરકારી શાળાઓમાં આધુનિક તકનીકનો ઉપયોગ કરીને શિક્ષણની ગુણવત્તા સુધારવાની પહેલ.', time: '2.5 કલાક પહેલા', readTime: '4 મિનિટ' }
  ];

  const categories = [
    { name: 'ટેક', icon: '💻', count: 12, path: '/technology' },
    { name: 'રાજકારણ', icon: '🏛️', count: 8, path: '/politics' },
    { name: 'અર્થવ્યવસ્થા', icon: '📈', count: 15, path: '/business' },
    { name: 'રમતગમત', icon: '⚽', count: 6, path: '/sports' },
    { name: 'મનોરંજન', icon: '🎭', count: 9, path: '/manoranjan' },
    { name: 'આરોગ્ય', icon: '🏥', count: 7, path: '/health' },
    { name: 'પર્યાવરણ', icon: '🌱', count: 5, path: '/environment' },
    { name: 'શિક્ષણ', icon: '📚', count: 4, path: '/education' },
    { name: 'હવામાન', icon: '🌤️', count: 4, path: '/weather' }
  ];

  const tickerNews = [
    'બ્રેકિંગ: મોનસૂન આવવાનો સંકેત, ખેડૂતોમાં ખુશીનો માહોલ',
    'શેર બજારમાં નવા રેકોર્ડ, સામાન્ય રોકાણકારો માટે સારા સમાચાર',
    'AI તકનીકના ક્ષેત્રમાં નવી નોકરીઓની તકો, યુવાનો માટે સુવર્ણ અવસર',
    'આરોગ્ય ક્ષેત્રે નવી સફળતા, દર્દીઓ માટે આશાનો કિરણ'
  ];

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % featured.length);
    }, 5000);
    return () => clearInterval(slider);
  }, [featured.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (initialCategory) {
      setActiveCategory(initialCategory);
    } else if (location.pathname === "/") {
      setActiveCategory("બધા");
    }
  }, [location, initialCategory]);

  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === 'બધા' || article.category === activeCategory;
    const matchesSearch = article.headline.toLowerCase().includes(search.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="news-container" style={{ marginTop: "70px" }}>
      <div className="news-ticker-container">
        <div className="ticker-label">
          <span className="live-indicator"></span>
          LIVE
        </div>
        <div className="ticker-content">
          <div className="ticker-scroll">
            {tickerNews.join(' • ')}
          </div>
        </div>
      </div>

      <section className="featured-section">
        <div className="featured-container">
          <div className="featured-slider">
            {featured.map((item, index) => (
              <div key={item.id} className={`featured-slide ${index === currentSlide ? 'active' : ''}`}>
                <div className="featured-image">
                  <img src={item.image} alt={item.headline} />
                  {item.trending && <div className="trending-badge">🔥 ટ્રેન્ડિંગ</div>}
                </div>
                <div className="featured-content">
                  <div className="featured-category">{item.category}</div>
                  <h1 className="featured-headline">{item.headline}</h1>
                  <p className="featured-excerpt">{item.excerpt}</p>
                  <div className="featured-meta">
                    <span className="featured-time">⏰ {item.time}</span>
                    <button className="read-more-btn">વધુ વાંચો →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="news-main">
        <div className="news-content">
          <section className="articles-section">
            <div className="section-header">
              <h2>તાજા સમાચાર</h2>
            </div>

            {filteredArticles.length === 0 ? (
              <div className="no-articles">
                <div className="no-articles-icon">📰</div>
                <h3>કોઈ સમાચાર મળ્યા નથી</h3>
                <p>કૃપા કરીને અલગ શોધ અથવા કેટેગરી પસંદ કરો</p>
              </div>
            ) : (
              <div className="articles-grid">
                {filteredArticles.map(article => (
                  <article key={article.id} className="article-card">
                    <div className="article-image">
                      <img src={article.image} alt={article.headline} />
                      <div className="article-category">{article.category}</div>
                    </div>
                    <div className="article-content">
                      <h3 className="article-headline">{article.headline}</h3>
                      <p className="article-excerpt">{article.excerpt}</p>
                      <div className="article-meta">
                        <span className="article-time">⏰ {article.time}</span>
                        <span className="read-time">📖 {article.readTime}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        </div>

        <aside className="news-sidebar">
          <div className="search-section">
            <h3>સમાચાર શોધો</h3>
            <div className="search-box">
              <input
                type="text"
                placeholder="કીવર્ડ દાખલ કરો..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="search-btn">🔍</button>
            </div>
          </div>

          <div className="categories-section">
            <h3>કેટેગરીઓ</h3>
            <div className="categories-list">
              <Link to="/" className={`category-item all ${activeCategory === 'બધા' ? 'active' : ''}`}>
                <span className="category-icon">📋</span>
                <span className="category-name">બધા</span>
                <span className="category-count">{articles.length}</span>
              </Link>
              {categories.map(cat => (
                <Link key={cat.name} to={cat.path} className={`category-item ${activeCategory === cat.name ? 'active' : ''}`}>
                  <span className="category-icon">{cat.icon}</span>
                  <span className="category-name">{cat.name}</span>
                  <span className="category-count">{cat.count}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="stats-section">
            <h3>આજના આંકડા</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">45</div>
                <div className="stat-label">નવા સમાચાર</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">12</div>
                <div className="stat-label">બ્રેકિંગ ન્યૂઝ</div>
              </div>
            </div>
          </div>

          {/* Advertisement Space */}
          <div className="ad-section">
            <div className="ad-placeholder">
              <div className="ad-icon">📢</div>
              <p>જાહેરાત સ્થાન</p>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default News;
