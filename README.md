# ES6-features

This repository shows some ES6 features with simple examples

### CONST & LET

**const** - const restricts over-writing variables.

**let** - let variables are block-scoped. we can overwrite.

```
const name = "Johan";
name = "Dave";
console.log(name);

**Output:**
Uncaught TypeError: Assignment to constant //variable.
    at main.js:3

let name2 = "Johan";
name2 = "Dave";
console.log(name2);

**OutPut:** Dave
```

Another example for const and let.

```
const nums = [1, 2, 3];
nums.push(4);
console.log(nums);

**Output:** (4) [1, 2, 3, 4]

const nums1 = [1, 2, 3];
nums1 = [4];
console.log(nums1);

**Output:**
Uncaught TypeError: Assignment to constant //variable.
    at main.js:3

let nums2 = [1, 2, 3];
nums2 = [4];
console.log(nums2);

**Output:** [4]
```

Another example when handling objects

```
const students = {
  name: "devae",
  age: 24,
};
students.name = "Peter";
console.log(students);

**Output:** {name: "Peter", age: 24}

const students1 = {
  name: "devae",
  age: 24,
};
students1 = {
   name: "peter",
};
console.log(students1);

**Output:**
Uncaught TypeError: Assignment to constant //variable.
    at main.js:29
```

### ARROW FUNCTIONS

Below example shows how arrow functions work normally and with ES6.

```
function sayHello() {
console.log("hello");
}
sayHello();

**Output:** hello

const sayHello = name => console.log(`hello ${name}`);
sayHello("Dave");

**Output:** hello
```

### FOREACH

The below example shows how use foreach in ES6.

```
const students = ["Dave", "peter", "shyam"];

students.forEach((stud, index) => {
   console.log(stud + index);
});

**Output:**
Dave0
peter1
shyam2

const std = students.map(student => student.slice(0, -1).toLocaleUpperCase());
console.log(std);

**Output:**
(3) ["DAV", "PETE", "SHYA"]
```

### FILTER

How to use filter in ES6.

```
const students = [
{ id: 1, name: "dave", age: 19 },
{ id: 2, name: "peter", age: 24 },
];

const stud2 = students.filter(student => student.age > 20);
console.log(stud2);
**Output:**

0: {id: 2, name: "peter", age: 24}length: 1__proto__: Array(0)
```

### SPREAD

**Syntax is (...) **

The spread syntax is just simple three dots like this ...
It allows an iterable to expand in places where 0+ arguments are expected.

```
const num1 = [1, 2, 3];
const num2 = [num1, 4];
console.log(num2);

**Output :** (2) [Array(3), 4] // Which is wrong

I would like to expect the output like this [1,2,3,4]
const num3 = [1, 2, 3];
const num4 = [...num3, 4];
console.log(num4);

**Output :** (4) [1, 2, 3, 4] // Which is right
```

**With objects**

```
const student1 = [{ id: 1, name: "Dave" }];
console.log(student1);

**Output:** 0: {id: 1, name: "Dave"}length: 1__proto__: Array(0)

const student2 = [
  {
    ...student1,
    email: "dave@test.com",
  },
];
console.log(student2);

**Output:** 0:{id: 1, name: "Dave"}email:"dave@test.com"
```

**how spread with filters**
I would like to remove 4 from the array

```
const num5 = [1, 2, 3, 4, 5];
const num6 = [...num5.filter(n => n !== 4)];
console.log(num6);

**Output:** (4) [1, 2, 3, 5]
```
