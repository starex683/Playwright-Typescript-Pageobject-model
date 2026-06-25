import { Page } from '@playwright/test';

export class LoginPage {

    constructor(private page: Page) {}

    async navigate(url: string) {
        await this.page.goto(url);
    }

    async login(email: string, password: string) {

        await this.page.getByRole('link', { name: 'Log In' }).click();

        await this.page.getByRole('textbox', { name: 'Email Address' }).fill(email);

        await this.page.getByRole('textbox', { name: 'Password' }).fill(password);

        await this.page.getByRole('button', { name: 'Sign In' }).click();
    }
}