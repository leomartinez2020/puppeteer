# Puppeteer 2021

Puppeteer is a Node library that can control Chrome or Chromium using the devtools protocol. Here we are going to use the mocha test runner to test user's interaction.

## Install puppeteer and mocha

![alt text](https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png)

```
npm init -y
npm i puppeteer mocha chai

```

Then we create a folder named "test" and inside it we create a test file, for example, 'test.ui.js':

```
const puppeteer = require('puppeteer');
const should = require('chai').should();
const expect = require('chai').expect;

describe('Test UI', () => {
    let browser;
    let page;

    before(async() => {
        browser = await puppeteer.launch();
    });

    after(async() => {
        await browser.close();
    });

    beforeEach(async() => {
        page = await browser.newPage();
    });

    it('Check button text', async() => {
        const newButtonName = 'Updated Name';
        await page.goto('http://www.uitestingplayground.com/textinput');
        await page.type('#newButtonName', newButtonName, {delay: 100});
        let button = await page.$('#updatingButton');
        await button.click();
        expect(await button.evaluate((val) => val.textContent)).to.contain(newButtonName);
    });
})
```

## Select HTML elements

Select element with id 'password':

```
await page.$('#password');
```

Select all elements with CSS class 'table_feed':

```
await page.$$('.table_feed');
```

Select element with attribute:

```
await page.$('[type=submit]');
await page.$('[aria-label="Sign in"]');
await page.$('#sign-in[aria-label="Sign in"]');
await page.$('[data-test-id="3"]');

const divItems = await page.$('div.items');
// Element context
const item = await divItems.$('[test-item]');
```

Xpath Selectors:

```
await page.$x('//div//a');
await page.$x('/div//a');
await page.$x('//div/a');
await page.$x('//div@class="items"');
await page.$x('//div[text()="panel"]');
await page.$x('//*[text()="panel"]');
await page.$x('//*[contains(text(), "panel")]');
```
