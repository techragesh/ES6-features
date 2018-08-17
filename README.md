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

Another example for const and let.

```
const nums = [1, 2, 3];
nums.push(4);
console.log(nums);

Output: (4) [1, 2, 3, 4]

const nums1 = [1, 2, 3];
nums1 = [4];
console.log(nums1);

Output:
Uncaught TypeError: Assignment to constant //variable.
    at main.js:3

let nums2 = [1, 2, 3];
nums2 = [4];
console.log(nums2);

Output: [4]
```

Another example when handling objects

```
const students = {
  name: "devae",
  age: 24,
};
students.name = "Peter";
console.log(students);

Output: {name: "Peter", age: 24}

const students1 = {
  name: "devae",
  age: 24,
};
students1 = {
   name: "peter",
};
console.log(students1);

Output:
Uncaught TypeError: Assignment to constant //variable.
    at main.js:29
```
