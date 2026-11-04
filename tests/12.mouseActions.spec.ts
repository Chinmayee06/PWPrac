import {test,expect} from "@playwright/test";

test('Mouse Hover', async({page}) =>{
     await page.goto("https://testautomationpractice.blogspot.com/");

 const hover = page.locator('.dropbtn');
 await hover.hover();

 const mobile = page.locator('button[class="dropdown-content"].nth(0)');
 await mobile.click();

 await page.waitForTimeout(3000);
})

test('Mouse Double Click', async({page}) =>{
     await page.goto("https://testautomationpractice.blogspot.com/");

const double = page.locator('#field2');
await double.dblclick();

await page.waitForTimeout(3000);
})

test('Mouse Drag&Drop', async({page}) =>{
     await page.goto("https://testautomationpractice.blogspot.com/");

 const source = page.locator('#draggable');
 const target = page.locator('#droppable');
 await source.dragTo(target);

await page.waitForTimeout(3000);
})

test.only('Mouse Right Click', async({page}) =>{
await page.goto("http://swisnl.github.io/jQuery-contextMenu/demo.html");
const right = page.locator('.context-menu-one btn btn-neutral');
await right.click({button: 'right'});
await page.waitForTimeout(3000);
})

/*
mouse actions perfomed using mouse object
p.l('').hover()
p.l('').click({button:'right'})
p.l('').dblclick()
p.l('').source.dragTo(p.l(target)) or p.l('').mouse.up , p.l('')'.mouse.down 
p.l('').mouse.move(x,y)

first store the locator then perform actions
*/