import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login using POM', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/);
  const items = page.locator('.inventory_item');
  await expect(items).toHaveCount(6);
  //await page.pause();
});