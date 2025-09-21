# Setting Up OAuth2 Authentication for Gmail

This guide explains how to set up OAuth2 authentication for sending emails through Gmail in your Node.js application.

## Why OAuth2?

OAuth2 is more secure than using passwords because:
- No need to store your password in the code/config files
- You can limit the permissions granted to the application
- You can revoke access at any time without changing your Gmail password
- It's the recommended approach by Google for accessing Gmail APIs

## Setup Steps

### 1. Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or select an existing one)
3. Give it a name like "SSJS Email Service"

### 2. Enable the Gmail API

1. In the Google Cloud Console, go to "APIs & Services" > "Library"
2. Search for "Gmail API" and enable it for your project

### 3. Configure the OAuth Consent Screen

1. Go to "APIs & Services" > "OAuth consent screen"
2. Select "External" user type (unless you have a Google Workspace account)
3. Fill in the required information:
   - App name: "SSJS Email Service"
   - User support email: Your email address
   - Developer contact information: Your email address
4. Add the scope: `https://mail.google.com/`
5. Add your email as a test user

### 4. Create OAuth2 Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "OAuth client ID"
3. Select "Web application" as the application type
4. Name it "SSJS Email Client"
5. Add authorized redirect URIs:
   - http://localhost:3001/oauth2callback
6. Click "Create"
7. Note your Client ID and Client Secret

### 5. Generate Refresh Token

You can generate a refresh token using this script (save it as `generate-token.js`):

```javascript
const { google } = require('googleapis');
const http = require('http');
const url = require('url');
const opn = require('open');
const destroyer = require('server-destroy');
const fs = require('fs');

// Replace with your OAuth2 credentials
const CLIENT_ID = 'YOUR_CLIENT_ID';
const CLIENT_SECRET = 'YOUR_CLIENT_SECRET';
const REDIRECT_URI = 'http://localhost:3001/oauth2callback';

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

const SCOPES = ['https://mail.google.com/'];

function getAuthenticatedClient() {
  return new Promise((resolve, reject) => {
    // Generate the url that will be used for the consent dialog.
    const authorizeUrl = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES,
      prompt: 'consent',
    });

    // Open a server to handle the callback
    const server = http
      .createServer(async (req, res) => {
        try {
          // Get the code from the callback
          const parsedUrl = new URL(req.url, 'http://localhost:3001');
          const code = parsedUrl.searchParams.get('code');

          if (code) {
            // Get tokens
            const { tokens } = await oauth2Client.getToken(code);
            console.log('Tokens acquired!');
            console.log(tokens);

            // Save to file
            fs.writeFileSync('tokens.json', JSON.stringify(tokens));
            console.log('Tokens saved to tokens.json');

            // Send response
            res.end('Authentication successful! You can close this window.');

            // Resolve with the authenticated client
            resolve(oauth2Client);

            // Close the server
            server.close(() => console.log('Server closed'));
            // Destroy the server
            server.destroy();
          }
        } catch (e) {
          reject(e);
        }
      })
      .listen(3001, () => {
        // Open the browser to the authorize url to start the workflow
        opn(authorizeUrl, { wait: false }).then(cp => cp.unref());
      });
    destroyer(server);
  });
}

// Start the auth flow
getAuthenticatedClient().catch(console.error);
```

To run this script:
1. Install required packages:
   ```
   npm install googleapis open server-destroy
   ```
2. Replace `CLIENT_ID` and `CLIENT_SECRET` with your values
3. Run the script:
   ```
   node generate-token.js
   ```
4. Follow the browser prompts to authorize your application
5. Check the console output for your tokens

### 6. Update Your .env File

Add the credentials to your `.env` file:
```
EMAIL_USER=your-email@gmail.com
OAUTH_CLIENT_ID=your-client-id.apps.googleusercontent.com
OAUTH_CLIENT_SECRET=your-client-secret
OAUTH_REFRESH_TOKEN=your-refresh-token
OAUTH_ACCESS_TOKEN=  # Leave blank, it will be obtained using the refresh token
OAUTH_EXPIRES=3600
```

### 7. Test Your Setup

Run your server and test sending an email. If everything is set up correctly, you should be able to send emails without storing your password.

## Troubleshooting

- **Invalid Grant**: Your refresh token might have expired. Repeat step 5 to generate a new token.
- **Access Denied**: Check your OAuth consent screen settings and ensure you've added the correct scopes.
- **Invalid Credentials**: Double-check your client ID and client secret.