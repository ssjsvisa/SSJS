import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import all language modules
import en from './locales/en';
import hi from './locales/hi';
import te from './locales/te';
import ta from './locales/ta';
import gu from './locales/gu';
import pa from './locales/pa';
import ml from './locales/ml';

// Translation resources
const resources = {
  en,
  hi,
  te,
  ta,
  gu,
  pa,
  ml
};

// Custom language detector that includes location-based detection
const customLanguageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (callback) => {
    // Check if user has manually selected a language
    const savedLanguage = localStorage.getItem('i18nextLng');
    if (savedLanguage) {
      callback(savedLanguage);
      return;
    }

    // Check if geolocation is available
    if ('geolocation' in navigator) {
      // Check geolocation permission
      if ('permissions' in navigator) {
        navigator.permissions.query({ name: 'geolocation' }).then((result) => {
          if (result.state === 'granted' || result.state === 'prompt') {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const { latitude, longitude } = position.coords;
                const detectedLanguage = detectLanguageFromLocation(latitude, longitude);
                callback(detectedLanguage);
              },
              (error) => {
                console.log('Geolocation error:', error);
                callback('en'); // fallback to English
              },
              { timeout: 5000, enableHighAccuracy: false }
            );
          } else {
            callback('en'); // fallback to English if permission denied
          }
        }).catch(() => {
          callback('en'); // fallback to English if permissions API not available
        });
      } else {
        // Permissions API not available, try geolocation directly
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const detectedLanguage = detectLanguageFromLocation(latitude, longitude);
            callback(detectedLanguage);
          },
          (error) => {
            console.log('Geolocation error:', error);
            callback('en'); // fallback to English
          },
          { timeout: 5000, enableHighAccuracy: false }
        );
      }
    } else {
      callback('en'); // fallback to English if geolocation not available
    }
  },
  init: () => {},
  cacheUserLanguage: (lng) => {
    localStorage.setItem('i18nextLng', lng);
  }
};

