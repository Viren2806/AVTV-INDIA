import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Search, 
  Menu, 
  Home, 
  Clock, 
  TrendingUp, 
  Calendar,
  Share2,
  Bookmark,
  Eye,
  ChevronRight,
  Filter,
  Grid,
  List,
  Bell,
  User,
  X,
  Pause,
  Volume2,
  VolumeX,
  RotateCcw,
  RotateCw,
  Maximize,
  Facebook,
  Twitter,
  Link,
  ArrowUp,
  ArrowDown,
  Turtle
} from 'lucide-react';
import '../css/Shorts.css';
import v1 from '../Video/v1.mov';
import Image1 from '../Image/s.jpg';
import Image2 from '../Image/pic1.jpg';
import v2 from '../Video/v2.mp4';

const Shorts = () => {
  const [selectedCategory, setSelectedCategory] = useState('તમામ');
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0); // Fixed: Changed from true to 0
  const [playbackSpeed, setPlaybackSpeed] = useState(1); // Fixed: Changed from true to 1
  const [showShareMenu, setShowShareMenu] = useState(false);
  
  const videoRef = useRef(null);

  const videoData = [
    {
      id: 1,
      title: 'મેઇન્ટેનન્સમાં ખામી, બર્ડહિટ, બેક ટુ બેક શિડ્યુલ કે પાઇલટની ભૂલ?',
      description: 'પ્લેન ક્રેશ થવા પાછળ બે એક્સપર્ટ આપ્યા મહત્વપૂર્ણ તર્ક...',
      thumbnail: Image1,
      videoUrl: v1,
      duration: '03:45',
      // views: '1.2લાખ',
      timeAgo: '2 કલાક પહેલાં',
      category: 'અહેમદાબાદ',
      isLive: false,
      isTrending: true,
      author: 'AVTV INDIA',
      location: 'સારણી એમ. સાગર'
    },
    {
      id: 2,
      title: 'પોરબંદર માં વિદેસી દારુ ની બોતલ સાથ રહો અરોપી જડપાયા',
      description: 'આગામી 48 કલાકમાં તાપમાનમાં ઘટાડો...',
      thumbnail: Image2,
      videoUrl: v2,
      duration: '02:30',
      // views: '85હજાર',
      timeAgo: '4 કલાક પહેલાં',
      category: 'તાજા સમાચાર',
      isLive: false,
      isTrending: false,
      author: 'AVTV INDIA',
      location: 'અમદાવાદ'
    },
    {
      id: 3,
      title: 'લાઈવ: રાજકોટમાં મહત્વપૂર્ણ બેઠક, મુખ્યમંત્રીની હાજરી',
      description: 'રાજ્યના વિકાસ કામો અંગે ચર્ચા...',
      thumbnail: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=400&h=225&fit=crop',
      videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4',
      duration: 'લાઈવ',
      views: '2.5લાખ',
      timeAgo: 'હમણાં',
      category: 'રાજકારણ',
      isLive: true,
      isTrending: true,
      author: 'AVTV INDIA',
      location: 'રાજકોટ'
    },
    {
      id: 4,
      title: 'ટીમ ઈન્ડિયાની શાનદાર જીત, ક્રિકેટ ફેન્સમાં ઉત્સાહ',
      description: 'બોર્ડર ગાવસ્કર ટ્રોફીમાં ભારતની જીત...',
      thumbnail: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=225&fit=crop',
      videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
      duration: '04:12',
      views: '95હજાર',
      timeAgo: '6 કલાક પહેલાં',
      category: 'રમતગમત',
      isLive: false,
      isTrending: false,
      author: 'AVTV INDIA',
      location: 'અમદાવાદ'
    },
    {
      id: 5,
      title: 'અમદાવાદમાં નવા મેટ્રો સ્ટેશનનું ઉદ્ઘાટન',
      description: 'મેટ્રો નેટવર્કનું વિસ્તરણ...',
      thumbnail: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=225&fit=crop',
      videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4',
      duration: '03:20',
      views: '1.1લાખ',
      timeAgo: '8 કલાક પહેલાં',
      category: 'અહેમદાબાદ',
      isLive: false,
      isTrending: false,
      author: 'AVTV INDIA',
      location: 'અમદાવાદ'
    },
    {
      id: 6,
      title: 'શિક્ષણ ક્ષેત્રે નવા સુધારા, ધોરણ 1-8ના સિલેબસમાં ફેરફાર',
      description: 'રાજ્ય સરકારે કર્યો મહત્વપૂર્ણ નિર્ણય...',
      thumbnail: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=225&fit=crop',
      videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4',
      duration: '05:15',
      views: '67હજાર',
      timeAgo: '12 કલાક પહેલાં',
      category: 'શિક્ષણ',
      isLive: false,
      isTrending: false,
      author: 'AVTV INDIA',
      location: 'ગાંધીનગર'
    }
  ];

  const categories = [
    'તમામ', 'અહેમદાબાદ', 'સુરત', 'વડોદરા', 'રાજકોટ', 'ભાવનગર', 
    'રાજકારણ', 'રમતગમત', 'મનોરંજન', 'ધર્મ', 'શિક્ષણ', 'હવામાન', 'અર્થતંત્ર'
  ];

  const filteredVideos = videoData.filter(video => {
    const matchesCategory = selectedCategory === 'તમામ' || video.category === selectedCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Video popup handlers
  const openVideoPopup = (video) => {
    setCurrentVideo(video);
    setShowPopup(true);
    setCurrentTime(0);
    setIsPlaying(false);
    setDuration(0); // Reset duration when opening new video
  };

  const closeVideoPopup = () => {
    setShowPopup(false);
    setCurrentVideo(null);
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0); // Reset duration when closing
    setShowShareMenu(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const skipTime = (seconds) => {
    if (videoRef.current) {
      videoRef.current.currentTime += seconds;
    }
  };

  const formatTime = (time) => {
    if (!time || isNaN(time)) return '00:00'; // Handle invalid time values
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const shareVideo = (platform) => {
    const url = window.location.href;
    const text = currentVideo?.title || '';
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        alert('લિંક કોપી થઈ ગઈ!');
        break;
    }
    setShowShareMenu(false);
  };

  // Video event handlers
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => {
      if (video.duration && !isNaN(video.duration)) {
        setDuration(video.duration);
      }
    };
    const handleEnded = () => setIsPlaying(false);

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);
    video.addEventListener('loadeddata', updateDuration); // Added for better compatibility
    video.addEventListener('canplaythrough', updateDuration); // Added for better compatibility
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
      video.removeEventListener('loadeddata', updateDuration);
      video.removeEventListener('canplaythrough', updateDuration);
      video.removeEventListener('ended', handleEnded);
    };
  }, [currentVideo]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!showPopup) return;
      
      switch (e.code) {
        case 'Space':
          e.preventDefault();
          togglePlayPause();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          skipTime(-10);
          break;
        case 'ArrowRight':
          e.preventDefault();
          skipTime(10);
          break;
        case 'KeyM':
          e.preventDefault();
          toggleMute();
          break;
        case 'Escape':
          e.preventDefault();
          closeVideoPopup();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [showPopup, isPlaying, isMuted]);

  return (
    <div className="dbv-container" style={{marginTop:"60px"}}>
      {/* Header */}
      {/* <header className="dbv-header">
        <div className="dbv-header-left">
          <button className="dbv-menu-btn"><Menu size={24} /></button>
          <h1 className="dbv-logo">AVTV INDIA</h1>
        </div>
        <div className="dbv-header-center">
          <div className="dbv-search-container">
            <Search size={20} className="dbv-search-icon" />
            <input 
              type="text" 
                placeholder="શોધો..." 
              className="dbv-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="dbv-header-right">
          <button className="dbv-header-btn"><Bell size={20} /></button>
          <button className="dbv-header-btn"><User size={20} /></button>
        </div>
      </header> */}

      {/* Navigation */}
      {/* <nav className="dbv-nav">
        <div className="dbv-nav-links">
          <a href="#" className="dbv-nav-link"><Home size={18} />હોમ</a>
          <a href="#" className="dbv-nav-link active"><Play size={18} />શોર્ટ્સ</a>
          <a href="#" className="dbv-nav-link"><TrendingUp size={18} />ટ્રેન્ડિંગ</a>
          <a href="#" className="dbv-nav-link"><Calendar size={18} />લાઈવ</a>
        </div>
        <div className="dbv-nav-controls">
          <button 
            className={`dbv-view-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode('grid')}
          >
            <Grid size={18} />
          </button>
          <button 
            className={`dbv-view-btn ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => setViewMode('list')}
          >
            <List size={18} />
          </button>
          <button 
            className="dbv-filter-btn"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={18} />ફિલ્ટર
          </button>
        </div>
      </nav> */}

      <main className="dbv-main">
        {/* Category Filters */}
        <section className={`dbv-filters-section ${showFilters ? 'show' : ''}`}>
          <div className="dbv-category-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={`dbv-category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Videos Section */}
        <section className="dbv-videos-section">
          <div className={`dbv-videos-container ${viewMode === 'list' ? 'dbv-list-view' : 'dbv-grid-view'}`}>
            {filteredVideos.map((video) => (
              <article key={video.id} className="dbv-video-card">
                <div 
                  className="dbv-video-thumbnail"
                  onClick={() => openVideoPopup(video)}
                  style={{ cursor: 'pointer' }}
                >
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="dbv-thumbnail-image"
                  />
                  <div className="dbv-video-overlay">
                    <button className="dbv-play-button">
                      <Play size={24} fill="white" />
                    </button>
                    <div className="dbv-video-badges">
                      {video.isLive && (
                        <span className="dbv-badge dbv-live-badge">લાઈવ</span>
                      )}
                      {video.isTrending && (
                        <span className="dbv-badge dbv-trending-badge">ટ્રેન્ડિંગ</span>
                      )}
                    </div>
                  </div>
                  <div className="dbv-duration-badge">
                    {video.duration}
                  </div>
                </div>
                <div className="dbv-video-content">
                  <h3 className="dbv-video-title">{video.title}</h3>
                  <p className="dbv-video-description">{video.description}</p>
                  <div className="dbv-video-meta">
                    <div className="dbv-meta-row">
                      <span className="dbv-category-tag">{video.category}</span>
                      <div className="dbv-video-stats">
                        <span className="dbv-stat">
                          <Eye size={14} />
                          {video.views}
                        </span>
                        <span className="dbv-stat">
                          <Clock size={14} />
                          {video.timeAgo}
                        </span>
                      </div>
                    </div>
                    <div className="dbv-video-actions">
                      <button className="dbv-action-btn"><Bookmark size={16} /></button>
                      <button className="dbv-action-btn"><Share2 size={16} /></button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="dbv-load-more">
          <button className="dbv-load-more-btn">
            વધુ વીડિયો લોડ કરો
            <ChevronRight size={20} />
          </button>
        </div>
      </main>

      {/* Video Popup */}
      {showPopup && currentVideo && (
        <div className="vpp-popup-overlay" onClick={closeVideoPopup}>
          <div className="vpp-popup-container" onClick={e => e.stopPropagation()}>
            <div className="vpp-popup-content">
              <div className="vpp-video-section">
                <div className="vpp-video-container">
                  <video
                    ref={videoRef}
                    src={currentVideo.videoUrl}
                    poster={currentVideo.thumbnail}
                    className="vpp-video-player"
                    onClick={togglePlayPause}
                    onLoadedMetadata={() => {
                      if (videoRef.current && videoRef.current.duration) {
                        setDuration(videoRef.current.duration);
                      }
                    }}
                    onLoadedData={() => {
                      if (videoRef.current && videoRef.current.duration) {
                        setDuration(videoRef.current.duration);
                      }
                    }}
                    onCanPlayThrough={() => {
                      if (videoRef.current && videoRef.current.duration) {
                        setDuration(videoRef.current.duration);
                      }
                    }}
                  />
                  
                  {/* Video Controls Overlay */}
                  <div className="vpp-controls-overlay">
                    <div className="vpp-top-controls">
                      <div className="vpp-video-info">
                        <span className="vpp-live-badge">AVTV INDIA</span>
                        <button 
                          className="vpp-close-btn"
                          onClick={closeVideoPopup}
                        >
                          <X size={24} />
                        </button>
                      </div>
                    </div>

                    <div className="vpp-center-controls">
                      <button 
                        className="vpp-skip-btn"
                        onClick={() => skipTime(-10)}
                      >
                        <RotateCcw size={24} />
                      </button>
                      <button 
                        className="vpp-play-pause-btn"
                        onClick={togglePlayPause}
                      >
                        {isPlaying ? <Pause size={36} /> : <Play size={36} />}
                      </button>
                      <button 
                        className="vpp-skip-btn"
                        onClick={() => skipTime(10)}
                      >
                        <RotateCw size={24} />
                      </button>
                    </div>

                    <div className="vpp-bottom-controls">
                      <div className="vpp-progress-container">
                        <div className="vpp-time-display">
                          {formatTime(currentTime)}
                        </div>
                        <div className="vpp-progress-bar">
                          <div 
                            className="vpp-progress-fill"
                            style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
                          />
                        </div>
                        <div className="vpp-time-display">
                          {formatTime(duration)}
                        </div>
                      </div>

                      <div className="vpp-control-buttons">
                        <div className="vpp-speed-control">
                          <span className="vpp-speed-label">{playbackSpeed}x</span>
                        </div>
                        <button 
                          className="vpp-control-btn"
                          onClick={toggleMute}
                        >
                          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                        </button>
                        <button className="vpp-control-btn">
                          <Maximize size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Video Details */}
                <div className="vpp-video-details">
                  <div className="vpp-author-location">
                    <span className="vpp-author">સ્ટોરી</span>
                    <span className="vpp-separator">|</span>
                    <span className="vpp-location">{currentVideo.author}</span>
                  </div>
                  <div className="vpp-location-detail">
                    <span className="vpp-location-text">{currentVideo.location}</span>
                  </div>
                </div>
              </div>

              {/* Social Actions */}
              <div className="vpp-social-actions">
                <div className="vpp-action-buttons">
                  <button className="vpp-action-btn vpp-nav-btn">
                    <ArrowUp size={24} />
                  </button>
                  <button className="vpp-action-btn vpp-nav-btn">
                    <ArrowDown size={24} />
                  </button>
                </div>

                <div className="vpp-social-buttons">
                  <div className="vpp-social-item">
                    <button className="vpp-social-btn">
                      <Facebook size={24} />
                    </button>
                    <span className="vpp-social-label">ફેસબુક</span>
                  </div>

                  <div className="vpp-social-item">
                    <button className="vpp-social-btn">
                      <Twitter size={24} />
                    </button>
                    <span className="vpp-social-label">ટ્વિટર</span>
                  </div>

                  <div className="vpp-social-item">
                    <button 
                      className="vpp-social-btn"
                      onClick={() => setShowShareMenu(!showShareMenu)}
                    >
                      <Link size={24} />
                    </button>
                    <span className="vpp-social-label">કોપી લિંક</span>
                    
                    {showShareMenu && (
                      <div className="vpp-share-menu">
                        <button onClick={() => shareVideo('facebook')}>Facebook</button>
                        <button onClick={() => shareVideo('twitter')}>Twitter</button>
                        <button onClick={() => shareVideo('copy')}>કોપી લિંક</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Breaking News Ticker */}
      {/* <div className="vpp-news-ticker">
        <div className="vpp-ticker-content">
          <span className="vpp-breaking-label">મેટ્રોમાં ખામી, બર્ડહિટ, બેક ટુ બેક શિડ્યુલ કે પાઇલટની ભૂલ?</span>
          <span className="vpp-news-text">
            પ્લેન ક્રેશ થવા પાછળ બે એક્સપર્ટ આપ્યા મહત્વપૂર્ણ તર્ક, 300 ફૂટ નવું ઉંચાઈ હોત તો કદાચ દુર્ઘટના ટળી જાત
          </span>
        </div>
      </div> */}
    </div> 
  );
};

export default Shorts;