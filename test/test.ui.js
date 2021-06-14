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
    })
    it('Check button text', async() => {
        const newButtonName = 'Updated Name';
        await page.goto('http://www.uitestingplayground.com/textinput');
        await page.type('#newButtonName', newButtonName, {delay: 100});
        let boton = await page.$('#updatingButton');
        await boton.click();
        expect(await boton.evaluate((val) => val.textContent)).to.contain(newButtonName);
    })
})