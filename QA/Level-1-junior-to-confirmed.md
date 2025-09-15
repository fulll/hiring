# QA Test – Cypress + Cucumber (Bank Transfer)

## Context
You work on an internal banking platform. Authorized users (**Administrators** or **Purchase Managers**) can create a **bank transfer** via a form. Your goal: author clear **Gherkin scenarios** and implement **Cypress + Cucumber** step definitions that validate business rules and guard against regressions.

## Feature under test
Form fields and rules:

| Field            | Type                | Validation                                                         |
| ---------------- | ------------------- | ------------------------------------------------------------------ |
| Beneficiary Name | Text                | Required                                                           |
| IBAN             | Text                | Required; Alphanumeric; length 14–34                               |
| Label            | Text                | Required; Alphanumeric; max 255; no special characters             |
| Amount           | Numeric (decimal)   | Required; Min **0.01** – Max **100,000**                           |
| Transfer Mode    | Radio               | **Instant** (default) or **Scheduled**                             |
| Transfer Date    | Date (if Scheduled) | Required; **min: tomorrow**; **max: today + 90 days**              |

**Access control**: only `Administrator` and `Purchase Manager` may create a transfer.

## What you deliver (text files only)
- `bank_transfer.feature`  
  - Use **plain Gherkin** with `Background`, `Scenario`/`Scenario Outline`, and **tags** when useful (e.g., `@transfer`, `@rbac`, `@boundary`, `@date`).
- `bank_transfer.steps.ts` (or `.js`)  
  - Cypress + Cucumber step definitions; readable, structured, and DRY.
- `README.md`  
  - Assumptions and clarifications, how to run locally, and a **simple coverage matrix** (rule → scenario).

## What we provide
- An example `login_test.feature` and `login_test.js` for style and structure inspiration (Gherkin flow, Given/When/Then, Cypress basics).

## Scope & minimal coverage (keep it focused)
Aim for **quality over quantity**. At minimum:
1) **Happy path – Instant**: valid data, success confirmation.
2) **Happy path – Scheduled**: date = **tomorrow**, success confirmation.
3) **One invalid case**: pick a representative constraint (e.g., **IBAN too short**, **amount = 0**, or **label with special chars**).
4) **Access control**: a non-authorized role **cannot** access/trigger transfer creation (CTA hidden or controlled refusal).

If time allows, add one or two **boundary checks**, e.g.:
- Amount at **0.01**, **100,000**, **100,000.01**  
- IBAN length **14**, **34**, **13**  
- Date **tomorrow**, **+91 days**, **yesterday**

## Technical expectations (pragmatic)
- Prefer **stable selectors** (e.g., `data-testid`) over CSS class chains or XPath.
- Use **dynamic dates** (no hard-coded calendar dates).
- Avoid arbitrary `cy.wait(...)`. Prefer deterministic waits (DOM state or `cy.intercept` when needed).
- Keep steps reusable (helper functions or custom commands if it helps).
- Keep the suite **short** and **fast**.

## Recommended structure (suggestion)
```
/e2e/
  bank_transfer.feature
  bank_transfer.steps.ts
  /support/
    commands.ts          # optional helpers
  /fixtures/             # optional test data
README.md
```

## What we’ll look at (brief)
- Business-rule coverage (success/failure, boundaries, RBAC)  
- Gherkin clarity and naming  
- Selector robustness and deterministic assertions  
- Simple, maintainable Cypress code  
- A short, useful README (assumptions + coverage matrix)
