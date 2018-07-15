# ludwig-token-fetcher

A [Puppetteer](https://github.com/GoogleChrome/puppeteer) script to get Ludwig token.

### How to use

- Install Puppetteer
```
npm i puppeteer
npm install
```

- Change path of Chrome/Chromium in index.js

- Run command to get token
```
node index.js
```
- More token?
```
for ((i = 0; i < 20; i++)); do echo $i; node index.js >> auth.conf; done
```
