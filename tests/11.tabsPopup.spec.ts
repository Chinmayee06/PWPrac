import {test,expect,chromium} from "@playwright/test";
//tabs
test("handle tabs",async()=>{

    const browser=await chromium.launch();  // Create browser
    const context=await browser.newContext();  // create context
   
    // creating 1 page
    const parentPage=await context.newPage();

    await parentPage.goto("https://testautomationpractice.blogspot.com/");

    const [childPage] = await Promise.all([
        context.waitForEvent('page'),
        parentPage.getByRole('button', {name: 'New Tab'}).click()
    ])

    console.log("Title of the Parent page:", await parentPage.title());
    console.log("Title of the Child page:", await childPage.title());
    await parentPage.waitForTimeout(3000);
})

/*
tabs - create new tab and switch to that tab
create parent and child page and perform Prome.all([context.waitForEvent('page'), locator with click)
store context.pages to get the pages length
*/
//popup
test.only("handle popup",async({browser})=>{

    const context=await browser.newContext();
    const page=await context.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/")

    await Promise.all([page.waitForEvent('popup'),await page.locator("#PopUp").click()]);

    const allPopupWindows=context.pages(); // Returns array of pages
    console.log("Number of pages/windows:",allPopupWindows.length); //3

    await page.waitForTimeout(3000);
})

/*
popups - current tab opens a popup window
create page and perform Prome.all([context.waitForEvent('page'), locator with click)
store context.pages to get the pages length
*/