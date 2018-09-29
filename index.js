const puppeteer = require("puppeteer");
const atob = require("atob");

var chrome = "/usr/bin/chromium";
var isheadless = true;

puppeteer
  .launch({ executablePath: chrome, headless: isheadless })
  .then(async browser => {
    const page = await browser.newPage();

    await page.goto("https://ludwig.guru/s/ludwig");
    let cookie = await page.cookies();

    let jwt = cookie.filter(c => c["name"] == "_ljwt");
    let json = JSON.parse(atob(jwt[0]["value"]));

    console.log(json["token"]);
    await browser.close();
  });
