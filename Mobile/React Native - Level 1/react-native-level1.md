# [Mobile/React Native]

# Instructions
Build a simple mobile iOS/Android application

---

 1. When user opens app, it should fill an authentication form (email/password). Password field should not display the input value clearly. When user touches the submit button, user is "logged" and app shows IED logotype.
   - Use a custom *IEDFormInput* component
   - Use a custom *IEDFormButton* component

  **Bonus: For performance purpose, use the native assets directories (iOS/Android) to embed the logotype image.**

---

 2. When user is submitting form, form has to be validated. When form has errors, user should be informed. 
   - email: should be a valid email address
   - password: should not be empty, min length 6 including a special char

  **Bonus: User can submit form only when it has no error. Disable submit button until form is valid.**

---

 3. If logged user is an IED collaborator (email contains @inextenso.fr), app displays "Hello Dear Collaborator!" below the logotype. User can "logout" and will be redirected to the authentication form.

---

## Guidelines

 - Use React Native CLI to generate a new project (can use TypeScript template if you want)
 - Use hooks
 - Push your code to a Github repository
 - Document what you've done

## Evaluation

- Quality of the code
- Scalability of components and business logic
- Usage of good practices and modern javascript