import React, { useState, useEffect } from 'react';
import '../css/Footer.css';;

const Footer = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [totalSubscribers, setTotalSubscribers] = useState(145923);
  const [onlineUsers, setOnlineUsers] = useState(2847);

  useEffect(() => { 
    const timeInterval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    const subscriberInterval = setInterval(() => {
      setTotalSubscribers(prev => prev + Math.floor(Math.random() * 5));
    }, 8000);

    const userInterval = setInterval(() => {
      setOnlineUsers(prev => {
        const change = Math.floor(Math.random() * 21) - 10; // -10 to +10
        return Math.max(1000, prev + change);
      });
    }, 3000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(subscriberInterval);
      clearInterval(userInterval);
    };
  }, []);

  const navigationLinks = [
    { title: 'મુખ્ય સમાચાર', url: '/news', icon: '🏠' },
    { title: 'રાજકારણ', url: '#', icon: '🏛️' },
    { title: 'રમત-ગમત', url: '/sports', icon: '⚽' },
    { title: 'મનોરંજન', url: '/manoranjan', icon: '🎬' },
    { title: 'વ્યાપાર', url: '/business', icon: '💼' },
    { title: 'ટેકનોલોજી', url: '/technology', icon: '💻' },
    { title: 'આરોગ્ય', url: '/health', icon: '🏥' },
    { title: 'રાશિફળ', url: '/astrology', icon: '🔯' }
  ];

  const socialPlatforms = [  
   { platform: 'Facebook', emoji: '📘', url: 'https://www.facebook.com/avtvindianews?rdid=cJE0hobfELOFqXw3&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18inQm9iXa%2F#', accent: '#1877F2', followers: '2.5M' },
    { platform: 'Twitter', emoji: '🐦', url: 'https://x.com/avtvindianews', accent: '#1DA1F2', followers: '1.8M' },
    { platform: 'Instagram', emoji: '📸', url: 'https://www.instagram.com/avtvindianews/#', accent: '#E4405F', followers: '3.2M' },
    { platform: 'YouTube', emoji: '📺', url: 'https://www.youtube.com/@AVTVINDIANEWS', accent: '#FF0000', followers: '4.1M' },
    { platform: 'WhatsApp', emoji: '💬', url: 'https://chat.whatsapp.com/KY43qJ0RIFZ168mLxna6hE', accent: '#25D366', followers: 'Join' },
    // { platform: 'Telegram', emoji: '✈️', url: '#', accent: '#0088CC', followers: '850K' },
    // { platform: 'LinkedIn', emoji: '💼', url: '#', accent: '#0077B5', followers: '650K' },
    // { platform: 'TikTok', emoji: '🎵', url: '#', accent: '#FF0050', followers: '5.7M' }
  ];

  const topicTags = [
    'સમાચાર', 'ભારતીય રાજકારણ', 'આંતરરાષ્ટ્રીય',
    'આર્થિક સમાચાર', 'તકનીકી અપડેટ', 'સાંસ્કૃતિક સમાચાર',
    'ખેલકૂદ અપડેટ', 'મનોરંજન જગત', 'આરોગ્ય',
    'શિક્ષણ ક્ષેત્ર', 'કૃષિ સેક્ટર', 'સ્ટાર્ટઅપ ન્યૂઝ'
  ];

  const serviceFeatures = [
    { feature: 'લાઇવ ન્યૂઝ', desc: '24/7 અપડેટ', icon: '🔴' },
    { feature: 'ફાસ્ટ અલર્ટ', desc: 'તાત્કાલિક સૂચના', icon: '⚡' },
    { feature: 'વિશ્વસનીય', desc: 'સચોટ માહિતી', icon: '✅' },
    { feature: 'મલ્ટીમીડિયા', desc: 'વિડિયો અને ફોટો', icon: '📹' }
  ];

  const formatCurrentTime = (date) => {
    return date.toLocaleTimeString('gu-IN', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  const formatCurrentDate = (date) => {
    return date.toLocaleDateString('gu-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <footer className="ultimate-footer-wrapper">
      {/* Dynamic Stats Header */}
      <div className="live-stats-header">
        <div className="stats-container">
          <div className="stats-grid">
            <div className="live-stat-card">
              <span className="stat-indicator">🔴</span>
              <div className="stat-details">
                <span className="stat-number">LIVE</span>
                <span className="stat-desc">પ્રસારણ</span>
              </div>
            </div>
            <div className="live-stat-card">
              <span className="stat-indicator">👥</span>
              <div className="stat-details">
                <span className="stat-number">{totalSubscribers.toLocaleString()}</span>
                <span className="stat-desc">કુલ સબ્સ્ક્રાઇબર્સ</span>
              </div>
            </div>
            <div className="live-stat-card">
              <span className="stat-indicator">🌐</span>
              <div className="stat-details">
                <span className="stat-number">{onlineUsers.toLocaleString()}</span>
                <span className="stat-desc">ઓનલાઇન</span>
              </div>
            </div>
            <div className="live-stat-card">
              <span className="stat-indicator">⏰</span>
              <div className="stat-details">
                <span className="stat-number">{formatCurrentTime(currentDateTime)}</span>
                <span className="stat-desc">સમય</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="primary-footer-content">
        <div className="footer-content-container">
          <div className="footer-layout-grid">
            
            {/* Brand Information Section */}
            <div className="brand-info-section">
              <div className="company-branding">
                <div className="brand-logo-container">
                  <div className="animated-logo-circle">
                    <span className="logo-symbol">સમાચાર</span>
                  </div>
                </div>
                <h2 className="company-title">AVTV INDIA</h2>
                <p className="company-description">
                  ગુજરાતનું સૌથી આધુનિક અને વિશ્વસનીય ડિજિટલ ન્યૂઝ પ્લેટફોર્મ. 
                  અમે તમને 24/7 સચોટ, તાજા અને વિશ્વસનીય સમાચાર પહોંચાડવા માટે પ્રતિબદ્ધ છીએ.
                </p>
                <div className="service-highlights">
                  {serviceFeatures.map((service, idx) => (
                    <div key={idx} className="service-highlight-item">
                      <span className="service-icon">{service.icon}</span>
                      <div className="service-info">
                        <span className="service-title">{service.feature}</span>
                        <span className="service-desc">{service.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Links Section */}
            <div className="navigation-section">
              <div className="section-wrapper">
                <h3 className="section-heading">મુખ્ય વિભાગો</h3>
                <ul className="nav-links-list">
                  {navigationLinks.map((link, idx) => (
                    <li key={idx} className="nav-link-item">
                      <a href={link.url} className="nav-link-anchor">
                        <span className="nav-link-icon">{link.icon}</span>
                        <span className="nav-link-text">{link.title}</span>
                        <span className="nav-hover-arrow">→</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Topics Section */}
            <div className="topics-section">
              <div className="section-wrapper">
                <h3 className="section-heading">લોકપ્રિય વિષયો</h3>
                <div className="topic-tags-container">
                  {topicTags.map((tag, idx) => (
                    <button key={idx} className="topic-tag-button">
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Newsletter & Contact Section */}
            <div className="newsletter-contact-section">
              <div className="section-wrapper">
                <h3 className="section-heading">ન્યૂઝલેટર અને સંપર્ક</h3>
                <p className="newsletter-description">
                  દરરોજ સવારે 7 વાગે તાજા સમાચારોનો સારાંશ તમારા ઇનબોક્સમાં મેળવો
                </p>
                <div className="subscription-form">
                  <div className="email-input-group">
                    <input 
                      type="email" 
                      placeholder="તમારું ઇમેઇલ એડ્રેસ દાખલ કરો"
                      className="email-input-field"
                    />
                    <button className="subscribe-button">
                      <span className="btn-text">સબ્સ્ક્રાઇબ કરો</span>
                      <span className="btn-icon">→</span>
                    </button>
                  </div>
                </div>
                
                <div className="contact-details">
                  <div className="contact-detail-item">
                    <span className="contact-detail-icon">📧</span>
                    <span className="contact-detail-text">info@avtvnews.com</span>
                  </div>
                  <div className="contact-detail-item">
                    <span className="contact-detail-icon">📱</span>
                    <span className="contact-detail-text">+91 79 2345 6789</span>
                  </div>
                  <div className="contact-detail-item">
                    <span className="contact-detail-icon">📍</span>
                    <span className="contact-detail-text">ગાંધીનગર, ગુજરાત, ભારત</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="social-media-section">
        <div className="social-content-container">
          <div className="social-header">
            <h3 className="social-heading">અમારી સાથે જોડાવો અને અપડેટ રહો</h3>
            <p className="social-subheading">સોશિયલ મીડિયા પર અમને ફોલો કરો</p>
          </div>
          <div className="social-platforms-grid">
            {socialPlatforms.map((social, idx) => (
              <a 
                key={idx}
                href={social.url}
                className="social-platform-card"
                style={{'--platform-color': social.accent}}
                title={`${social.platform} પર ફોલો કરો`}
              >
                <div className="platform-icon-wrapper">
                  <span className="platform-emoji">{social.emoji}</span>
                </div>
                <div className="platform-details">
                  <span className="platform-name">{social.platform}</span>
                  <span className="platform-followers">{social.followers}</span>
                </div>
                <div className="platform-hover-effect"></div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom-section">
        <div className="bottom-content-container">
          <div className="bottom-layout">
            <div className="copyright-info">
              <p className="copyright-text">
                © 2025 AVTV INDIA | લોકો માટે • લોકો દ્વારા • લોકો સાથે | 
                <span className="current-date">{formatCurrentDate(currentDateTime)}</span>
              </p>
            </div>
            <div className="legal-navigation">
              <a href="/termsandconditions" className="legal-nav-link">ગોપનીયતા નીતિ</a>
              <span className="nav-divider">•</span>
              <a href="/termsandconditions" className="legal-nav-link">નિયમો અને શરતો</a>
              <span className="nav-divider">•</span>
              <a href="/termsandconditions" className="legal-nav-link">અમારો સંપર્ક</a>
              <span className="nav-divider">•</span>
              <a href="#" className="legal-nav-link">જાહેરાત નીતિ</a>
              <span className="nav-divider">•</span>
              <a href="#" className="legal-nav-link">RSS ફીડ</a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Background Animation */}
      <div className="background-animation-layer">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
        <div className="floating-shape shape-5"></div>
      </div>
    </footer>
  );
};

export default Footer;