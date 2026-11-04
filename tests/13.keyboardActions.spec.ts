import {test,expect} from "@playwright/test";

test('Mouse Hover', async({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    
    const form1 = page.locator('#input1');

    //click
    await form1.focus();

    //insert the text in Field 1
    await page.keyboard.insertText('Chinmayee');
    await page.waitForTimeout(3000);
    //select all the text from Field 1
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(3000);
    //copy the text from Field 1
    await page.keyboard.press('Control+C');
    //move forward to next input
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    await page.waitForTimeout(3000);
    //paste the text to Field 2
    await page.keyboard.press('Control+V');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab'); 
    //paste the text to Field 3
    await page.keyboard.press('Control+V');

    await page.waitForTimeout(3000);
})

/*
store tha locator and 
use page.keyboard method to perform key actions like focus/click, insertText, press, down , up, type, tab -Move keyboard focus to the next focusable element
*/