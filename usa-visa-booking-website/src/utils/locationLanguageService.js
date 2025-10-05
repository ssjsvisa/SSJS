// Location-based language detection service
import i18n from '../i18n';

// Geographic coordinates for major Indian cities and nearby regions
const LOCATION_LANGUAGE_MAP = {
  // Delhi and NCR region
  delhi: {
    centerLat: 28.6139,
    centerLng: 77.2090,
    radius: 50, // 50km radius
    language: 'hi',
    regions: ['Delhi', 'New Delhi', 'Gurgaon', 'Noida', 'Faridabad', 'Ghaziabad']
  },
  // Haryana (near Delhi)
  haryana: {
    centerLat: 29.0588,
    centerLng: 76.0856,
    radius: 80,
    language: 'hi',
    regions: ['Haryana', 'Chandigarh']
  },
  // Western UP (near Delhi)
  westernUP: {
    centerLat: 28.9845,
    centerLng: 77.7064,
    radius: 60,
    language: 'hi',
    regions: ['Meerut', 'Muzaffarnagar', 'Saharanpur']
  },
  // Mumbai and surrounding areas (Maharashtra)
  mumbai: {
    centerLat: 19.0760,
    centerLng: 72.8777,
    radius: 120, // Extended radius to cover more of MMR and nearby areas
    language: 'hi',
    regions: ['Mumbai', 'Bombay', 'Navi Mumbai', 'Thane', 'Kalyan', 'Dombivli', 'Vasai', 'Virar', 'Panvel', 'Pune', 'Nashik', 'Aurangabad', 'Maharashtra', 'Bhiwandi', 'Ulhasnagar', 'Ambarnath', 'Badlapur', 'Mira-Bhayandar', 'Bhayander', 'Naigaon', 'Borivali', 'Dahisar', 'Malad', 'Kandivali', 'Santacruz', 'Vile Parle', 'Andheri', 'Goregaon', 'Powai', 'Bandra', 'Kurla', 'Chembur', 'Mankhurd', 'Govandi', 'Trombay', 'Mulund', 'Bhandup', 'Kanjurmarg', 'Ghatkopar', 'Vikhroli', 'Airoli', 'Ghansoli', 'Kopar Khairane', 'Vashi', 'Sanpada', 'Juinagar', 'Nerul', 'Seawoods', 'CBD Belapur', 'Kharghar', 'Kamothe', 'New Panvel', 'Raigad', 'Alibaug', 'Karjat', 'Lonavala', 'Khandala']
  },
  // Punjab and nearby Punjabi-speaking areas
  punjab: {
    centerLat: 31.1471,
    centerLng: 75.3412,
    radius: 150, // Extended radius to cover more of Punjab and nearby areas
    language: 'pa',
    regions: ['Punjab', 'Amritsar', 'Ludhiana', 'Jalandhar', 'Patiala', 'Bathinda', 'Mohali', 'Pathankot', 'Hoshiarpur', 'Batala', 'Kapurthala', 'Abohar', 'Malerkotla', 'Khanna', 'Phagwara', 'Muktsar', 'Barnala', 'Rajpura', 'Firozpur', 'Sunam', 'Sangrur', 'Dhuri', 'Nabha', 'Malout', 'Fazilka', 'Zira', 'Gurdaspur', 'Kharar', 'Gobindgarh', 'Mansa', 'Chandigarh', 'Zirakpur', 'Derabassi', 'Dera Baba Nanak', 'Una', 'Nangal', 'Ropar', 'SAS Nagar']
  },
  // Gujarat
  gujarat: {
    centerLat: 23.0225,
    centerLng: 72.5714,
    radius: 200, // Extended radius to cover more of Gujarat
    language: 'gu',
    regions: ['Gujarat', 'Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar', 'Junagadh', 'Gandhinagar', 'Anand', 'Bharuch', 'Mehsana', 'Morbi', 'Nadiad', 'Surendranagar', 'Vapi', 'Veraval', 'Godhra', 'Palanpur', 'Valsad', 'Navsari', 'Porbandar', 'Dahod', 'Botad', 'Amreli']
  },
  // Tamil Nadu
  tamilNadu: {
    centerLat: 11.1271,
    centerLng: 78.6569,
    radius: 200, // Extended radius to cover more of Tamil Nadu and nearby Tamil-speaking areas
    language: 'ta',
    regions: ['Tamil Nadu', 'Chennai', 'Coimbatore', 'Madurai', 'Salem', 'Tiruchirappalli', 'Tirunelveli', 'Erode', 'Vellore', 'Thoothukudi', 'Dindigul', 'Thanjavur', 'Kanchipuram', 'Cuddalore', 'Kumbakonam', 'Karur', 'Sivakasi', 'Nagercoil', 'Tiruvannamalai', 'Pollachi', 'Rajapalayam', 'Sankarankovil', 'Neyveli', 'Nagapattinam', 'Viluppuram', 'Tiruvallur', 'Pudukkottai', 'Ooty', 'Kodaikanal', 'Rameswaram', 'Kanyakumari', 'Tirupur', 'Hosur', 'Ambur', 'Vaniyambadi', 'Gudiyatham', 'Arakkonam', 'Thiruvallur', 'Sriperumbudur', 'Mahabalipuram', 'Chengalpattu']
  },
  // Andhra Pradesh & Telangana
  telugu: {
    centerLat: 15.9129,
    centerLng: 79.7400,
    radius: 200, // Extended radius to cover more Telugu-speaking areas
    language: 'te',
    regions: ['Andhra Pradesh', 'Telangana', 'Hyderabad', 'Visakhapatnam', 'Vijayawada', 'Guntur', 'Warangal', 'Nellore', 'Kurnool', 'Rajahmundry', 'Tirupati', 'Karimnagar', 'Nizamabad', 'Khammam', 'Mahbubnagar', 'Anantapur', 'Kadapa', 'Eluru', 'Ongole', 'Nalgonda', 'Adilabad', 'Suryapet', 'Miryalaguda', 'Jagtial', 'Mancherial', 'Chittoor', 'Srikakulam', 'Vizianagaram', 'East Godavari', 'West Godavari', 'Krishna', 'Prakasam', 'Medak', 'Rangareddy', 'Secunderabad']
  },
  // Kerala
  kerala: {
    centerLat: 10.8505,
    centerLng: 76.2711,
    radius: 150, // Radius to cover Kerala and nearby Malayalam-speaking areas
    language: 'ml',
    regions: ['Kerala', 'Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Kottayam', 'Thrissur', 'Alappuzha', 'Kollam', 'Palakkad', 'Kannur', 'Kasaragod', 'Wayanad', 'Idukki', 'Pathanamthitta', 'Malappuram', 'Ernakulam', 'Trivandrum', 'Cochin', 'Calicut', 'Munnar', 'Thekkady', 'Kumarakom', 'Varkala', 'Kovalam', 'Alleppey', 'Guruvayur', 'Poovar', 'Bekal', 'Vagamon', 'Ponmudi']
  }
};

