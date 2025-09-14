/** @type {import('next').NextConfig} */
const nextConfig = {
  // AWS Amplify supports Next.js SSR, so we keep ISR enabled
  // No need for output: 'export' since we want server-side features
  
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