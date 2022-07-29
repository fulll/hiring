## [front/react] Github user search

## Instructions

Create a search input text where users can type in and get results straight away, without ENTER keypress or submit button required.
Results will list Github users like the mock below, and must be responsive.

<img width="1000" alt="Capture d’écran 2022-07-29 à 09 29 15" src="https://user-images.githubusercontent.com/42266363/181709007-eabaf8ff-e298-44db-9213-bb515c2e0757.png">

### The subject

1. Query against Github Api: GET https://api.github.com/search/users?q={USER}.
2. Try to not add any dependency library on a freshly created
   [create react app](https://github.com/facebook/create-react-app) (Only testing libraries accepted).
3. Don't forget to check against modern ways to make HTTP requests on frontend side.
4. Manage edge cases:
   - No results
   - Github api rate limit
   - User type in quickly and going back and forth on his search
5. Add a checkbox on each card item
6. Add a checkbox for select all cards with the number of selected items
7. Add two actions depending selected items
   - Duplicate items
   - Delete items

These actions are only front-end and will be reset when the search change

### Bonus

Add an edit mode

- When edit mode is on:

  - display checkboxes on cards
  - display the select all checkbox
  - display duplicate and delete actions

- When edit mode is off:
  - hide checkboxes
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
