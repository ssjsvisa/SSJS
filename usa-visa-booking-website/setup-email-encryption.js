const { generateEncryptionKey, encrypt } = require('./utils/encrypt');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const readline = require('readline');

// Setup readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Load environment variables
dotenv.config();

// Path to .env file
const envFilePath = path.join(__dirname, '.env');

// Generate an encryption key
const encryptionKey = generateEncryptionKey();

console.log('\n====== EMAIL PASSWORD ENCRYPTION UTILITY ======\n');
console.log('This utility will help you encrypt your Gmail App Password for more security.');
console.log('It will generate a new encryption key and update your .env file.\n');
console.log('IMPORTANT: You need to create an App Password from your Google Account:');
console.log('1. Go to https://myaccount.google.com/apppasswords');
console.log('2. Select "Mail" as the app and "Other" as device name (e.g., "SSJS Website")');
console.log('3. Copy the generated 16-character password\n');

// Ask for Gmail App Password
rl.question('Enter your Gmail App Password (16 characters, no spaces): ', (password) => {
  if (!password || password.length < 10) {
    console.log('\nError: Please enter a valid Gmail App Password (should be 16 characters).');
    rl.close();
    return;
  }

  // Encrypt the password
  const encryptedPassword = encrypt(password);

  console.log('\nGenerating encryption key and encrypting password...');

  try {
    // Read current .env file
    let envContent = fs.readFileSync(envFilePath, 'utf8');

    // Update ENCRYPTION_KEY
    if (envContent.includes('ENCRYPTION_KEY=')) {
      envContent = envContent.replace(/ENCRYPTION_KEY=.*/, `ENCRYPTION_KEY=${encryptionKey}`);
    } else {
      envContent += `\nENCRYPTION_KEY=${encryptionKey}`;
    }

    // Update EMAIL_PASS with encrypted password - no quotes for better compatibility
    if (envContent.includes('EMAIL_PASS=')) {
      envContent = envContent.replace(/EMAIL_PASS=.*/, `EMAIL_PASS=${encryptedPassword}`);
    } else {
      envContent += `\nEMAIL_PASS=${encryptedPassword}`;
    }

    // Write back to .env file
    fs.writeFileSync(envFilePath, envContent);

    console.log('\nSuccess! Your email password has been encrypted and saved to .env file.');
    console.log('The encryption key has also been saved. Keep your .env file secure!\n');
  } catch (error) {
    console.error('\nError updating .env file:', error);
    console.log('Please ensure you have write permissions to the .env file.\n');
  }

  rl.close();
});