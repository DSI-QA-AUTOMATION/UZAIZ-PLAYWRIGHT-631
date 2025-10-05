const {test, expect} = require('@playwright/test');

test('multiple locators', async ({page}) => {

    await page.goto('https://demoqa.com')
    const tabnames = await page.$$("//div[@class='card-body']//h5");

for (const tabname of tabnames) {
    const tabn = await tabname.textContent();
    console.log(tabn);
}

});