import { test } from '@playwright/test';

import { LoginPage } from '../../pages/LoginPage';
import { HomePage } from '../../pages/HomePage';
import { CheckoutPage } from '../../pages/CheckoutPage';

test('Verify Checkout', async ({ page }) => {

    const login = new LoginPage(page);
    const home = new HomePage(page);
    const checkout = new CheckoutPage(page);

    await login.navigate(process.env.BASE_URL!);

    await login.login(
        process.env.EMAIL!,
        process.env.PASSWORD!
    );

    await home.selectProduct();

    await checkout.fillCheckout();

});