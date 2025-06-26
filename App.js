import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import News from './Pages/News';
import Business from './Pages/Business';
import Technology from './Pages/Technology';
import Manoranjan from './Pages/Manoranjan';
import Health from './Pages/Health';
import Sports from './Pages/Sports';
import TermsAndConditions from './Pages/TermsAndConditions';
import Astrology from './Pages/Astrology';
import Education from './Pages/Education';
import Weather from './Pages/Weather';
import Politics from './Pages/Politics';
import Shorts from './Pages/Shorts';
import Footer from './Pages/Footer';
import AdminPage from './Pages/AdminPage';
import Dashboard from './Pages/Dashboard';


function App() {
return (
<div className="App">
<Router>
  <Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/news" element={<News />} />
<Route path="/business" element={<Business />} />
<Route path="/technology" element={<Technology />} />
<Route path="/manoranjan" element={<Manoranjan />} />
<Route path="/sports" element={<Sports />} />
<Route path="/health" element={<Health />} />
<Route path="/termsandconditions" element={<TermsAndConditions />} />
<Route path="/astrology" element={<Astrology />} />
<Route path="/education" element={<Education />} />
<Route path="/weather" element={<Weather />} />
<Route path="/politics" element={<Politics />} />
<Route path="/shorts" element={<Shorts />} />
<Route path="/admin" element={<AdminPage />} />
<Route path="/dashboard" element={<Dashboard />} />


</Routes>
<Footer />
</Router>
</div>
);
}

export default App;
