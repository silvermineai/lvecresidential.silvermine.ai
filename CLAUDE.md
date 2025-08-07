# Tech Stack

- Use nextjs, tailwindcss. Default to markdown files whenever possible (like for content, or blog posts, etc)
- Use nextjs for static site generation. npm run build should produce static output.
- Use Cloudflare for deployment and image hosting. Create some `cloudflare-images.js` file that has reference IDs to the cloudflare images. Create a seamless process

# Setup

- Set up Github actions
- Set up `npm install -g sitespeed.io` for a speed check. Use https://github.com/sitespeedio/sitespeed.io for instructions if you need guidance.
- All changes must go through a GitHub PR
- Set up Google Lighthouse for a CI
- Try to use a _manifset.yaml to organize all the info from `./INFO.md` is correct.
- Make sure the README.md is simple and straight to the point - this is to guide me, the human, on the few things I need to know how to do (like how to upload my images to the cloudflare image registry if I add a new image)
- Set up Cloudflare github actions so it pulls from this repo and deploys on pages. Ask me if you need any help.
- In the first draft of the app, use stock photos or any photos that you can generate that are relevant for the section.

# Before a PR

- Do a /security-review
- Run sitespeed.io and make any changes
- Run google lighthouse and ensure everything is at least 98%. If you try 3 times to get above 98% after following the feedback and making improvements, then 
- Ensure all suggestions in `./seo-checklist.md` are properly implemented.
- Ensure all info from `./_manifest.yaml` is correct on the site.

# Style

- Whenever it looks like you can parameterize something (like lists, sections, etc), do so.
- If you find code you think shoudl be refactored into a parameterization
