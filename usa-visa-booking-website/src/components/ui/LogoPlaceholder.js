import React from 'react';
import { Box } from '@mui/material';

const LogoPlaceholder = ({ compact = false }) => (
  <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 200 60"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Logo Background */}
      <rect width="200" height="60" rx="6" fill="#214b8e" />
      
      {/* US Flag Icon */}
      <rect x="22" y="20" width="18" height="10" fill="#B22234" />
      <g fill="#FFFFFF">
        {[...Array(7)].map((_, i) => (
          <rect key={i} y={i * 1.4 + 20} width="18" height="0.7" />
        ))}
      </g>
      <rect x="22" y="20" width="7" height="5" fill="#3C3B6E" />
      
      {/* Passport Icon */}
      <rect x="45" y="15" width="22" height="30" rx="2" fill="#FFFFFF" />
      <rect x="47" y="20" width="18" height="20" rx="1" fill="#f5f5f5" />
      <rect x="50" y="23" width="12" height="4" rx="1" fill="#e0e0e0" />
      <rect x="50" y="29" width="12" height="4" rx="1" fill="#e0e0e0" />
      <rect x="50" y="35" width="12" height="2" rx="0.5" fill="#e0e0e0" />
      
      {/* India Flag Icon */}
      <rect x="168" y="20" width="18" height="10" fill="#FF9933" />
      <rect x="168" y="23.33" width="18" height="3.33" fill="#FFFFFF" />
      <rect x="168" y="26.67" width="18" height="3.33" fill="#138808" />
      
      {/* Logo Text */}

      {/* Logo Text */}
      <text
        x="100"
        y="30"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize={compact ? "18" : "22"}
        fontWeight="bold"
        fontFamily="'Arial', sans-serif"
      >
        SSJS
      </text>
      
      {!compact && (
        <>
          <text
            x="100"
            y="45"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="12"
            fontFamily="'Arial', sans-serif"
          >
            Visa Services
          </text>
        </>
      )}
    </svg>
  </Box>
);

export default LogoPlaceholder;