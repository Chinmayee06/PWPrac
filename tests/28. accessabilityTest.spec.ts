//shows error for this url 
import {test,expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('Accessibility Testing',async ({page}, testInfo)=>{

await page.goto("https://demowebshop.tricentis.com/");

//scanning detect all types of WCAG voilations
const accessibiltyScanResults=await new AxeBuilder({page}).analyze(); // analyse entire page and it returns accessibility scan results , 
// scan the page and gives all the issues of  report and it will return in json format 
console.log("Number of Violations", accessibiltyScanResults.violations.length); //print

//verification whether it's following guidelines or not , need to write assertion
//expect(accessibiltyScanResults.violations).toEqual([]);
//expect(accessibiltyScanResults.violations.length).toEqual(0);
});

