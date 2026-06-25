import { test } from '@playwright/test';

import '../hooks/shopifyHooks';

import { homePage, checkoutPage } from '../hooks/shopifyHooks';

test('Complete Shopify Checkout Flow', async () => {

    await homePage.navigateMenus();

    await homePage.selectProduct();

    await checkoutPage.fillCheckout();

});