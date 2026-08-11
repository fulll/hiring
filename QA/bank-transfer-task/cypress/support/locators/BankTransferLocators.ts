export const Locators = {
    formField: (name: string) => `[data-testid="${name}"]`,
    submitButton: '[data-testid="submit"]',
    notification: '[data-testid="notification"]',
    errorMessage: (field: string) => `[data-testid="error-${field}"]`
};
