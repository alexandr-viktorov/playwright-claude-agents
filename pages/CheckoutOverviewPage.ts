import { type Page, type Locator } from '@playwright/test';
import { step } from 'allure-js-commons';
import { BasePage } from './BasePage';

export class CheckoutOverviewPage extends BasePage {
  readonly title: Locator;
  readonly cartItems: Locator;
  readonly itemTotal: Locator;
  readonly tax: Locator;
  readonly total: Locator;
  readonly finishButton: Locator;
  readonly cancelButton: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.locator('[data-test="title"]');
    this.cartItems = page.locator('[data-test="inventory-item"]');
    this.itemTotal = page.locator('[data-test="subtotal-label"]');
    this.tax = page.locator('[data-test="tax-label"]');
    this.total = page.locator('[data-test="total-label"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.cancelButton = page.locator('[data-test="cancel"]');
  }

  getItemName(item: Locator): Locator {
    return item.locator('[data-test="inventory-item-name"]');
  }

  async finish(): Promise<void> {
    await step('Finish purchase', async () => {
      await this.finishButton.click();
    });
  }
}
