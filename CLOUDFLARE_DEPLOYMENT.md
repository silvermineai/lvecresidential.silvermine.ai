# Cloudflare Pages Deployment Guide

## Quick Setup Instructions

### 1. Connect Your GitHub Repository

1. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
2. Sign in to your Cloudflare account (or create one - it's free)
3. Click "Create a project"
4. Choose "Connect to Git"
5. Select GitHub and authorize Cloudflare
6. Choose the repository: `silvermineai/lvecresidential.silvermine.ai`

### 2. Configure Build Settings

When setting up the project, use these exact settings:

- **Framework preset**: Next.js (Static HTML Export)
- **Build command**: `npm run build`
- **Build output directory**: `out`
- **Root directory**: `/` (leave blank)
- **Environment variables**: None needed

### 3. Deploy

Click "Save and Deploy" - Cloudflare will:
- Clone your repository
- Install dependencies
- Build the static site
- Deploy it globally

### 4. Your Site URLs

After deployment, you'll get:
- **Cloudflare URL**: `https://lvecresidential.pages.dev`
- **Custom domain option**: You can add your own domain later

## Automatic Deployments

- **Production**: Every push to `main` branch auto-deploys
- **Preview**: Every pull request gets a preview URL
- **Rollback**: Easy rollback to previous deployments in the dashboard

## Build Settings Summary

```
Build command: npm run build
Build output directory: out
Root directory: /
Node version: 18 or higher (auto-detected)
```

## Custom Domain (Optional)

To add a custom domain like `lvecresidential.com`:
1. Go to your project in Cloudflare Pages
2. Click "Custom domains"
3. Add your domain
4. Update your DNS settings as instructed

## Advantages of Cloudflare Pages

- ✅ Free SSL certificate
- ✅ Global CDN (faster than GitHub Pages)
- ✅ Unlimited bandwidth
- ✅ Preview deployments for branches
- ✅ Web Analytics included
- ✅ No build time limits
- ✅ Supports Next.js static export perfectly

## Troubleshooting

If the build fails:
1. Check the build logs in Cloudflare dashboard
2. Ensure `npm run build` works locally
3. Verify the `out` directory is created after build

## Support

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Next.js on Cloudflare](https://developers.cloudflare.com/pages/framework-guides/nextjs/)