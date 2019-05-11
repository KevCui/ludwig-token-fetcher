const puppeteer = require('puppeteer');
const atob = require('atob');

(async () => {
  const num = process.argv[2] || 1;
  const isheadless = true;
  const chrome = '/usr/bin/chromium';

  const browser = await puppeteer.launch({executablePath: chrome, headless: isheadless});
  for (i = 0; i < num; i++) {
    const context = await browser.createIncognitoBrowserContext();
    const page = await context.newPage();
    await page.goto('https://ludwig.guru/s/ludwig', {timeout: 10000, waitUntil: 'domcontentloaded'});

    let cookie = await page.cookies()
    let jwt = cookie.filter(c => c['name'] === '_ljwt')
    let json = JSON.parse(atob(jwt[0]['value']))

    console.log(json['token'])
    await context.close()
  }

  await browser.close()
})();
