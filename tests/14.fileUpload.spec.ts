import {test,expect} from "@playwright/test";

test('Single File Upload', async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator('#singleFileInput').setInputFiles('data/test1.txt');
    await page.getByRole('button', {name: 'Upload Single File'}).click();
    //await page.locator('button:has-text("Upload Single File")').click();

    const msg =  await page.locator('#singleFileStatus').innerText();
    expect(msg).toContain('test1.txt');
    await page.waitForTimeout(3000);
})

test.only('Multiple Files', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('#multipleFilesInput').setInputFiles(['data/test1.txt', 'data/test2.pdf']);
    await page.getByRole('button', {name:'Upload Multiple Files'}).click();

    const msg = await page.locator('#multipleFilesStatus').innerText();
    expect (msg).toContain('test1.txt');
    expect (msg).toContain('test2.pdf'); 

    await page.waitForTimeout(3000);
})

/*
 File upload has a method called setInputFiles() for single or multiple file upload we use this

*/