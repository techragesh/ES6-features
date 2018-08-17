# ES6-features

This repository shows some ES6 features with simple examples

### CONST & LET

**const** - const restricts over-writing variables.

**let** - let variables are block-scoped. we can overwrite.

```
const name = "Johan";
name = "Dave";
console.log(name);

Output:
Uncaught TypeError: Assignment to constant //variable.
    at main.js:3

let name2 = "Johan";
name2 = "Dave";
console.log(name2);

OutPut: Dave
```
