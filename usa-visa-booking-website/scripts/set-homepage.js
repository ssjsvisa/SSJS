#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const platform = process.argv[2];

if (!platform || !['github', 'firebase'].includes(platform)) {
  console.error('Usage: node set-homepage.js [github|firebase]');
  process.exit(1);
}

const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Set homepage based on platform
if (platform === 'github') {
  packageJson.homepage = 'https://ssjsvisa.github.io/SSJS';
  console.log('✅ Homepage set to GitHub Pages: https://ssjsvisa.github.io/SSJS');
} else if (platform === 'firebase') {
  packageJson.homepage = 'https://ssjsus.web.app';
  console.log('✅ Homepage set to Firebase: https://ssjsus.web.app');
}

// Write back to package.json
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');

console.log(`🔧 Package.json updated for ${platform} deployment`);