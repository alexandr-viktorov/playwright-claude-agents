# Purchase Flow Test Plan

## Application Overview

End-to-end purchase flow on Sauce Demo: sign in, open a product, add to cart, checkout with user info, and complete the purchase.

## Test Scenarios

### 1. Purchase Flow

**Seed:** `tests/seed.spec.ts`

#### 1.1. should complete a full purchase of Sauce Labs Bike Light

**File:** `tests/purchase/should-complete-purchase.spec.ts`

**Steps:**
  1. Fill username field with "standard_user"
    - expect: Username field contains "standard_user"
  2. Fill password field with "secret_sauce"
    - expect: Password field contains "secret_sauce"
  3. Click the "Login" button
    - expect: The page URL should contain "inventory.html"
    - expect: The page should show the "Products" title
  4. Click on the "Sauce Labs Bike Light" product link
    - expect: The page URL should contain "inventory-item.html"
    - expect: The page should show "Sauce Labs Bike Light" as the product name
    - expect: The page should show "$9.99" as the price
  5. Click the "Add to cart" button
    - expect: The button text should change to "Remove"
    - expect: The shopping cart badge should show "1"
  6. Click the shopping cart icon
    - expect: The page URL should contain "cart.html"
    - expect: The page should show "Your Cart" heading
    - expect: The cart should contain "Sauce Labs Bike Light" with quantity "1"
  7. Click the "Checkout" button
    - expect: The page URL should contain "checkout-step-one.html"
    - expect: The page should show "Checkout: Your Information" heading
  8. Fill the checkout form with a random first name, last name, and zip code
    - expect: First Name, Last Name, and Zip/Postal Code fields should be filled
  9. Click the "Continue" button
    - expect: The page URL should contain "checkout-step-two.html"
    - expect: The page should show "Checkout: Overview" heading
    - expect: The page should display "Sauce Labs Bike Light" in the order summary
    - expect: The page should show the item total "$9.99"
    - expect: The page should show the total including tax "$10.79"
  10. Click the "Finish" button
    - expect: The page URL should contain "checkout-complete.html"
    - expect: The page should show "Checkout: Complete!" heading
    - expect: The page should show "Thank you for your order!" message
    - expect: The page should show a "Back Home" button
