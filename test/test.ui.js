const puppeteer = require('puppeteer');
//const should = require('chai').should();
const expect = require('chai').expect;
const config = require('./config');

describe('Test UI', () => {
    let browser;
    let page;

    before(async() => {
        browser = await puppeteer.launch(config.launchOptions);
    });

    after(async() => {
        await browser.close();
    });

    beforeEach(async() => {
        page = await browser.newPage();
    });

    it('Check button text', async() => {
        const newButtonName = config.buttonName;
        await page.goto(config.baseUrl);
        await page.type('#newButtonName', newButtonName, {delay: 100});
        let boton = await page.$('#updatingButton');
        await boton.click();
        expect(await boton.evaluate((val) => val.textContent)).to.contain(newButtonName);
    })
})