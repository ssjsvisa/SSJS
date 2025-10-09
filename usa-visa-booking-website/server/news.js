// Express backend route for NewsAPI.org proxy
// Save as server/news.js (or similar)

const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

// Replace with your NewsAPI key
const NEWS_API_KEY = process.env.NEWSAPI_KEY || 'YOUR_NEWSAPI_KEY';

router.get('/latest-news', async (req, res) => {
  try {
    const url = `https://newsapi.org/v2/everything?q=USCIS India visa appointment interview processing fees&sortBy=publishedAt&language=en&apiKey=${NEWS_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    res.json({ articles: data.articles ? data.articles.slice(0, 5) : [] });
  } catch (err) {
    res.status(500).json({ error: 'Unable to fetch news.' });
  }
});

module.exports = router;
