#!/usr/bin/env pwsh
# Script para fazer build e push para GitHub Pages

Write-Host "=== Nova Geração Roleplay - Deploy to GitHub ===" -ForegroundColor Cyan

# Step 1: Build
Write-Host "`n[1/3] Building production files..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed!" -ForegroundColor Red
    exit 1
}
Write-Host "✓ Build completed successfully" -ForegroundColor Green

# Step 2: Stage changes
Write-Host "`n[2/3] Staging changes..." -ForegroundColor Yellow
git add .
Write-Host "✓ Changes staged" -ForegroundColor Green

# Step 3: Commit and push
Write-Host "`n[3/3] Committing and pushing to GitHub..." -ForegroundColor Yellow
$message = Read-Host "Enter commit message (default: 'Update site')"
if ([string]::IsNullOrEmpty($message)) { $message = "Update site" }

git commit -m $message
git push

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✓ Deployment completed! GitHub Pages will update in a few minutes." -ForegroundColor Green
} else {
    Write-Host "`n✗ Push failed. Check your Git configuration." -ForegroundColor Red
}
