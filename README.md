# Alex Johnson Portfolio

A professional portfolio website for a cybersecurity specialist. This site is built with Next.js and optimized for static deployment on Cloudflare Pages.

## Features

- Responsive design with dark mode
- Static site generation for fast loading
- Optimized for Cloudflare Pages deployment
- Professional portfolio sections: Experience, Skills, Certifications, Projects, Blog, Contact

## Getting Started

### Prerequisites

- Node.js 18+ or Bun 1.0+
- Git

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/alex-johnson-portfolio.git
cd alex-johnson-portfolio
```

2. Install dependencies
```bash
# Using npm
npm install

# Using Bun (recommended)
bun install
```

3. Run the development server
```bash
# Using npm
npm run dev

# Using Bun
bun run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Building for Production

```bash
# Using npm
npm run build

# Using Bun
bun run build
```

The static files will be generated in the `out` directory, which can be deployed to any static hosting service.

## Deploying to Cloudflare Pages

### Manual Deployment

1. Build the project
```bash
npm run build
```

2. Install Wrangler CLI (if not already installed)
```bash
npm install -g wrangler
```

3. Login to Cloudflare
```bash
wrangler login
```

4. Create a new Cloudflare Pages project
```bash
wrangler pages project create alex-johnson-portfolio
```

5. Deploy the project
```bash
wrangler pages deploy out
```

### GitHub Integration

You can also set up automatic deployments from GitHub:

1. Push your repository to GitHub

2. Go to the Cloudflare Pages dashboard

3. Create a new project and connect your GitHub repository

4. Configure the build settings:
   - Build command: `npm run build`
   - Build output directory: `out`

5. Deploy!

### Environment Variables

For manual GitHub Actions deployment, set the following repository secrets:

- `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token with Pages permissions
- `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID

## License

MIT
