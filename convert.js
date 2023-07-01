const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('file:///index.html');
  await page.pdf({ path: 'cv_en.pdf', format: 'A4' });
  await browser.close();
})();
