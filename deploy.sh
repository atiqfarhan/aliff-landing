#!/bin/bash

# ALIFF Landing Page Deployment Helper
echo "🚀 ALIFF Landing Page Deployment"
echo "================================"

# Check for Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

# Check if in correct directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Run this script from the aliff-landing directory"
    echo "💡 Try: cd /path/to/aliff-landing"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create environment file if it doesn't exist
if [ ! -f ".env.local" ]; then
    echo "🔧 Creating .env.local from example..."
    cp .env.example .env.local
    echo "⚠️  Please update .env.local with your ConvertKit credentials"
fi

# Test locally
echo "🧪 Testing locally..."
echo "💡 Run: npm run dev"
echo "💡 Then open: http://localhost:3000"

# Deploy options
echo ""
echo "🌐 Deployment Options:"
echo "1. Deploy to Vercel (Recommended)"
echo "   Run: vercel --prod"
echo ""
echo "2. Deploy via Vercel Dashboard"
echo "   Go to: https://vercel.com/new"
echo "   Drag & drop the aliff-landing folder"
echo ""
echo "3. Deploy via GitHub"
echo "   Push to GitHub, then connect to Vercel"
echo ""
echo "🔗 After deployment, connect aliff.app domain:"
echo "   - In Vercel dashboard → Domains"
echo "   - Add aliff.app"
echo "   - Update Namecheap DNS"
echo ""
echo "✅ Done! The landing page is ready for deployment."