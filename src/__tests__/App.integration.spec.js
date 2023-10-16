const puppeteer = require('puppeteer');

describe('E2E tests', () => {
    let browser, page;

    beforeAll(async () => {
        browser = await puppeteer.launch({
            // required for running with docker container
            headless: true,
            // required for running with docker container
            args: ['--no-sandbox', '--disable-gpu'],

            // for alpine docker image we need to specify the chromium path
            // eslint-disable-next-line no-undef
            executablePath: process.env.CHROME_BIN || null,
        });
        page = await browser.newPage();
        await page.goto('http://localhost:8080',  { waitUntil: 'domcontentloaded' });
    });

    afterAll(() => {
        browser.close();
    });

    it('should be titled "Mike DiDomizio CV"', async () => {
        await expect(page.title()).resolves.toMatch('Mike DiDomizio CV');
    });
});
