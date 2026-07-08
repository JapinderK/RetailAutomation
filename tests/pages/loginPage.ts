import { expect, type Locator, type Page } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();
export class LoginPage {
    page: Page;
    userName: Locator;
    password: Locator;
    signIn: Locator;
    constructor(page: Page) {
        this.page = page;
        this.userName = page.getByRole('textbox', { name: 'Email' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.signIn = page.getByRole('button', { name: 'Sign in' });
  }
    async open() {
        await this.page.goto('https://retail-website-fawn.vercel.app/login');
    }
    async login(email: string = process.env.TEST_USER?? '', password: string = process.env.TEST_PASSWORD?? '') {
    await this.userName.fill(email);
    await this.password.fill(password);
    await this.signIn.click();
    }
}


