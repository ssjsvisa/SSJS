const readline = require('readline');
const fs = require('fs');
const path = require('path');

// Setup readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Path to .env file
const envFilePath = path.join(__dirname, '.env');

console.log('\n====== GMAIL APP PASSWORD SETUP UTILITY ======\n');
console.log('This utility will help you configure your Gmail App Password.');
console.log('It will update your .env file with the provided Gmail app password.\n');
console.log('IMPORTANT: You need to create an App Password from your Google Account:');
console.log('1. Go to https://myaccount.google.com/apppasswords');
console.log('2. Select "Mail" as the app and "Other" as device name (e.g., "SSJS Website")');
console.log('3. Copy the generated 16-character password\n');

// Ask for Gmail address
rl.question('Enter your Gmail address: ', (email) => {
  if (!email || !email.includes('@')) {
    console.log('\nError: Please enter a valid email address.');
    rl.close();
    return;
  }

  // Ask for Gmail App Password
  rl.question('Enter your Gmail App Password (16 characters, no spaces): ', (password) => {
    if (!password || password.length < 10) {
      console.log('\nError: Please enter a valid Gmail App Password (should be 16 characters).');
      rl.close();
      return;
    }

    console.log('\nUpdating .env file...');

    try {
      // Read current .env file
      let envContent = fs.readFileSync(envFilePath, 'utf8');

      // Update EMAIL_USER
      if (envContent.includes('EMAIL_USER=')) {
        envContent = envContent.replace(/EMAIL_USER=.*/, `EMAIL_USER=${email}`);
      } else {
        envContent += `\nEMAIL_USER=${email}`;
      }

      // Update EMAIL_PASS
      if (envContent.includes('EMAIL_PASS=')) {
        envContent = envContent.replace(/EMAIL_PASS=.*/, `EMAIL_PASS=${password}`);
      } else {
        envContent += `\nEMAIL_PASS=${password}`;
      }

      // Write back to .env file
      fs.writeFileSync(envFilePath, envContent);

      console.log('\nSuccess! Your Gmail App Password has been saved to .env file.');
      console.log('You can now start the server with `npm run server` to test email functionality.\n');
    } catch (error) {
      console.error('\nError updating .env file:', error);
      console.log('Please ensure you have write permissions to the .env file.\n');
    }

    rl.close();
  });
});