// src/config.js

const dev = {
  BASE_URL: 'http://localhost:3000',
};

const prod = {
  BASE_URL: 'https://portfolio-backend-sepia-nine.vercel.app/',  // Replace with your real production URL
};

const config = process.env.NODE_ENV === 'development' ? dev : prod;

export default config;
