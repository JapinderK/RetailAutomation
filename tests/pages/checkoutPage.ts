import { expect, Locator, type Page } from '@playwright/test';

export class CheckoutPage {
  page: Page;
  checkoutButton: Locator;
  fullName: Locator;
  payButton: Locator;
  signOutButton: Locator;
    constructor(page: Page) {
      this.page = page;
      this.checkoutButton = this.page.getByRole('button', { name: 'Checkout' })
      this.fullName = this.page.getByRole('textbox', { name: 'Full name' })
      this.payButton = this.page.getByRole('button', { name: 'Pay $' })
      this.signOutButton= this.page.getByRole('button', { name: 'Sign out' })
  }

    async checkout(fullName: string) {
        await expect(this.checkoutButton).toBeVisible();
        await this.checkoutButton.click();
        //await this.fullName.click();
        await this.fullName.fill(fullName);
        await this.payButton.click();
    }

  async signOut() {
    await this.signOutButton.click();
  }
}
