import { Page, Locator, expect } from '@playwright/test';

export class DashboardPage {

    readonly page: Page;
    readonly welcomeMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.welcomeMessage = page.locator('h1');
    }

    async verifyDashboardLoaded() {
        await expect(this.welcomeMessage).toContainText('Dashboard');
    }
}
