import { Locator, Page } from '@playwright/test';

export class Helper {

    static async wait(page: Page, milliseconds: number) {
        await page.waitForTimeout(milliseconds);
    }

    static async scrollTo(locator: Locator) {
        await locator.scrollIntoViewIfNeeded();
    }

    static async click(locator: Locator) {
        await locator.click();
    }

    static async type(locator: Locator, value: string) {
        await locator.fill(value);
    }

    static async getText(locator: Locator) {
        return (await locator.textContent()) ?? '';
    }

    static async takeScreenshot(page: Page, fileName: string) {

        await page.screenshot({
            path: `screenshots/${fileName}.png`,
            fullPage: true
        });

    }

}