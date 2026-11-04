import {test, expect} from '@playwright/test';

test('Shadow DOM', async ({page}) =>{

    await page.goto('https://shop.polymer-project.org/');

    const mensHeader = page.getByRole('heading', {name:"Men's Outerwear"});
    expect (mensHeader).toBeVisible();

    const btn = page.getByRole('link', {name:"Men's Outerwear Shop Now"});
    await btn.click();

    await page.waitForTimeout(3000);
})