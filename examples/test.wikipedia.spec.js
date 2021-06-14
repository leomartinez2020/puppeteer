const puppeteer = require('puppeteer');
const expect = require('chai').expect;
const should = require('chai').should();
const fs = require('fs');

describe('Visit wikipedia landing page in Spanish', () => {
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
        await page.goto('https://es.wikipedia.org/wiki/Wikipedia:Portada');
        expect(await page.title()).to.contain('Wikipedia');
        const imagen = await page.$('img');
        expect(await imagen.evaluate((node) => node.getAttribute('alt'))).to.contain('Arianna');
        const image_parent = (await imagen.$x('..'))[0];
        expect(await image_parent.evaluate((node) => node.getAttribute('href'))).to.contain('wikimedia');
        let data = await image_parent.evaluate((node) => node.getAttribute('href'));
        fs.writeFileSync('href.txt', data);
    });

    it('should have anchors with images', async() => {
        await page.goto('https://es.wikipedia.org/wiki/Wikipedia:Portada');
        expect(await page.title()).to.contain('Wikipedia');
        const imagenes = await page.$$('img');
        for (let i = 0; i < imagenes.length; i++) {
            expect(await imagenes[i].evaluate((node) => node.getAttribute('alt'))).to.be.a('string');
            let altValues = await imagenes[i].evaluate((node) => node.getAttribute('alt'));
            console.log(altValues);
        }
        // const image_parent = (await imagen.$x('..'))[0];
        // expect(await image_parent.evaluate((node) => node.getAttribute('href'))).to.contain('wikimedia');
        // let data = await image_parent.evaluate((node) => node.getAttribute('href'));
        // fs.writeFileSync('href.txt', data);
    })
})
