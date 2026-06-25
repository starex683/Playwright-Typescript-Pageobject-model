import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

test.describe('Login Tests', () => {

    test('Successful Login', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const dashboardPage = new DashboardPage(page);

        await loginPage.navigate();
        await loginPage.verifyLoginPage();

        await loginPage.login('testuser', 'Password123');

        await dashboardPage.verifyDashboardLoaded();
    });

    test('Invalid Login', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigate();

        await loginPage.login('wrongUser', 'wrongPassword');

        await loginPage.verifyErrorMessage('Invalid username or password');
    });

});
