import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test('Verify user can login', async ({ page }) => {

    const login = new LoginPage(page);

    await login.navigate(process.env.BASE_URL!);

    await login.login(
        process.env.EMAIL!,
        process.env.PASSWORD!
    );

    await expect(page).toHaveURL(/account/);

});