// Express backend route for NewsAPI.org proxy
// Save as server/news.js (or similar)

const express = require('express');
const fetch = (...args) => import('node-fetch').then(mod => mod.default(...args));
const router = express.Router();

// Replace with your NewsAPI key
const NEWS_API_KEY = process.env.NEWSAPI_KEY || 'YOUR_NEWSAPI_KEY';

router.get('/latest-news', async (req, res) => {
  try {
  // Broadened query for better results
  const query = encodeURIComponent('USCIS News AND Policy AND US Visa AND India OR (Interview OR OFC OR CA OR B1 OR B2OR H1B OR H4 OR L1 OR F1 OR Student OR Indiatoday OR immigration OR visa OR wired OR livemint OR thehindu OR ndtv OR timesofindia OR forbes OR bloomberg OR reuters)');
  const url = `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&language=en&apiKey=${NEWS_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
  res.json({ articles: data.articles ? data.articles.slice(0, 50) : [] });
  } catch (err) {
    console.error('News API error:', err);
    res.status(500).json({ error: 'Unable to fetch news.' });
  }
});

module.exports = router;
