import { Page } from '@playwright/test';

export class HomePage {

    constructor(private page: Page) {}

    async navigateMenus() {

        await this.page.getByRole('link', { name: 'Catalog' }).click();

        await this.page.getByRole('link', { name: 'Blog' }).click();

        await this.page.locator('#main-menu')
            .getByRole('link', { name: 'About Us' })
            .click();

        await this.page.getByRole('link', { name: 'Wish list' }).click();

        await this.page.getByRole('link', { name: 'Refer a friend' }).click();

        await this.page.goto('https://sauce-demo.myshopify.com/pages/about-us#sauce-show-refer-friend');

        await this.page.getByRole('link', { name: 'Search' }).nth(1).click();

        await this.page.getByRole('link', { name: 'About Us' }).nth(2).click();

        const popup = this.page.waitForEvent('popup');

        await this.page.getByRole('link', {
            name: 'Shopping Cart by Shopify'
        }).click();

        await popup;

        await this.page.getByRole('banner')
            .getByRole('link', { name: 'About Us' })
            .click();

        await this.page.getByRole('banner')
            .getByRole('link', { name: 'Search' })
            .click();

        await this.page.locator('#main-menu')
            .getByRole('link', { name: 'Home' })
            .click();
    }

    async selectProduct() {

        await this.page.getByRole('link', {
            name: 'Grey jacket Grey jacket £'
        }).click();

        await this.page.getByRole('button', {
            name: 'Add to Cart'
        }).click();

        await this.page.getByRole('link', {
            name: 'My Cart (1)'
        }).click();

        await this.page.getByRole('link', {
            name: 'Check Out'
        }).click();

        await this.page.getByRole('button', {
            name: 'Check Out'
        }).click();
    }
}