import { Page, Locator, expect } from '@playwright/test';

export class BasePage {

    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate(url: string = '/') {
        await this.page.goto(url);
    }

    async click(locator: string | Locator) {
        if (typeof locator === 'string') {
            await this.page.locator(locator).click();
        } else {
            await locator.click();
        }
    }

    async fill(locator: string | Locator, value: string) {
        if (typeof locator === 'string') {
            await this.page.locator(locator).fill(value);
        } else {
            await locator.fill(value);
        }
    }

    async getText(locator: string | Locator): Promise<string> {
        if (typeof locator === 'string') {
            return (await this.page.locator(locator).textContent()) ?? '';
        }
        return (await locator.textContent()) ?? '';
    }

    async wait(seconds: number) {
        await this.page.waitForTimeout(seconds * 1000);
    }

    async verifyTitle(title: RegExp) {
        await expect(this.page).toHaveTitle(title);
    }
}