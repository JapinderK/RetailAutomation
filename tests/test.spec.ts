import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/loginPage';
import { ProductsPage } from './pages/productsPage';
import { CartPage } from './pages/cartPage';
import { CheckoutPage } from './pages/checkoutPage';
import { DashboardPage } from './pages/dashboardPage';

test('End to end automation of retail website', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.open();
  await loginPage.login();

  await dashboardPage.checkUrl('https://retail-website-fawn.vercel.app/app/dashboard');
  await dashboardPage.cardsListCount();
  await dashboardPage.checkClickableCards(['Dashboard', 'Products', 'Cart', 'Checkout', 'Settings']);
  await dashboardPage.assertSection(['Today','Operations','Activity']);
  await dashboardPage.assertKPIs(['Revenue', 'Orders', 'Refunds']);
  await dashboardPage.assertKPIValue(['US$12,450.75', '86', '3']);

  await productsPage.openProducts();
  await productsPage.addProduct('Automation seed 1776619184454');
  await productsPage.addProduct('Automation seed 177662206514')
  await cartPage.openCart();
  await checkoutPage.checkout('Japinder Kaur');
  await checkoutPage.signOut();
});


