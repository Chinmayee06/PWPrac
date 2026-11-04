import {test,expect} from '@playwright/test';

test('Tracing', async ({page,context}) => {
   

   // await context.tracing.start({screenshots:true, snapshots:true});

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('table[name=BookTables]').screenshot({path:'screenshots/bt.png'});

    //await context.tracing.stop({path:'trace.zip'});
    await page.waitForTimeout(3000);
}) 

/*
1. config.ts - failed open html report if it's failed and view passed -use npx playwright show-report it open 
2. using command - npx playwright test tests/20.trace.spec.ts --trace on failed open html report if it's failed and view passed -use npx playwright show-report it open
3. await context.tracing.start({screenshots:true,snapshots:true}) and await context.tracing.stop({path:'trace.zip}) 
npx plawright show-trace trace.zip
*/ 