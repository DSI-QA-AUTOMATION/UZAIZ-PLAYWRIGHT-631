const {test, expect} =require('@playwright/test');

test(homepage, async({page})=>{
    
    await page.goto('https://demoqa.com/');

    const title = page.title()

    await expect(page).toHaveTitle('DEMOQA');
    await expect(page).toHaveURL('https://demoqa.com/');

    await page.close();
    
});