// remove-cname.js
const fs = require('fs');
const path = require('path');

// Paths to check for CNAME files
const publicCnamePath = path.join(__dirname, 'public', 'CNAME');
const buildCnamePath = path.join(__dirname, 'build', 'CNAME');

// Remove from public directory if exists
if (fs.existsSync(publicCnamePath)) {
  console.log('Removing CNAME from public directory...');
  fs.unlinkSync(publicCnamePath);
}

// Remove from build directory if exists
if (fs.existsSync(buildCnamePath)) {
  console.log('Removing CNAME from build directory...');
  fs.unlinkSync(buildCnamePath);
}

console.log('CNAME check complete');