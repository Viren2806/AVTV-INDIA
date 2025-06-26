import React, { useState, useEffect } from 'react';
import '../css/TermsAndConditions.css';

const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
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

  const tableOfContents = [
    { id: 'intro', title: 'પરિચય', icon: '📖' },
    { id: 'acceptance', title: 'નિયમોની સ્વીકૃતિ', icon: '✅' },
    { id: 'services', title: 'સેવાઓનો ઉપયોગ', icon: '🌐' },
    { id: 'content', title: 'સામગ્રી અને બૌદ્ધિક સંપત્તિ', icon: '©️' },
    { id: 'user-conduct', title: 'વપરાશકર્તાનું વર્તન', icon: '👤' },
    { id: 'privacy', title: 'ગોપનીયતા નીતિ', icon: '🔒' },
    { id: 'disclaimer', title: 'અસ્વીકરણ', icon: '⚠️' },
    { id: 'contact', title: 'સંપર્ક', icon: '📞' }
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

  return (
    <div className={`tc-terms-container ${isVisible ? 'fade-in' : ''}`}>

      {/* Progress Bar */}
      <div className="tc-scroll-progress">
        <div 
          className="tc-progress-fill" 
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Header */}
      <header className="tc-terms-header">
        <div className="tc-header-bg"></div>
        <div className="tc-container">
          <div className="tc-header-content">
            <div className="tc-header-icon">⚖️</div>
            <h1 className="tc-main-title">નિયમો અને શરતો</h1>
            <p className="tc-header-subtitle">કૃપા કરીને આ નિયમો અને શરતોને ધ્યાનથી વાંચો</p>
            <div className="tc-last-updated">
              <span className="tc-update-icon">🔄</span>
              છેલ્લે અપડેટ: જૂન 13, 2025
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="tc-main-content" style={{background:'whitesmoke'}}>
        {/* Table of Contents */}
        <nav className="tc-toc">
          <h2 className="tc-toc-title">વિષયસૂચિ</h2>
          <ul className="tc-toc-list">
            {tableOfContents.map((item) => (
              <li key={item.id} className="tc-toc-item">
                <div
                  className={`tc-toc-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(item.id)}
                >
                  <span className="tc-toc-icon">{item.icon}</span>
                  {item.title}
                </div>
              </li>
            ))}
          </ul>
        </nav>

        {/* Content */}
        <main className="tc-content">
          <section id="intro" className="tc-section">
            <h2 className="tc-section-title">
              <span className="tc-section-icon">📖</span>
              પરિચય
            </h2>
            <p className="tc-section-text">
              અમારી વેબસાઇટ અને સેવાઓમાં તમારું સ્વાગત છે. આ <span className="tc-highlight">નિયમો અને શરતો</span> અમારી વેબસાઇટના ઉપયોગ અને અમારી સેવાઓના સંબંધમાં તમારા અને અમારા વચ્ચેના કાનૂની કરારને દર્શાવે છે.
            </p>
            <p className="tc-section-text">
              અમારી સેવાઓનો ઉપયોગ કરીને, તમે આ નિયમો અને શરતો સાથે સંમત થવાની પુષ્ટિ કરો છો. જો તમે આ નિયમો સાથે સંમત નથી, તો કૃપા કરીને અમારી સેવાઓનો ઉપયોગ ન કરો.
            </p>
          </section>

          <section id="acceptance" className="tc-section">
            <h2 className="tc-section-title">
              <span className="tc-section-icon">✅</span>
              નિયમોની સ્વીકૃતિ
            </h2>
            <p className="tc-section-text">
              અમારી વેબસાઇટ અથવા સેવાઓનો ઉપયોગ કરીને, તમે નીચેનાં બાબતોને સ્વીકારો છો:
            </p>
            <ul className="tc-list">
              <li>તમે આ નિયમો અને શરતો સાથે સંપૂર્ણ રીતે સંમત છો</li>
              <li>તમે કાનૂની રીતે આ કરાર કરવા માટે સક્ષમ છો</li>
              <li>તમે અમારી ગોપનીયતા નીતિ સાથે પણ સંમત છો</li>
              <li>તમે અમારી સેવાઓનો યોગ્ય ઉપયોગ કરશો</li>
            </ul>
            <div className="tc-important-note">
              <strong>મહત્વપૂર્ણ સૂચના:</strong> આ નિયમો સમયાંતરે બદલાઈ શકે છે. નવા નિયમો લાગુ થયા પછી સેવાઓનો સતત ઉપયોગ તમારી સ્વીકૃતિ દર્શાવે છે.
            </div>
          </section>

          <section id="services" className="tc-section">
            <h2 className="tc-section-title">
              <span className="tc-section-icon">🌐</span>
              સેવાઓનો ઉપયોગ
            </h2>
            <p className="tc-section-text">
              અમારી સેવાઓનો ઉપયોગ કરતી વખતે તમારે નીચેની બાબતોનું પાલન કરવું આવશ્યક છે:
            </p>
            <ul className="tc-list">
              <li>સેવાઓનો ઉપયોગ માત્ર કાનૂની હેતુઓ માટે કરો</li>
              <li>અન્ય વપરાશકર્તાઓના અધિકારોનો આદર કરો</li>
              <li>કોઈપણ પ્રકારની હાનિકારક અથવા ગેરકાનૂની પ્રવૃત્તિમાં સંલગ્ન ન થાઓ</li>
              <li>સિસ્ટમની સુરક્ષા અને કાર્યક્ષમતામાં દખલ ન કરો</li>
            </ul>
            <p className="tc-section-text">
              અમે કોઈપણ સમયે અમારી <span className="tc-highlight">સેવાઓને સુધારવા, બદલવા અથવા બંધ કરવાનો</span> અધિકાર રાખીએ છીએ.
            </p>
          </section>

          <section id="content" className="tc-section">
            <h2 className="tc-section-title">
              <span className="tc-section-icon">©️</span>
              સામગ્રી અને બૌદ્ધિક સંપત્તિ
            </h2>
            <p className="tc-section-text">
              અમારી વેબસાઇટ પર ઉપલબ્ધ તમામ સામગ્રી, જેમાં ટેક્સ્ટ, છબીઓ, લોગો, અને અન્ય મીડિયા શામેલ છે, તે અમારી અથવા અમારા લાઇસન્સરોની બૌદ્ધિક સંપત્તિ છે.
            </p>
            <ul className="tc-list">
              <li>કોપીરાઇટ અને ટ્રેડમાર્ક કાયદાઓ દ્વારા સુરક્ષિત</li>
              <li>લેખિત પરવાનગી વિના પુનઃઉત્પાદન પ્રતિબંધિત</li>
              <li>વાણિજ્યિક ઉપયોગ માટે અલગ પરવાનગી આવશ્યક</li>
              <li>ફેર યૂઝ કાયદા હેઠળ મર્યાદિત ઉપયોગ માન્ય</li>
            </ul>
          </section>

          <section id="user-conduct" className="tc-section">
            <h2 className="tc-section-title">
              <span className="tc-section-icon">👤</span>
              વપરાશકર્તાનું વર્તન
            </h2>
            <p className="tc-section-text">
              અમારા પ્લેટફોર્મનો ઉપયોગ કરતી વખતે તમારે યોગ્ય વર્તન જાળવવું આવશ્યક છે:
            </p>
            <ul className="tc-list">
              <li>અન્ય વપરાશકર્તાઓ સાથે સભ્ય અને આદરપૂર્ણ વર્તન</li>
              <li>અપમાનજનક, હિંસક અથવા ભેદભાવપૂર્ણ સામગ્રી પોસ્ટ ન કરો</li>
              <li>સ્પામ અથવા અનધિકૃત જાહેરાત ન કરો</li>
              <li>ખોટી માહિતી અથવા ફ્રોડ એ પ્રવૃત્તિમાં સંલગ્ન ન થાઓ</li>
            </ul>
            <div className="tc-important-note">
              <strong>ચેતવણી:</strong> આ નિયમોનું ઉલ્લંઘન કરવાથી તમારું એકાઉન્ટ તાત્કાલિક બંધ થઈ શકે છે.
            </div>
          </section>

          <section id="privacy" className="tc-section">
            <h2 className="tc-section-title">
              <span className="tc-section-icon">🔒</span>
              ગોપનીયતા નીતિ
            </h2>
            <p className="tc-section-text">
              તમારી ગોપનીયતા અમારા માટે મહત્વપૂર્ણ છે. અમે તમારી વ્યક્તિગત માહિતીની સુરક્ષા માટે પ્રતિબદ્ધ છીએ:
            </p>
            <ul className="tc-list">
              <li>ડેટા એન્ક્રિપ્શન અને સુરક્ષિત સ્ટોરેજ</li>
              <li>તૃતીય પક્ષો સાથે અનધિકૃત શેરિંગ નહીં</li>
              <li>તમારી સ્પષ્ટ સંમતિ વિના માર્કેટિંગ નહીં</li>
              <li>કાનૂની આવશ્યકતાઓ પ્રમાણે ડેટા રીટેન્શન</li>
            </ul>
            <p className="tc-section-text">
              વિગતવાર ગોપનીયતા નીતિ માટે અમારા અલગ ગોપનીયતા પૃષ્ઠની મુલાકાત લો.
            </p>
          </section>

          <section id="disclaimer" className="tc-section">
            <h2 className="tc-section-title">
              <span className="tc-section-icon">⚠️</span>
              અસ્વીકરણ
            </h2>
            <p className="tc-section-text">
              અમારી સેવાઓનો ઉપયોગ તમારા પોતાના જોખમે છે. અમે નીચેનાં બાબતો માટે જવાબદાર નથી:
            </p>
            <ul className="tc-list">
              <li>સેવામાં કોઈપણ વિક્ષેપ અથવા ભૂલો</li>
              <li>ડેટા લોસ અથવા સિસ્ટમ ફેઈલ્યુર</li>
              <li>તૃતીય પક્ષની વેબસાઇટ્સ અથવા સેવાઓ</li>
              <li>વપરાશકર્તાઓ વચ્ચેના વિવાદો</li>
            </ul>
            <div className="tc-important-note">
              <strong>મહત્વપૂર્ણ:</strong> આ સેવાઓ "જેમ છે તેમ" આધારે પ્રદાન કરવામાં આવે છે, કોઈપણ પ્રકારની વોરંટી વિના.
            </div>
          </section>

          <section id="contact" className="tc-section">
            <h2 className="tc-section-title">
              <span className="tc-section-icon">📞</span>
              સંપર્ક
            </h2>
            <p className="tc-section-text">
              આ નિયમો અને શરતો અંગે કોઈ પ્રશ્ન અથવા ચિંતા હોય તો અમારો સંપર્ક કરો:
            </p>
            <div className="tc-contact-info">
              <div className="tc-contact-item" style={{ '--before-content': '"📧"' }}>
                ઇમેઇલ: support@example.com
              </div>
              <div className="tc-contact-item" style={{ '--before-content': '"📞"' }}>
                ફોન: +91 79 1234 5678
              </div>
              <div className="tc-contact-item" style={{ '--before-content': '"📍"' }}>
                સરનામું: અમદાવાદ, ગુજરાત, ભારત
              </div>
            </div>
            <p className="tc-section-text">
              અમે 24-48 કલાકની અંદર તમારા પ્રશ્નોનો જવાબ આપવાનો પ્રયાસ કરીશું.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default TermsAndConditions;