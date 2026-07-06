import type { Locator, Page } from '@playwright/test';

export class CartPage {
    page: Page;
    cart: Locator;
    constructor(page: Page) {
        this.page = page;
        this.cart = page.locator('.rw-pill');
  }
 
  async openCart() {
    await this.cart.click();
  }
}
