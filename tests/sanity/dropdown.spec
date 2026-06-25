// Import playwright module
import { test, expect } from '@playwright/test';

test('Handling Dropdown list in playwright', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.facebook.com/');
    await page.getByRole('button',{name : 'Create new account'}).click();

    // Select dropdown using value
    await page.getByLabel('Month').selectOption('3');

    // Select dropdown using visible text
    await page.getByLabel('Month').selectOption('Oct');

    // Validate all the options
    await expect(page.locator('#month > option')).toHaveText(['Jan', 'Feb', 'Mar','Apr', 'May', 'Jun', 'Jul','Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
});

test("Verify dropdown contains duplicates",async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //const dropDownOptions:Locator=page.locator('#colors>option');  // having duplicates
    const dropDownOptions:Locator=page.locator('#animals>option');  // not having duplicates
    const optionsText:string[]=(await dropDownOptions.allTextContents()).map(text=>text.trim());
    const myset=new Set<string>();   // Set - duplicates not allowed
    const duplicates:string[]=[];    // array  - duplicates allowed


    for(const text of optionsText)
    {
        if(myset.has(text))
        {
            duplicates.push(text);
        }
        else{
            myset.add(text);
        }
    }
    console.log("Duplicate options are:===>", duplicates);

    if(duplicates.length>0)
    {
        console.log("Duplicate options found.", duplicates)
    }
    else{
        console.log("No duplicate options found..")
    }
    expect(duplicates.length).toBe(0);

    //await page.waitForTimeout(5000);
})

