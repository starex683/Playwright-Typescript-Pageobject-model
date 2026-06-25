import { Page } from '@playwright/test';

export class CheckoutPage {

    constructor(private page: Page){}

    async fillCheckout(){

        await this.page.getByRole('textbox',{name:'Email'})
            .fill(process.env.EMAIL!);

        await this.page.getByRole('textbox',{
            name:'First name (optional)'
        }).fill(process.env.FIRST_NAME!);

        await this.page.getByRole('textbox',{
            name:'Last name'
        }).fill(process.env.LAST_NAME!);

        await this.page.getByRole('combobox',{
            name:'Address'
        }).fill(process.env.ADDRESS!);

        await this.page.getByRole('textbox',{
            name:'Apartment, suite, etc. ('
        }).fill(process.env.APARTMENT!);

        await this.page.getByRole('textbox',{
            name:'City'
        }).fill(process.env.CITY!);

        await this.page.getByRole('textbox',{
            name:'Postcode'
        }).fill(process.env.POSTCODE!);

        await this.page.getByRole('textbox',{
            name:'Phone (optional)'
        }).fill(process.env.PHONE!);

    }

}