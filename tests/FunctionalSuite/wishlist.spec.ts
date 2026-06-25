import { test, expect } from '@playwright/test';

test('Verify Wishlist Page', async ({ page }) => {

    await page.goto(process.env.BASE_URL!);

    await page.getByRole('link', {
        name: 'Wish list'
    }).click();

    await expect(page).toHaveURL(/wishlist/);

});