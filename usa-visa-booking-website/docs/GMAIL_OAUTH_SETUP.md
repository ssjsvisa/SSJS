# Setting Up Gmail OAuth2 for SSJS Visa Booking Website

This guide will walk you through the process of setting up OAuth2 authentication with Gmail for sending emails from your application.

## Step 1: Create a Google Cloud Project

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Click on the project dropdown at the top and select "New Project"
3. Name your project (e.g., "SSJS Visa Email Service") and click "Create"
4. Make sure your new project is selected in the project dropdown

## Step 2: Enable the Gmail API

1. In the left sidebar, go to "APIs & Services" > "Library"
2. Search for "Gmail API"
3. Click on "Gmail API" in the results
4. Click "Enable"

## Step 3: Configure the OAuth Consent Screen

1. In the left sidebar, go to "APIs & Services" > "OAuth consent screen"
2. Select "External" as the user type (unless you have a Google Workspace account)
3. Click "Create"
4. Fill in the required information:
   - App name: "SSJS Visa Email Service"
   - User support email: Your email address
   - Developer contact information: Your email address
5. Click "Save and Continue"
6. On the "Scopes" page, click "Add or Remove Scopes"
7. Add the scope: `https://mail.google.com/` (search for it in the filter)
8. Click "Update" and then "Save and Continue"
9. On the "Test users" page, click "Add Users"
10. Add your own email address (the one you'll use to send emails)
11. Click "Save and Continue", then "Back to Dashboard"

## Step 4: Create OAuth Client ID

1. In the left sidebar, go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" and select "OAuth client ID"
3. Application type: "Web application"
4. Name: "SSJS Visa Email Client"
5. Authorized redirect URIs: Add "http://localhost:3001/oauth2callback"
6. Click "Create"
7. You'll see a popup with your client ID and client secret - note these down
   (You can always access these later from the Credentials page)

## Step 5: Update Your .env File

Update your `.env` file with the OAuth credentials:

```
PORT=3001
EMAIL_USER=your-email@gmail.com

# OAuth2 credentials
OAUTH_CLIENT_ID=your-client-id.apps.googleusercontent.com
OAUTH_CLIENT_SECRET=your-client-secret
```

## Step 6: Generate OAuth Tokens

1. Open the `generate-oauth-token.js` file and replace:
   - `YOUR_CLIENT_ID` with your actual client ID
   - `YOUR_CLIENT_SECRET` with your actual client secret

2. Run the script to generate your tokens:
   ```
   node generate-oauth-token.js
   ```

3. This will open your browser to a Google login page
4. Log in with the email account you want to use for sending emails
5. Grant the requested permissions
6. You'll be redirected to a success page
7. Check your terminal - it should show the tokens and confirm they've been saved to `gmail-tokens.json`

## Step 7: Test Your Setup

1. Start your server:
   ```
   npm run server
   ```

2. Test sending an email through your contact form

## Troubleshooting

If you encounter issues:

1. **"Invalid Client" Error**: Double-check your client ID and secret
2. **"Access Not Configured" Error**: Ensure the Gmail API is enabled
3. **"Invalid Grant" Error**: Your refresh token may have expired; re-run the token generation script
4. **"Not a valid origin" Error**: Make sure your redirect URI exactly matches what's configured in Google Cloud Console

## Security Notes

- Never commit your `gmail-tokens.json` file to version control
- Add `gmail-tokens.json` to your `.gitignore` file
- For production deployment, use environment variables provided by your hosting platform rather than files