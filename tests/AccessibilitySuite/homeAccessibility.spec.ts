import { test, expect } from '@playwright/test';

import AxeBuilder from '@axe-core/playwright';

test('Home Accessibility', async ({ page }) => {

    await page.goto(process.env.BASE_URL!);

    const results = await new AxeBuilder({ page }).analyze();

    expect(results.violations).toEqual([]);

});