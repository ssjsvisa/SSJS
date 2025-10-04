const ghpages = require('gh-pages');
const path = require('path');
const fs = require('fs');

console.log('Deploying to separate public repository...');

// Deploy to a separate public repository that only contains built files
// This keeps your source code private while maintaining the live website

const deployToSeparateRepo = () => {
  // Ensure CNAME file doesn't exist in build directory
  const cnamePath = path.join(process.cwd(), 'build', 'CNAME');
  if (fs.existsSync(cnamePath)) {
    console.log('Removing CNAME file...');
    fs.unlinkSync(cnamePath);
  }

  // Option 1: Deploy to the same repo (current approach)
  // You can keep this as is if you make the repo public
  
  // Option 2: Deploy to a separate public repo (recommended for private source)
  // Create a new public repo called "SSJS-website" and deploy there
  // Uncomment the lines below and update with your new repo name:
  
  /*
  ghpages.publish(
    path.join(process.cwd(), 'build'),
    {
      branch: 'main', // or 'gh-pages'
      repo: 'https://github.com/svk-sivakumar/SSJS-website.git', // New public repo
      message: 'Auto-deployment: Update website content',
    },
    (err) => {
      if (err) {
        console.error('Deployment error:', err);
        return;
      }
      console.log('Deployment to separate public repository successful!');
      console.log('Website will be available at: https://svk-sivakumar.github.io/SSJS-website/');
    }
  );
  */

  // For now, deploy to current repo
  ghpages.publish(
    path.join(process.cwd(), 'build'),
    {
      branch: 'gh-pages',
      repo: 'https://github.com/svk-sivakumar/SSJS.git',
      message: 'Auto-deployment: Update site content',
      remove: 'CNAME',
    },
    (err) => {
      if (err) {
        console.error('Deployment error:', err);
        return;
      }
      console.log('Deployment successful!');
    }
  );
};

deployToSeparateRepo();