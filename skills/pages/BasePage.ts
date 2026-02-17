import { type Page, type Locator, expect } from '@playwright/test';
import { step } from 'allure-js-commons';

export abstract class BasePage {
  constructor(protected readonly page: Page) {}

  async navigate(url: string): Promise<void> {
    await step(`Navigate to "${url}"`, async () => {
      await this.page.goto(url);
    });
  }

  async click(locator: Locator): Promise<void> {
    await step('Click element', async () => {
      await locator.click();
    });
  }

  async doubleClick(locator: Locator): Promise<void> {
    await step('Double-click element', async () => {
      await locator.dblclick();
    });
  }

  async fill(locator: Locator, text: string): Promise<void> {
    await step(`Fill element with "${text}"`, async () => {
      await locator.fill(text);
    });
  }

  async clear(locator: Locator): Promise<void> {
    await step('Clear element', async () => {
      await locator.clear();
    });
  }

  async type(locator: Locator, text: string): Promise<void> {
    await step(`Type "${text}" into element`, async () => {
      await locator.pressSequentially(text);
    });
  }

  async selectOption(locator: Locator, value: string | string[]): Promise<void> {
    await step(`Select option "${value}"`, async () => {
      await locator.selectOption(value);
    });
  }

  async check(locator: Locator): Promise<void> {
    await step('Check element', async () => {
      await locator.check();
    });
  }

  async uncheck(locator: Locator): Promise<void> {
    await step('Uncheck element', async () => {
      await locator.uncheck();
    });
  }

  async hover(locator: Locator): Promise<void> {
    await step('Hover over element', async () => {
      await locator.hover();
    });
  }

  async getText(locator: Locator): Promise<string | null> {
    return step('Get text content', async () => {
      return locator.textContent();
    });
  }

  async getInputValue(locator: Locator): Promise<string> {
    return step('Get input value', async () => {
      return locator.inputValue();
    });
  }

  async getAttribute(locator: Locator, name: string): Promise<string | null> {
    return step(`Get attribute "${name}"`, async () => {
      return locator.getAttribute(name);
    });
  }

  async isVisible(locator: Locator): Promise<boolean> {
    return step('Check element visibility', async () => {
      return locator.isVisible();
    });
  }

  async isEnabled(locator: Locator): Promise<boolean> {
    return step('Check element is enabled', async () => {
      return locator.isEnabled();
    });
  }

  async isChecked(locator: Locator): Promise<boolean> {
    return step('Check element is checked', async () => {
      return locator.isChecked();
    });
  }

  async waitForElement(locator: Locator, state: 'visible' | 'hidden' | 'attached' | 'detached' = 'visible'): Promise<void> {
    await step(`Wait for element to be ${state}`, async () => {
      await locator.waitFor({ state });
    });
  }

  async dragAndDrop(source: Locator, target: Locator): Promise<void> {
    await step('Drag and drop', async () => {
      await source.dragTo(target);
    });
  }

  async uploadFile(locator: Locator, filePath: string | string[]): Promise<void> {
    await step('Upload file', async () => {
      await locator.setInputFiles(filePath);
    });
  }

  async pressKey(key: string): Promise<void> {
    await step(`Press key "${key}"`, async () => {
      await this.page.keyboard.press(key);
    });
  }

  async scrollIntoView(locator: Locator): Promise<void> {
    await step('Scroll element into view', async () => {
      await locator.scrollIntoViewIfNeeded();
    });
  }

  async getCount(locator: Locator): Promise<number> {
    return step('Get element count', async () => {
      return locator.count();
    });
  }

  getTitle(): Promise<string> {
    return this.page.title();
  }

  getCurrentUrl(): string {
    return this.page.url();
  }
}
