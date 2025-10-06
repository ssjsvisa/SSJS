import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, Button, Chip } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ReadMoreIcon from '@mui/icons-material/ReadMore';

// SEO-optimized blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Complete Guide to B1/B2 Tourist Visa Application 2025 - USA Visa Requirements",
    excerpt: "Learn step-by-step process for US B1/B2 tourist visa application from India. Expert tips for successful USA visa interview and document preparation.",
    keywords: ["B1 B2 visa", "USA tourist visa", "US visa requirements", "visa application guide"],
    date: "October 6, 2025",
    readTime: "8 min read",
    category: "Tourist Visa"
  },
  {
    id: 2,
    title: "F1 Student Visa Interview Questions and Answers 2025 - US Student Visa Guide",
    excerpt: "Comprehensive list of F1 student visa interview questions with expert answers. Prepare for your US student visa interview with confidence.",
    keywords: ["F1 visa interview", "student visa questions", "US university visa", "America education visa"],
    date: "October 5, 2025", 
    readTime: "12 min read",
    category: "Student Visa"
  },
  {
    id: 3,
    title: "H1B Work Visa Latest Updates 2025 - USA Work Visa Rules and Requirements",
    excerpt: "Latest H1B visa updates, new rules, processing times, and requirements for 2025. Expert H1B work visa guidance for Indian professionals.",
    keywords: ["H1B visa 2025", "USA work visa", "H1B requirements", "work visa updates"],
    date: "October 4, 2025",
    readTime: "10 min read", 
    category: "Work Visa"
  },
  {
    id: 4,
    title: "USA Visa Document Checklist 2025 - Complete List for All Visa Types",
    excerpt: "Complete USA visa document checklist for B1/B2, F1, H1B, and L1 visas. Ensure your US visa application is complete with our expert guide.",
    keywords: ["USA visa documents", "US visa checklist", "visa requirements", "America visa paperwork"],
    date: "October 3, 2025",
    readTime: "6 min read",
    category: "Visa Guide"
  },
  {
    id: 5,
    title: "US Visa Interview Tips 2025 - How to Ace Your America Visa Interview",
    excerpt: "Expert US visa interview tips and strategies for success. Common mistakes to avoid and how to present yourself confidently at the US consulate.",
    keywords: ["US visa interview tips", "visa interview preparation", "America visa interview", "consulate interview"],
    date: "October 2, 2025",
    readTime: "9 min read",
    category: "Interview Prep"
  },
  {
    id: 6,
    title: "USA Visa Fees 2025 - Complete Cost Breakdown for All Visa Types",
    excerpt: "Latest USA visa fees for 2025 including B1/B2, F1, H1B, and L1 visas. Complete cost breakdown and payment methods for US visa applications.",
    keywords: ["USA visa fees 2025", "US visa cost", "America visa charges", "visa application fees"],
    date: "October 1, 2025",
    readTime: "5 min read",
    category: "Visa Fees"
  }
];

const SEOBlogSection = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          align="center" 
          gutterBottom 
          sx={{ fontWeight: 600, color: 'primary.main', mb: 2 }}
        >
          USA Visa Guides & Latest Updates 2025
        </Typography>
        <Typography 
          variant="h6" 
          align="center" 
          color="text.secondary" 
          paragraph
          sx={{ mb: 6 }}
        >
          Expert insights, tips, and latest updates on US visa applications, requirements, and procedures
        </Typography>

        <Grid container spacing={4}>
          {blogPosts.map((post) => (
            <Grid item xs={12} md={6} lg={4} key={post.id}>
              <Card 
                elevation={2}
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Chip 
                    label={post.category} 
                    color="primary" 
                    size="small" 
                    sx={{ mb: 2 }}
                  />
                  
                  <Typography 
                    variant="h6" 
                    gutterBottom
                    sx={{ 
                      fontWeight: 600,
                      lineHeight: 1.3,
                      mb: 2,
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    {post.title}
                  </Typography>
                  
                  <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    paragraph
                    sx={{ 
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      mb: 2
                    }}
                  >
                    {post.excerpt}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}>
                      <CalendarTodayIcon sx={{ fontSize: 16, mr: 0.5 }} />
                      <Typography variant="caption">{post.date}</Typography>
                    </Box>
                    <Typography variant="caption" color="text.secondary">
                      {post.readTime}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                    {post.keywords.slice(0, 3).map((keyword, index) => (
                      <Chip 
                        key={index}
                        label={keyword}
                        size="small"
                        variant="outlined"
                        sx={{ fontSize: '0.7rem' }}
                      />
                    ))}
                  </Box>
                </CardContent>

                <Box sx={{ p: 3, pt: 0 }}>
                  <Button
                    component={RouterLink}
                    to={`/blog/${post.id}`}
                    variant="outlined"
                    color="primary"
                    endIcon={<ReadMoreIcon />}
                    fullWidth
                  >
                    Read Full Guide
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button 
            component={RouterLink}
            to="/blog"
            variant="contained"
            color="primary"
            size="large"
            sx={{ px: 4, py: 1.5 }}
          >
            View All USA Visa Guides
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default SEOBlogSection;