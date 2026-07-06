import { expect, type Locator, type Page } from '@playwright/test';

export class ProductsPage {
  page: Page;
  productsCard: Locator;
  cardTitles: Locator;
  product: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cardTitles = page.locator('.rw-nav');
    this.productsCard = page.getByRole('link', { name: 'Products' });
    this.product = page.locator('article');
  }

  async assertCards() {
    console.log(await this.cardTitles.allTextContents());
  }

  async openProducts() {
     await expect(this.productsCard).toBeVisible();
    await this.productsCard.click();
    await expect(this.page).toHaveURL('https://retail-website-fawn.vercel.app/app/products');
  }

  async addProduct(productName: string) {
    const matchingProduct = this.product.filter({ hasText: productName });
    await matchingProduct.getByRole('button', { name:'Add to cart'}).click();
  }
}
