import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Sports = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentTab, setCurrentTab] = useState('breaking');
  const [highlightedNews, setHighlightedNews] = useState(0);

  // Sports news data in Gujarati
  const featuredSportsNews = [
    {
      id: 1,
      title: "ભારતીય ક્રિકેટ ટીમની શાનદાર જીત, વિશ્વ કપમાં ફાઇનલ માટે ક્વોલિફાય",
      summary: "મુંબઈ: ભારતીય ક્રિકેટ ટીમે સેમિ-ફાઇનલમાં શાનદાર પ્રદર્શન કરીને વિશ્વ કપના ફાઇનલમાં પ્રવેશ મેળવ્યો છે. કેપ્ટન વિરાટ કોહલીએ બ્રિલિયન્ટ સેન્ચુરી બનાવી...",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&h=450&fit=crop",
      category: "ક્રિકેટ",
      time: "30 મિનિટ પહેલાં",
      readTime: "3 મિનિટ વાંચન"
    },
    {
      id: 2,
      title: "ઓલિમ્પિક્સ માટે ભારતીય એથ્લેટ્સની તૈયારી, 25 મેડલ્સનું લક્ષ્ય",
      summary: "દિલ્હી: આગામી પેરિસ ઓલિમ્પિક્સ માટે ભારતીય એથ્લેટ્સ સખત તાલીમ લઈ રહ્યા છે. સરકારે રેકોર્ડ ₹500 કરોડનું બજેટ ફાળવ્યું છે...",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=450&fit=crop",
      category: "ઓલિમ્પિક્સ",
      time: "1 કલાક પહેલાં",
      readTime: "4 મિનિટ વાંચન"
    },
    {
      id: 3,
      title: "IPL 2025: નવી ટીમોની નીલામી, ગુજરાત ટાઇટન્સની રેકોર્ડ બિડિંગ",
      summary: "અમદાવાદ: IPL 2025ની મેગા ઓક્શનમાં ગુજરાત ટાઇટન્સે ઘણા સ્ટાર પ્લેયર્સ ખરીદ્યા છે. ટીમે ₹200 કરોડનું બજેટ ખર્ચ્યું છે...",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&h=450&fit=crop",
      category: "IPL",
      time: "2 કલાક પહેલાં",
      readTime: "5 મિનિટ વાંચન"
    }
  ];

  const breakingSportsNews = [
    {
      id: 4,
      title: "ફૂટબોલ વર્લ્ડ કપમાં ભારતની ઐતિહાસિક જીત",
      summary: "ભારતીય ફૂટબોલ ટીમે વર્લ્ડ કપમાં પ્રથમ વખત ક્વાર્ટર ફાઇનલમાં પ્રવેશ કર્યો છે...",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=250&fit=crop",
      category: "ફૂટબોલ",
      time: "45 મિનિટ પહેલાં"
    },
    {
      id: 5,
      title: "બેડમિન્ટનમાં ભારતીય ખેલાડીનું વર્લ્ડ નંબર 1 રેન્કિંગ",
      summary: "PV સિંધુએ BWF વર્લ્ડ રેન્કિંગમાં ટોપ પોઝિશન હાંસલ કરી છે...",
      image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=400&h=250&fit=crop",
      category: "બેડમિન્ટન",
      time: "1.5 કલાક પહેલાં"
    },
    {
      id: 6,
      title: "ટેનિસ મેચમાં ભારતીય જોડીની ઐતિહાસિક જીત",
      summary: "વિમ્બલ્ડનમાં ભારતીય ટેનિસ પ્લેયર્સે ફાઇનલમાં સ્થાન મેળવ્યું છે...",
      image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400&h=250&fit=crop",
      category: "ટેનિસ",
      time: "3 કલાક પહેલાં"
    }
  ];

  const trendingSportsTopics = [
    { name: "IPL 2025", icon: "🤼", count: 567, trend: "up", link: "https://www.iplt20.com/matches/fixtures" },
    { name: "વિશ્વ કપ ક્રિકેટ", count: 432, trend: "up", link: "https://www.icc-cricket.com/tournaments/world-test-championship" },
    { name: "ઓલિમ્પિક્સ તૈયારી", count: 298, trend: "up", link: "https://www.olympics.com/en/olympic-games/los-angeles-2028" },
    { name: "ફૂટબોલ લીગ", count: 256, trend: "down", link: "https://www.bbc.com/sport/football" },
    { name: "કબડ્ડી પ્રો લીગ", count: 189, trend: "up", link: "https://kabaddiworldcup2025.com/" }
  ];

  const sportsCategories = [
    { 
      name: "ક્રિકેટ", 
      icon: "🏏", 
      articles: 156, 
      color: "#ff6b6b",
      link: "https://www.cricbuzz.com/cricket-match/live-scores"
    },
    { 
      name: "ફૂટબોલ", 
      icon: "⚽", 
      articles: 89, 
      color: "#4ecdc4",
      link: "https://www.espn.in/football/scoreboard"
    },
    { 
      name: "બેડમિન્ટન", 
      icon: "🏸", 
      articles: 67, 
      color: "#45b7d1",
      link: "https://www.flashscore.in/badminton/"
    },
    { 
      name: "ટેનિસ", 
      icon: "🎾", 
      articles: 54, 
      color: "#96ceb4",
      link: "https://www.flashscore.in/tennis/"
    },
    { 
      name: "હોકી", 
      icon: "🏑", 
      articles: 43, 
      color: "#feca57",
      link: "https://hockeyindia.org/"
    },
    { 
      name: "કબડ્ડી", 
      icon: "🤼", 
      articles: 38, 
      color: "#ff9ff3",
      link: "https://www.flashscore.in/kabaddi/"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedNews((prev) => (prev + 1) % featuredSportsNews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f8f9fa',
        fontFamily: 'Arial, sans-serif'
      }}>
        <div style={{
          width: '60px',
          height: '60px',
          border: '4px solid #e3f2fd',
          borderTop: '4px solid #2196f3',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          marginBottom: '20px'
        }}></div>
        <h2 style={{ color: '#333', marginBottom: '10px' }}>રમતગમતના સમાચાર લોડ થઈ રહ્યા છે...</h2>
        <p style={{ color: '#666' }}>લેટેસ્ટ સ્પોર્ટ્સ અપડેટ્સ તૈયાર કરી રહ્યા છીએ...</p>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    }}>
      {/* Hero Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '80px 0',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{
            display: 'inline-block',
            backgroundColor: 'rgba(255,255,255,0.2)',
            padding: '10px 20px',
            borderRadius: '25px',
            marginBottom: '20px',
            marginTop: '60px'
          }}>
            <span style={{ fontSize: '24px', marginRight: '10px' }}>🏆</span>
            રમતગમત સમાચાર
          </div>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '20px',
            lineHeight: '1.2'
          }}>
            રમતગમતની દુનિયામાં આપનું સ્વાગત
          </h1>
          <p style={{
            fontSize: '1.2rem',
            opacity: '0.9',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            ક્રિકેટથી ફૂટબોલ સુધી, લેટેસ્ટ સ્કોર્સ, મેચ અપડેટ્સ અને સ્પોર્ટ્સ ન્યૂઝ
          </p>
        </div>
      </section>

      {/* Featured Sports Carousel */}
      <section style={{ padding: '60px 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ position: 'relative', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
            {featuredSportsNews.map((article, index) => (
              <div 
                key={article.id}
                style={{
                  display: index === highlightedNews ? 'block' : 'none',
                  position: 'relative',
                  height: '500px'
                }}
              >
                <div style={{
                  position: 'relative',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${article.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}></div>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(45deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 100%)'
                  }}></div>
                  <div style={{
                    position: 'relative',
                    zIndex: 2,
                    color: 'white',
                    padding: '0 60px',
                    maxWidth: '50%'
                  }}>
                    <div style={{ marginBottom: '20px' }}>
                      <span style={{
                        backgroundColor: article.category === 'ક્રિકેટ' ? '#ff6b6b' : '#4ecdc4',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        marginRight: '15px'
                      }}>
                        {article.category}
                      </span>
                      <span style={{ opacity: '0.8' }}>{article.readTime}</span>
                    </div>
                    <h2 style={{
                      fontSize: '2.5rem',
                      fontWeight: 'bold',
                      marginBottom: '20px',
                      lineHeight: '1.2'
                    }}>
                      {article.title}
                    </h2>
                    <p style={{
                      fontSize: '1.1rem',
                      lineHeight: '1.6',
                      marginBottom: '30px',
                      opacity: '0.9'
                    }}>
                      {article.summary}
                    </p>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}>
                      <span style={{ opacity: '0.8' }}>{article.time}</span>
                      <button style={{
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        border: 'none',
                        color: 'white',
                        padding: '12px 24px',
                        borderRadius: '25px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        transition: 'all 0.3s ease'
                      }}>
                        વધુ વાંચો →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            <div style={{
              position: 'absolute',
              bottom: '30px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '10px'
            }}>
              {featuredSportsNews.map((_, index) => (
                <button
                  key={index}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    border: 'none',
                    backgroundColor: index === highlightedNews ? 'white' : 'rgba(255,255,255,0.5)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => setHighlightedNews(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Sports Content */}
      <section style={{ padding: '60px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px' }}>
            <div>
              {/* Tab Navigation */}
              <div style={{
                display: 'flex',
                marginBottom: '30px',
                borderBottom: '2px solid #eee'
              }}>
                {['breaking', 'matches', 'scores'].map((tab) => (
                  <button 
                    key={tab}
                    style={{
                      padding: '15px 30px',
                      border: 'none',
                      background: 'none',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      borderBottom: currentTab === tab ? '3px solid #667eea' : '3px solid transparent',
                      color: currentTab === tab ? '#667eea' : '#666',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => setCurrentTab(tab)}
                  >
                    {tab === 'breaking' && 'બ્રેકિંગ ન્યૂઝ'}
                    {tab === 'matches' && 'લાઇવ મેચ'}
                    {tab === 'scores' && 'સ્કોર્સ'}
                  </button>
                ))}
              </div>

              {/* Sports News Cards Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '30px'
              }}>
                {breakingSportsNews.map((news) => (
                  <article key={news.id} style={{
                    backgroundColor: 'white',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                  }}>
                    <div style={{ position: 'relative' }}>
                      <img 
                        src={news.image} 
                        alt={news.title}
                        style={{
                          width: '100%',
                          height: '200px',
                          objectFit: 'cover'
                        }}
                      />
                      <div style={{
                        position: 'absolute',
                        top: '15px',
                        left: '15px',
                        backgroundColor: news.category === 'ફૂટબોલ' ? '#4ecdc4' : '#45b7d1',
                        color: 'white',
                        padding: '5px 12px',
                        borderRadius: '15px',
                        fontSize: '12px',
                        fontWeight: 'bold'
                      }}>
                        {news.category}
                      </div>
                    </div>
                    <div style={{ padding: '25px' }}>
                      <h3 style={{
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        marginBottom: '15px',
                        lineHeight: '1.4',
                        color: '#333'
                      }}>
                        {news.title}
                      </h3>
                      <p style={{
                        color: '#666',
                        lineHeight: '1.6',
                        marginBottom: '20px'
                      }}>
                        {news.summary}
                      </p>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}>
                        <span style={{
                          color: '#999',
                          fontSize: '14px'
                        }}>
                          {news.time}
                        </span>
                        <div style={{ display: 'flex', gap: '10px' }}>
                          <button style={{
                            backgroundColor: '#f0f0f0',
                            border: 'none',
                            padding: '8px 16px',
                            borderRadius: '20px',
                            fontSize: '12px',
                            cursor: 'pointer',
                            color: '#666'
                          }}>
                            શેર કરો
                          </button>
                          <button style={{
                            backgroundColor: '#f0f0f0',
                            border: 'none',
                            padding: '8px 10px',
                            borderRadius: '20px',
                            fontSize: '12px',
                            cursor: 'pointer'
                          }}>
                            💾
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sports Sidebar */}
            <div>
              {/* Trending Sports Topics */}
              <div style={{
                backgroundColor: 'white',
                borderRadius: '15px',
                padding: '25px',
                marginBottom: '30px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  marginBottom: '20px',
                  color: '#333'
                }}>
                  ટ્રેન્ડિંગ સ્પોર્ટ્સ
                </h3>
                <div>
                  {trendingSportsTopics.map((topic, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '15px 0',
                      borderBottom: index < trendingSportsTopics.length - 1 ? '1px solid #eee' : 'none',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#f8f9fa';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                    onClick={() => {
                      if (topic.link.startsWith('http')) {
                        handleExternalLink(topic.link);
                      } else {
                        // Handle internal routing here
                        console.log('Navigate to:', topic.link);
                      }
                    }}>
                      <div>
                        <div style={{
                          fontWeight: 'bold',
                          color: '#333',
                          marginBottom: '5px'
                        }}>
                          {topic.name}
                        </div>
                        <div style={{
                          fontSize: '12px',
                          color: '#666'
                        }}>
                          {topic.count} સમાચાર
                        </div>
                      </div>
                      <span style={{ fontSize: '20px' }}>
                        {topic.trend === 'up' ? '🔥' : '📊'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sports Categories */}
              <div style={{
                backgroundColor: 'white',
                borderRadius: '15px',
                padding: '25px',
                marginBottom: '30px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  marginBottom: '20px',
                  color: '#333'
                }}>
                  સ્પોર્ટ્સ કેટેગરી
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '15px'
                }}>
                  {sportsCategories.map((category, index) => (
                    <Link
                      key={index}
                      to={category.link}
                      style={{
                        textDecoration: 'none',
                        color: 'inherit'
                      }}
                    >
                      <div style={{
                        padding: '20px',
                        borderRadius: '12px',
                        backgroundColor: category.color + '20',
                        border: `2px solid ${category.color}40`,
                        textAlign: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.backgroundColor = category.color + '30';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.backgroundColor = category.color + '20';
                      }}>
                        <div style={{
                          fontSize: '2rem',
                          marginBottom: '10px'
                        }}>
                          {category.icon}
                        </div>
                        <div style={{
                          fontWeight: 'bold',
                          color: '#333',
                          marginBottom: '5px'
                        }}>
                          {category.name}
                        </div>
                        <div style={{
                          fontSize: '12px',
                          color: '#666'
                        }}>
                          {category.articles} સમાચાર
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Live Sports Stats */}
              <div style={{
                backgroundColor: 'white',
                borderRadius: '15px',
                padding: '25px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  marginBottom: '20px',
                  color: '#333'
                }}>
                  આજના આંકડા
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '15px'
                }}>
                  {[
                    { figure: '2.5M', description: 'દૈનિક ફેન્સ', color: '#ff6b6b' },
                    { figure: '150+', description: 'લાઇવ મેચ', color: '#4ecdc4' },
                    { figure: '24/7', description: 'સ્કોર અપડેટ્સ', color: '#45b7d1' }
                  ].map((stat, index) => (
                    <div key={index} style={{
                      textAlign: 'center',
                      padding: '15px',
                      backgroundColor: stat.color + '20',
                      borderRadius: '10px'
                    }}>
                      <div style={{
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        color: stat.color,
                        marginBottom: '5px'
                      }}>
                        {stat.figure}
                      </div>
                      <div style={{
                        fontSize: '12px',
                        color: '#666'
                      }}>
                        {stat.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sports News Ticker */}
      <section style={{
        backgroundColor: '#333',
        color: 'white',
        padding: '15px 0',
        overflow: 'hidden'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          whiteSpace: 'nowrap'
        }}>
          <div style={{
            backgroundColor: '#667eea',
            padding: '8px 16px',
            borderRadius: '20px',
            marginRight: '20px',
            fontSize: '14px',
            fontWeight: 'bold'
          }}>
            🏆 લાઇવ સ્પોર્ટ્સ
          </div>
          <div style={{
            animation: 'scroll 30s linear infinite',
            fontSize: '14px'
          }}>
            🏏 ભારત vs ઓસ્ટ્રેલિયા: 156/3 • ⚽ મુંબઈ સિટી FC ની જીત • 🏸 સાઇના નેહવાલ ફાઇનલમાં • 🎾 સુમિત નાગલની શાનદાર જીત • 🏑 હોકી ટીમ સેમિ-ફાઇનલમાં
          </div>
        </div>
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}</style>
      </section>
    </div>
  );
};

export default Sports;