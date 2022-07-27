## [mobile/react-native] Github user search

## Instructions

Create a search input text where users can type in and get results straight away, without ENTER keydown or submit button required.
Results will list Github users like the mock below.

<img width="600" alt="Capture d’écran 2022-07-27 à 12 13 23" src="https://user-images.githubusercontent.com/42266363/181222813-19dc0457-8284-47e7-9f8c-0917bb02afe2.png">

### The subject

1. Query against Github Api: GET https://api.github.com/search/users?q={USER}.
2. Try to not add any dependency library on a freshly created
   [react native app](https://reactnative.dev/docs/environment-setup).
3. Don't forget to check against modern ways to make HTTP requests on frontend side.
4. Bonus: manage edge cases (no results, Github api rate limit, user type in quickly and going back and forth on his search)

### Guidelines

- Use React Native CLI to generate a new project (can use TypeScript template if you want)
- Use hooks
- Push your code to a Github repository
- Document what you've done

### Evaluation

- Quality of the code
- Scalability of the algorithm
- Usage of good practices and modern javascript
- Respect of the mock
- Tests 
