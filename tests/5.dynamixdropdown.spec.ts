import {test, expect} from '@playwright/test';

//auto suggestion or hidden element
// Get all the suggested options --> Ctrl+Shift+P  on DOM -->emulate focused page enabled --> disabled
test('Dynamix Dropdown', async ({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    const searchComp = page.locator('.wikipedia-search-input');
    await searchComp.fill('Computer');

    const searchBtn = page.locator('.wikipedia-search-button');
    await searchBtn.click();
    
    // const searchResult = page.locator('#wikipedia-search-result-link');
    // await expect(searchResult).toHaveText('Computer network');

    const searchResult = page.getByRole('link', {name: 'Computer network', exact: true });
    await expect(searchResult).toBeVisible();
    await searchResult.click();

    await page.waitForTimeout(5000);
})