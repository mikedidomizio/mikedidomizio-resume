const puppeteer = require('puppeteer');

describe('E2E tests', () => {
    let browser, page;

    beforeAll(async () => {
        const size = {
            width: 600,
            height: 800,
        };
        browser = await puppeteer.launch({
            headless: false,
            args: [`--window-size=${size.width},${size.height}`]
        });
        page = await browser.newPage();
        await page.setViewport({ width: size.width, height: size.height });
        await page.goto('http://localhost:8080');
    });

    afterAll(() => {
        browser.close();
    });

    it('should be titled "Mike DiDomizio CV"', async () => {
        await expect(page.title()).resolves.toMatch('Mike DiDomizio CV');
    });
});
