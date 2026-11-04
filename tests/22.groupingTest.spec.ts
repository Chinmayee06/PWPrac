import { test, expect } from '@playwright/test';


test.describe('Group1',async()=>{
    
    test('Test1', async ({page}) => {
        console.log(" this is Test1 ......")
    });


    test('Test2', async ({page}) => {
        console.log(" this is Test2 ......")
    });

})

test.describe('Group2',async()=>{
  
    test('Test3', async ({page}) => {
        console.log(" this is Test3 ......")
    });


    test('Test4', async ({page}) => {
        console.log(" this is Test4 ......")
    });

})

/*
group all the test together and run 
can filter using command - npx playwright test tests/22.groupingTest.spec.ts --grep Group1 --headed
*/



