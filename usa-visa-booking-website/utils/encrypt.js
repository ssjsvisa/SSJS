const crypto = require('crypto');

// Encryption key (should be a 32-byte key for AES-256)
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || crypto.randomBytes(32).toString('hex');

// Initialization vector length
const IV_LENGTH = 16;

/**
 * Encrypts a text string
 * @param {string} text - The plain text to encrypt
 * @returns {string} - The encrypted text (hex encoded)
 */
function encrypt(text) {
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY, 'hex'), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return iv.toString('hex') + ':' + encrypted.toString('hex');
}

/**
 * Decrypts an encrypted string
 * @param {string} text - The encrypted text to decrypt (hex encoded)
 * @returns {string} - The decrypted plain text
 */
function decrypt(text) {
  const textParts = text.split(':');
  const iv = Buffer.from(textParts.shift(), 'hex');
  const encryptedText = Buffer.from(textParts.join(':'), 'hex');
  const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY, 'hex'), iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}

// Simple function to generate a new encryption key
function generateEncryptionKey() {
  return crypto.randomBytes(32).toString('hex');
}

// If run directly from command line, output an encrypted string
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length === 0 || args[0] === '--help') {
    console.log('\nUsage:');
    console.log('  node encrypt.js generate-key     # Generate a new encryption key');
    console.log('  node encrypt.js encrypt "text"   # Encrypt a text string');
    console.log('  node encrypt.js decrypt "text"   # Decrypt an encrypted string\n');
    process.exit(0);
  }

  if (args[0] === 'generate-key') {
    console.log('\nGenerated Encryption Key (add to .env as ENCRYPTION_KEY):');
    console.log(generateEncryptionKey());
    console.log('\n');
  } else if (args[0] === 'encrypt' && args[1]) {
    console.log('\nEncrypted Text:');
    console.log(encrypt(args[1]));
    console.log('\n');
  } else if (args[0] === 'decrypt' && args[1]) {
    try {
      console.log('\nDecrypted Text:');
      console.log(decrypt(args[1]));
      console.log('\n');
    } catch (error) {
      console.error('\nError decrypting text. Make sure you\'re using the correct encryption key.\n');
    }
  } else {
    console.log('\nInvalid command or missing arguments. Use --help for usage information.\n');
  }
}

module.exports = { encrypt, decrypt, generateEncryptionKey };