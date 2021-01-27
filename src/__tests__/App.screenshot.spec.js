const puppeteer = require('puppeteer');
const { toMatchImageSnapshot } = require('jest-image-snapshot');
const path = require('path');

expect.extend({ toMatchImageSnapshot });

describe('Visual regression tests', () => {
    let browser, page;
    let snapshotOptions = {};

    beforeAll(async () => {
        // running in CI will produce different results therefire we save to a different directory
        if (process.env.NODE_CI) {
            snapshotOptions = {
                customSnapshotsDir: path.join(__dirname, "__image_snapshots__/ci")
            }
        } else {
            snapshotOptions = {
                customSnapshotsDir: path.join(__dirname, "__image_snapshots__/windows")
            }
        }

        browser = await puppeteer.launch({
            // required for running with docker container
            // because the docker container can only run headless, ensure saved screenshots
            // are committed in `headless: true` otherwise docker tests will fail
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

    it('should match 600x800 screen width', async() => {
        await page.setViewport({ width: 600, height: 800 });
        const image = await page.screenshot({ fullPage: true });
        expect(image).toMatchImageSnapshot(snapshotOptions);
    });

    it('should match 900x800 screen width', async() => {
        await page.setViewport({ width: 900, height: 800 });
        const image = await page.screenshot({ fullPage: true });
        expect(image).toMatchImageSnapshot(snapshotOptions);
    });

    it('should match 1200x800 screen width', async() => {
        await page.setViewport({ width: 1200, height: 800 });
        const image = await page.screenshot({ fullPage: true });
        expect(image).toMatchImageSnapshot(snapshotOptions);
    });

    it('should match 1800x800 screen width', async() => {
        await page.setViewport({ width: 1800, height: 800 });
        const image = await page.screenshot({ fullPage: true });
        expect(image).toMatchImageSnapshot(snapshotOptions);
    });
});
