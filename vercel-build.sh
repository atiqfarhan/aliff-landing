#!/bin/bash
echo "🔧 Starting Vercel build for ALIFF..."
echo "📦 Installing dependencies..."
npm install --silent
echo "🚀 Building Next.js application..."
npm run build
echo "✅ Build completed successfully!"