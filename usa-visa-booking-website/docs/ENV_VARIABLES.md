# Using Environment Variables with Hosting Platforms

Instead of storing sensitive credentials like email passwords in your `.env` file, you can use environment variables provided by hosting platforms. This guide explains how to set up environment variables on popular hosting platforms.

## Common Hosting Platforms

### Vercel

1. Go to your project settings in the Vercel dashboard
2. Navigate to the "Environment Variables" section
3. Add your variables:
   - `EMAIL_USER`: Your email address
   - `EMAIL_PASS`: Your app password (or OAuth credentials)
4. Select which environments (Production, Preview, Development) should have access to these variables
5. Save your changes

### Netlify

1. Go to your site settings in the Netlify dashboard
2. Navigate to "Build & deploy" > "Environment variables"
3. Add your variables:
   - `EMAIL_USER`: Your email address
   - `EMAIL_PASS`: Your app password (or OAuth credentials)
4. Save your changes

### Heroku

1. Go to your app's settings in the Heroku dashboard
2. In the "Config Vars" section, click "Reveal Config Vars"
3. Add your variables:
   - `EMAIL_USER`: Your email address
   - `EMAIL_PASS`: Your app password (or OAuth credentials)
4. No need to restart the app; Heroku will automatically update the environment

### Railway

1. Go to your project in the Railway dashboard
2. Navigate to the "Variables" tab
3. Add your variables:
   - `EMAIL_USER`: Your email address
   - `EMAIL_PASS`: Your app password (or OAuth credentials)
4. Railway will automatically deploy your app with the new variables

## Local Development

For local development, you can:

1. Use a `.env.local` file (which should be in your `.gitignore`)
2. Use environment variables in your command line:

```bash
# Windows (CMD)
set EMAIL_USER=your-email@gmail.com
set EMAIL_PASS=your-app-password
node server.js

# Windows (PowerShell)
$env:EMAIL_USER="your-email@gmail.com"
$env:EMAIL_PASS="your-app-password"
node server.js

# Linux/Mac
EMAIL_USER=your-email@gmail.com EMAIL_PASS=your-app-password node server.js
```

3. Or use a package like `dotenv-vault` to encrypt your environment variables

## Best Practices

1. Never commit sensitive information to your repository
2. Use different credentials for development and production
3. Regularly rotate your credentials
4. Limit the permissions of service accounts to only what's needed
5. Consider using secret management services for team environments