// clean-ghpages.js
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

console.log('Cleaning gh-pages branch...');

// Create temp directory
const tempDir = path.join(os.tmpdir(), 'gh-pages-clean-' + Math.random().toString(36).substr(2, 9));
fs.mkdirSync(tempDir, { recursive: true });

try {
  // Clone only the gh-pages branch to temp directory
  console.log('Cloning gh-pages branch...');
  execSync(`git clone --branch gh-pages --single-branch https://github.com/svk-sivakumar/SSJS.git ${tempDir}`, {
    stdio: 'inherit'
  });
  
  // Check if CNAME exists
  const cnamePath = path.join(tempDir, 'CNAME');
  if (fs.existsSync(cnamePath)) {
    console.log('CNAME file found, removing it...');
    fs.unlinkSync(cnamePath);
    
    // Commit and push changes
    process.chdir(tempDir);
    execSync('git config user.name "Automated Script"', { stdio: 'inherit' });
    execSync('git config user.email "no-reply@example.com"', { stdio: 'inherit' });
    execSync('git add -A', { stdio: 'inherit' });
    execSync('git commit -m "Remove CNAME file"', { stdio: 'inherit' });
    execSync('git push', { stdio: 'inherit' });
    
    console.log('CNAME removed from gh-pages branch');
  } else {
    console.log('No CNAME file found in gh-pages branch');
  }
} catch (error) {
  console.error('Error cleaning gh-pages branch:', error);
} finally {
  // Clean up
  console.log('Cleaning up temporary directory...');
  fs.rmSync(tempDir, { recursive: true, force: true });
}