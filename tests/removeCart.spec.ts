import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test('Remove product from cart', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await inventory.addToCart();
  await inventory.removeFromCart();

  await expect(inventory.getCartBadgeCount()).toHaveCount(0);
  //await page.pause();
});