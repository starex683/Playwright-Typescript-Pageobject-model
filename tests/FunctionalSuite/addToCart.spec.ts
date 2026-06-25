import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { HomePage } from '../../pages/HomePage';

test('Verify Add To Cart', async ({ page }) => {

    const login = new LoginPage(page);
    const home = new HomePage(page);

    await login.navigate(process.env.BASE_URL!);

    await login.login(
        process.env.EMAIL!,
        process.env.PASSWORD!
    );

    await home.selectProduct();

    await expect(
        page.getByRole('link', { name: /My Cart/i })
    ).toContainText('1');

});