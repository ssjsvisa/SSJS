// Standardized font system with only 4 font sizes for all languages
export const getLanguageStyles = (language) => {
  // Simplified font system: Large (2rem), Medium (1.25rem), Regular (1rem), Small (0.875rem)
  const standardFontStyles = {
    typography: {
      lineHeight: 1.5,
    },
    textField: {
      '& .MuiInputBase-input::placeholder': {
        fontSize: '1rem', // Regular
        lineHeight: 1.5,
      },
      '& .MuiInputLabel-root': {
        fontSize: '1rem', // Regular
        lineHeight: 1.4,
      },
      '& .MuiOutlinedInput-root': {
        '& textarea': {
          lineHeight: 1.5,
          fontSize: '1rem', // Regular
        },
        '& input': {
          fontSize: '1rem', // Regular
        }
      }
    },
    title: {
      fontSize: '2rem', // Large
      lineHeight: 1.3,
    },
    subtitle: {
      fontSize: '1.25rem', // Medium
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem', // Regular
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem', // Small
      lineHeight: 1.4,
    },
    h1: {
      fontSize: '2rem', // Large
      lineHeight: 1.3,
    },
    h2: {
      fontSize: '2rem', // Large
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.25rem', // Medium
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.25rem', // Medium
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.25rem', // Medium
      lineHeight: 1.4,
    },
    h6: {
      fontSize: '1rem', // Regular
      lineHeight: 1.4,
    },
    caption: {
      fontSize: '0.875rem', // Small
      lineHeight: 1.4,
    },
    button: {
      fontSize: '1rem', // Regular
      lineHeight: 1.4,
    },
    // Component-specific styles
    hero: {
      title: {
        fontSize: '2rem', // Large
        lineHeight: 1.3,
      },
      subtitle: {
        fontSize: '1.25rem', // Medium
        lineHeight: 1.4,
      }
    },
    card: {
      title: {
        fontSize: '1.25rem', // Medium
        lineHeight: 1.4,
      },
      content: {
        fontSize: '1rem', // Regular
        lineHeight: 1.5,
      }
    },
    navigation: {
      fontSize: '1rem', // Regular
      lineHeight: 1.4,
    },
    footer: {
      title: {
        fontSize: '1.25rem', // Medium
        lineHeight: 1.4,
      },
      content: {
        fontSize: '1rem', // Regular
        lineHeight: 1.4,
      }
    },
    // Special styles for section titles and form labels
    sectionTitle: {
      fontSize: '2rem', // Large
      lineHeight: 1.3,
      fontWeight: 600,
    },
    formLabel: {
      fontSize: '1rem', // Regular
      lineHeight: 1.4,
    }
  };

  // Tamil specific styles - standardized font system
  const tamilStyles = {
    ...standardFontStyles,
    typography: {
      ...standardFontStyles.typography,
      fontFamily: '"Noto Sans Tamil", "Roboto", "Arial", sans-serif',
    }
  };

  // Telugu specific styles - standardized font system
  const teluguStyles = {
    ...standardFontStyles,
    typography: {
      ...standardFontStyles.typography,
      fontFamily: '"Noto Sans Telugu", "Roboto", "Arial", sans-serif',
    }
  };

  // Hindi specific styles - standardized font system
  const hindiStyles = {
    ...standardFontStyles,
    typography: {
      ...standardFontStyles.typography,
      fontFamily: '"Noto Sans Devanagari", "Roboto", "Arial", sans-serif',
    }
  };

  // Gujarati specific styles - standardized font system
  const gujaratiStyles = {
    ...standardFontStyles,
    typography: {
      ...standardFontStyles.typography,
      fontFamily: '"Noto Sans Gujarati", "Roboto", "Arial", sans-serif',
    }
  };

  // Punjabi specific styles - standardized font system
  const punjabiStyles = {
    ...standardFontStyles,
    typography: {
      ...standardFontStyles.typography,
      fontFamily: '"Noto Sans Gurmukhi", "Roboto", "Arial", sans-serif',
    }
  };

  // Malayalam specific styles - standardized font system
  const malayalamStyles = {
    ...standardFontStyles,
    typography: {
      ...standardFontStyles.typography,
      fontFamily: '"Noto Sans Malayalam", "Roboto", "Arial", sans-serif',
    }
  };

  // English styles - standardized font system  
  const englishStyles = {
    ...standardFontStyles,
    typography: {
      ...standardFontStyles.typography,
      fontFamily: '"Roboto", "Arial", sans-serif',
    }
  };

  switch (language) {
    case 'ta':
      return tamilStyles;
    case 'te':
      return teluguStyles;
    case 'hi':
      return hindiStyles;
    case 'gu':
      return gujaratiStyles;
    case 'pa':
      return punjabiStyles;
    case 'ml':
      return malayalamStyles;
    case 'en':
      return englishStyles;
    default:
      // Return English styles for any unknown language
      return englishStyles;
  }
};

// Hook to get language styles
export const useLanguageStyles = (language) => {
  return getLanguageStyles(language);
};

// Common component styles that can be applied directly
export const applyLanguageStyles = (component, styles, variantStyles = {}) => {
  return {
    ...styles.typography,
    ...styles[component],
    ...variantStyles
  };
};