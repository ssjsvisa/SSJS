import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import NewsPopup from './NewsPopup';

const buttonData = [
  {
    href: '#',
    bg: '#1976d2',
    icon: <AnnouncementIcon fontSize="large" />,
    aria: 'Latest News',
    onClick: (e) => {
      e.preventDefault();
      window.dispatchEvent(new Event('openNewsPopup'));
    },
  },
  {
    href: '#',
    bg: '#ff9800',
    icon: <CardGiftcardIcon fontSize="large" />,
    aria: 'Personalized Offers',
    onClick: (e) => {
      e.preventDefault();
      window.dispatchEvent(new Event('openPersonalizedOffer'));
    },
  },
  {
    href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
    bg: '#4267B2',
    icon: <FacebookIcon fontSize="large" />,
    aria: 'Share on Facebook',
  },
  {
    href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=Check%20out%20this%20US%20Visa%20Consultancy%20site!`,
    bg: '#1DA1F2',
    icon: <TwitterIcon fontSize="large" />,
    aria: 'Share on Twitter',
  },
//   {
//     href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=US%20Visa%20Consultancy`,
//     bg: '#0077B5',
//     icon: <LinkedInIcon fontSize="large" />,
//     aria: 'Share on LinkedIn',
//   },
  {
    href: `https://wa.me/919361696954?text=${encodeURIComponent(window.location.href)}`,
    bg: '#25D366',
    icon: <WhatsAppIcon fontSize="large" />,
    aria: 'Chat on WhatsApp',
  },
];

const SocialShareButtons = () => (
  <div style={{
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    zIndex: 9999,
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  }}>
    {buttonData.map((btn, idx) => (
      <a
        key={idx}
        href={btn.href}
        target={btn.href !== '#' ? '_blank' : undefined}
        rel={btn.href !== '#' ? 'noopener noreferrer' : undefined}
        style={{
          background: btn.bg,
          color: 'white',
          borderRadius: '24px',
          minWidth: '56px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          textDecoration: 'none',
        }}
        aria-label={btn.aria}
        title={btn.aria}
        onClick={btn.onClick}
      >
        {btn.icon}
      </a>
    ))}
  </div>
);

export default SocialShareButtons;
