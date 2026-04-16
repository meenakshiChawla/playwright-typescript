import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async addToCart() {
    await this.page.click('button[name="add-to-cart-sauce-labs-backpack"]');
  }

  async removeFromCart() {
    await this.page.click('button[name="remove-sauce-labs-backpack"]');
  }

  getCartBadgeCount() {
    return this.page.locator('.shopping_cart_badge');
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }

  async openMenu() {
    await this.page.click('#react-burger-menu-btn');
  }

  async clickLogout() {
    await this.page.click('#logout_sidebar_link');
  }
}