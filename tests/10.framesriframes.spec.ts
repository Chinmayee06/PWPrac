import {test, expect, Locator} from '@playwright/test';

test('Number of Locator', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');
      const frames=page.frames();
      console.log("Number of frames:", frames.length);
      await page.waitForTimeout(3000);
});

//Locate Frame1 and enter Hello Frame1 in its textbox
test('Frame1', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');
    const frame1 = page.frameLocator('frame[src="frame_1.html"]');
    const text1 = frame1.locator('input');
    await text1.fill("Hello Frame1");
    await page.waitForTimeout(3000);
});

//Locate Frame2 and enter Hello Frame2
test('Frame2', async ({page}) =>{
    await page.goto('https://ui.vision/demo/webtest/frames/');
    const frame2 = page.frameLocator('frame[src="frame_2.html"]');
    const text2 = frame2.locator('input');
    await text2.fill("Hello Frame2");
    await page.waitForTimeout(3000);
}
);

//Locate Frame3 and enter Hello Frame3
test('Frame3', async ({page}) =>{
    await page.goto('https://ui.vision/demo/webtest/frames/');

    const frame3 = page.frameLocator('frame[src="frame_3.html"]');
    const text3 = frame3.locator('input');
    await text3.fill("Hello Frame3");
    await page.waitForTimeout(3000);
});

//Locate Frame4 and enter Hello Frame4
test('Frame4', async ({page}) =>{
    await page.goto('https://ui.vision/demo/webtest/frames/');

    const frame4 = page.frameLocator('frame[src="frame_4.html"]');
    const text4 = frame4.locator('input');
    await text4.fill("Hello Frame4");
    await page.waitForTimeout(3000);
});

test('Frame1 - Verify textbox', async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');
    // 1. Locate Frame1
    const frame1 = page.frameLocator('frame[src="frame_1.html"]');
    // 2. Locate textbox inside Frame1
    const text1 = frame1.locator('input[name="mytext1"]');
    // 3. Verify textbox is visible
    await expect(text1).toBeVisible();
});

test('Frame2 - Verify textbox is enabled', async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    const frame2 = page.frameLocator('frame[src="frame_2.html"]');

    const text2 = frame2.locator('input[name="mytext2"]');

    await expect(text2).toBeEnabled();
});

//Clear the textbox inside Frame3
test('Clear the textbox inside Frame3', async ({page}) =>{
    await page.goto('https://ui.vision/demo/webtest/frames/');

    const frame3 = page.frameLocator('frame[src="frame_3.html"]');
    const text3 = frame3.locator('input');
   
    await text3.clear();
    await page.waitForTimeout(3000);
});
 
//Enter your name in Frame4
test('Enter your name in Frame4', async ({page}) =>{
    await page.goto('https://ui.vision/demo/webtest/frames/');

    const frame4 = page.frameLocator('frame[src="frame_4.html"]');
    const text4 = frame4.locator('input');
   
    await text4.fill("Chinmayee");
    await page.waitForTimeout(3000);
});

//Nested iframe operations

//Locate the outer Frame3
test('Locate the outer Frame3', async ({page}) =>{
    await page.goto('https://ui.vision/demo/webtest/frames/');
    const frame3 = page.frameLocator('frame[src="frame_3.html"]');
    await page.waitForTimeout(3000);
});

//Inside Frame3, locate the nested iframe
test('Inside Frame3, locate the nested iframe', async ({page}) =>{
    await page.goto('https://ui.vision/demo/webtest/frames/');
    const frame3 = page.frameLocator('frame[src="frame_3.html"]');
    const nestedFrame = frame3.frameLocator('iframe');

    await expect(nestedFrame.getByText('Form Filling Demo Page'));

    await page.waitForTimeout(3000);
});

//Inside the nested iframe, locate the "Hi, I am the UI.Vision IDE" radio button
test('Inside the nested iframe, locate the "Hi, I am the UI.Vision IDE" radio button', async ({page}) =>{
    await page.goto('https://ui.vision/demo/webtest/frames/');
    const frame3 = page.frameLocator('frame[src="frame_3.html"]');
    const nestedFrame = frame3.frameLocator('iframe');
    await expect(nestedFrame.getByText('Hi, I am the UI.Vision IDE'));
    await page.waitForTimeout(3000);
});

//Check the radio button
test('Check the radio button', async ({page}) =>{
    await page.goto('https://ui.vision/demo/webtest/frames/');
    const frame3 = page.frameLocator('frame[src="frame_3.html"]');
    const nestedFrame = frame3.frameLocator('iframe');

    const radio = nestedFrame.getByText('Hi, I am the UI.Vision IDE');
    await radio.click();

    await page.waitForTimeout(3000);
}) 

//Locate the "Sign into Google to save your progress" link inside the nested iframe
test('Sign in to Google', async ({page}) =>{
    await page.goto('https://ui.vision/demo/webtest/frames/');
    const frame3 = page.frameLocator('frame[src="frame_3.html"]');
    const nestedFrame = frame3.frameLocator('iframe');

    const radio = nestedFrame.getByText('Sign in to Google');
    await radio.click();

    await page.waitForTimeout(3000);
});

//Verify that the link is visible
test.only('link is visible', async ({page}) =>{
    await page.goto('https://ui.vision/demo/webtest/frames/');
    const frame3 = page.frameLocator('frame[src="frame_3.html"]');
    const nestedFrame = frame3.frameLocator('iframe');

    const radio = nestedFrame.getByText('Sign in to Google');
    await radio.click();

    await expect(radio).toBeVisible();
    await page.waitForTimeout(3000);
});

/*
MAIN PAGE - page.locator('input')
   ↓
FRAME - page.frameLocator('frame')
   ↓
ELEMENT -  obj with.locator('input')
   ↓
ACTION / ASSERTION -  input.fill('Hello')
First locate the frame, then locate the element inside it, and finally perform the action.

getByText is used to get the element
*/