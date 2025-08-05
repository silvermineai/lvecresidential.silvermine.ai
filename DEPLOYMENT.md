# Deployment Guide for LVEC Residential Website

## Deploying to Vercel

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Login to Vercel:**
   ```bash
   npx vercel login
   ```
   - Choose your preferred login method (GitHub, Google, Email, etc.)
   - Follow the authentication process in your browser

2. **Deploy to Production:**
   ```bash
   npx vercel --prod
   ```
   - When prompted, confirm the project settings:
     - Link to existing project? No (for first deployment)
     - What's your project's name? `lvecresidential`
     - In which directory is your code located? `./` (press Enter)
     - Want to override the settings? No

3. **Your site will be deployed to:**
   - Production URL: `https://lvecresidential.vercel.app`
   - You'll receive the deployment URL after successful deployment

### Option 2: Deploy via GitHub Integration

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial LVEC Residential website"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [https://vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Configure project (defaults should work)
   - Click "Deploy"

### Option 3: Deploy via Vercel Dashboard

1. **Build the project locally:**
   ```bash
   npm run build
   ```

2. **Go to Vercel Dashboard:**
   - Visit [https://vercel.com/new](https://vercel.com/new)
   - Click "Import Project"
   - Choose "Import Git Repository" or drag & drop your project folder

## Environment Variables (if needed later)

If you add environment variables later, add them in:
- Vercel Dashboard > Project Settings > Environment Variables
- Or create a `.env.local` file for local development

## Custom Domain

After deployment, you can add a custom domain:
1. Go to your project in Vercel Dashboard
2. Navigate to Settings > Domains
3. Add your custom domain (e.g., `lvecresidential.com`)
4. Follow DNS configuration instructions

## Post-Deployment Checklist

- [ ] Test all forms and interactions
- [ ] Verify responsive design on mobile devices
- [ ] Check that the contact form modal works
- [ ] Test all navigation links
- [ ] Verify images load correctly
- [ ] Check SEO metadata

## Continuous Deployment

Once connected to GitHub, every push to the `main` branch will automatically trigger a new deployment.

## Support

For issues with deployment, refer to:
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)