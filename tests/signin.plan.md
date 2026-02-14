# Successful Sign-In Test Plan

## Application Overview

Test plan for successful sign-in to Sauce Demo (saucedemo.com) using standard_user credentials. Verifies that a user can log in with valid credentials and is redirected to the inventory page.

## Test Scenarios

### 1. Successful Sign-In

**Seed:** `tests/seed.spec.ts`

#### 1.1. should sign in successfully with standard_user credentials

**File:** `tests/signin/should-sign-in-successfully.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com
    - expect: The login page should be displayed with Username and Password fields and a Login button
  2. Type 'standard_user' into the Username field
    - expect: The Username field should contain 'standard_user'
  3. Type 'secret_sauce' into the Password field
    - expect: The Password field should contain the entered password
  4. Click the Login button
    - expect: The user should be redirected to the inventory page with URL containing '/inventory.html'
    - expect: The page should display the 'Swag Labs' header
    - expect: The page should show a list of products
