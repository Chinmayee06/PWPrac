import {test, expect} from '@playwright/test';

test("Flaky Test", async ({page}) =>{

 await page.goto('https://www.demoblaze.com/index.html');

 await page.getByRole('link', {name:'Log in'}).click();
 await page.locator('#loginusername').fill('Chin');
 await page.locator('#loginpassword').fill('Chin@123');
 await page.getByRole('button', {name: 'Log in'}).click();

 await page.waitForTimeout(3000);
})

/*
using config - retries:3
command - npx playwright test tests/flxy.spec.ts --retries=3 --headed
*/