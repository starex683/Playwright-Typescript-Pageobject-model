import { test, expect } from '@playwright/test';

test('Verify product search', async ({ page }) => {

    await page.goto(process.env.BASE_URL!);

    await page.getByRole('link', { name: 'Search' }).click();

    await page.getByPlaceholder('Search').fill('Grey');

    await page.keyboard.press('Enter');

    await expect(
        page.getByText('Grey jacket')
    ).toBeVisible();

});