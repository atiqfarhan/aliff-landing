# ALIFF Landing Page Deployment Instructions

## 🚀 Quick Deployment to Vercel

### Prerequisites:
1. Vercel account (free)
2. GitHub account (optional, for auto-deploy)

### Method 1: Deploy with Vercel CLI (Fastest)
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
cd aliff-landing
vercel --prod
```

### Method 2: Deploy via Vercel Dashboard
1. Go to https://vercel.com/new
2. Import Git repository or drag & drop the `aliff-landing` folder
3. Configure:
   - Framework Preset: Next.js
   - Root Directory: `aliff-landing`
   - Build Command: `npm run build`
   - Output Directory: `.next`
4. Add Environment Variables (from .env.example)
5. Deploy!

### Method 3: Deploy via GitHub (Auto-deploy)
1. Push code to GitHub repository
2. Connect repo to Vercel
3. Configure environment variables
4. Every push to main branch auto-deploys

## 🌐 Connecting Domain (aliff.app)

After deployment, connect your domain:

1. In Vercel dashboard, go to project → Domains
2. Add `aliff.app` and `www.aliff.app`
3. Update Namecheap DNS:
   - Set nameservers to Vercel's:
     - `ns1.vercel-dns.com`
     - `ns2.vercel-dns.com`
   - OR add A record: `76.76.21.21`
   - AND CNAME: `cname.vercel-dns.com`

## 🔧 Environment Variables Required

Add these in Vercel project settings:
```
CONVERTKIT_API_KEY=BAoYSHafzQkugr9R-4qMcg
CONVERTKIT_API_SECRET=9b70_j5a88jpy2SJbjXeOslH_48FkIarHbpql7gpbz0
CONVERTKIT_FORM_ID=YOUR_FORM_ID_HERE
```

## 📊 Post-Deployment Checklist

- [ ] Test landing page on mobile/desktop
- [ ] Test waitlist form submission
- [ ] Verify ConvertKit integration
- [ ] Check DNS propagation (can take 24h)
- [ ] Set up analytics (Google Analytics 4)
- [ ] Test email forwarding for hello@aliff.app

## 🛠️ Local Development

```bash
cd aliff-landing
npm install
npm run dev
# Open http://localhost:3000
```

## 🚨 Troubleshooting

### Form not submitting?
- Check ConvertKit API key permissions
- Verify form ID exists in ConvertKit
- Check browser console for errors

### DNS not working?
- Wait 24 hours for propagation
- Clear DNS cache: `sudo dscacheutil -flushcache` (Mac)
- Use `dig aliff.app` to check DNS records

### Build failing?
- Check Node.js version (18+)
- Clear Next.js cache: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`