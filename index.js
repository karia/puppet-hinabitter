const puppeteer = require('puppeteer');

(async() => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://www.facebook.com/pg/hinabitter/posts/');
  await page.screenshot({path: 'hinabita1.png', fullPage: true});
  await console.log("screenshot");
  await page.waitFor(10000);

  await page.evaluate(_ => {
    window.scrollBy(0, window.innerHeight);
  });
  await page.waitFor(10000);
  await page.screenshot({path: 'hinabita2.png', fullPage: true});
  await console.log("screenshot");

  await browser.close();
})();