// Calculate distance between two coordinates using Haversine formula
const calculateDistance = (lat1, lng1, lat2, lng2) => {
  const R = 6371; // Earth's radius in kilometers
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLng/2) * Math.sin(dLng/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
};

// Detect language based on coordinates
const detectLanguageByCoordinates = (latitude, longitude) => {
  let closestMatch = null;
  let minDistance = Infinity;

  Object.entries(LOCATION_LANGUAGE_MAP).forEach(([region, config]) => {
    const distance = calculateDistance(
      latitude, 
      longitude, 
      config.centerLat, 
      config.centerLng
    );

    if (distance <= config.radius && distance < minDistance) {
      minDistance = distance;
      closestMatch = config;
    }
  });

  return closestMatch ? closestMatch.language : null;
};

// Detect language based on location name/city
const detectLanguageByLocationName = (locationName) => {
  if (!locationName) return null;
  
  const lowerLocationName = locationName.toLowerCase();
  
  for (const [region, config] of Object.entries(LOCATION_LANGUAGE_MAP)) {
    const matchFound = config.regions.some(regionName => 
      lowerLocationName.includes(regionName.toLowerCase()) ||
      regionName.toLowerCase().includes(lowerLocationName)
    );
    
    if (matchFound) {
      return config.language;
    }
  }
  
  return null;
};

