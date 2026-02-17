import { type Page, type Locator } from '@playwright/test';
import { step } from 'allure-js-commons';
import { BasePage } from './BasePage';

export class ProductPage extends BasePage {
  readonly productName: Locator;
  readonly productDescription: Locator;
  readonly productPrice: Locator;
  readonly addToCartButton: Locator;
  readonly removeButton: Locator;
  readonly cartBadge: Locator;
  readonly cartLink: Locator;
  readonly backButton: Locator;

  constructor(page: Page) {
    super(page);
    this.productName = page.locator('[data-test="inventory-item-name"]');
    this.productDescription = page.locator('[data-test="inventory-item-desc"]');
    this.productPrice = page.locator('[data-test="inventory-item-price"]');
    this.addToCartButton = page.locator('[data-test="add-to-cart"]');
    this.removeButton = page.locator('[data-test="remove"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    this.backButton = page.locator('[data-test="back-to-products"]');
  }

  async addToCart(): Promise<void> {
    await step('Add product to cart', async () => {
      await this.addToCartButton.click();
    });
  }

  async openCart(): Promise<void> {
    await step('Open shopping cart', async () => {
      await this.cartLink.click();
    });
  }
}
