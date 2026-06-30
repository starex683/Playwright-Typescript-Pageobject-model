# 🚀 Playwright Automation Framework | TypeScript | Page Object Model

## 📌 Project Overview

This project is a scalable UI Automation Framework developed using **Playwright** and **TypeScript** by following the **Page Object Model (POM)** design pattern.

The framework automates the Shopify Sauce Demo application and demonstrates industry-standard automation practices including reusable page objects, externalized test data, environment configuration, reporting, screenshots, videos, and accessibility testing.

---

# 🛠 Tech Stack

* Playwright
* TypeScript
* Node.js
* Page Object Model (POM)
* Dotenv
* Playwright HTML Reporter
* Allure Reporter
* Axe-Core Playwright
* Git & GitHub

---

# 📂 Project Structure

```text
playwright-framework
│
├── hooks
│   └── shopifyHooks.ts
│
├── pages
│   ├── BasePage.ts
│   ├── LoginPage.ts
│   ├── HomePage.ts
│   └── CheckoutPage.ts
│
├── tests
│   ├── FunctionalSuite
│   │   ├── login.spec.ts
│   │   ├── addToCart.spec.ts
│   │   ├── checkout.spec.ts
│   │   ├── wishlist.spec.ts
│   │   └── productSearch.spec.ts
│   │
│   ├── ProductionSanitySuite
│   │   ├── productionLogin.spec.ts
│   │   ├── productionCheckout.spec.ts
│   │   └── smoke.spec.ts
│   │
│   └── AccessibilitySuite
│       ├── loginAccessibility.spec.ts
│       ├── homeAccessibility.spec.ts
│       └── checkoutAccessibility.spec.ts
│
├── test-data
│   └── loginData.json
│
├── utils
│   ├── helper.ts
│   ├── logger.ts
│   └── constants.ts
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
├── .env
└── README.md
```

---

# ✨ Framework Features

* Page Object Model (POM)
* TypeScript-based automation
* Reusable page classes
* Hooks for setup and teardown
* External test data
* Environment variable support using `.env`
* Functional, Sanity, and Accessibility test suites
* HTML Reports
* Allure Reports
* Automatic screenshots
* Video recording
* Playwright Trace Viewer
* Logging utilities
* Modular project architecture

---

# 🧪 Test Suites

## Functional Suite

Validates complete business functionality.

### Test Scenarios

* Login
* Product Search
* Add To Cart
* Checkout
* Wishlist

Run:

```bash
npm run functional
```

---

## Production Sanity Suite

Validates critical functionality after deployment.

### Test Scenarios

* Login
* Checkout
* Smoke Test

Run:

```bash
npm run sanity
```

---

## Accessibility Suite

Performs accessibility validation using Axe-Core.

### Test Scenarios

* Login Page Accessibility
* Home Page Accessibility
* Checkout Page Accessibility

Run:

```bash
npm run accessibility
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/starex683/Playwright-Typescript-Pageobject-model.git
```

Navigate to the project

```bash
cd Playwright-Typescript-Pageobject-model
```

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

---

# 🔐 Environment Configuration

Create a `.env` file in the project root.

Example:

```properties
BASE_URL=https://sauce-demo.myshopify.com

EMAIL=john@example.com
PASSWORD=john123

FIRST_NAME=John
LAST_NAME=Doe

ADDRESS=ABC Street

APARTMENT=101

CITY=Leeds

POSTCODE=LS123AB

PHONE=9876543210
```

---

# ▶️ Running Tests

Run all tests

```bash
npm test
```

Run Functional Suite

```bash
npm run functional
```

Run Production Sanity Suite

```bash
npm run sanity
```

Run Accessibility Suite

```bash
npm run accessibility
```

Run in headed mode

```bash
npx playwright test --headed
```

Run a single test

```bash
npx playwright test tests/FunctionalSuite/login.spec.ts
```

---

# 📊 Reports

## Playwright HTML Report

Generate:

```bash
npx playwright show-report
```

---

## Allure Report

Generate:

```bash
allure generate allure-results --clean
```

Open:

```bash
allure open
```

---

# 📸 Test Artifacts

The framework supports automatic generation of:

* Screenshots
* Videos
* Trace Files
* HTML Reports
* Allure Reports

These artifacts help with debugging failed test executions.

---

# 🏗 Framework Architecture

The framework follows the **Page Object Model (POM)** design pattern.

### Pages

Contains page locators and reusable methods.

### Tests

Contains business test scenarios.

### Hooks

Contains reusable setup and teardown methods.

### Test Data

Stores external JSON test data.

### Utilities

Contains reusable helper methods, constants, and logging functionality.

---

# ✅ Best Practices Implemented

* Page Object Model (POM)
* TypeScript
* Externalized Test Data
* Environment Variables
* Reusable Components
* Modular Framework Design
* HTML Reporting
* Accessibility Testing
* Clean Code Structure
* Enterprise Automation Standards

---

# 👩‍💻 Author

**Akhila**

Automation Test Engineer
