const {test, expect} = require('@playwright/test');

test('locators', async ({page}) => {

    await page.goto('https://demoqa.com/alerts/');
    await page.locator('#alertButton').click();
    

    await page.goto('https://demoqa.com/');
    await page.locator("div[class='category-cards'] div:nth-child(1) div:nth-child(1) div:nth-child(3) h5:nth-child(1)").click();
   

    await page.goto('https://demoqa.com/');
    await page.locator("//div[@class='category-cards']//div[1]//div[1]//div[3]").click();
    await page.close();
});