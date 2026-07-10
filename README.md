# RetailAutomation

RetailAutomation is a Playwright-based end-to-end testing project for a retail website. It exercises the main user journey from login through product selection, cart review, checkout, and sign-out.

## Features

- End-to-end test flow for the retail application
- Page object model for reusable UI interactions
- Playwright HTML reporting
- Test coverage for dashboard, products, cart, and checkout flows

## Prerequisites

- Node.js 18 or newer
- npm

## Installation

```bash
npm install
npx playwright install
```

## Running Tests

Run the full test suite:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/test.spec.ts
```

Generate and open the Playwright report:

```bash
npx playwright show-report
```

## Project Structure

```text
tests/
  pages/
    cartPage.ts
    checkoutPage.ts
    dashboardPage.ts
    loginPage.ts
    productsPage.ts
  test.spec.ts
playwright.config.ts
```

## Notes

- The current configuration runs tests in Chromium.
- Test results and HTML reports are generated under the report and test-results folders.
