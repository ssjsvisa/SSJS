// Image loading utility with fallback support
export const loadImageWithFallbacks = (imageUrls, onSuccess, onAllFailed) => {
  let currentIndex = 0;
  
  const tryLoadImage = () => {
    if (currentIndex >= imageUrls.length) {
      onAllFailed && onAllFailed();
      return;
    }
    
    const img = new Image();
    const currentUrl = imageUrls[currentIndex];
    
    img.onload = () => {
      console.log(`✅ Image loaded successfully: ${currentUrl}`);
      onSuccess && onSuccess(currentUrl);
    };
    
    img.onerror = () => {
      console.warn(`❌ Failed to load image: ${currentUrl}`);
      currentIndex++;
      tryLoadImage();
    };
    
    img.src = currentUrl;
  };
  
  tryLoadImage();
};

// Test specific business meeting images
export const testBusinessImage = () => {
  const businessImageUrls = [
    'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  ];
  
  console.log('🔍 Testing business meeting images...');
  
  loadImageWithFallbacks(
    businessImageUrls,
    (workingUrl) => {
      console.log(`✅ Working business image URL: ${workingUrl}`);
    },
    () => {
      console.error('❌ All business image URLs failed to load');
    }
  );
};