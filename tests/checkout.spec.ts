import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('Complete checkout process', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await inventory.addToCart();
  await inventory.goToCart();

  await cart.clickCheckout();

  await checkout.fillDetails('Test', 'User', '12345');
  await checkout.finishOrder();

  await expect(checkout.getSuccessMessage()).toHaveText('Thank you for your order!');
  //await page.pause();
  
});