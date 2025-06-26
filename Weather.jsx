import React, { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain, Wind, Eye, Droplets, Thermometer, Navigation, MapPin, Calendar, Clock } from 'lucide-react';
import '../css/Weather.css'; // Import the separate CSS file

const Weather = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedCity, setSelectedCity] = useState('અમદાવાદ');
  const [weatherData, setWeatherData] = useState({
    temperature: 32,
    condition: 'સાફ આકાશ',
    humidity: 65,
    windSpeed: 12,
    visibility: 8,
    pressure: 1013,
    uvIndex: 7,
    feelsLike: 35
  });
  
  // Gujarati cities
  const cities = [
    'અમદાવાદ', 'સુરત', 'વડોદરા', 'રાજકોટ', 'ભાવનગર', 'પાટણ', 
    'જામનગર', 'જુનાગઢ', 'ગાંધીનગર', 'આણંદ', 'મહેસાણા'
  ];

  // Weekly forecast data
  const weeklyForecast = [
    { day: 'આજે', high: 32, low: 24, condition: 'સાફ', icon: Sun },
    { day: 'કાલે', high: 30, low: 22, condition: 'વાદળો', icon: Cloud },
    { day: 'બુધવાર', high: 28, low: 20, condition: 'વરસાદ', icon: CloudRain },
    { day: 'ગુરુવાર', high: 31, low: 23, condition: 'સાફ', icon: Sun },
    { day: 'શુક્રવાર', high: 29, low: 21, condition: 'વાદળો', icon: Cloud },
    { day: 'શનિવાર', high: 33, low: 25, condition: 'સાફ', icon: Sun },
    { day: 'રવિવાર', high: 27, low: 19, condition: 'વરસાદ', icon: CloudRain }
  ];

  // Hourly forecast
  const hourlyForecast = [
    { time: '12 PM', temp: 32, icon: Sun },
    { time: '1 PM', temp: 33, icon: Sun },
    { time: '2 PM', temp: 34, icon: Sun },
    { time: '3 PM', temp: 33, icon: Cloud },
    { time: '4 PM', temp: 31, icon: Cloud },
    { time: '5 PM', temp: 29, icon: CloudRain },
    { time: '6 PM', temp: 27, icon: CloudRain }
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('gu-IN', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('gu-IN', { 
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="weather-container" style={{marginTop:"100px"}}>
      <div className="weather-main-content">
        <header className="weather-header">
          <h1>હવામાન અહેવાલ</h1>
          <div className="weather-current-time">
            <Clock size={20} />
            <span>{formatTime(currentTime)}</span>
            <Calendar size={20} />
            <span>{formatDate(currentTime)}</span>
          </div>
        </header>

        <div className="weather-city-selector">
          <select 
            className="weather-city-select"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        <div className="weather-grid">
          <div className="weather-card weather-main-weather">
            <div className="weather-icon">
              <Sun size={80} />
            </div>
            <div className="weather-main-temp">{weatherData.temperature}°C</div>
            <div className="weather-condition">{weatherData.condition}</div>
            <div className="weather-location">
              <MapPin size={18} />
              <span>{selectedCity}</span>
            </div>
            
            <div className="weather-details">
              <div className="weather-detail-item">
                <Thermometer className="weather-detail-icon" />
                <span>લાગણી: {weatherData.feelsLike}°C</span>
              </div>
              <div className="weather-detail-item">
                <Droplets className="weather-detail-icon" />
                <span>ભેજ: {weatherData.humidity}%</span>
              </div>
              <div className="weather-detail-item">
                <Wind className="weather-detail-icon" />
                <span>પવન: {weatherData.windSpeed} km/h</span>
              </div>
              <div className="weather-detail-item">
                <Eye className="weather-detail-icon" />
                <span>દૃશ્યતા: {weatherData.visibility} km</span>
              </div>
            </div>
          </div>

          <div className="weather-card weather-hourly-forecast">
            <div className="weather-forecast-title">
              <Clock size={20} />
              <span>કલાકવાર આગાહી</span>
            </div>
            <div className="weather-hourly-scroll">
              {hourlyForecast.map((hour, index) => {
                const IconComponent = hour.icon;
                return (
                  <div key={index} className="weather-hourly-item">
                    <div>{hour.time}</div>
                    <IconComponent size={24} style={{ margin: '10px 0' }} />
                    <div>{hour.temp}°</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="weather-card weather-weekly-forecast">
            <div className="weather-forecast-title">
              <Calendar size={20} />
              <span>સાતદિવસીય આગાહી</span>
            </div>
            {weeklyForecast.map((day, index) => {
              const IconComponent = day.icon;
              return (
                <div key={index} className="weather-weekly-item">
                  <div className="weather-day-name">{day.day}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <IconComponent size={20} />
                    <span>{day.condition}</span>
                  </div>
                  <div className="weather-day-temps">
                    <span className="weather-temp-high">{day.high}°</span>
                    <span className="weather-temp-low">{day.low}°</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="weather-card weather-additional-info">
            <div className="weather-forecast-title">
              <Navigation size={20} />
              <span>વધારાની માહિતી</span>
            </div>
            <div className="weather-info-grid">
              <div className="weather-info-item">
                <div className="weather-info-label">દબાણ</div>
                <div className="weather-info-value">{weatherData.pressure} hPa</div>
              </div>
              <div className="weather-info-item">
                <div className="weather-info-label">UV ઇન્ડેક્સ</div>
                <div className="weather-info-value">{weatherData.uvIndex}</div>
              </div>
              <div className="weather-info-item">
                <div className="weather-info-label">સૂર્યોદય</div>
                <div className="weather-info-value">06:15 AM</div>
              </div>
              <div className="weather-info-item">
                <div className="weather-info-label">સૂર્યાસ્ત</div>
                <div className="weather-info-value">07:30 PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;