// Main function to detect and set language based on location
export const detectAndSetLocationBasedLanguage = () => {
  return new Promise((resolve) => {
    // Check if user has already selected a language manually
    const savedLanguage = localStorage.getItem('i18nextLng');
    if (savedLanguage && savedLanguage !== 'en') {
      console.log('User has manually selected language:', savedLanguage);
      resolve(savedLanguage);
      return;
    }

    // Check if geolocation is supported
    if (!navigator.geolocation) {
      console.log('Geolocation not supported, using default language');
      resolve('en');
      return;
    }

    console.log('Detecting location for language selection...');

    // Get user's location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log(`User location: ${latitude}, ${longitude}`);

        const detectedLanguage = detectLanguageByCoordinates(latitude, longitude);
        
        if (detectedLanguage) {
          console.log(`Location-based language detected: ${detectedLanguage}`);
          i18n.changeLanguage(detectedLanguage);
          localStorage.setItem('locationDetectedLanguage', detectedLanguage);
          resolve(detectedLanguage);
        } else {
          console.log('No specific language detected for location, using default');
          resolve('en');
        }
      },
      (error) => {
        console.log('Geolocation error:', error.message);
        
        // Fallback: Try to detect from browser language or other hints
        const browserLanguage = navigator.language || navigator.languages[0];
        if (browserLanguage) {
          const langCode = browserLanguage.split('-')[0];
          const supportedLanguages = ['hi', 'pa', 'gu', 'ta', 'te', 'ml'];
          
          if (supportedLanguages.includes(langCode)) {
            console.log(`Using browser language: ${langCode}`);
            i18n.changeLanguage(langCode);
            resolve(langCode);
            return;
          }
        }
        
        resolve('en');
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000 // Cache for 5 minutes
      }
    );
  });
};

// Function to manually detect language by city name (for testing or manual input)
export const detectLanguageByCityName = (cityName) => {
  const detectedLanguage = detectLanguageByLocationName(cityName);
  if (detectedLanguage) {
    i18n.changeLanguage(detectedLanguage);
    localStorage.setItem('manualLocationLanguage', detectedLanguage);
    return detectedLanguage;
  }
  return null;
};

// Function to show location permission prompt with explanation
export const requestLocationForLanguage = () => {
  return new Promise((resolve) => {
    // Show a user-friendly prompt explaining why we need location
    const userConsent = window.confirm(
      'We can automatically set your preferred language based on your location. ' +
      'For example:\n' +
      '• Delhi/NCR → Hindi\n' +
      '• Mumbai → Hindi\n' +
      '• Punjab → Punjabi\n' +
      '• Gujarat → Gujarati\n' +
      '• Chennai/Tamil Nadu → Tamil\n' +
      '• Hyderabad/AP/Telangana → Telugu\n' +
      '• Kochi/Kerala → Malayalam\n' +
      'Would you like to share your location for a better experience?'
    );

    if (userConsent) {
      detectAndSetLocationBasedLanguage().then(resolve);
    } else {
      resolve('en');
    }
  });
};

// Debug function to test location detection
export const testLocationDetection = (testLat, testLng) => {
  console.log(`Testing location detection for: ${testLat}, ${testLng}`);
  const detectedLanguage = detectLanguageByCoordinates(testLat, testLng);
  console.log(`Detected language: ${detectedLanguage || 'None (default to English)'}`);
  return detectedLanguage;
};

export default {
  detectAndSetLocationBasedLanguage,
  detectLanguageByCityName,
  requestLocationForLanguage,
  testLocationDetection
};