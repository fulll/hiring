# Fulll E2E Automation (Bonus Task)

## Overview
End-to-end test automation suite for the **fulll.fr** production website. Built with Cypress, Cucumber (BDD), and Allure for professional reporting.

## Tech Stack
| Technology | Purpose |
|------------|---------|
| Cypress | E2E testing framework |
| Cucumber/Gherkin | BDD test scenarios |
| TypeScript | Type-safe code |
| Allure | Test reporting with screenshots and videos |
| Jenkins | CI/CD pipeline automation |
| Page Object Model | Maintainable test architecture |

## Project Structure
```
QA/bonus-task/
├── cypress/
│   ├── e2e/
│   │   └── fulll_site.feature       # Gherkin test scenarios
│   └── support/
│       ├── locators/
│       │   └── FulllSiteLocators.ts # CSS selectors
│       ├── pages/
│       │   ├── BasePage.ts          # Common actions
│       │   ├── FulllHomePage.ts     # Homepage interactions
│       │   └── FulllContactPage.ts  # Contact form interactions
│       ├── step_definitions/
│       │   └── fulll_site.steps.ts  # Step implementations
│       └── e2e.ts                   # Global config
├── cypress.config.ts                # Cypress configuration
├── package.json
└── README.md
```

## Installation
```bash
cd QA/bonus-task
npm install
```

## Running Tests

| Command | Description |
|---------|-------------|
| `npm test` | Run tests headlessly |
| `npm run cypress:open` | Open Cypress interactive mode |
| `npm run test:allure` | Run tests + generate + open Allure report |
| `npm run allure:report` | Generate Allure report |
| `npm run allure:open` | Open existing Allure report |
| `npm run allure:clear` | Clean report data |

## Test Scenarios

### 1. Mega Menu Navigation
- Opens Solutions dropdown menu
- Navigates to "Production comptable" page
- Verifies page heading contains expected text

### 2. Contact Form Submission
- Navigates to demo request page
- Handles HubSpot iframe form
- Fills all required fields
- Submits form successfully

## Key Features
- **Dynamic waits** - Uses visibility assertions instead of static waits
- **Cookie handling** - Automatic Axeptio banner dismissal
- **Iframe support** - HubSpot embedded form interaction
- **Video recording** - All test runs are recorded
- **Screenshot on failure** - Automatic capture for debugging

## Jenkins CI/CD

A `Jenkinsfile` is included at the repository root for pipeline integration.

### Pipeline Stages
1. **Install Dependencies** - Runs `npm install`
2. **Run Cypress Tests** - Executes all test scenarios
3. **Generate Allure Report** - Creates detailed test report

### Jenkins Setup
1. Create a new Pipeline job
2. Configure SCM: `https://github.com/hakantetik44/hiring.git`
3. Branch: `*/hakan`
4. Script Path: `Jenkinsfile`
5. Requires: Allure Jenkins Plugin

### Artifacts
After each build:
- Videos: `cypress/videos/`
- Screenshots: `cypress/screenshots/`
- Allure Report: Available in Jenkins UI

## Prerequisites
- Node.js 18+
- npm
- Allure CLI (`brew install allure`)
- Jenkins with Allure Plugin (for CI/CD)

## Author
Hakan Tetik - QA Automation Engineer
