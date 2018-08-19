# ludwig-token-fetcher

A [Puppeteer](https://github.com/GoogleChrome/puppeteer) script to fetch Ludwig token.

### How to use

- Install Puppeteer
```
npm i puppeteer
npm install
```

- Change path of Chrome/Chromium in index.js

- Run command to fetch token
```
node index.js
```
- Need more token?
```
for ((i = 0; i < 20; i++)); do echo $i; node index.js >> auth.conf; done
```
