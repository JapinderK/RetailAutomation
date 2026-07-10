import { expect, type Locator, type Page } from '@playwright/test';

export class ProductsPage {
  page: Page;
  productsCard: Locator;
  cardTitles: Locator;
  product: Locator;
  allProducts: Locator;
  searchBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cardTitles = page.locator('.rw-nav');
    this.productsCard = page.getByRole('link', { name: 'Products' });
    this.product = page.locator('article');
    this.allProducts = page.locator('.rw-card-title');
    this.searchBox = page.locator('placeholder="Search"');
  }

  async assertCards() {
    console.log(await this.cardTitles.allTextContents());
  }

  async openProducts() {
     await expect(this.productsCard).toBeVisible();
    await this.productsCard.click();
    await expect(this.page).toHaveURL('https://retail-website-fawn.vercel.app/app/products');
  }
  async countProducts() {
    const count = await this.allProducts.count();
    console.log(count);
  }
  async printProduct() {
    const allProducts = await this.allProducts.allTextContents();
    console.log(allProducts);
  }
  async addProduct(productName: string) 
  {
    const matchingProduct = this.product.filter({ hasText: productName });
    await matchingProduct.getByRole('button', { name:'Add to cart'}).click();
  }
}
