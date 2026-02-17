import { test, expect } from '../../../skills/fixtures';
import * as allure from 'allure-js-commons';

test.describe('Successful Sign-In', () => {
  test('should sign in successfully with standard_user credentials', async ({
    loginPage,
    inventoryPage,
    page,
  }) => {
    await allure.epic('Authentication');
    await allure.feature('Sign In');
    await allure.story('Successful login with valid credentials');
    await allure.severity('critical');
    await allure.description(
      'Verify that a standard user can sign in with valid credentials and is redirected to the inventory page.'
    );

    await loginPage.open();
    await loginPage.login('standard_user', 'secret_sauce');

    await allure.step('Verify successful navigation to inventory page', async () => {
      await expect(page).toHaveURL(/.*inventory\.html/);
      await expect(inventoryPage.title).toHaveText('Products');
    });

    await allure.step('Verify inventory items are displayed', async () => {
      await expect(inventoryPage.inventoryItems.first()).toBeVisible();
      await expect(inventoryPage.inventoryItems).toHaveCount(6);
    });
  });
});
