## [front/react] Github user search

## Instructions

Create a search input text where users can type in and get results straight away, without ENTER keypress or submit button required.
Results will list Github users like the mock below, and must be responsive.

<img width="1000" alt="Capture d’écran 2022-07-29 à 09 41 46" src="https://user-images.githubusercontent.com/42266363/181709725-b8bf2cfd-7bb4-4521-a846-d96cd6ca358b.png">

### The subject

1. Query against Github Api: GET https://api.github.com/search/users?q={USER}.
2. Try to not add any dependency library on a freshly created
   [create react app](https://github.com/facebook/create-react-app) (Only testing libraries accepted).
3. Don't forget to check against modern ways to make HTTP requests on frontend side.
4. Manage edge cases:
   - No results
   - Github api rate limit
   - User type in quickly and going back and forth on his search

### Bonus

<img width="1000" alt="Capture d’écran 2022-07-29 à 09 32 10" src="https://user-images.githubusercontent.com/42266363/181709474-a3c16223-f352-494e-89f4-6434bbf51495.png">


1. Add a checkbox on Card items
2. Add a checkbox to select all cards with the number of selected items
3. Add two actions available if there is a the selection
   - Duplicate items
   - Delete items

These actions are only made in front-end and will be cancelled when the search change

### Extra Bonus

Add an edit mode

- When edit mode is on:

  - display checkboxes on cards
  - display the select all checkbox
  - display duplicate and delete actions

- When edit mode is off:

  - hide checkboxes on cards
  - hide the select all checkbox
  - hide duplicate and delete actions

### Guidelines

- Use React.js with TypeScript to render the view
- Push your code to a Github repository
- Document what you've done

### Evaluation

- Quality of the code
- Scalability of the algorithm
- Usage of good practices and modern javascript
- Respect of the mock
- Types
- Responsive
- Tests
