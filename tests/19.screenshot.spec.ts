/*
page.screenshot(path with filename)
locator.screenshot(path with filename)
*/

import {test,expect} from '@playwright/test';

test('Page Screenshot', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const timestamp = Date.now();
    //await page.screenshot({path:'screenshots/homepage.png'});
    //await page.screenshot({path:'screenshots/fullPage.png', fullPage:true});
    //await page.screenshot({path:'screenshots/'+'timeStamp'+'homepage.png'});
    await page.screenshot({path:'screenshots/'+'homepage'+timestamp+'.png'})
    await page.waitForTimeout(3000);
})

test('Locator Screenshot', async ({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('table[name=BookTable]').screenshot({path:'screenshots/bt.png'});
//await page.locator('.fauxborder-left.tabs-fauxborder-left').screenshot({path:'screenshots/atp.png'});
//await page.getByTitle('Tabs', { exact: true }).screenshot({path:'screenshots/tabs.png'});

    await page.waitForTimeout(3000);
}) 


/*
page.screenshot(path with filename)
locator.screenshot(path with filename)
config screenst in plywrght.conf.ts (on, of, on-first-failure, only-on-failure) helps to attach scrnsht in html report
go with CSS loctor only
*/

//Video
test.only('Video', async ({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('table[name=BookTable]').screenshot({path:'screenshots/bt.png'});
//await page.locator('.fauxborder-left.tabs-fauxborder-left').screenshot({path:'screenshots/atp.png'});
//await page.getByTitle('Tabs', { exact: true }).screenshot({path:'screenshots/tabs.png'});

    await page.waitForTimeout(3000);
}) 

/* 
for video need to config in plywrght.conf.ts as video : '5 option'
*/