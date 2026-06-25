import { test, expect } from '@playwright/test';

import AxeBuilder from '@axe-core/playwright';

test('Checkout Accessibility', async ({ page }) => {

    await page.goto(process.env.BASE_URL!);

    await page.getByRole('link', { name: 'Log In' }).click();

    const results = await new AxeBuilder({ page }).analyze();

    expect(results.violations).toEqual([]);

});