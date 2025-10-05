const {test, expect} = require('@playwright/test');

test('locators', async ({page}) => {

    await page.goto('https://demoqa.com/automation-practice-form');
});