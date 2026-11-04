import {test,expect} from '@playwright/test'


test('Visual Testing',async ({page})=>{

await page.goto("https://demowebshop.tricentis.com/");


 //await expect (page).toHaveScreenshot();

 //captured for specific element
const featuredProducts=page.locator('.product-grid.home-page-product-grid');
//await expect(featuredProducts).toHaveScreenshot();
await expect(featuredProducts).toHaveScreenshot('featuredProducts.png');
});