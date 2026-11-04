/*
Pre-requisite:
Install the csv-parse module to read CSV files:
    npm install csv-parse
*/

import { test, expect } from '@playwright/test';
import fs from 'fs';
import { parse } from 'csv-parse/sync';

// Define CSV data structure - Defines CSV column names and data types 
//interface is a blueprint that defines what properties an object should contain and what data types those properties should have.
interface LoginData {
    email: string;
    password: string;
    validity: string;
}

// Read data from CSV
const csvPath = 'testdata/data.csv';
const fileContent = fs.readFileSync(csvPath, 'utf-8');

const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true
}) as LoginData[]; //Tells TypeScript that records contain an array of LoginData objects
 
// Main test
test.describe('Login data driven test', () => {

    for (const data of records) {

        test(`Login test with email: ${data.email}`, async ({ page }) => {

            await page.goto('https://demowebshop.tricentis.com/login');

            // Fill login form
            await page.locator('#Email').fill(data.email);
            await page.locator('#Password').fill(data.password);
            await page.locator('input[value="Log in"]').click();

            if (data.validity.toLowerCase() === 'valid') {

                // Verify successful login
                const logoutLink = page.locator('a[href="/logout"]');
                await expect(logoutLink).toBeVisible();

            } else {

                // Verify error message
                const errorMessage = page.locator('.validation-summary-errors');
                await expect(errorMessage).toBeVisible();

                // Verify login page URL
                await expect(page).toHaveURL(
                    'https://demowebshop.tricentis.com/login'
                );
            }
        });
    }
});
