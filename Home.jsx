import React, { useState, useEffect, useRef } from 'react';
import '../css/Home.css';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamError, setStreamError] = useState('');
  const [showConnectionModal, setShowConnectionModal] = useState(false);
  const [streamingPlatforms, setStreamingPlatforms] = useState({
    youtube: false,
    facebook: false,
    twitch: false,
    instagram: false,
    podcast: false
  });        

  const videoRef = useRef(null);
  const streamRef = useRef(null);

  // Breaking News Data
  const breakingNews = [
    {
      id: 1,
      title: "International Yoga Day 2025: PM મોદીએ વિશાખાપટનમમાં 3 લાખ લોકો સાથે યોગ કર્યા",
      summary: "આંતરરાષ્ટ્રીય યોગ દિવસ નિમિત્તે વિશાખાપટનમમાં વિશાળ યોગ કાર્યક્રમનું આયોજન, 40 દેશોના પ્રતિનિધિઓ સામેલ...",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=400&fit=crop",
      category: "રાષ્ટ્રીય",
      time: "1 કલાક પહેલાં",
      isBreaking: true
    },
    {
      id: 2,
      title: "Gold Price Today: સોનાનો ભાવ આજે ઘટ્યો, ચાંદીના ભાવમાં પણ નોંધાયો ઘટાડો",
      summary: "આંતરરાષ્ટ્રીય બજારમાં સોનાની માંગ ઘટવાથી ભારતીય બજારમાં પણ ભાવોમાં નરમી આવી છે...",
      image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&h=400&fit=crop",
      category: "બિઝનેસ",
      time: "2 કલાક પહેલાં",
      isBreaking: false
    }
  ];

  // ✅ NEW: Live News Data
  const liveNewsData = [
    {
      id: 9,
      title: "લાઇવ: ગુજરાત વિધાનસભાનું સત્ર ચાલી રહ્યું છે, મહત્વપૂર્ણ મુદ્દાઓ પર ચર્ચા",
      summary: "ગાંધીનગરથી સીધા પ્રસારણ. વિપક્ષ દ્વારા મોંઘવારી અને રોજગારીના મુદ્દે સરકારને ઘેરવાનો પ્રયાસ...",
      image: "https://images.unsplash.com/photo-1600375225117-e6c71c243734?w=800&h=400&fit=crop",
      category: "રાજકારણ",
      time: "હમણાં લાઇવ",
      isLive: true
    },
    {
      id: 10,
      title: "લાઇવ: અમદાવાદમાં ભારે વરસાદને કારણે ટ્રાફિક જામ, રિવરફ્રન્ટ પર વાહનો અટવાયા",
      summary: "શહેરના મુખ્ય માર્ગો પર ભારે ટ્રાફિક. ટ્રાફિક પોલીસ દ્વારા નિયંત્રણના પ્રયાસો ચાલુ...",
      image: "https://images.unsplash.com/photo-1590422122179-67d719888914?w=800&h=400&fit=crop",
      category: "શહેરી સમાચાર",
      time: "હમણાં લાઇવ",
      isLive: true  
    }
  ];

  const topNews = [
    {
      id: 4,
      title: "કાનુની સવાલ: મિલકત વેચાણના કરાર 4 મહિનામાં રજીસ્ટર ન થાય તો માન્ય નહીં",
      summary: "સુપ્રીમ કોર્ટનો મહત્વપૂર્ણ ચુકાદો, મિલકત કરારની કાનૂની બાંયધરી અંગે સ્પષ્ટતા",
      image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=400&h=250&fit=crop",
      category: "કાનૂન",
      time: "4 કલાક પહેલાં"
    },
    {
      id: 5,
      title: "21 June 2025 રાશિફળ: આ 6 રાશિના જાતકોને આજે કાર્યમાં લાભ થશે",
      summary: "આજનું રાશિફળ મુજબ કેટલાક રાશિના જાતકો માટે લાભકારક દિવસ રહેશે",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      category: "રાશિફળ",
      time: "5 કલાક પહેલાં"
    },
    {
      id: 6,
      title: "ગુજરાતમાં નવા IT હબનું નિર્માણ, હજારો યુવાનોને રોજગાર મળશે",
      summary: "રાજ્ય સરકાર દ્વારા ટેકનોલોજી ક્ષેત્રમાં મોટું રોકાણ, યુવાનો માટે નવી તકો",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop",
      category: "ટેકનોલોજી",
      time: "6 કલાક પહેલાં"
    },
    {
      id: 7,
      title: "સુરતમાં ડાયમંડ ઉદ્યોગમાં તેજી, આંતરરાષ્ટ્રીય માંગ વધી",
      summary: "વૈશ્વિક બજારમાં ડાયમંડની માંગ વધવાથી સુરતના ઉદ્યોગસાહસિકોમાં ખુશી",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=250&fit=crop",
      category: "વ્યાપાર",
      time: "7 કલાક પહેલાં"
    },
    {
      id: 8,
      title: "અમદાવાદમાં મેટ્રો પ્રોજેક્ટનો નવો તબક્કો શરૂ",
      summary: "શહેરના ભીડભાડવાળા વિસ્તારોમાં મેટ્રો કનેક્ટિવિટી વિસ્તારવાનો નિર્ણય",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=250&fit=crop",
      category: "શહેરી વિકાસ",
      time: "8 કલાક પહેલાં"
    }
  ];

  const marketData = [
    { name: "SENSEX", value: "73,852.94", change: "+524.56", percentage: "+0.72%", isPositive: true },
    { name: "NIFTY", value: "22,438.70", change: "+168.60", percentage: "+0.76%", isPositive: true },
    { name: "BSE MIDCAP", value: "28,756.45", change: "+445.23", percentage: "+1.57%", isPositive: true },
    { name: "BSE SMALLCAP", value: "32,145.89", change: "+622.14", percentage: "+1.97%", isPositive: true }
  ];

  const tickerNews = [
    'બ્રેકિંગ: International Yoga Day 2025 PM મોદીએ વિશાખાપટનમમાં યોગ કર્યા',
    'લાઇવ: ગુજરાત વિધાનસભાનું સત્ર ચાલુ',
    'ફ્લેશ ન્યૂઝ: સોનાના ભાવમાં આજે મોટો ઘટાડો',
    'હવામાન અપડેટ: ગુજરાતમાં આજે ભારે વરસાદની શક્યતા',
    'બિઝનેસ ન્યૂઝ: શેર બજારમાં સતત વૃદ્ધિ જારી'
  ];

  const trendingTopics = [
    "International Yoga Day 2025",
    "Gujarat Assembly Live",
    "Gold Price Today",
    "Gujarat Weather Update",
    "PM Modi Visakhapatnam",
    "Ahmedabad Traffic Jam",
    "Supreme Court Property Law",
    "Gujarat IT Hub Development"
  ];

  // Streaming handlers
  const startStreaming = async () => {
    try {
      setStreamError('');
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { width: 1280, height: 720 }, 
        audio: true 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
        setIsStreaming(true);
      }
    } catch (err) {
      console.error('Error accessing media devices:', err);
      setStreamError('કેમેરા અથવા માઇક્રોફોન ઍક્સેસ કરવામાં સમસ્યા. કૃપા કરીને પરવાનગી આપો.');
    }
  };

  const stopStreaming = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setIsStreaming(false);
    setStreamingPlatforms({
      youtube: false,
      facebook: false,
      twitch: false,
      instagram: false,
      podcast: false
    });
  };

  const connectToPlatform = (platform) => {
    setStreamingPlatforms(prev => ({
      ...prev,
      [platform]: !prev[platform]
    }));
  };

  const generateStreamKey = () => {
    return 'live_' + Math.random().toString(36).substr(2, 9);
  };

  const copyToClipboard = (text) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        alert('કૉપી થયું!');
      }).catch(() => {
        alert('કૉપી કરવામાં સમસ્યા!');
      });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <h2 className="loading-text">સમાચાર લોડ થઈ રહ્યા છે...</h2>
      </div>
    );
  }

  return (
    <div className="news-homepage" style={{marginTop:"70px"}}>
      {/* Advertisement Space */}
      <div className="sidebar-section ad-space">
        <div className="ad-placeholder">
          <p>જાહેરાત સ્થળ</p>
          <span>300 x 250</span>
        </div>
      </div>
      {/* Breaking News Ticker */}
      <div className="breaking-ticker">
        <div className="ticker-label">
          <span className="breaking-text">બ્રેકિંગ</span>
          <span className="live-dot"></span>
        </div>
        <div className="ticker-content">
          <div className="ticker-scroll">
            {tickerNews.join(' • ')}
          </div>
        </div>
      </div>

      {/* Market Updates */}
      <div className="market-ticker">
        <div className="market-container">
          <div className="market-label">📈 બજાર હાલાત</div>
          <div className="market-items">
            {marketData.map((item, index) => (
              <div key={index} className="market-item">
                <span className="market-name">{item.name}</span>
                <span className="market-value">{item.value}</span>
                <span className={`market-change ${item.isPositive ? 'positive' : 'negative'}`}>
                  {item.change} ({item.percentage})
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Live Streaming Section */}
      <section className="live-streaming-section">
        <div className="container">
          <div className="streaming-header">
            <h2 className="section-title">
              <span className="title-icon">📺</span>
              લાઇવ સ્ટ્રીમિંગ
            </h2>
            <div className="streaming-controls">
              {!isStreaming ? (
                <button className="btn btn-primary" onClick={startStreaming}>
                  <span className="btn-icon">🎥</span>
                  સ્ટ્રીમિંગ શરૂ કરો
                </button>
              ) : (
                <>
                  <button className="btn btn-secondary" onClick={() => setShowConnectionModal(true)}>
                    <span className="btn-icon">📡</span>
                    પ્લેટફોર્મ કનેક્ટ કરો
                  </button>
                  <button className="btn btn-danger" onClick={stopStreaming}>
                    <span className="btn-icon">⏹️</span>
                    સ્ટ્રીમિંગ બંધ કરો
                  </button>
                </>
              )}
            </div>
          </div>

          <div className="video-container">
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              className="streaming-video"
            />
            
            {!isStreaming && (
              <div className="video-placeholder">
                <div className="placeholder-icon">📹</div>
                <h3>લાઇવ સ્ટ્રીમિંગ બંધ છે</h3>
                <p>સ્ટ્રીમિંગ શરૂ કરવા માટે ઉપરનું બટન દબાવો</p>
              </div>
            )}

            {isStreaming && (
              <div className="live-indicator">
                <div className="live-dot"></div>
                LIVE
              </div>
            )}
          </div>
          
          {streamingPlatforms.youtube && (
            <div className="youtube-live-embed" style={{ marginTop: '20px' }}>
              <iframe
                width="100%"
                height="500"
                src={`https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="YouTube Live Stream"
              ></iframe>
            </div>
          )}

          {streamError && (
            <div className="stream-error">
              <strong>ભૂલ:</strong> {streamError}
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          <div className="content-grid">
            
            {/* Left Column - News */}
            <div className="main-column">
              <section className="breaking-news-section">
                <h2 className="section-title">
                  <span className="title-icon">🔥</span>
                  તાજા સમાચાર
                </h2>
                <div className="news-grid">
                  {breakingNews.map((news) => (
                    <article key={news.id} className={`news-card ${news.isBreaking ? 'breaking' : ''}`}>
                      <div className="news-image-container">
                        <img src={news.image} alt={news.title} className="news-image" />
                        <div className="news-badges">
                          {news.isBreaking && <span className="breaking-badge">બ્રેકિંગ</span>}
                          <span className="category-badge">{news.category}</span>
                        </div>
                      </div>
                      <div className="news-content">
                        <h3 className="news-title">{news.title}</h3>
                        <p className="news-summary">{news.summary}</p>
                        <div className="news-footer">
                          <span className="news-time">
                            <span className="time-icon">🕐</span>
                            {news.time}
                          </span>
                          <button className="read-more-btn">વધુ વાંચો →</button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* ✅ NEW: Live News Section */}
              <section className="live-news-section">
                <h2 className="section-title">
                  <span className="title-icon">🔴</span>
                  લાઇવ સમાચાર
                </h2>
                <div className="news-grid">
                  {liveNewsData.map((news) => (
                    <article key={news.id} className="news-card live">
                      <div className="news-image-container">
                        <img src={news.image} alt={news.title} className="news-image" />
                        <div className="news-badges">
                          {news.isLive && <span className="breaking-badge live-badge">લાઇવ</span>}
                          <span className="category-badge">{news.category}</span>
                        </div>
                      </div>
                      <div className="news-content">
                        <h3 className="news-title">{news.title}</h3>
                        <p className="news-summary">{news.summary}</p>
                        <div className="news-footer">
                          <span className="news-time">
                            <span className="time-icon">⏱️</span>
                            {news.time}
                          </span>
                          <button className="read-more-btn">વધુ જાણો →</button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Top News List */}
              <section className="top-news-section">
                <h2 className="section-title">
                  <span className="title-icon">📰</span>
                  મુખ્ય સમાચાર
                </h2>
                <div className="news-list">
                  {topNews.map((news) => (
                    <article key={news.id} className="news-item">
                      <div className="news-thumbnail">
                        <img src={news.image} alt={news.title} />
                        <div className="thumbnail-category">{news.category}</div>
                      </div>
                      <div className="news-details">
                        <h3 className="news-headline">{news.title}</h3>
                        <p className="news-excerpt">{news.summary}</p>
                        <div className="news-meta">
                          <span className="publish-time">
                            <span className="time-icon">🕐</span>
                            {news.time}
                          </span>
                          <div className="news-actions">
                            <button className="action-btn share-btn">
                              <span className="btn-icon">📤</span>
                              શેર
                            </button>
                            <button className="action-btn bookmark-btn">
                              <span className="btn-icon">🔖</span>
                              સેવ
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Sidebar */}
            <aside className="sidebar">
              {/* Trending Section */}
              <div className="sidebar-widget">
                <h3 className="widget-title">
                  <span className="title-icon">🔥</span>
                  ટ્રેન્ડિંગ
                </h3>
                <div className="trending-list">
                  {trendingTopics.map((topic, index) => (
                    <div key={index} className="trending-item">
                      <span className="trend-number">{index + 1}</span>
                      <span className="trend-text">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weather Widget */}
              <div className="sidebar-widget weather-widget">
                <h3 className="widget-title">
                  <span className="title-icon">🌤️</span>
                  આજનું હવામાન
                </h3>
                <div className="weather-content">
                  <div className="weather-main">
                    <div className="weather-icon">☀️</div>
                    <div className="weather-info">
                      <div className="temperature">32°C</div>
                      <div className="weather-desc">સૂર્યપ્રકાશ</div>
                    </div>
                  </div>
                  <div className="weather-details">
                    <div className="weather-item">
                      <span className="weather-label">સ્થાન:</span>
                      <span className="weather-value">અમદાવાદ</span>
                    </div>
                    <div className="weather-item">
                      <span className="weather-label">ભેજ:</span>
                      <span className="weather-value">65%</span>
                    </div>
                    <div className="weather-item">
                      <span className="weather-label">પવન:</span>
                      <span className="weather-value">12 km/h</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="sidebar-widget">
                <h3 className="widget-title">
                  <span className="title-icon">🔗</span>
                  ઝડપી લિંક્સ
                </h3>
                <div className="quick-links">
                  <a href="#" className="quick-link">📺 લાઇવ TV</a>
                  <a href="#" className="quick-link">🎙️ પોડકાસ્ટ</a>
                  <a href="#" className="quick-link">📱 મોબાઇલ એપ</a>
                  <a href="#" className="quick-link">📧 ન્યૂઝલેટર</a>
                  <a href="#" className="quick-link">🌐 આર્કાઇવ</a>
                </div>
              </div>

              {/* Social Media */}
              <div className="sidebar-widget">
                <h3 className="widget-title">
                  <span className="title-icon">📱</span>
                  અમને ફોલો કરો
                </h3>
                <div className="social-links">
                  <a href='https://www.facebook.com/avtvindianews?rdid=cJE0hobfELOFqXw3&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18inQm9iXa%2F#' className="social-link facebook">
                    <span className="social-icon">📘</span>
                    Facebook
                  </a>
                  <a href='https://x.com/avtvindianews' className="social-link twitter">
                    <span className="social-icon">🐦</span>
                    Twitter
                  </a>
                  <a href='https://www.youtube.com/@AVTVINDIANEWS' className="social-link youtube">
                    <span className="social-icon">📺</span>
                    YouTube
                  </a>
                  <a href='https://www.instagram.com/avtvindianews/#' className="social-link instagram">
                    <span className="social-icon">📷</span>
                    Instagram
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Platform Connection Modal */}
      {showConnectionModal && (
        <div className="modal-overlay" onClick={() => setShowConnectionModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>📡 સ્ટ્રીમિંગ પ્લેટફોર્મ કનેક્ટ કરો</h3>
              <button className="modal-close" onClick={() => setShowConnectionModal(false)}>×</button>
            </div>
            
            <div className="modal-content">
              <div className="platform-connections">
                {Object.entries({ 
                  youtube: { name: 'YouTube Live', icon: '📺', color: '#FF0000' },
                  facebook: { name: 'Facebook Live', icon: '📘', color: '#1877F2' },
                  twitch: { name: 'Twitch', icon: '💜', color: '#9146FF' },
                  instagram: { name: 'Instagram Live', icon: '📷', color: '#E1306C' },
                  podcast: { name: 'Podcast Platform', icon: '🎙️', color: '#FF6B35' }
                }).map(([platform, info]) => (
                  <div key={platform} className="platform-connection">
                    <div className="platform-info">
                      <span className="platform-icon" style={{color: info.color}}>{info.icon}</span>
                      <div className="platform-details">
                        <h4>{info.name}</h4>
                        <p>{info.name} પર લાઇવ સ્ટ્રીમિંગ કરો</p>
                      </div>
                    </div>
                    <button 
                      className={`connect-btn ${streamingPlatforms[platform] ? 'connected' : ''}`}
                      onClick={() => connectToPlatform(platform)}
                    >
                      {streamingPlatforms[platform] ? '✓ કનેક્ટેડ' : 'કનેક્ટ કરો'}
                    </button>
                    
                    {streamingPlatforms[platform] && (
                      <div className="stream-details">
                        <div className="stream-key">
                          <label>Stream Key:</label>
                          <input type="text" value={generateStreamKey()} readOnly />
                          <button onClick={() => copyToClipboard(generateStreamKey())}>કૉપી</button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>               
          </div>
        </div>
      )}
    </div>
  );
};
export default Home;
