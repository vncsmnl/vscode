/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  // App Router is now stable in Next.js 14
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? '/vscode' : '',
  assetPrefix: isProd ? '/vscode/' : '',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
