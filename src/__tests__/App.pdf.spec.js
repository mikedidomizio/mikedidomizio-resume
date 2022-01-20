const puppeteer = require('puppeteer');
const fs = require('fs');
const PdfReader = require('pdfreader').PdfReader;

// todo detect if third page is empty?  A lot of the time it's just an empty page on print
xdescribe('PDF generating test', () => {
    let browser;
    const pdfFile = 'tmp/generated.pdf';
    const maxNumberOfPages = 2;

    it(`PDF should be max ${maxNumberOfPages} pages long`, async () => {
        browser = await puppeteer.launch();
        const page = await browser.newPage();

        // create the directory if it doesn't exist
        const dir = './tmp';
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }

        await page.goto('http://localhost:8080');
        await page.pdf({path: pdfFile, format: 'letter'});

        const pdfBuffer = fs.readFileSync(pdfFile);
        const pdfData = await new Promise((resolve, /*reject*/) => {
            let numberOfPages = 0;
            // page height is 49.5 for letter format
            let pageHeight = 49.5;
            let lastPageItem = 0;
            new PdfReader().parseBuffer(pdfBuffer, function (err, item) {
                if (item) {
                    // is (new) page metadata
                    if (item.page) {
                        numberOfPages = item.page;
                        pageHeight = item.height;
                    }
                    // is something on the page
                    if (item.text) {
                        lastPageItem = item.y;
                    }
                }

                // is done
                if (!item) {
                    resolve({
                        lastPageItem,
                        pageHeight,
                        numberOfPages
                    });
                }
            });
        });

        // in case there is something wrong we want to ensure the PDF has rendered at least something
        expect(pdfData.numberOfPages).toBeGreaterThan(0);

        // the CV should be either less than the max number of pages
        // or if it is one more than the max, it should at least fill a good chunk of the page
        // so it's not mostly an empty page
        expect(pdfData.numberOfPages <= maxNumberOfPages ||
            (pdfData.lastPageItem >= pdfData.pageHeight / 8 && pdfData.numberOfPages <= maxNumberOfPages + 1)).toBeTruthy();
    });

    afterAll(async () => await browser.close());
});
