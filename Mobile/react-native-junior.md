## [mobile/react-native] Github user search

## Instructions

Create a search input text where users can type in and get results straight away, without submit required.
Results will list Github users like the mock below.

<img width="329" alt="hiring test junior" src="https://user-images.githubusercontent.com/5455556/181717776-51ca114e-0f56-46e0-a0b3-f61eb72f2535.png">


### The subject

1. Query against Github Api: GET https://api.github.com/search/users?q={USER}.
2. Try to not add any dependency library on a freshly created
   [react native app](https://reactnative.dev/docs/environment-setup) (Only testing libraries accepted).
3. Don't forget to check against modern ways to make HTTP requests on frontend side.
4. Manage edge cases:
   - No results
   - Github api rate limit
   - User type in quickly and going back and forth on his search

### Bonus

<img width="329" alt="hiring test mid senior" src="https://user-images.githubusercontent.com/5455556/181717810-ffdef922-cf76-425c-ab1d-70e772a67b58.png">

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

- Use official React Native CLI to generate a new project (can use TypeScript template if you want)
- Push your code to a Github repository
- Document what you've done

### Evaluation

- Quality of the code
- Scalability of the algorithm
- Usage of good practices and modern javascript
- Respect of the mock
- Types
- Tests