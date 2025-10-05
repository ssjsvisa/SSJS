#!/usr/bin/env pwsh

# Firebase Deployment Script
# This script ensures environment variables are loaded before building and deploying

Write-Host "🔥 Firebase Deployment Script" -ForegroundColor Yellow
Write-Host "==============================" -ForegroundColor Yellow

# Check if .env file exists
if (-not (Test-Path ".env")) {
    Write-Host "❌ Error: .env file not found!" -ForegroundColor Red
    Write-Host "Please create a .env file with your environment variables." -ForegroundColor Red
    exit 1
}

# Load environment variables from .env file
Write-Host "📄 Loading environment variables..." -ForegroundColor Blue
Get-Content ".env" | Where-Object { $_ -match "^[^#].*=" } | ForEach-Object {
    $name, $value = $_ -split "=", 2
    $value = $value.Trim('"')
    Set-Item -Path "env:$name" -Value $value
    Write-Host "   ✓ $name" -ForegroundColor Green
}

try {
    # Build the project
    Write-Host "🔨 Building the project..." -ForegroundColor Blue
    npm run build
    
    if ($LASTEXITCODE -ne 0) {
        throw "Build failed"
    }
    
    # Deploy to Firebase
    Write-Host "🚀 Deploying to Firebase..." -ForegroundColor Blue
    firebase deploy
    
    if ($LASTEXITCODE -ne 0) {
        throw "Deployment failed"
    }
    
    Write-Host "✅ Deployment complete!" -ForegroundColor Green
    Write-Host "🌐 Your site is live at: https://ssjsus.web.app" -ForegroundColor Cyan
    
} catch {
    Write-Host "❌ Deployment failed: $_" -ForegroundColor Red
    exit 1
}