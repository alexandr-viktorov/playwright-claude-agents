import { type Page, type Locator } from '@playwright/test';
import { step } from 'allure-js-commons';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  readonly title: Locator;
  readonly cartItems: Locator;
  readonly checkoutButton: Locator;
  readonly continueShoppingButton: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.locator('[data-test="title"]');
    this.cartItems = page.locator('[data-test="inventory-item"]');
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.continueShoppingButton = page.locator('[data-test="continue-shopping"]');
  }

  getItemName(item: Locator): Locator {
    return item.locator('[data-test="inventory-item-name"]');
  }

  getItemQuantity(item: Locator): Locator {
    return item.locator('[data-test="item-quantity"]');
  }

  async checkout(): Promise<void> {
    await step('Click checkout', async () => {
      await this.checkoutButton.click();
    });
  }
}
