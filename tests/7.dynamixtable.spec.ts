import { test, expect, Locator } from '@playwright/test';

//Q1. Count rows
test("Count rows", async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

const row = page.locator('table[id="taskTable"] tr');
const rowNames = await row.allInnerTexts();
console.log("Number of rows are:", rowNames);
const rowCount = await row.count();
console.log("Number of rows are:", rowCount);
await page.waitForTimeout(3000);
})

//Q2. Count columns
test("Count cols", async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

//cell count
// const cel = page.locator('table[id="taskTable"] td');
// const celNames = await cel.allInnerTexts();
// console.log("Number of rows are:", celNames);

// const colCount = await col.count();
// console.log("Number of rows are:", colCount);

//cols count
const col = page.locator('table[id="taskTable"] th');
const colNames = await col.allInnerTexts();
console.log("Number of rows are:", colNames);

const colCount = await col.count();
console.log("Number of rows are:", colCount);
await page.waitForTimeout(3000);
})

//Q3. Print all table data
test("Printing all the data", async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");
const data:Locator = page.locator('table[id="taskTable"]');
for(const print of await data.all()){
    console.log("Printing all the data", await print.allInnerTexts());
}
await page.waitForTimeout(3000);
})

//Q4. Find a particular row
test("Find a particular row", async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");
const chrome = page.locator('table[id="taskTable"] tr').filter({hasText:'Chrome'});
const chromeText = chrome.locator('td').allInnerTexts();
console.log("particular row data are", await chromeText);
await page.waitForTimeout(3000);
})

//Q5. Get a specific column from CPU row
test("Specific column from that row", async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

const CPU = page.locator('table[id="taskTable"] tr');
const spcfc = CPU.locator('td').nth(1);
console.log("particular row data are", await spcfc.innerText());

await page.waitForTimeout(3000);
})

/*important note - 
Dynamic table → locate the row using stable text/name with filter({hasText}) 
then locate the required cell inside that row.
*/
test.only("Get Chrome CPU", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    // 1. Locate all rows
    const rows = page.locator('table[id="taskTable"] tr');
    // 2. Find Chrome row
    const chromeRow = rows.filter({ hasText: 'Chrome' });
    // 3. Find CPU column
    const cpu = chromeRow.locator('td').nth(1);
    // 4. Print CPU
    console.log(await cpu.innerText());
});