import { test, expect } from '@playwright/test';

test('Smoke Test', async ({ page }) => {

    await page.goto(process.env.BASE_URL!);

    await expect(page).toHaveTitle(/Sauce Demo/i);

});