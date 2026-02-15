import { test, expect } from '@playwright/test';
import * as allure from 'allure-js-commons';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { ProductPage } from '../../pages/ProductPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutInfoPage } from '../../pages/CheckoutInfoPage';
import { CheckoutOverviewPage } from '../../pages/CheckoutOverviewPage';
import { CheckoutCompletePage } from '../../pages/CheckoutCompletePage';

test.describe('Purchase Flow', () => {
  test('should complete a full purchase of Sauce Labs Bike Light', async ({ page }) => {
    await allure.epic('E-Commerce');
    await allure.feature('Purchase Flow');
    await allure.story('Complete purchase of a single item');
    await allure.severity('critical');
    await allure.description(
      'Verify that a user can sign in, add Sauce Labs Bike Light to cart, complete checkout with user info, and finish the purchase successfully.'
    );

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    const checkoutInfoPage = new CheckoutInfoPage(page);
    const checkoutOverviewPage = new CheckoutOverviewPage(page);
    const checkoutCompletePage = new CheckoutCompletePage(page);

    await allure.step('Sign in with standard_user credentials', async () => {
      await loginPage.open();
      await loginPage.login('standard_user', 'secret_sauce');
      await expect(page).toHaveURL(/inventory\.html/);
      await expect(inventoryPage.title).toHaveText('Products');
    });

    await allure.step('Open Sauce Labs Bike Light product page', async () => {
      await inventoryPage.openProduct('Sauce Labs Bike Light');
      await expect(page).toHaveURL(/inventory-item\.html/);
      await expect(productPage.productName).toHaveText('Sauce Labs Bike Light');
      await expect(productPage.productPrice).toHaveText('$9.99');
    });

    await allure.step('Add product to cart', async () => {
      await productPage.addToCart();
      await expect(productPage.removeButton).toBeVisible();
      await expect(productPage.cartBadge).toHaveText('1');
    });

    await allure.step('Open cart and verify item', async () => {
      await productPage.openCart();
      await expect(page).toHaveURL(/cart\.html/);
      await expect(cartPage.title).toHaveText('Your Cart');
      await expect(cartPage.getItemName(cartPage.cartItems.first())).toHaveText('Sauce Labs Bike Light');
    });

    await allure.step('Proceed to checkout and fill user information', async () => {
      await cartPage.checkout();
      await expect(page).toHaveURL(/checkout-step-one\.html/);
      await expect(checkoutInfoPage.title).toHaveText('Checkout: Your Information');
      await checkoutInfoPage.fillInfo('John', 'Doe', '12345');
      await checkoutInfoPage.continue();
    });

    await allure.step('Review order summary', async () => {
      await expect(page).toHaveURL(/checkout-step-two\.html/);
      await expect(checkoutOverviewPage.title).toHaveText('Checkout: Overview');
      await expect(checkoutOverviewPage.getItemName(checkoutOverviewPage.cartItems.first())).toHaveText('Sauce Labs Bike Light');
      await expect(checkoutOverviewPage.itemTotal).toContainText('$9.99');
      await expect(checkoutOverviewPage.total).toContainText('$10.79');
    });

    await allure.step('Finish purchase and verify confirmation', async () => {
      await checkoutOverviewPage.finish();
      await expect(page).toHaveURL(/checkout-complete\.html/);
      await expect(checkoutCompletePage.title).toHaveText('Checkout: Complete!');
      await expect(checkoutCompletePage.completeHeader).toHaveText('Thank you for your order!');
      await expect(checkoutCompletePage.backHomeButton).toBeVisible();
    });
  });
});
