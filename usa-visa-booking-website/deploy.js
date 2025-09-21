const ghpages = require('gh-pages');
const path = require('path');

console.log('Starting deployment to GitHub Pages...');

ghpages.publish(
  path.join(process.cwd(), 'build'),
  {
    branch: 'gh-pages',
    repo: 'https://github.com/svk-sivakumar/SSJS.git',
    message: 'Auto-deployment: Update site content',
  },
  (err) => {
    if (err) {
      console.error('Deployment error:', err);
      return;
    }
    console.log('Deployment successful!');
  }
);
