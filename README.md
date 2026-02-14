# Playwright Claude Agents

End-to-end test automation framework built with [Playwright](https://playwright.dev/) and integrated with [Allure](https://allurereport.org/) for rich test reporting.

## Project Structure

```
├── pages/
│   ├── BasePage.ts          # Abstract base page with reusable actions
│   ├── LoginPage.ts         # Login page object
│   └── InventoryPage.ts     # Inventory page object
├── tests/
│   └── signin/
│       └── should-sign-in-successfully.spec.ts
├── playwright.config.ts
└── package.json
```

## Setup

```bash
npm install
npx playwright install
```

## Running Tests

```bash
# Run all tests
npm test

# Run with a specific project
npx playwright test --project=chromium
```

## Allure Reporting

Tests are annotated with Allure metadata (epic, feature, story, severity) and page object methods are wrapped with `allure.step()` for detailed step-level reporting.

```bash
# Generate static report
npm run allure:generate
npm run allure:open

# Serve report directly from results
npm run allure:serve
```

## Tech Stack

- **Playwright** — browser automation and test runner
- **Allure** — test reporting via `allure-playwright` and `allure-js-commons`
- **TypeScript** — type-safe page objects and tests
