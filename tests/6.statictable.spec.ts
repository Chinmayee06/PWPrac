import { test, expect, Locator } from '@playwright/test';


test("Visible web table", async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

//visible table - 
// const bookTable = page.locator('table[name="BookTable"]');
// await expect(bookTable).toBeVisible();

//print all table data
// const bookInnerTexts = await bookTable.allInnerTexts();
// console.log("books are", bookInnerTexts); 

// const bookTextContents = await bookTable.allTextContents();
// console.log("books are", bookTextContents);

await page.waitForTimeout(3000);
})

//table name and count
test.only("static web table", async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

//table row
const rowNames = page.locator('table[name="BookTable"] tr th');
const rowName = await rowNames.allInnerTexts(); 
console.log("row names are", rowName);

const rowCount = await rowNames.count();
console.log("row count are", rowCount);

//table column 
const colNames = page.locator('table[name="BookTable"] tr td');
// const colName = await colNames.allInnerTexts();
// console.log("row names are", colName);

const colCount = await colNames.count();
console.log("col count are", colCount);

await page.waitForTimeout(3000);
})

//print all table data
test("print all web table data", async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

const data = page.locator('table[name="BookTable"] tbody');

for (const row of await data.all()) {
        console.log(await row.allInnerTexts());
    }

await page.waitForTimeout(3000);
}) 

test("Printing specific row data", async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");
const row = page.locator('table[name="BookTable"] tr').filter({ hasText: 'Master In Java' });
console.log(await row.innerText());
await page.waitForTimeout(3000);
})

test("Specific BookName", async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

const row = page.locator('table[name="BookTable"] tr').filter({ hasText: 'Master In Java' });
    const bookName = row.locator('td').first();
    console.log(await bookName.innerText());
await page.waitForTimeout(3000);
})

test.only("Specific Price", async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

const row = page.locator('table[name="BookTable"] tr');
const price = row.locator('td').nth(23);
console.log(await price.innerText());
await page.waitForTimeout(3000);
})

/*Important Note - 
1.Define locator only once then extract the data from this locator by passing methods (toBeVisible(),count,innerText)
2.Find the table data - find locator for table and use allInnerTexts()
3.Count no of rows and cols - find locator for table with th and td and use count()
4.Print all table data - find locator for table and use for of loop await with all() with {loc.allinnerText()}
5.To get the specific row data - find locator for table with use filter hasText to find the spcf and use innerText
6.To get the specific col data - find locator for table and column with nth() and then innertext, have to find out locator for two things: one for table with row and one for table column
*/