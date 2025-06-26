import React, { useState, useEffect } from 'react';
import { Search, Calendar, User, Eye, Share2, BookOpen, GraduationCap, Award, TrendingUp } from 'lucide-react';
import '../css/Education.css';

const Education = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  const categories = [
    { id: 'all', name: 'બધી ખબર', icon: BookOpen },
    { id: 'entrance', name: 'પ્રવેશ પરીક્ષા', icon: GraduationCap },
    { id: 'results', name: 'પરિણામ', icon: Award },
    { id: 'admissions', name: 'દાખલા', icon: TrendingUp }
  ];

  const newsData = [
    {
      id: 1,
      title: "NEET 2025 નોંધણી શરૂ: મહત્વપૂર્ણ તારીખો અને માર્ગદર્શન",
      excerpt: "NEET નોંધણી ખુલતી હોવાને સાથે જ પરીક્ષા પદ્ધતિમાં બદલાવ અને પાત્રતા વિશે નવી માહિતી આવી.",
      category: "entrance",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop",
      author: "એજ્યુકેશન ટીમ",
      date: "2025-06-07",
      views: "12.5K",
      readTime: "3 મિનિટ વાંચન",
      trending: true
    },
    {
      id: 2,
      title: "CBSE 2025 પરિણામ: ટૉપર્સના અનુભવ અને ટિપ્સ",
      excerpt: "CBSE ક્લાસ 12ના ટૉપર્સે 99%થી વધુ સ્કોર કર્યો, તેમની તૈયારી અને ભવિષ્ય વિશે જાણો.",
      category: "results",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop",
      author: "પરિણામ ડેસ્ક",
      date: "2025-06-06",
      views: "8.2K",
      readTime: "5 મિનિટ વાંચન",
      trending: false
    },
    {
      id: 3,
      title: "JEE Advanced 2025: નવું પેટર્ન અને તૈયારી અંગે ટિપ્સ",
      excerpt: "IIT દ્વારા 2025 માટે JEE Advanced માં મહત્વપૂર્ણ ફેરફારની જાહેરાત.",
      category: "entrance",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=250&fit=crop",
      author: "ટેક એજ્યુકેશન",
      date: "2025-06-05",
      views: "15.1K",
      readTime: "4 મિનિટ વાંચન",
      trending: true
    },
    {
      id: 4,
      title: "ટોચના યુનિવર્સિટીઓએ પ્રવેશ પ્રક્રિયા શરૂ કરી",
      excerpt: "દાખલાની નવી પદ્ધતિ અને પસંદગીનાં નિયમો જાણો.",
      category: "admissions",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=400&h=250&fit=crop",
      author: "દાખલા ડેસ્ક",
      date: "2025-06-04",
      views: "6.8K",
      readTime: "6 મિનિટ વાંચન",
      trending: false
    },
    {
      id: 5,
      title: "શિક્ષણ નીતિ 2025: ડિજીટલ લર્નિંગ માટે નવી માર્ગદર્શિકા",
      excerpt: "શિક્ષણ મંત્રાલયે હાઈબ્રિડ લર્નિંગ માટે નવી નીતિ જાહેર કરી.",
      category: "all",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
      author: "નિતિ ટીમ",
      date: "2025-06-03",
      views: "9.4K",
      readTime: "7 મિનિટ વાંચન",
      trending: false
    },
    {
      id: 6,
      title: "વિદ્યાર્થીઓ માટે નવી સરકારની સ્કોલરશિપ યોજના",
      excerpt: "STEM ક્ષેત્રમાં શિક્ષણ માટે નવી મેરીટ આધારિત સ્કોલરશિપ આવી.",
      category: "admissions",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=250&fit=crop",
      author: "સ્કોલરશિપ ટીમ",
      date: "2025-06-02",
      views: "11.2K",
      readTime: "4 મિનિટ વાંચન",
      trending: true
    }
  ];

  const filteredNews = newsData.filter(news => {
    const matchesCategory = selectedCategory === 'all' || news.category === selectedCategory;
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         news.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (isLoading) {
    return (
      <div className="education-loading">
        <div className="loading-spinner"></div>
        <p>શૈક્ષણિક સમાચાર લોડ થઈ રહ્યા છે...</p>
      </div>
    );
  }

  return (
    <div className="education-container" style={{ marginTop: "100px" }}>
      <header className="education-header">
        <div className="header-content">
          <div className="header-text">
            <h1 className="main-title">શૈક્ષણિક સમાચાર</h1>
            <p className="subtitle">પરીક્ષા અપડેટ્સ, દાખલાની માહિતી અને શૈક્ષણિક દિશામાં રહો આગળ</p>
          </div>
          <div className="header-stats">
            <div className="stat-item">
              <span className="stat-number">૫૦૦+</span>
              <span className="stat-label">દૈનિક અપડેટ્સ</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">૧૦ લાખ+</span>
              <span className="stat-label">વિદ્યાર્થીઓ સુધી પહોંચ્યા</span>
            </div>
          </div>
        </div>
      </header>

      <section className="filter-section">
        <div className="search-container">
          <div className="search-box">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="શિક્ષણ સમાચાર શોધો..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        <div className="category-filters">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              >
                <IconComponent size={18} />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>
      </section>

      <main className="main-content">
        {filteredNews.length > 0 && (
          <section className="featured-section">
            <div className="featured-article">
              <div className="featured-image">
                <img src={filteredNews[0].image} alt={filteredNews[0].title} />
                {filteredNews[0].trending && <div className="trending-badge">ટ્રેન્ડિંગ</div>}
              </div>
              <div className="featured-content">
                <div className="article-meta">
                  <span className="category-tag">{filteredNews[0].category}</span>
                  <span className="read-time">{filteredNews[0].readTime}</span>
                </div>
                <h2 className="featured-title">{filteredNews[0].title}</h2>
                <p className="featured-excerpt">{filteredNews[0].excerpt}</p>
                <div className="article-footer">
                  <div className="author-info">
                    <User size={16} />
                    <span>{filteredNews[0].author}</span>
                  </div>
                  <div className="article-stats">
                    <div className="stat">
                      <Calendar size={14} />
                      <span>{new Date(filteredNews[0].date).toLocaleDateString()}</span>
                    </div>
                    <div className="stat">
                      <Eye size={14} />
                      <span>{filteredNews[0].views}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="news-grid">
          {filteredNews.slice(1).map((article) => (
            <article key={article.id} className="news-card">
              <div className="card-image">
                <img src={article.image} alt={article.title} />
                {article.trending && <div className="trending-badge">ટ્રેન્ડિંગ</div>}
                <div className="card-overlay">
                  <button className="share-btn">
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
              <div className="card-content">
                <div className="card-meta">
                  <span className="category-tag">{article.category}</span>
                  <span className="read-time">{article.readTime}</span>
                </div>
                <h3 className="card-title">{article.title}</h3>
                <p className="card-excerpt">{article.excerpt}</p>
                <div className="card-footer">
                  <div className="author-info">
                    <User size={14} />
                    <span>{article.author}</span>
                  </div>
                  <div className="article-stats">
                    <div className="stat">
                      <Calendar size={12} />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                    <div className="stat">
                      <Eye size={12} />
                      <span>{article.views}</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        {filteredNews.length === 0 && (
          <div className="no-results">
            <BookOpen size={48} />
            <h3>લેખ મળ્યા નથી</h3>
            <p>કૃપા કરીને તમારું શોધ શબ્દ કે કેટેગરી બદલો</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Education;
