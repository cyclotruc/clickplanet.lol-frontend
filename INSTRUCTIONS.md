# GitHub Pages Deployment Instructions

## Setup

1. First, install the required dependencies:
```bash
npm install
```

2. In `vite.config.ts`, replace `<repo-name>` with your actual GitHub repository name.

## Local Development

To run the project locally:
```bash
npm run dev
```

## Deployment

1. Enable GitHub Pages:
   - Go to your GitHub repository
   - Navigate to Settings > Pages
   - Under "Build and deployment":
     - Source: Select "GitHub Actions"
   - Save the changes

2. The site will automatically deploy when you:
   - Push to the main branch
   - Or manually trigger the workflow from the Actions tab

3. Your site will be available at: `https://<your-github-username>.github.io/<repo-name>/`

## Notes

- The site is automatically built and deployed via GitHub Actions
- Each push to main will trigger a new deployment
- You can also manually trigger deployments from the Actions tab
- The first deployment might take a few minutes to become available

## Troubleshooting

If you encounter any issues:
1. Make sure your repository name is correctly set in `vite.config.ts`
2. Check the Actions tab for any workflow failures
3. Ensure GitHub Pages is enabled in your repository settings
4. Verify you have the correct permissions set up
