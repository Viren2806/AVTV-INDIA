import React, { useState, useEffect } from 'react';
import { Calendar, Users, TrendingUp, MapPin, Clock, ArrowRight, Eye, Share2, MessageSquare } from 'lucide-react';
import '../css/Politics.css';

const Politics = () => {
  const [activeTab, setActiveTab] = useState('મુખ્ય');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const newsData = {
    'મુખ્ય': [
      {
        id: 1,
        title: 'ગુજરાતમાં રાજકીય પરિવર્તનની શક્યતા, મુખ્યમંત્રીની મહત્વપૂર્ણ બેઠક',
        summary: 'રાજ્યમાં આગામી ચૂંટણીને લઈને રાજકીય પાર્ટીઓમાં હલચલ વધી છે...',
        category: 'રાજ્ય સમાચાર',
        time: '2 કલાક પહેલાં',
        views: '45K',
        image: 'https://via.placeholder.com/400x250/4F46E5/ffffff?text=Gujarat+Politics'
      },
      {
        id: 2,
        title: 'કેન્દ્ર સરકારનું નવું નીતિગત નિર્ણય, ગુજરાત પર મોટી અસર અપેક્ષિત',
        summary: 'નવી નીતિથી રાજ્યના ઉદ્યોગ અને કૃષિ ક્ષેત્રે મોટા ફેરફારો થશે...',
        category: 'કેન્દ્ર સરકાર',
        time: '4 કલાક પહેલાં',
        views: '32K',
        image: 'https://via.placeholder.com/400x250/059669/ffffff?text=Central+Govt'
      },
      {
        id: 3,
        title: 'વિધાનસભામાં હંગામો, વિપક્ષે કર્યું વોકઆઉટ',
        summary: 'આજે વિધાનસભાના સત્રમાં મુખ્ય મુદ્દાઓ પર ચર્ચા દરમિયાન હંગામો થયો...',
        category: 'વિધાનસભા',
        time: '6 કલાક પહેલાં',
        views: '28K',
        image: 'https://via.placeholder.com/400x250/DC2626/ffffff?text=Assembly'
      }
    ],
    'ચૂંટણી': [
      {
        id: 4,
        title: 'લોકસભા ચૂંટણીની તૈયારી શરૂ, ECI ની મહત્વપૂર્ણ બેઠક',
        summary: 'આગામી લોકસભા ચૂંટણી માટે ચૂંટણી આયોગની તૈયારીઓ ઝડપે આગળ વધી રહી છે...',
        category: 'લોકસભા',
        time: '1 કલાક પહેલાં',
        views: '52K',
        image: 'https://via.placeholder.com/400x250/7C3AED/ffffff?text=Elections'
      },
      {
        id: 5,
        title: 'સ્થાનિક સ્વરાજ્ય સંસ્થાઓની ચૂંટણી, ઉમેદવારોની યાદી જાહેર',
        summary: 'પંચાયત અને નગરપાલિકાની ચૂંટણી માટે નોમિનેશન પ્રક્રિયા શરૂ...',
        category: 'સ્થાનિક',
        time: '3 કલાક પહેલાં',
        views: '38K',
        image: 'https://via.placeholder.com/400x250/EA580C/ffffff?text=Local+Elections'
      }
    ],
    'વિશ્લેષણ': [
      {
        id: 6,
        title: 'ગુજરાતની રાજકીય સ્થિતિનું વિશ્લેષણ - નિષ્ણાંતોના મંતવ્યો',
        summary: 'રાજકીય નિષ્ણાંતોએ રાજ્યની વર્તમાન રાજકીય પરિસ્થિતિ અંગે વિશ્લેષણ કર્યું છે...',
        category: 'વિશ્લેષણ',
        time: '5 કલાક પહેલાં',
        views: '41K',
        image: 'https://via.placeholder.com/400x250/0891B2/ffffff?text=Analysis'
      }
    ]
  };

  const trendingTopics = [
    'ગુજરાત વિધાનસભા',
    'કેન્દ્ર સરકારની નવી નીતિ',
    'પંચાયત ચૂંટણી',
    'રાજકીય ગઠબંધન',
    'વિકાસ કાર્યો'
  ];

  const liveUpdates = [
    { time: '14:30', update: 'મુખ્યમંત્રીની અગત્યની બેઠક સમાપ્ત' },
    { time: '13:15', update: 'વિધાનસભામાં નવા બિલની ચર્ચા' },
    { time: '12:45', update: 'કેન્દ્રીય મંત્રીની ગુજરાત મુલાકાત' },
    { time: '11:20', update: 'પંચાયત ચૂંટણીની તારીખ જાહેર' }
  ];

  return (
    <div className="politics-container">
      {/* Header */}
      <header className="politics-header">
        <div className="header-content">
          <div className="logo-section">
            <h1 className="main-logo">
              <span className="logo-text">ગુજરાત</span>
              <span className="logo-accent">પોલિટિક્સ</span>
            </h1>
            <p className="tagline">સમગ્ર ગુજરાતના રાજકીય સમાચાર</p>
          </div>
          <div className="live-time">
            <Clock className="clock-icon" />
            <span>{currentTime.toLocaleTimeString('gu-IN')}</span>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="politics-nav">
        <div className="nav-container">
          {Object.keys(newsData).map((tab) => (
            <button
              key={tab}
              className={`nav-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-grid">
          {/* News Section */}
          <section className="news-section">
            <div className="section-header">
              <h2 className="section-title">{activeTab} સમાચાર</h2>
              <div className="section-divider"></div>
            </div>
            
            <div className="news-grid">
              {newsData[activeTab]?.map((news, index) => (
                <article key={news.id} className={`news-card ${index === 0 ? 'featured' : ''}`}>
                  <div className="news-image">
                    <img src={news.image} alt={news.title} />
                    <div className="category-badge">{news.category}</div>
                  </div>
                  <div className="news-content">
                    <h3 className="news-title">{news.title}</h3>
                    <p className="news-summary">{news.summary}</p>
                    <div className="news-meta">
                      <span className="news-time">
                        <Clock size={14} />
                        {news.time}
                      </span>
                      <span className="news-views">
                        <Eye size={14} />
                        {news.views} વ્યૂઝ
                      </span>
                      <div className="news-actions">
                        <button className="action-btn">
                          <Share2 size={16} />
                        </button>
                        <button className="action-btn">
                          <MessageSquare size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="read-more">
                    <ArrowRight size={18} />
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Sidebar */}
          <aside className="sidebar">
            {/* Live Updates */}
            <div className="widget live-updates">
              <h3 className="widget-title">
                <span className="live-indicator"></span>
                લાઇવ અપડેટ્સ
              </h3>
              <div className="updates-list">
                {liveUpdates.map((update, index) => (
                  <div key={index} className="update-item">
                    <div className="update-time">{update.time}</div>
                    <div className="update-text">{update.update}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trending Topics */}
            <div className="widget trending">
              <h3 className="widget-title">
                <TrendingUp size={18} />
                ટ્રેન્ડિંગ વિષયો
              </h3>
              <div className="trending-list">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="trending-item">
                    <span className="trending-rank">#{index + 1}</span>
                    <span className="trending-topic">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="widget stats">
              <h3 className="widget-title">
                <Users size={18} />
                આંકડાકીય માહિતી
              </h3>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">182</div>
                  <div className="stat-label">વિધાનસભા બેઠકો</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">26</div>
                  <div className="stat-label">લોકસભા બેઠકો</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">33</div>
                  <div className="stat-label">જિલ્લાઓ</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="politics-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>ગુજરાત પોલિટિક્સ</h4>
            <p>વિશ્વસનીય અને નિષ્પક્ષ રાજકીય સમાચાર</p>
          </div>
          <div className="footer-section">
            <h4>શ્રેણીઓ</h4>
            <ul>
              <li>રાજ્ય સમાચાર</li>
              <li>કેન્દ્ર સરકાર</li>
              <li>ચૂંટણી</li>
              <li>વિશ્લેષણ</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>સંપર્ક</h4>
            <p>ગુજરાત, ભારત</p>
            <p>contact@gujaratpolitics.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Politics;