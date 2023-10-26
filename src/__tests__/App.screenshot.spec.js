const puppeteer = require('puppeteer');
const {toMatchImageSnapshot} = require('jest-image-snapshot');
const path = require('path');

expect.extend({toMatchImageSnapshot});

describe('Visual regression tests', () => {
    let browser, page;
    let snapshotOptions = {};

    beforeAll(async () => {
        // running in CI will produce different results therefore we save to a different directory
        if (process.env.NODE_CI) {
            snapshotOptions = {
                customSnapshotsDir: path.join(__dirname, "__image_snapshots__/ci")
            }
        } else {
            snapshotOptions = {
                customSnapshotsDir: path.join(__dirname, "__image_snapshots__/local")
            }
        }

        browser = await puppeteer.launch({
            // required for running with docker container
            // because the docker container can only run headless, ensure saved screenshots
            // are committed in `headless: true` otherwise docker tests will fail
            headless: true,
            // required for running with docker container
            args: ['--no-sandbox', '--disable-gpu'],

            // for alpine docker image we need to specify the chromium path
            executablePath: process.env.CHROME_BIN || null,
        });
        page = await browser.newPage();
        await page.goto('http://localhost:8080', {waitUntil: 'domcontentloaded'});
        // helps to wait for rendering
        await page.waitForTimeout(2000);
    });

    afterAll(() => {
        browser.close();
    });

    const resolutions = [
        // 4K
        [3840, 2160],
        // Quad HD
        [2560, 1440],
        // taken from https://gs.statcounter.com/screen-resolution-stats
        // April 2020 - April 2021
        [1366, 768],
        [1920, 1080],
        [360, 640],
        [414, 896],
        [375, 667],
        [1536, 864],
        [360, 780],
        [360, 760],
        [375, 812],
        [1440, 900],
        [768, 1024],
        [360, 720],
        [1280, 720],
    ];

    for (let resolution of resolutions) {
        it(`should match ${resolution[0]}x${resolution[1]} screen resolution`, async () => {
            await page.setViewport({width: resolution[0], height: resolution[1]});
            const image = await page.screenshot({fullPage: true});
            expect(image).toMatchImageSnapshot(snapshotOptions);
        });
    }
});
