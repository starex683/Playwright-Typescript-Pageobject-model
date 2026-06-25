import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;

        this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.loginButton = page.locator('button[type="submit"]');
        this.errorMessage = page.locator('.error-message');
    }

    async navigate() {
        await this.page.goto('https://example.com/login');
    }

    async login(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    async verifyLoginPage() {
        await expect(this.page).toHaveTitle(/Login/i);
    }

    async verifyErrorMessage(message: string) {
        await expect(this.errorMessage).toHaveText(message);
    }
}
