import {test, expect} from '@playwright/test';

//single dropdown
// test("Single Dropdown", async ({page}) =>{
//     await page.goto("https://testautomationpractice.blogspot.com/");

//     //by using visible text
//     const text = page.getByLabel('Country');
//     text.selectOption('Canada');

//     //by using index
//     const index = page.getByLabel('Country');
//     const indexResult = await index.selectOption({'index': 4});
//     console.log(`Selected index is: ${indexResult}`); //print the result

//     //by using label
//     const label = page.getByLabel('Country');
//     const labelResult = await label.selectOption({'label': 'Germany'});

//     //by using value attribute
//     const valueAtt = page.getByLabel('Country');
//     const valueAttResult = await valueAtt.selectOption({'value': 'uk'});

//     await page.waitForTimeout(6000);
// })

//multi dropdown
test("Multiple Dropdown", async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //visible text
    // const text = page.getByLabel('Colors');
    // text.selectOption(['Red', 'Green', 'Blue']);

    //label
    // const label = page.getByLabel('Colors');
    // await label.selectOption([{'label': 'Yellow'},{'label': 'White'}]);

    //index 
    // const index = page.getByLabel('Colors');
    // await index.selectOption([{'index': 0},{'index': 1}]);

    //value attribute
    const valueAtt = page.getByLabel('Colors');
    await valueAtt.selectOption([{'value': 'blue'},{'value': 'yellow'}]);

    await page.waitForTimeout(3000);
}) 

//count dropdown
test("Count Dropdown", async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    // const options = page.getByLabel('Colors');
    const options = page.locator('#colors>option');
    await expect(options).toHaveCount(7);

    await page.waitForTimeout(3000);
}) 

//Sort Dropdown
test("Sort Dropdown", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const options = page.locator('#colors>option');
    const optionTexts = await options.allTextContents();

    const sortedOptions = [...optionTexts].sort();

    console.log("Original:", optionTexts);
    console.log("Sorted:", sortedOptions);

});

//Duplicate Dropdown
test.only("Duplicate Dropdown", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const options = page.locator('#colors>option');
    const optionTexts = await options.allTextContents();

    const uniqueValues = new Set(optionTexts);

    console.log("Original:", optionTexts);
    console.log("Unique:", uniqueValues);

});