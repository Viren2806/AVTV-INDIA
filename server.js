// server.js
const express = require('express');
const cors = require('cors'); // Make sure to install cors: npm install cors
const app = express();
const PORT = 5000;

// --- Middlewares ---
app.use(cors()); // Allows your React app (on port 3000) to talk to this server (on port 5000)
app.use(express.json()); // To parse JSON from requests

// --- All News Data Moved from React to Backend ---

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
    // ... add other top news items here if you want
];

const marketData = [
    { name: "SENSEX", value: "73,852.94", change: "+524.56", percentage: "+0.72%", isPositive: true },
    { name: "NIFTY", value: "22,438.70", change: "+168.60", percentage: "+0.76%", isPositive: true },
    // ... add other market data here
];

const tickerNews = [
    'બ્રેકિંગ: International Yoga Day 2025 PM મોદીએ વિશાખાપટનમમાં યોગ કર્યા',
    'લાઇવ: ગુજરાત વિધાનસભાનું સત્ર ચાલુ',
    'ફ્લેશ ન્યૂઝ: સોનાના ભાવમાં આજે મોટો ઘટાડો',
];

const trendingTopics = [
    "International Yoga Day 2025",
    "Gujarat Assembly Live",
    "Gold Price Today",
    // ... add other topics
];

// --- API Endpoints to Serve the Data ---

// Endpoint for Breaking News
app.get('/api/news/breaking', (req, res) => {
  res.json(breakingNews);
});

// ✅ NEW: Endpoint for Live News
app.get('/api/news/live', (req, res) => {
  res.json(liveNewsData);
});

// Endpoint for Top News
app.get('/api/news/top', (req, res) => {
  res.json(topNews);
});

// Endpoint for Market Data
app.get('/api/data/market', (req, res) => {
    res.json(marketData);
});

// Endpoint for Ticker News
app.get('/api/news/ticker', (req, res) => {
    res.json(tickerNews);
});

// Endpoint for Trending Topics
app.get('/api/data/trending', (req, res) => {
    res.json(trendingTopics);
});


// --- Start the Server ---
app.listen(PORT, () => {
  console.log(`✅ News API server running at http://localhost:${PORT}`);
});