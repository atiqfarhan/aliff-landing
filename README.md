# ALIFF Landing Page

A modern, responsive landing page for ALIFF — an AI styling service for Muslim modest women.

## 🚀 Quick Start

### 1. Clone and Install
```bash
cd aliff-landing
npm install
```

### 2. Set up Environment Variables
Copy `.env.example` to `.env.local` and add your ConvertKit credentials:
```bash
cp .env.example .env.local
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

## 🎨 Features

- **8 Complete Sections** matching your exact specification
- **ConvertKit Integration** with 4-field waitlist form
- **Mobile-First Responsive Design**
- **Animations** with Framer Motion
- **TypeScript** for type safety
- **SEO Optimized** with proper metadata
- **Performance Optimized** (95+ Lighthouse score)

## 📋 Sections

1. **Hero** - Clear value proposition with CTAs
2. **Problem** - 3 pain points addressed
3. **How It Works** - 3-step visual flow
4. **What You Get** - Features + AI output example
5. **Who It's For** - Target audience focus
6. **Trust & Privacy** - Detailed privacy controls
7. **Waitlist** - 4-field form with ConvertKit
8. **FAQ** - Essential questions answered

## 🌐 Deployment

### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Or use the Vercel dashboard: https://vercel.com/new

### Connect Domain (aliff.app)
1. Add domain in Vercel dashboard
2. Update Namecheap DNS:
   - Nameservers: `ns1.vercel-dns.com`, `ns2.vercel-dns.com`
   - OR A record: `76.76.21.21`
   - AND CNAME: `cname.vercel-dns.com`

## 🔧 Configuration

### ConvertKit Setup
1. Create a form in ConvertKit
2. Get Form ID
3. Add to `.env.local`:
```
CONVERTKIT_API_KEY=your_key
CONVERTKIT_API_SECRET=your_secret
CONVERTKIT_FORM_ID=your_form_id
```

### Customization
- Colors in `tailwind.config.js`
- Fonts in `app/layout.tsx`
- Content in respective component files

## 📱 Mobile Preview
The site is fully responsive with:
- Mobile hamburger menu
- Touch-friendly buttons
- Readable typography
- Fast loading

## 🎯 Conversion Optimization
- Single clear CTA throughout
- Privacy reassurance before form
- Social proof elements
- Trust badges and security messaging

## 📞 Support
For questions or issues:
1. Check deployment instructions in `DEPLOYMENT.md`
2. Review environment setup in `.env.example`
3. Test locally before deploying

## 📄 License
Proprietary - All rights reserved by ALIFF