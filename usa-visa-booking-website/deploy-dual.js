#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 SSJS Dual Platform Deployment');
console.log('==================================');

// Check if .env file exists (optional - can use inline env vars)
const hasEnvFile = fs.existsSync('.env');
if (!hasEnvFile) {
    console.log('⚠️  No .env file found - using inline environment variables');
}

// Function to set environment variables
function setEnvVars() {
    // Set environment variables directly in Node.js process
    process.env.REACT_APP_GA_TRACKING_ID = 'G-12GC9DVGHT';
    process.env.REACT_APP_EMAILJS_SERVICE_ID = 'service_qiychvj';
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID = 'template_8wm946d';
    process.env.REACT_APP_EMAILJS_USER_ID = 'INgIoTycuxyTDj900';
    
    console.log('✅ Environment variables set');
}

// Function to deploy to GitHub Pages
function deployToGitHub() {
    console.log('\n📘 Deploying to GitHub Pages...');
    try {
        setEnvVars();
        execSync('npm run deploy:github', { stdio: 'inherit', env: process.env });
        console.log('✅ GitHub Pages deployment complete!');
        console.log('🌐 GitHub Pages URL: https://ssjsvisa.github.io/SSJS');
    } catch (error) {
        console.error('❌ GitHub Pages deployment failed:', error.message);
        return false;
    }
    return true;
}

// Function to deploy to Firebase
function deployToFirebase() {
    console.log('\n🔥 Deploying to Firebase...');
    try {
        setEnvVars();
        execSync('npm run deploy:firebase', { stdio: 'inherit', env: process.env });
        console.log('✅ Firebase deployment complete!');
        console.log('🌐 Firebase URL: https://ssjsus.web.app');
    } catch (error) {
        console.error('❌ Firebase deployment failed:', error.message);
        return false;
    }
    return true;
}

// Main deployment logic
const args = process.argv.slice(2);
const platform = args[0];

if (!platform) {
    console.log('🎯 Deploying to both platforms...\n');
    
    const githubSuccess = deployToGitHub();
    const firebaseSuccess = deployToFirebase();
    
    console.log('\n📊 Deployment Summary:');
    console.log('======================');
    console.log(`GitHub Pages: ${githubSuccess ? '✅ Success' : '❌ Failed'}`);
    console.log(`Firebase: ${firebaseSuccess ? '✅ Success' : '❌ Failed'}`);
    
    if (githubSuccess && firebaseSuccess) {
        console.log('\n🎉 Both deployments completed successfully!');
        console.log('🌐 Your sites are live at:');
        console.log('   • GitHub Pages: https://ssjsvisa.github.io/SSJS');
        console.log('   • Firebase: https://ssjsus.web.app');
    }
} else if (platform === 'github') {
    deployToGitHub();
} else if (platform === 'firebase') {
    deployToFirebase();
} else {
    console.error('❌ Invalid platform. Use: node deploy-dual.js [github|firebase]');
    console.log('Or run without arguments to deploy to both platforms.');
    process.exit(1);
}