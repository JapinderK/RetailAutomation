import { expect, type Locator, type Page } from '@playwright/test';

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
  async login(email = 'test@demo.com', password = 'password123') {
    await this.userName.fill(email);
    await this.password.fill(password);
    await this.signIn.click();
    await expect(this.page).toHaveURL("https://retail-website-fawn.vercel.app/app/dashboard");
    }
}


