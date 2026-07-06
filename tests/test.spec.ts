import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/loginPage';
import { ProductsPage } from './pages/productsPage';
import { CartPage } from './pages/cartPage';
import { CheckoutPage } from './pages/checkoutPage';

test('End to end automation of retail website', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.open();
  await loginPage.login();

  // await expect(page.getByRole('link', { name: 'Products' })).toBeVisible();

  await productsPage.openProducts();
  await productsPage.addProduct('Automation seed 1776619184454');
  await productsPage.addProduct('Automation seed 177662206514')
  await cartPage.openCart();
  await checkoutPage.checkout('Japinder Kaur');
  await checkoutPage.signOut();
});


