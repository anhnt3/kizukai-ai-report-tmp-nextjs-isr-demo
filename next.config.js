/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for AWS Amplify SSR deployment
  output: 'standalone',
  
  // Optimize images (Amplify supports this)
  images: {
    domains: [], // Add any external image domains if needed
  },
  
  // Environment-specific configurations
  env: {
    CUSTOM_KEY: 'my-value',
  },
};

module.exports = nextConfig;