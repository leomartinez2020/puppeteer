# Puppeteer 2021

Puppeteer is a Node library that can control Chrome or Chromium using the devtools protocol. Here we are going to use the mocha test runner to test user's interaction.

## Install puppeteer and mocha

```
npm init -y
npm i puppeteer mocha chai

```

```
const puppeteer = require('puppeteer');
const expect = require('chai').expect;
const should = require('chai').should();

describe('', () => {
    let browser;
    let page;
    before(async() => {
        browser = await puppeteer.launch();
    });
    
    beforeEach(async() => {
        page = await browser.newPage();
    });
    
    afterEach(async() => {
        await page.close();
    });

    after(async() => {
        await browser.close();
    });
    
    it.skip('should have anchors with images', async() => {
        await page.goto('http://www.uitestingplayground.com/textinput');
        expect(await page.title()).to.contain('Wikipedia');
    });
})

```
![alt text](https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png)

```
```