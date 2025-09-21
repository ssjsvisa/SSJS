const { google } = require('googleapis');
const http = require('http');
const url = require('url');
const open = require('open');
const destroyer = require('server-destroy');
const fs = require('fs');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Get OAuth credentials from environment variables
const CLIENT_ID = process.env.OAUTH_CLIENT_ID;
const CLIENT_SECRET = process.env.OAUTH_CLIENT_SECRET;
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
          if (!req.url.startsWith('/oauth2callback')) {
            res.end('Invalid callback URL');
            return;
          }

          const qs = new url.URL(req.url, 'http://localhost:3001').searchParams;
          const code = qs.get('code');

          if (code) {
            // Get tokens
            const { tokens } = await oauth2Client.getToken(code);
            console.log('Tokens acquired!');
            console.log(tokens);

            // Save to file
            fs.writeFileSync('gmail-tokens.json', JSON.stringify(tokens, null, 2));
            console.log('Tokens saved to gmail-tokens.json');

            // Send response
            res.end('Authentication successful! You can close this window and check the terminal for your tokens.');

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
        console.log('Opening browser for authentication...');
        open(authorizeUrl).catch(() => {
          console.log('Failed to open browser automatically. Please open this URL manually:');
          console.log(authorizeUrl);
        });
      });
    destroyer(server);
  });
}

async function main() {
  try {
    console.log('Starting OAuth2 authentication flow...');
    await getAuthenticatedClient();
  } catch (error) {
    console.error('Error during authentication:', error);
  }
}

// Start the auth flow
main();