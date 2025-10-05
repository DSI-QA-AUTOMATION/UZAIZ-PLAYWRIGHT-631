const { test, expect } = require('@playwright/test');

    test('should locate element by text', async ({ page }) => {
        await page.goto('https://demoqa.com/');
        const elementsCard = await page.getByText('Elements');
        await expect(elementsCard).toBeVisible();
    });

    test('should locate element by role', async ({ page }) => {
        await page.goto('https://demoqa.com/');
        const banner =await page.getByRole('banner');
        await expect(banner).toBeVisible();
    });

    test('should locate element by label', async ({ page }) => {
        await page.goto('https://demoqa.com/text-box');
        const userNameInput =await page.getByLabel('Full Name');
        await expect(userNameInput).toBeVisible();
    });

    test('should locate element by placeholder', async ({ page }) => {
        await page.goto('https://demoqa.com/text-box');
        const emailInput = await page.getByPlaceholder('name@example.com');
        await expect(emailInput).toBeVisible();
    });

    test('should locate element by alt text', async ({ page }) => {
        await page.goto('https://demoqa.com/');
        const logo =await page.getByAltText('Selenium Online Training');
        await expect(logo).toBeVisible();
    });

    test('should locate element by title', async ({ page }) => {
        await page.goto('https://demoqa.com/');
        const titleElem = await page.getByTitle('Home');
        await expect(titleElem).toBeVisible();
    });

    test('should locate element by test id', async ({ page }) => {
        test.skip();
    });
