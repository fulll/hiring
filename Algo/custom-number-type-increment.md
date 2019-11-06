## [Algo] Increment a custom Number type

### Instructions

Imagine that you have a custom `Array<digit>` type in your app that manage numbers as an array of digits ([0-9] range). 
Some examples:

| number | Array<digit>  |
| ------ | ------------- |
| 123    | [1,2,3]       |
| 99     | [9,9]         |

We want to be able to increment a `Array<digit>`.

### Subject

Your mission is to write an `increment` function that adds `1` to the input `Array<number>` and returns the incremented `Array<number>`.

Here's the prototype of the function to implement:

```typescript
increment(number: Array<digit>): Array<digit> { /* ... */ }
```

#### Guidelines

- Write it in your favorite language (one of: javascript, php)
- :warning: Please don't use the number type of your language and increment it! (eg: `join('', $nunmber)++`)
- Push your code to a Github repository or any sandbox environment like [codesandbox](https://codesandbox.io)
- Get ready to justify some of your choices for the interview

#### Evaluation

- Quality of the code
- Scalability of the algorithm
- Usage of good practices and modern programming language features
