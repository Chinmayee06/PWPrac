/*
beforeAll()
afterAll()
beforeEach()
afterEach()
*/

import {test, expect, Page} from '@playwright/test';

let page: Page;

test.beforeAll('Open App', async({browser}) =>{
    page = await browser.newPage();
    await page.goto('https://www.demoblaze.com/');
    console.log("beforeAll...");
})

test.afterAll('Closing App', async () => {
   await page.close();
    console.log("afterAll...");
})

test.beforeEach('Login', async () =>{
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('Chin');
    await page.locator('#loginpassword').fill('Chin@123');
    await page.getByRole('button', {name: 'Log in', exact: true}).click();
    console.log("beforeEach...");
})

test.afterEach('Logout', async () =>{
    await page.locator('#logout2').click();
    console.log("afterEach...");
})

test.describe('Group', async () =>{

   test('Find No Of products', async () => {
        const products = page.locator('#tbodyid .hrefch');
        const count = await products.count();
        console.log('Number of products:', count);
        await expect(products).toHaveCount(9);
    });

    test('Add Product to cart', async () => {
        await page.locator("text='Samsung galaxy s6'").click();

        // Handle alert before the click
        page.on('dialog', async (dialog) => {
            expect(dialog.message()).toContain('Product added');
            await dialog.accept();
        });
        await page.locator('.btn.btn-success.btn-lg').click();
    });
})