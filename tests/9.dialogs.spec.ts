//1) By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them. 
// 2) However, you can register a dialog handler before the action that triggers the dialog to either 
// dialog.accept() or dialog.dismiss() it.

import {test, expect} from '@playwright/test';


test('Alert Message', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog', async dialog => { //When a dialog appears, handle it
        console.log(dialog.message()); //dialog event is triggered. Gets the message displayed in the popup
        await dialog.accept(); //Clicks OK
    });

    await page.getByRole('button', { name: 'Simple Alert' }).click(); //triggers the alert
    await page.waitForTimeout(3000);
});

test('Confirm Message', async ({page}) =>{

     await page.goto('https://testautomationpractice.blogspot.com/');

    // page.on('dialog', async (dialog) =>{
    //     console.log(dialog.message());
    //     await dialog.accept();
    // })

      page.on('dialog', async (dialog) =>{
        console.log(dialog.message());
        await dialog.dismiss();
    })

     await page.getByRole('button', {name: 'Confirmation Alert'}).click();
     await page.waitForTimeout(3000);
})

test.only('Popup Message', async ({page}) =>{

     await page.goto('https://testautomationpractice.blogspot.com/');

      page.on('dialog', async (dialog) =>{
        console.log(dialog.message());
        await dialog.accept('Chinmayee');
    })

     await page.getByRole('button', {name: 'Prompt Alert'}).click();
     await page.waitForTimeout(3000);
})

/*
First  listen for the dialog event, then handle the dialog using accept() or dismiss(), 
and finally perform the action that triggers the dialog

dialog.message()       → Get popup message
dialog.accept()        → Click OK
dialog.dismiss()       → Click Cancel
dialog.accept('text')  → Enter text and click OK
*/