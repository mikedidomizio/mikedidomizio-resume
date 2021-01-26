const puppeteer = require('puppeteer');
const { toMatchImageSnapshot } = require('jest-image-snapshot');

expect.extend({ toMatchImageSnapshot });

describe('E2E tests', () => {
    let browser, page;

    beforeAll(async () => {
        const size = {
            width: 600,
            height: 800,
        };
        browser = await puppeteer.launch({
            headless: false,
            // args: [`--window-size=${size.width},${size.height}`]
        });
        page = await browser.newPage();
        await page.goto('http://localhost:8080');
    });

    afterAll(() => {
        browser.close();
    });

    it('should match 600x800 screen width', async() => {
        await page.setViewport({ width: 600, height: 800 });
        const image = await page.screenshot({ fullPage: true });
        expect(image).toMatchImageSnapshot();
    });

    it('should match 900x800 screen width', async() => {
        await page.setViewport({ width: 900, height: 800 });
        const image = await page.screenshot({ fullPage: true });
        expect(image).toMatchImageSnapshot();
    });

    it('should match 1200x800 screen width', async() => {
        await page.setViewport({ width: 1200, height: 800 });
        const image = await page.screenshot({ fullPage: true });
        expect(image).toMatchImageSnapshot();
    });

    it('should match 1800x800 screen width', async() => {
        await page.setViewport({ width: 1800, height: 800 });
        const image = await page.screenshot({ fullPage: true });
        expect(image).toMatchImageSnapshot();
    });
});
