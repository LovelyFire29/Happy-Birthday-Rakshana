/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Enables the Static HTML Export (creates the 'out' folder)
  output: 'export', 

  // 2. CRUCIAL: Sets the correct base path for the GitHub Pages URL
  // This is necessary because your site is hosted at /Happy-Birthday-Rakshana/
  basePath: '/Happy-Birthday-Rakshana', 

  // 3. Disables image optimization (incompatible with static hosting)
  images: {
    unoptimized: true, 
  },

  // 4. Forces trailing slashes for directory routing compatibility
  trailingSlash: true, 
};

export default nextConfig;