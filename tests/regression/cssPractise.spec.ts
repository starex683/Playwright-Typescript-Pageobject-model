import {test,expect,Locator} from "@playwright/test"

test("verify the web elements using css selectors", async ({page})=>{
await page.goto("https://testpages.eviltester.com/styled/basic-web-page-test.html");
await page.locator("a[href = 'index.html']").click();// tag[attribute = 'value']
await expect(page.locator("div.app-navigation>:first-child")).toHaveText("About");
await page.locator("div.app-navigation>:last-child").click();
await expect(page.locator("div.navigation+*")).toBeVisible();
//await expect(page.locator("p.sub")).toBeVisible();
//await expect (page.locator("div.centered>*:first-child")).toBeVisible();
await expect(page.locator("p:not([id = 'para1'])[class = 'sub']")).toHaveText("Another paragraph of text");


})