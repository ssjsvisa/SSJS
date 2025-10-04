# Analytics Setup for USA Visa Booking Website

This guide explains how to set up visitor tracking for your website using Google Analytics.

## Google Analytics Setup

### 1. Create a Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/) and sign in with your Google account
2. Click "Start measuring" to begin
3. Provide account details:
   - Account name: "SSJS USA Visa Services" (or your preferred name)
   - Data sharing settings: Configure according to your preferences
   - Click "Next"

### 2. Create a Property

1. Property name: "USA Visa Booking Website"
2. Reporting time zone: Select your local time zone
3. Currency: Select your preferred currency
4. Click "Next"

### 3. Business Information

1. Fill in your business information
2. Click "Create"

### 4. Get Your Tracking ID

1. After property creation, you'll see your Measurement ID (format: G-XXXXXXXXXX)
2. Copy this ID

### 5. Update Your Project

1. Open the `.env` file in your project root
2. Replace `G-XXXXXXXXXX` with your actual Measurement ID:
   ```
   REACT_APP_GA_TRACKING_ID=G-XXXXXXXXXX
   ```
3. Save the file

### 6. Build and Deploy

1. Run `npm run build` to create an optimized build
2. Deploy with `npm run deploy`

## Viewing Analytics Data

To view information about who is visiting your website:

1. Go to [Google Analytics](https://analytics.google.com/)
2. Navigate to your property
3. In the left sidebar, you can find:
   - **Realtime**: See who is on your site right now
   - **Audience**: View demographics, geography, and behavior
   - **Acquisition**: Learn how visitors find your site
   - **Behavior**: See which pages are most popular
   - **Conversions**: Track completed goals

## Privacy Considerations

Remember to update your website's privacy policy to disclose:

1. That you use Google Analytics
2. What data you collect
3. How you use this data
4. Options for users to opt out

## Resources

- [Google Analytics Help Center](https://support.google.com/analytics/)
- [GA4 Getting Started Guide](https://support.google.com/analytics/answer/9306384)
- [Google Analytics for React Apps](https://developers.google.com/analytics/devguides/collection/ga4/views?technology=websites)