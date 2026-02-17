import { type Page, type Locator } from '@playwright/test';
import { step } from 'allure-js-commons';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  async open(): Promise<void> {
    await step('Open login page', async () => {
      await this.navigate('/');
    });
  }

  async login(username: string, password: string): Promise<void> {
    await step(`Login as "${username}"`, async () => {
      await this.usernameInput.fill(username);
      await this.passwordInput.fill(password);
      await this.loginButton.click();
    });
  }
}
