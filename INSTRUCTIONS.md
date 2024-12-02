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

1. Make sure your code is committed and pushed to GitHub.

2. If this is your first deployment:
   - Go to your GitHub repository
   - Navigate to Settings > Pages
   - In the "Source" section, select "GitHub Actions"

3. Deploy your site:
```bash
npm run deploy
```

4. Your site will be available at: `https://<your-github-username>.github.io/<repo-name>/`

## Notes

- The site will be deployed to the `gh-pages` branch automatically
- Each time you want to deploy updates, just run `npm run deploy`
- Make sure your repository is public or you have GitHub Pages enabled in your GitHub plan
- The first deployment might take a few minutes to become available

## Troubleshooting

If you encounter any issues:
1. Make sure your repository name is correctly set in `vite.config.ts`
2. Ensure you have proper write permissions to the repository
3. Check if GitHub Pages is enabled in your repository settings
