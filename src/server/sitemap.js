const sm = require('sitemap');

const sitemap = sm.createSitemap({
  hostname: 'http://NEXTJS-BOILERPLATE.com',
  cacheTime: 600000, // 600 sec - cache purge period
});

const setup = async (res) => {
  sitemap.add({
    url: '/',
    changefreq: 'daily',
    priority: 1,
  });

  sitemap.add({
    url: '/about',
    changefreq: 'weekly',
    priority: 1,
  });

  res.send(sitemap.toString());
};

module.exports = setup;
