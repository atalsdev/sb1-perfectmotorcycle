import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { Readable } from 'stream';

const sitemap = new SitemapStream({ hostname: 'https://your-perfect-motorcycle.com' });

const writeStream = createWriteStream('./dist/sitemap.xml');

const links = [
  { url: '/', changefreq: 'daily', priority: 1 },
  { url: '/quiz', changefreq: 'weekly', priority: 0.8 },
  { url: '/results', changefreq: 'weekly', priority: 0.7 },
];

streamToPromise(Readable.from(links).pipe(sitemap)).then((data) => {
  writeStream.write(data.toString());
  console.log('Sitemap generated successfully!');
});