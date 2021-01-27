const puppeteer = require('puppeteer');

describe('E2E tests', () => {
    let browser, page;

    beforeAll(async () => {
        browser = await puppeteer.launch({
            // required for running with docker container
            headless: true,
            // required for running with docker container
            args: ['--no-sandbox'],
        });
        page = await browser.newPage();
        await page.goto('http://localhost:8080',  { waitUntil: 'domcontentloaded' });
        // helps to wait for rendering
        await page.waitForTimeout(2000);
    });

    afterAll(() => {
        browser.close();
    });

    it('should be titled "Mike DiDomizio CV"', async () => {
        await expect(page.title()).resolves.toMatch('Mike DiDomizio CV');
    });
});
