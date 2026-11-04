import {test, expect} from '@playwright/test';


test('Check Sanity tag', {tag:'@sanity'}, async ({page}) =>{
  await page.goto('https://www.google.com/');
})


test('Check Regression tag', {tag:'@regression'}, async ({page}) =>{
  await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle('Google');
})

test('Check Smoke tag', {tag:'@smoke'}, async ({page}) =>{
  await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle('Google');
})

test('Check Both tag', {tag:['@sanity','@regression']}, async ({page}) =>{
  await page.goto('https://www.demoblaze.com/');
})










/*
1. Run all sanity tests:
    npx playwright test tests/tagging.spec.ts --grep "@sanity" 

2. Run all regression tests:
    npx playwright test tests/tagging.spec.ts --grep "@regression"

3. Run tests which are belongs to both sanity & regression

npx playwright test tests/tagging.spec.ts --grep "(?=.*@sanity)(?=.*@regression)"

(?=.*@sanity)
(?=.*@regression)

(?=.*@sanity)(?=.*@regression)

4. Run tests belongs to either sanity or regression.
    npx playwright test tests/tagging.spec.ts --grep "@sanity|@regression"

5. Run sanity tests which are not belongs to regression (special case)
    npx playwright test tests/tagging.spec.ts --grep "@sanity" --grep-invert "@regression"
    
*/