// Function to detect language based on location
function detectLanguageFromLocation(lat, lng) {
  // Define regions with their approximate boundaries and preferred languages
  const regions = [
    // Andhra Pradesh and Telangana - Telugu
    { bounds: { north: 19.9, south: 12.6, east: 84.8, west: 76.8 }, language: 'te', states: ['Andhra Pradesh', 'Telangana'] },
    
    // Tamil Nadu - Tamil
    { bounds: { north: 13.5, south: 8.1, east: 80.3, west: 76.2 }, language: 'ta', states: ['Tamil Nadu'] },
    
    // Gujarat - Gujarati
    { bounds: { north: 24.7, south: 20.1, east: 74.5, west: 68.2 }, language: 'gu', states: ['Gujarat'] },
    
    // Punjab - Punjabi
    { bounds: { north: 32.5, south: 29.5, east: 76.5, west: 74.0 }, language: 'pa', states: ['Punjab'] },
    
    // Kerala - Malayalam
    { bounds: { north: 12.8, south: 8.3, east: 77.4, west: 74.9 }, language: 'ml', states: ['Kerala'] },
    
    // Hindi belt states - Hindi
    { bounds: { north: 30.0, south: 21.0, east: 88.0, west: 68.0 }, language: 'hi', states: ['Uttar Pradesh', 'Bihar', 'Jharkhand', 'Madhya Pradesh', 'Chhattisgarh', 'Rajasthan', 'Haryana', 'Delhi', 'Uttarakhand', 'Himachal Pradesh'] }
  ];

  // City-specific mappings for more accurate detection
  const cities = [
    // Telugu cities
    { name: 'Hyderabad', lat: 17.3850, lng: 78.4867, language: 'te' },
    { name: 'Visakhapatnam', lat: 17.7231, lng: 83.3245, language: 'te' },
    { name: 'Vijayawada', lat: 16.5062, lng: 80.6480, language: 'te' },
    { name: 'Guntur', lat: 16.3067, lng: 80.4365, language: 'te' },
    { name: 'Nellore', lat: 14.4426, lng: 79.9865, language: 'te' },
    { name: 'Kurnool', lat: 15.8281, lng: 78.0373, language: 'te' },
    { name: 'Rajahmundry', lat: 17.0005, lng: 81.8040, language: 'te' },
    { name: 'Tirupati', lat: 13.6288, lng: 79.4192, language: 'te' },
    { name: 'Warangal', lat: 17.9689, lng: 79.6055, language: 'te' },
    
    // Tamil cities
    { name: 'Chennai', lat: 13.0827, lng: 80.2707, language: 'ta' },
    { name: 'Coimbatore', lat: 11.0168, lng: 76.9558, language: 'ta' },
    { name: 'Madurai', lat: 9.9252, lng: 78.1198, language: 'ta' },
    { name: 'Salem', lat: 11.6643, lng: 78.1460, language: 'ta' },
    { name: 'Tirunelveli', lat: 8.7139, lng: 77.7567, language: 'ta' },
    { name: 'Tiruchirappalli', lat: 10.7905, lng: 78.7047, language: 'ta' },
    { name: 'Erode', lat: 11.3410, lng: 77.7172, language: 'ta' },
    { name: 'Vellore', lat: 12.9165, lng: 79.1325, language: 'ta' },
    { name: 'Thoothukudi', lat: 8.7642, lng: 78.1348, language: 'ta' },
    
    // Gujarati cities
    { name: 'Ahmedabad', lat: 23.0225, lng: 72.5714, language: 'gu' },
    { name: 'Surat', lat: 21.1702, lng: 72.8311, language: 'gu' },
    { name: 'Vadodara', lat: 22.3072, lng: 73.1812, language: 'gu' },
    { name: 'Rajkot', lat: 22.3039, lng: 70.8022, language: 'gu' },
    { name: 'Bhavnagar', lat: 21.7645, lng: 72.1519, language: 'gu' },
    { name: 'Jamnagar', lat: 22.4707, lng: 70.0577, language: 'gu' },
    { name: 'Junagadh', lat: 21.5222, lng: 70.4579, language: 'gu' },
    { name: 'Gandhinagar', lat: 23.2156, lng: 72.6369, language: 'gu' },
    
    // Punjabi cities
    { name: 'Ludhiana', lat: 30.9010, lng: 75.8573, language: 'pa' },
    { name: 'Amritsar', lat: 31.6340, lng: 74.8723, language: 'pa' },
    { name: 'Jalandhar', lat: 31.3260, lng: 75.5762, language: 'pa' },
    { name: 'Patiala', lat: 30.3398, lng: 76.3869, language: 'pa' },
    { name: 'Bathinda', lat: 30.2110, lng: 74.9455, language: 'pa' },
    { name: 'Mohali', lat: 30.7046, lng: 76.7179, language: 'pa' },
    { name: 'Pathankot', lat: 32.2746, lng: 75.6516, language: 'pa' },
    { name: 'Hoshiarpur', lat: 31.5204, lng: 75.9115, language: 'pa' },
    
    // Malayalam cities
    { name: 'Thiruvananthapuram', lat: 8.5241, lng: 76.9366, language: 'ml' },
    { name: 'Kochi', lat: 9.9312, lng: 76.2673, language: 'ml' },
    { name: 'Kozhikode', lat: 11.2588, lng: 75.7804, language: 'ml' },
    { name: 'Thrissur', lat: 10.5276, lng: 76.2144, language: 'ml' },
    { name: 'Kollam', lat: 8.8932, lng: 76.6141, language: 'ml' },
    { name: 'Palakkad', lat: 10.7867, lng: 76.6548, language: 'ml' },
    { name: 'Alappuzha', lat: 9.4981, lng: 76.3388, language: 'ml' },
    { name: 'Malappuram', lat: 11.0510, lng: 76.0711, language: 'ml' },
    { name: 'Kannur', lat: 11.8745, lng: 75.3704, language: 'ml' },
    
    // Hindi speaking cities
    { name: 'Delhi', lat: 28.7041, lng: 77.1025, language: 'hi' },
    { name: 'Mumbai', lat: 19.0760, lng: 72.8777, language: 'hi' },
    { name: 'Kolkata', lat: 22.5726, lng: 88.3639, language: 'hi' },
    { name: 'Bangalore', lat: 12.9716, lng: 77.5946, language: 'hi' },
    { name: 'Pune', lat: 18.5204, lng: 73.8567, language: 'hi' },
    { name: 'Jaipur', lat: 26.9124, lng: 75.7873, language: 'hi' },
    { name: 'Lucknow', lat: 26.8467, lng: 80.9462, language: 'hi' },
    { name: 'Kanpur', lat: 26.4499, lng: 80.3319, language: 'hi' },
    { name: 'Nagpur', lat: 21.1458, lng: 79.0882, language: 'hi' },
    { name: 'Indore', lat: 22.7196, lng: 75.8577, language: 'hi' },
    { name: 'Bhopal', lat: 23.2599, lng: 77.4126, language: 'hi' },
    { name: 'Patna', lat: 25.5941, lng: 85.1376, language: 'hi' },
    { name: 'Agra', lat: 27.1767, lng: 78.0081, language: 'hi' },
    { name: 'Varanasi', lat: 25.3176, lng: 82.9739, language: 'hi' },
    { name: 'Meerut', lat: 28.9845, lng: 77.7064, language: 'hi' },
    { name: 'Allahabad', lat: 25.4358, lng: 81.8463, language: 'hi' },
    { name: 'Ranchi', lat: 23.3441, lng: 85.3096, language: 'hi' },
    { name: 'Raipur', lat: 21.2514, lng: 81.6296, language: 'hi' },
    { name: 'Jodhpur', lat: 26.2389, lng: 73.0243, language: 'hi' },
    { name: 'Gwalior', lat: 26.2183, lng: 78.1828, language: 'hi' }
  ];

  // Function to calculate approximate distance using Haversine formula
  function getDistance(lat1, lng1, lat2, lng2) {
    const R = 6371; // Earth's radius in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  }

  // First, check for closest city match (within 50km)
  let closestCity = null;
  let minDistance = Infinity;
  
  cities.forEach(city => {
    const distance = getDistance(lat, lng, city.lat, city.lng);
    if (distance < minDistance && distance < 50) { // Within 50km
      minDistance = distance;
      closestCity = city;
    }
  });

  if (closestCity) {
    console.log(`Detected city: ${closestCity.name}, Language: ${closestCity.language}`);
    return closestCity.language;
  }

  // If no close city match, check regional boundaries
  for (const region of regions) {
    if (lat >= region.bounds.south && 
        lat <= region.bounds.north && 
        lng >= region.bounds.west && 
        lng <= region.bounds.east) {
      console.log(`Detected region: ${region.states.join(', ')}, Language: ${region.language}`);
      return region.language;
    }
  }

  // Default fallback to English if location doesn't match any region
  console.log('Location not matched to any specific region, defaulting to English');
  return 'en';
}

i18n
  .use(customLanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });

export default i18n;