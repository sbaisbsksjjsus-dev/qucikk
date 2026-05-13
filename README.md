This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Deploy on Cloudflare Pages

This project is configured for static deployment on Cloudflare Pages.

### Automatic Deployment (Recommended)

1. Connect your GitHub repository to [Cloudflare Pages](https://pages.cloudflare.com/)
2. Use these build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: `/` (leave empty)
3. The `wrangler.toml` file in this repository contains the necessary configuration

### Manual Deployment

If you prefer to deploy manually:

```bash
# Install Wrangler CLI
npm install -g wrangler

# Build the project
npm run build

# Deploy to Cloudflare Pages
npx wrangler pages deploy out
```

### Configuration Details

- **Static Export**: The project uses Next.js static export (`output: 'export'`)
- **Image Optimization**: Disabled for static deployment (`images.unoptimized: true`)
- **Node Version**: 22 (configured in `wrangler.toml`)

For more information about deploying Next.js to Cloudflare Pages, see the [official documentation](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-nextjs-site/).
