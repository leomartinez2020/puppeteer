const PageModel = require('./pom/PageModel.js');
const puppeteer = require('puppeteer');
const should = require('chai').should();
const config = require('../config');

describe('Test POM', () => {
    let pageModel;
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
        pageModel = new PageModel(page, config);
        await pageModel.go();
    })
    it('pommo', async() => {
        (await pageModel.title()).should.contain(config.pageTitle);
    })
})