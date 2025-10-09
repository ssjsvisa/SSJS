const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const fetch = (...args) => import('node-fetch').then(mod => mod.default(...args));
require('dotenv').config();

const app = express();
app.use(cors());

// NewsAPI endpoint
app.get('/api/latest-news', async (req, res) => {
  try {
    const NEWS_API_KEY = process.env.NEWSAPI_KEY || 'YOUR_NEWSAPI_KEY';
    const query = encodeURIComponent('USCIS OR US visa India OR US visa appointment OR US visa interview OR US visa fees OR US visa processing');
    const url = `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&language=en&apiKey=${NEWS_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    res.json({ articles: data.articles ? data.articles.slice(0, 50) : [] });
  } catch (err) {
    console.error('News API error:', err);
    res.status(500).json({ error: 'Unable to fetch news.' });
  }
});

exports.api = functions.https.onRequest(app);
