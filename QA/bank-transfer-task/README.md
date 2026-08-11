# Bank Transfer QA Automation

## Overview
This project provides a robust, end-to-end automation suite for the **Bank Transfer** feature of the Internal Bank application. The framework is designed using industry-standard patterns to ensure maintainability, scalability, and high test coverage.

## Tech Stack
- **Cypress** - Core E2E testing framework
- **Cucumber/Gherkin** - BDD (Behavior Driven Development) methodology
- **TypeScript** - Type safety and modern development features
- **Page Object Model (POM)** - Structural design for UI components
- **Allure Reports** - Advanced test reporting with visual artifacts
- **Data-Driven Testing** - Utilizing Cypress Fixtures for scalable test data

## Project Structure
```text
QA/bank-transfer-task/
├── cypress/
│   ├── e2e/
│   │   └── bank_transfer.feature    # Human-readable test scenarios
│   ├── fixtures/
│   │   └── transferData.json        # Centralized test data (BVA, Error cases)
│   └── support/
│       ├── locators/
│       │   └── BankTransferLocators.ts # UI element selectors
│       ├── pages/
│       │   ├── BasePage.ts             # Generic automation engine
│       │   └── BankTransferPage.ts     # Business logic for transfer page
│       ├── step_definitions/
│       │   └── bank_transfer.steps.ts  # Translation layer between Gherkin and Code
│       └── commands.ts                 # Global reusable commands (e.g., Login)
├── package.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 18 or higher
- npm
- Allure CLI (optional, for viewing reports locally: `brew install allure`)

### Installation
```bash
npm install
```

### Running Tests
| Execution Mode | Command |
|----------------|---------|
| Headless (CLI) | `npm test` |
| Interactive UI | `npm run cypress:open` |
| Advanced Report| `npm run test:allure` |

## Test Coverage & QA Strategy

The suite employs several QA methodologies to ensure 100% reliability:

- **Happy Path Testing**: Validating standard instant and scheduled bank transfers.
- **Boundary Value Analysis (BVA)**: Exhaustive testing of Amount (0.01 - 100k) and IBAN length (14-34) limits.
- **Negative Testing**: Validation of invalid characters in labels and past date rejections.
- **Security (RBAC)**: Ensuring Role-Based Access Control correctly denies access to unauthorized users (e.g., Standard User).
- **Data-Driven Testing**: All boundary values and error-handling data are stored in `fixtures/transferData.json` for easy management.

## Key Technical Features

- **Standardized POM**: Every page inherits from a robust `BasePage`, ensuring code reusability (DRY principle).
- **Calculated Dynamic Dates**: The system automatically calculates dates (tomorrow, +90 days) during runtime, preventing test failures caused by hardcoded dates.
- **Stable Selectors**: Exclusively uses `data-testid` attributes to ensure tests remain resilient to UI design changes.
- **Automatic Sync**: Uses intelligent visibility checks (`waitForVisible`) instead of fragile static waits.

## Author
**Hakan Tetik** - Senior QA Automation Engineer
