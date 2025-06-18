/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://beans-and-pods.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/404', '/private'],
}
