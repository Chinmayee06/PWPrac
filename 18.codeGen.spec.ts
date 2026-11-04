import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.getByRole('textbox', { name: 'Enter Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Name' }).fill('chinmayee');
  await page.getByText('Name: Email: Phone:').click();
  await page.getByRole('textbox', { name: 'Enter EMail' }).click();
  await page.getByRole('textbox', { name: 'Enter EMail' }).fill('chin@gmail.com');
  await page.getByText('Form Elements Name: Email:').click();
  await page.getByRole('textbox', { name: 'Enter Phone' }).click();
  await page.getByRole('textbox', { name: 'Enter Phone' }).fill('7418529630');
  await page.getByRole('textbox', { name: 'Address:' }).click();
  await page.getByRole('textbox', { name: 'Address:' }).fill('paris');
  await page.getByText('Female').click();
});

/*
codgen - is a tool it automatically generate a test scripts based on the action u performed on the browser
in terminal pass this - npx playwright codegen -o filename with extension
once you click on stop record it will close it and create a file in vscode not in a tests folder
actions - 
  URL - npx playwright codegen url
  Browser type - npx playwright codegen -b chromium
  Specificdevice - npx playwright codegen --device "iphone 13"
  Set browser window - npx playwright codegen --viewport-size "1280 720"
*/