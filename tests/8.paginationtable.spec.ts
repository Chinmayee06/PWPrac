import { test, expect, Locator } from '@playwright/test';

test("Page 2 data", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.getByRole('button', { name: '2', exact: true }).click();

    const rows = page.locator('table[id="productTable"] tbody tr');

    for (const row of await rows.all()) {
        console.log(await row.allInnerTexts());
    }
});