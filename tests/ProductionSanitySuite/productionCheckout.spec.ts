import { test } from '@playwright/test';

import { LoginPage } from '../../pages/LoginPage';
import { HomePage } from '../../pages/HomePage';

test('Production Checkout', async ({ page }) => {

    const login = new LoginPage(page);

    const home = new HomePage(page);

    await login.navigate(process.env.BASE_URL!);

    await login.login(
        process.env.EMAIL!,
        process.env.PASSWORD!
    );

    await home.selectProduct();

});