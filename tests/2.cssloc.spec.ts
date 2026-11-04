import {test, expect} from '@playwright/test';


//tagwithid #id
//tagwith class .class
//tagwithattr [attribute name=value]
//tagwithclass&att tag.class[an=v]


//tagwithid #id
// test('CSS locators', async ({page}) =>{
//     await page.goto('https://www.amazon.com/');

//     //search teh pro #id
//     const search = page.locator('#twotabsearchtextbox');
//     await search.fill('Yoga Mat');

//     //click the search btn  #id
//     const searchBtn = page.locator('#nav-search-submit-button');
//     await searchBtn.click();

//     //first product
//     const firstProd = page.locator('a.a-link-normal').nth(4);
//     await firstProd.click();
//     await page.waitForTimeout(5000);

//     //product name
//     const productTitle = page.locator('#productTitle').first();
//     await expect (productTitle).toContainText('Gaiam Thick Yoga Mat');
// })

test('Amazon end-to-end flow using CSS locators', async ({ page }) => {

    // Open Amazon
    await page.goto('https://www.amazon.com/');

    // Search product
    const searchBox = page.locator('#twotabsearchtextbox');
    await searchBox.fill('Face Wash');

    const searchButton = page.locator('#nav-search-submit-button');
    await searchButton.click();

    // Click product
    const product = page.locator('a.a-link-normal').nth(4);
    await product.click();

    // Verify product title
    const productTitle = page.locator('#productTitle');

    await expect(productTitle).toBeVisible();
    await expect(productTitle).toContainText('Face Wash');

    // Add to cart
    const addToCart = page.locator('#add-to-cart-button');
    await addToCart.click();

    // Verify cart
    const cart = page.locator('#nav-cart');
    await expect(cart).toBeVisible();

});