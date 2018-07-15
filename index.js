const puppeteer = require('puppeteer');

var chrome="/usr/bin/chromium"
var isheadless=true

puppeteer.launch({executablePath: chrome, headless: isheadless}).then(async browser => {
  const page = await browser.newPage();

  await page.goto('https://ludwig.guru');
  const json = await page.evaluate(async () => {
    id = localStorage.getItem('ludwig.lgid').replace(/['"]+/g, '');
    return(JSON.parse(window.atob(id)))
  })

  console.log(json['token'])
  await browser.close();
});
