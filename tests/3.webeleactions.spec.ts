import {test, expect } from '@playwright/test';

test("Radio Button", async ({page}) => {

await page.goto("https://testautomationpractice.blogspot.com/");

// const gender = page.getByLabel('Male', {exact: true});
// await gender.check();
// await expect(gender).toBeChecked();

const gender = page.getByLabel('Female', {exact: true});
await gender.check();
await expect(gender).toBeChecked();

await page.waitForTimeout(3000);
})

//specifi option
test("CheckBox", async ({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    const checkone = page.getByLabel('Monday');
    await checkone.check();
    await page.waitForTimeout(3000);    
    const checktwo = page.getByLabel('Monday');
    await checktwo.uncheck();
    await page.waitForTimeout(3000);
})

//Multi select
test("Multi CheckBox", async ({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    const days = ['Tuesday', 'Friday', 'Sunday'];

    for(const day of days){
        await page.getByLabel(day).check();
        //await page.waitForTimeout(3000);
        await page.getByLabel(day).uncheck();
        await page.waitForTimeout(3000);
    }
})

//Count CheckBox
test.only("Count CheckBox", async ({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    expect (days.length).toBe(7);
})