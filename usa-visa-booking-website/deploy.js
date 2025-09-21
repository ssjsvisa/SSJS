const ghpages = require('gh-pages');
const path = require('path');
const fs = require('fs');

console.log('Starting deployment to GitHub Pages...');

// Ensure CNAME file doesn't exist in build directory
const cnamePath = path.join(process.cwd(), 'build', 'CNAME');
if (fs.existsSync(cnamePath)) {
  console.log('Removing CNAME file...');
  fs.unlinkSync(cnamePath);
}

ghpages.publish(
  path.join(process.cwd(), 'build'),
  {
    branch: 'gh-pages',
    repo: 'https://github.com/svk-sivakumar/SSJS.git',
    message: 'Auto-deployment: Update site content without CNAME',
    // Add this option to remove the CNAME file if it exists in the gh-pages branch
    remove: 'CNAME',
  },
  (err) => {
    if (err) {
      console.error('Deployment error:', err);
      return;
    }
    console.log('Deployment successful!');
  });
