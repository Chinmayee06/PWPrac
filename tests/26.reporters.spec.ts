/*
 install - npm install -D allure-playwright
 before executing this need to run CLI - npm install -g allure-commandline and check allure --version
    generate report - allure generate ./allure-results -o ./allure-report
    view report - allure open ./allure-report
 clear report - allure generate ./allure-results -o and allure generate ./allure-report --clean
*/
import {test,expect} from '@playwright/test';

test.beforeEach('launching app',async({page})=>{
await page.goto("https://demowebshop.tricentis.com/")
})

test('logotest', async ({ page }) => {
    await expect(page.locator("img[alt='Tricentis Demo Web Shop']")).toBeVisible();
});

// test('title test', async ({ page }) => {
//     expect(await page.title()).toContain("Demo Web Shop");
// });

// test('search test', async ({ page }) => {
//     await page.locator('#small-searchterms').fill("laptop");  // fill teh text in search box
//     await page.locator("input[value='Search']").click();      // click on the button
//     await expect.soft(page.locator('h2 a').nth(0)).toContainText("laptop", { ignoreCase: true });
// });