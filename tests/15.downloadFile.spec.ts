import {test,expect} from "@playwright/test";
import fs, { unlinkSync } from 'fs';

test.only('Download Text File', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/p/download-files_25.html');

    await page.locator('#inputText').fill('Hello');
    await page.locator('#generateTxt').click();

       const [downloadFile] = await Promise.all([
        page.waitForEvent('download'), 
        page.locator('#txtDownloadLink').click()
    ]);

    const downloadPath = 'downloads/testfile.txt';
    await downloadFile.saveAs(downloadPath);

    const verifyFile = fs.existsSync(downloadPath);
    expect (verifyFile).toBeTruthy();

    if(verifyFile){
        fs.unlinkSync(downloadPath);
    }
    await page.waitForTimeout(3000);
})


test('Download PDF File', async ({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/p/download-files_25.html');

    await page.locator('#inputText').fill("Hello PDF");
    await page.locator('#generatePdf').click();

    const [downloadFile] = await Promise.all([
        page.waitForEvent('download') , 
        page.locator('#pdfDownloadLink').click()
    ])
        
    const downloadPath = 'downloads/info.pdf';
    await downloadFile.saveAs(downloadPath);

    const existsFile = fs.existsSync(downloadPath);
    expect(existsFile).toBeTruthy();

    await page.waitForTimeout(3000);
    })










/*
Trigger download → waitForEvent('download') 
Get Download object → download.saveAs() 
Verify file with fs.existsSync()
Cleanup file with fs.unlinkSync()
*/