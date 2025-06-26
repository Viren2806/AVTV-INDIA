import React, { useState, useEffect } from 'react';
import { Star, Calendar, Heart, Briefcase, Activity, Sparkles, Moon, Sun } from 'lucide-react';
import '../css/Astrology.css';

const Astrology = () => {
  const [selectedSign, setSelectedSign] = useState('aries');
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setIsVisible(true);
    
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setCurrentDate(today.toLocaleDateString('gu-IN', options));
    
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const zodiacSigns = [
    { id: 'aries', name: 'મેષ', symbol: '♈', dates: 'માર્ચ 21 - એપ્રિલ 19', element: 'અગ્નિ', color: '#FF6B6B' },
    { id: 'taurus', name: 'વૃષભ', symbol: '♉', dates: 'એપ્રિલ 20 - મે 20', element: 'પૃથ્વી', color: '#4ECDC4' },
    { id: 'gemini', name: 'મિથુન', symbol: '♊', dates: 'મે 21 - જૂન 20', element: 'વાયુ', color: '#45B7D1' },
    { id: 'cancer', name: 'કર્ક', symbol: '♋', dates: 'જૂન 21 - જુલાઈ 22', element: 'જળ', color: '#96CEB4' },
    { id: 'leo', name: 'સિંહ', symbol: '♌', dates: 'જુલાઈ 23 - ઓગસ્ટ 22', element: 'અગ્નિ', color: '#FECA57' },
    { id: 'virgo', name: 'કન્યા', symbol: '♍', dates: 'ઓગસ્ટ 23 - સપ્ટેમ્બર 22', element: 'પૃથ્વી', color: '#48CAE4' },
    { id: 'libra', name: 'તુલા', symbol: '♎', dates: 'સપ્ટેમ્બર 23 - ઓક્ટોબર 22', element: 'વાયુ', color: '#F38BA8' },
    { id: 'scorpio', name: 'વૃશ્ચિક', symbol: '♏', dates: 'ઓક્ટોબર 23 - નવેમ્બર 21', element: 'જળ', color: '#A8DADC' },
    { id: 'sagittarius', name: 'ધન', symbol: '♐', dates: 'નવેમ્બર 22 - ડિસેમ્બર 21', element: 'અગ્નિ', color: '#F1C0E8' },
    { id: 'capricorn', name: 'મકર', symbol: '♑', dates: 'ડિસેમ્બર 22 - જાન્યુઆરી 19', element: 'પૃથ્વી', color: '#CFBAF0' },
    { id: 'aquarius', name: 'કુંભ', symbol: '♒', dates: 'જાન્યુઆરી 20 - ફેબ્રુઆરી 18', element: 'વાયુ', color: '#A8E6CF' },
    { id: 'pisces', name: 'મીન', symbol: '♓', dates: 'ફેબ્રુઆરી 19 - માર્ચ 20', element: 'જળ', color: '#FFD3A5' }
  ];

  const horoscopes = {
    aries: {
      daily: "આજનો દિવસ નવી શરૂઆત માટે શુભ છે. તમારું નેતૃત્વ કારકિર્દી ક્ષેત્રે ચમકશે.",
      love: "પ્રેમભર્યા સંયોગો શક્ય છે. સાથી સાથે વિશેષ સમય વિતાવો.",
      career: "તમારું મહેનતી સ્વભાવ આજે ફળ આપશે.",
      health: "ઊર્જા ભરપૂર છે. કસરત અને પાણી પીવાનું ધ્યાન રાખો.",
      lucky: { number: 7, color: "લાલ", stone: "હીરા" }
    },
    taurus: {
      daily: "આજે સ્થિરતા અને આરામનો દિવસ છે. ધીરજ રાખો, સફળતા મળશે.",
      love: "ભાવનાઓ વ્યક્ત કરો અને સંબંધો મજબૂત કરો.",
      career: "તમારું સ્થિર કામગિરી તમારી ઓળખ બનાવશે.",
      health: "સ્વસ્થ આહાર તરફ ધ્યાન આપો.",
      lucky: { number: 2, color: "લીલું", stone: "પનનાખ" }
    },
    gemini: {
      daily: "આજે વાતચીત અને સંદેશાવ્યવહારમાં સફળતા મળશે.",
      love: "નવા મિત્રો બનાવો અને સામાજિક કાર્યક્રમોમાં ભાગ લો.",
      career: "તમારી બુદ્ધિશાળી વિચારણા કામ આવશે.",
      health: "માનસિક તણાવ ટાળો અને આરામ કરો.",
      lucky: { number: 5, color: "પીળું", stone: "પીતમણિ" }
    },
    cancer: {
      daily: "પારિવારિક બાબતોમાં ધ્યાન આપવાનો સમય છે.",
      love: "ઘરની વ્યક્તિ સાથે સમય વિતાવો.",
      career: "સહયોગ દ્વારા કામમાં પ્રગતિ થશે.",
      health: "પાચનક્રિયાનું ધ્યાન રાખો.",
      lucky: { number: 2, color: "ચાંદીવર્ણ", stone: "મોતી" }
    },
    leo: {
      daily: "આજે તમારું વ્યક્તિત્વ ચમકશે અને લોકોનું ધ્યાન આકર્ષશે.",
      love: "રોમાંસ અને મનોરંજનનો સમય છે.",
      career: "નેતૃત્વની ક્ષમતા દર્શાવવાની તક મળશે.",
      health: "હૃદયની તંદુરસ્તીનું ધ્યાન રાખો.",
      lucky: { number: 1, color: "સોનેરી", stone: "માણિક" }
    },
    virgo: {
      daily: "વિગતોમાં ધ્યાન આપો અને કામને વ્યવસ્થિત રીતે કરો.",
      love: "સેવા અને મદદ દ્વારા પ્રેમ વ્યક્ત કરો.",
      career: "કાર્યક્ષેત્રે પરફેક્શન લાવવાનો સમય છે.",
      health: "આહાર અને દિનચર્યાનું ધ્યાન રાખો.",
      lucky: { number: 6, color: "નેવી બ્લુ", stone: "નીલમ" }
    },
    // Add more signs as needed
  };

  const tableOfContents = [
    { id: 'daily-forecast', title: 'દૈનિક રાશિફળ', icon: '🌟' },
    { id: 'love-romance', title: 'પ્રેમ અને રોમાંસ', icon: '💕' },
    { id: 'career-money', title: 'કારકિર્દી અને નાણાં', icon: '💼' },
    { id: 'health-wellness', title: 'આરોગ્ય અને કલ્યાણ', icon: '🏥' },
    { id: 'lucky-elements', title: 'લકી તત્વો', icon: '🍀' },
    { id: 'planetary-positions', title: 'ગ્રહોની સ્થિતિ', icon: '🪐' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  const currentSign = zodiacSigns.find(sign => sign.id === selectedSign);
  const currentHoroscope = horoscopes[selectedSign] || horoscopes.aries;

  return (
    <div className={`new-astrology-container ${isVisible ? 'fade-in' : ''}`}>
      {/* Progress Bar */}
      <div className="scroll-progress">
        <div 
          className="progress-fill" 
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Header */}
      <header className="astrology-header">
        <div className="header-bg">
          <div className="stars-animation">
            {[...Array(50)].map((_, i) => (
              <div key={i} className={`star star-${i % 5}`} style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}>✦</div>
            ))}
          </div>
        </div>
        <div className="container">
          <div className="header-content">
            <div className="header-icon">
              <Sparkles className="main-icon" />
            </div>
            <h1 className="main-title">રોજિંદું રાશિફળ</h1>
            <p className="header-subtitle">તારાઓ શું કહે છે આજે?</p>
            <div className="last-updated">
              <Calendar className="update-icon" />
              {currentDate}
            </div>
          </div>
        </div>
      </header>

      <div className="main-content">
        <div className="container">
          <div className="content-layout">
            {/* Zodiac Signs Sidebar */}
            <aside className="zodiac-sidebar">
              <div className="sidebar-wrapper">
                <h3 className="sidebar-title">
                  <Star className="sidebar-icon" />
                  રાશિઓ
                </h3>
                <nav className="zodiac-nav">
                  {zodiacSigns.map((sign) => (
                    <button
                      key={sign.id}
                      className={`zodiac-item ${selectedSign === sign.id ? 'active' : ''}`}
                      onClick={() => setSelectedSign(sign.id)}
                      style={{ '--sign-color': sign.color }}
                    >
                      <span className="zodiac-symbol">{sign.symbol}</span>
                      <div className="zodiac-info">
                        <span className="zodiac-name">{sign.name}</span>
                        <span className="zodiac-dates">{sign.dates}</span>
                      </div>
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Table of Contents */}
            <aside className="toc-sidebar">
              <div className="toc-wrapper">
                <h3 className="toc-title">
                  <span className="toc-icon">📋</span>
                  અનુક્રમણિકા
                </h3>
                <nav className="toc-nav">
                  {tableOfContents.map((item) => (
                    <button
                      key={item.id}
                      className={`toc-item ${activeSection === item.id ? 'active' : ''}`}
                      onClick={() => scrollToSection(item.id)}
                    >
                      <span className="toc-item-icon">{item.icon}</span>
                      <span className="toc-item-text">{item.title}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <main className="astrology-main">
              {/* Selected Sign Header */}
              <div className="selected-sign-header">
                <div className="sign-display">
                  <div className="large-symbol" style={{ color: currentSign.color }}>
                    {currentSign.symbol}
                  </div>
                  <div className="sign-details">
                    <h2 className="sign-name">{currentSign.name}</h2>
                    <p className="sign-period">{currentSign.dates}</p>
                    <span className="sign-element" style={{ backgroundColor: currentSign.color }}>
                      {currentSign.element} તત્વ
                    </span>
                  </div>
                </div>
              </div>

              <section id="daily-forecast" className="content-section">
                <div className="section-header">
                  <h2 className="section-title">
                    <Sun className="section-icon" />
                    દૈનિક રાશિફળ
                  </h2>
                </div>
                <div className="section-content">
                  <div className="forecast-card main-forecast">
                    <div className="forecast-content">
                      <p className="forecast-text">{currentHoroscope.daily}</p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="love-romance" className="content-section">
                <div className="section-header">
                  <h2 className="section-title">
                    <Heart className="section-icon love-icon" />
                    પ્રેમ અને રોમાંસ
                  </h2>
                </div>
                <div className="section-content">
                  <div className="forecast-card">
                    <p className="forecast-text">{currentHoroscope.love}</p>
                  </div>
                </div>
              </section>

              <section id="career-money" className="content-section">
                <div className="section-header">
                  <h2 className="section-title">
                    <Briefcase className="section-icon career-icon" />
                    કારકિર્દી અને નાણાં
                  </h2>
                </div>
                <div className="section-content">
                  <div className="forecast-card">
                    <p className="forecast-text">{currentHoroscope.career}</p>
                  </div>
                </div>
              </section>

              <section id="health-wellness" className="content-section">
                <div className="section-header">
                  <h2 className="section-title">
                    <Activity className="section-icon health-icon" />
                    આરોગ્ય અને કલ્યાણ
                  </h2>
                </div>
                <div className="section-content">
                  <div className="forecast-card">
                    <p className="forecast-text">{currentHoroscope.health}</p>
                  </div>
                </div>
              </section>

              <section id="lucky-elements" className="content-section">
                <div className="section-header">
                  <h2 className="section-title">
                    <Sparkles className="section-icon lucky-icon" />
                    લકી તત્વો
                  </h2>
                </div>
                <div className="section-content">
                  <div className="lucky-grid">
                    <div className="lucky-card">
                      <div className="lucky-icon">🔢</div>
                      <h4>લકી નંબર</h4>
                      <p className="lucky-value">{currentHoroscope.lucky.number}</p>
                    </div>
                    <div className="lucky-card">
                      <div className="lucky-icon">🎨</div>
                      <h4>લકી કલર</h4>
                      <p className="lucky-value">{currentHoroscope.lucky.color}</p>
                    </div>
                    <div className="lucky-card">
                      <div className="lucky-icon">💎</div>
                      <h4>લકી રતન</h4>
                      <p className="lucky-value">{currentHoroscope.lucky.stone}</p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="planetary-positions" className="content-section">
                <div className="section-header">
                  <h2 className="section-title">
                    <Moon className="section-icon planet-icon" />
                    ગ્રહોની સ્થિતિ
                  </h2>
                </div>
                <div className="section-content">
                  <div className="planet-info">
                    <p>આજે ગ્રહોની સ્થિતિ તમારા રાશિ માટે અનુકૂળ છે. સૂર્ય અને ચંદ્રની સ્થિતિ તમારા માટે શુભ પરિણામો લાવશે.</p>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
      {/* Back to Top Button */}
      <button 
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <Star />
      </button>
    </div>
  );
};

export default Astrology;