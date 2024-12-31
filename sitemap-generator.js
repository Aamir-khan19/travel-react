import { createWriteStream } from 'fs';
import { SitemapStream } from 'sitemap';
import axios from 'axios';
import conf from './conf/conf.js';

// Mock data fetching function for dynamic routes
const fetchDynamicRoutes = async () => {
    const { data } = await axios.get(`${conf.laravelBaseUrl}/api/public-blogs`);
    return data;
};

const generateSitemap = async () => {
  const smStream = new SitemapStream({ hostname: 'https://travelnworld.com' }); // Replace with your domain
  const writeStream = createWriteStream('./public/sitemap.xml');

  smStream.pipe(writeStream);

  // Static routes
  const staticRoutes = [
    '/',
    '/about',
    '/contact',
    '/blog',
    '/testimonials',
    '/privacyPolicy',
    '/terms',
    '/b2b-signup',
    '/b2b-login',
  ];

  staticRoutes.forEach((route) => {
    smStream.write({ url: route, changefreq: 'weekly', priority: 0.8 });
  });

  // Fetch dynamic routes
  const data = await fetchDynamicRoutes();

  // Add dynamic blog routes
  data.forEach((elem) => {
    smStream.write({ url: `/blog/${elem?.blog_slug}`, changefreq: 'weekly', priority: 0.7 });
  });


  smStream.end();

  console.log('Sitemap generated successfully!');
};

generateSitemap();
