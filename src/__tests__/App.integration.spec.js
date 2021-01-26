const puppeteer = require('puppeteer');

describe('E2E tests', () => {
    let browser, page;

    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: true,
        });
        page = await browser.newPage();
        await page.goto('http://localhost:8080');
    });

    afterAll(() => {
        browser.close();
    });

    it('should be titled "Mike DiDomizio CV"', async () => {
        await expect(page.title()).resolves.toMatch('Mike DiDomizio CV');
    });
});
