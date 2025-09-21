import React from 'react';
import { Box } from '@mui/material';

/**
 * A component that displays either the US flag, Indian flag, or both
 * @param {Object} props - Component props
 * @param {('us'|'india'|'both')} props.country - Which flag(s) to display
 * @param {number} props.height - Height of the flag in pixels
 * @param {Object} props.sx - Additional style props for the container
 */
const FlagIcon = ({ country = 'both', height = 24, sx = {} }) => {
  const flagHeight = height;
  const flagWidth = height * 1.5; // Standard flag aspect ratio
  
  const renderUSFlag = () => (
    <svg width={flagWidth} height={flagHeight} viewBox="0 0 1235 650" xmlns="http://www.w3.org/2000/svg">
      {/* US flag */}
      <rect width="1235" height="650" fill="#B22234" />
      <rect y="50" width="1235" height="50" fill="#FFFFFF" />
      <rect y="150" width="1235" height="50" fill="#FFFFFF" />
      <rect y="250" width="1235" height="50" fill="#FFFFFF" />
      <rect y="350" width="1235" height="50" fill="#FFFFFF" />
      <rect y="450" width="1235" height="50" fill="#FFFFFF" />
      <rect y="550" width="1235" height="50" fill="#FFFFFF" />
      <rect width="494" height="350" fill="#3C3B6E" />
      
      {/* Stars - simplified representation */}
      <g fill="#FFFFFF">
        {/* First row */}
        <circle cx="41" cy="35" r="20" />
        <circle cx="123" cy="35" r="20" />
        <circle cx="205" cy="35" r="20" />
        <circle cx="287" cy="35" r="20" />
        <circle cx="369" cy="35" r="20" />
        <circle cx="451" cy="35" r="20" />
        
        {/* Second row */}
        <circle cx="82" cy="87" r="20" />
        <circle cx="164" cy="87" r="20" />
        <circle cx="246" cy="87" r="20" />
        <circle cx="328" cy="87" r="20" />
        <circle cx="410" cy="87" r="20" />
        
        {/* Third row */}
        <circle cx="41" cy="139" r="20" />
        <circle cx="123" cy="139" r="20" />
        <circle cx="205" cy="139" r="20" />
        <circle cx="287" cy="139" r="20" />
        <circle cx="369" cy="139" r="20" />
        <circle cx="451" cy="139" r="20" />
        
        {/* Fourth row */}
        <circle cx="82" cy="191" r="20" />
        <circle cx="164" cy="191" r="20" />
        <circle cx="246" cy="191" r="20" />
        <circle cx="328" cy="191" r="20" />
        <circle cx="410" cy="191" r="20" />
        
        {/* Fifth row */}
        <circle cx="41" cy="243" r="20" />
        <circle cx="123" cy="243" r="20" />
        <circle cx="205" cy="243" r="20" />
        <circle cx="287" cy="243" r="20" />
        <circle cx="369" cy="243" r="20" />
        <circle cx="451" cy="243" r="20" />
        
        {/* Sixth row */}
        <circle cx="82" cy="295" r="20" />
        <circle cx="164" cy="295" r="20" />
        <circle cx="246" cy="295" r="20" />
        <circle cx="328" cy="295" r="20" />
        <circle cx="410" cy="295" r="20" />
      </g>
    </svg>
  );
  
  const renderIndiaFlag = () => (
    <svg width={flagWidth} height={flagHeight} viewBox="0 0 1350 900" xmlns="http://www.w3.org/2000/svg">
      {/* India flag */}
      <rect width="1350" height="900" fill="#FF9933" />
      <rect y="300" width="1350" height="300" fill="#FFFFFF" />
      <rect y="600" width="1350" height="300" fill="#138808" />
      <circle cx="675" cy="450" r="100" fill="#000080" />
      <circle cx="675" cy="450" r="90" fill="#FFFFFF" />
      <circle cx="675" cy="450" r="20" fill="#000080" />
      
      {/* 24 spokes in Ashoka Chakra - simplified */}
      <g stroke="#000080" strokeWidth="7">
        {Array.from({ length: 24 }).map((_, i) => (
          <line 
            key={i}
            x1="675"
            y1="450"
            x2={675 + Math.cos(i * 15 * Math.PI / 180) * 90}
            y2={450 + Math.sin(i * 15 * Math.PI / 180) * 90}
          />
        ))}
      </g>
    </svg>
  );
  
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: 1,
        ...sx
      }}
    >
      {(country === 'us' || country === 'both') && (
        <Box sx={{ height: flagHeight, width: flagWidth }}>
          {renderUSFlag()}
        </Box>
      )}
      {(country === 'india' || country === 'both') && (
        <Box sx={{ height: flagHeight, width: flagWidth }}>
          {renderIndiaFlag()}
        </Box>
      )}
    </Box>
  );
};

export default FlagIcon;