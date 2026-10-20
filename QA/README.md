# QA Automation Submission - Hakan Tetik

This directory contains my technical test submissions for the Senior QA Automation Engineer role. Both tasks have been implemented with a focus on **Clean Code**, **Scalability**, and **Enterprise Grade** testing patterns.

## 🚀 Submissions

### 1. [Bank Transfer Task](./bank-transfer-task)
End-to-end automation for an internal banking application.
- **Goal**: Validate business rules, amount/date boundaries, and role-based security.
- **Highlights**: Data-Driven Testing (Fixtures), Boundary Value Analysis, RBAC testing.

### 2. [Bonus Task (Web Automation)](./bonus-task)
Automated testing of the production website `fulll.fr`.
- **Goal**: Validate complex user flows, HubSpot iframe forms, and cross-page navigation.
- **Highlights**: Iframe handling, Cookie banner automation, Mega-menu navigation.

---

## 🛠️ Unified Architecture

Both projects follow a unified, scalable architecture:

- **Core Engine**: A robust `BasePage` motor handling all technical element interactions (Visibility checks, Dynamic waits, Actions).
- **Design Pattern**: Strictly follows the **Page Object Model (POM)** pattern.
- **Centralized Selectors**: All UI elements are separated into dedicated `Locators` files.
- **Type Safety**: Fully implemented in **TypeScript**.
- **Reporting**: Integrated **Allure Report** with automatic video and screenshot capture on failures.
- **CI/CD READY**: Includes `Jenkinsfile` for automated pipeline execution.

## 📊 How to run?

Navigate to each project directory and follow the instructions in their respective README files:
- [Bank Transfer Instructions](./bank-transfer-task/README.md)
- [Bonus Task Instructions](./bonus-task/README.md)

---
**Author**: Hakan Tetik  
**Role**: Senior QA Automation Engineer
