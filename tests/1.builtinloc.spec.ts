import {test, expect} from '@playwright/test';

//page.getByRole
//page.getByLabel
//page.getByPlaceholder
//page.getByTitle
//page.getByAltText
//page.getByText
//page.getByTestID


test('Built-in Locators', async ({page}) =>{

    await page.goto('https://www.amazon.com/');

//     //search the product
//     //const search = page.getByRole('button', {name : 'searchbox'});
//     const search = page.getByRole('searchbox');
//     await search.fill('Face Wash');

//     //click the search button
//     const searchBtn = page.getByRole('button', {name: 'submit'}).first();
//     await searchBtn.click();

//     //click the first product
//     // const firstProduct = page.getByLabel('Neutrogena Hydro Boost Hydrating Face Wash & Makeup Remover, 7.8 fl. oz');
//  const firstProduct = page.getByRole('heading', {
//         name: /Neutrogena Hydro Boost Hydrating Face Wash/
//     }).first();    await firstProduct.click();

//page.getByLabel
// const searchAmazon =page.getByLabel('Search Amazon');
// await searchAmazon.fill('Face Trimmer');

// const searchBtn = page.getByRole('button', {name: 'submit'}).first();
// await searchBtn.click();

//page.getByAltText
const logo = page.getByRole('link', {name : 'Amazon', exact: true });
await expect(logo).toBeVisible();

    await page.waitForTimeout(3000);
})
