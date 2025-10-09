import React, { useEffect, useState } from 'react';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import { Box, Modal, Paper, IconButton, Typography } from '@mui/material';

const NewsPopup = ({ alwaysOpen }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch latest USCIS news for Indian citizens from backend
  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch('/api/latest-news')
      .then(res => res.json())
      .then(data => {
        setNews(data.articles ? data.articles : []);
        setLoading(false);
      })
      .catch(err => {
        setError('Unable to fetch news.');
        setLoading(false);
      });
  }, []);
  const [open, setOpen] = useState(false);

  // Listen for custom event to open popup (from icon click)
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener('openNewsPopup', handler);
    return () => window.removeEventListener('openNewsPopup', handler);
  }, []);

  // If alwaysOpen is true, open on mount
  useEffect(() => {
    if (alwaysOpen) setOpen(true);
  }, [alwaysOpen]);

  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Paper
          sx={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            minWidth: 400,
            maxWidth: 600,
            maxHeight: '90vh',
            overflow: 'auto',
            p: 4,
            borderRadius: 3,
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
            outline: 'none',
          }}
        >
          <IconButton
            sx={{ position: 'absolute', top: 8, left: 8, color: '#333' }}
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            <span style={{fontSize: '1.5rem', fontWeight: 'bold'}}>&times;</span>
          </IconButton>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, justifyContent: 'flex-end' }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mr: 2, textAlign: 'right' }}>
              Latest News
            </Typography>
            <AnnouncementIcon sx={{ color: '#1976d2', fontSize: 32 }} />
          </Box>
          {loading ? (
            <Typography variant="body2" sx={{ mb: 2 }}>Loading latest news...</Typography>
          ) : error ? (
            <Typography variant="body2" sx={{ mb: 2, color: 'error.main' }}>{error}</Typography>
          ) : news.length === 0 ? (
            <Typography variant="body2" sx={{ mb: 2 }}>No recent news found.</Typography>
          ) : (
            <Box component="ul" sx={{ paddingLeft: 2, margin: 0 }}>
              {news.map((article, idx) => (
                <li key={idx} style={{ marginBottom: 12 }}>
                  <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'primary.main' }}>{article.title}</Typography>
                  <Typography variant="body2" sx={{ mb: 0.5 }}>{article.description}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {new Date(article.publishedAt).toLocaleDateString()} &mdash; 
                    <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                    {article.source && article.source.name ? ` | Source: ${article.source.name}` : ''}
                  </Typography>
                </li>
              ))}
            </Box>
          )}
        </Paper>
      </Modal>
    </>
  );
};

export default NewsPopup;
