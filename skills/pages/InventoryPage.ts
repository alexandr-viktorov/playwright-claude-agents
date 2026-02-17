import { type Page, type Locator } from '@playwright/test';
import { step } from 'allure-js-commons';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  readonly title: Locator;
  readonly inventoryList: Locator;
  readonly inventoryItems: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.locator('.title');
    this.inventoryList = page.locator('.inventory_list');
    this.inventoryItems = page.locator('.inventory_item');
  }

  async openProduct(name: string): Promise<void> {
    await step(`Open product "${name}"`, async () => {
      await this.page.getByRole('link', { name, exact: true }).first().click();
    });
  }
}
