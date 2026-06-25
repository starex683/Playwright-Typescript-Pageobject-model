import { test } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CheckoutPage } from '../pages/CheckoutPage';

export let loginPage: LoginPage;
export let homePage: HomePage;
export let checkoutPage: CheckoutPage;

test.beforeEach(async ({ page }) => {

    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    checkoutPage = new CheckoutPage(page);

    await loginPage.navigate(process.env.BASE_URL!);

    await loginPage.login(
        process.env.EMAIL!,
        process.env.PASSWORD!
    );

});

test.afterEach(async ({ page }, testInfo) => {

    await testInfo.attach('Screenshot', {

        body: await page.screenshot({
            fullPage: true
        }),

        contentType: 'image/png'
    });

});