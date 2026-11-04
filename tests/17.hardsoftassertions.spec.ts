import {test, expect} from '@playwright/test';


test('Hard Assertion', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //hard
    //fail
    await expect(page).toHaveTitle('Automation Testing Practices');
    // //stop
    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');

    //soft
    //fail
    await expect.soft(page).toHaveTitle('Automation Testing Practices');
    //continue
    await expect.soft(page).toHaveURL('https://testautomationpractice.blogspot.com/');

    await page.waitForTimeout(3000);
});
/*
2 types -
hard - stop and soft - continue
don't use locator , use it directly by passing expect use page
*/