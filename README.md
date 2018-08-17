# ES6-features

This repository shows some ES6 features with simple examples

### CONST & LET

**const** - const restricts over-writing variables.

**let** - let variables are block-scoped. we can overwrite.

<pre>
const name = "Johan";
name = "Dave";
console.log(name);

<b>Output:</b>
Uncaught TypeError: Assignment to constant //variable.
    at main.js:3

let name2 = "Johan";
name2 = "Dave";
console.log(name2);

<b>OutPut:</b> Dave
</pre>

Another example for const and let.

<pre>
const nums = [1, 2, 3];
nums.push(4);
console.log(nums);

<b>Output:</b> (4) [1, 2, 3, 4]

const nums1 = [1, 2, 3];
nums1 = [4];
console.log(nums1);

<b>Output:</b>
Uncaught TypeError: Assignment to constant //variable.
    at main.js:3

let nums2 = [1, 2, 3];
nums2 = [4];
console.log(nums2);

<b>Output:</b> [4]
</pre>

Another example when handling objects

<pre>
const students = {
  name: "devae",
  age: 24,
};
students.name = "Peter";
console.log(students);

<b>Output:</b> {name: "Peter", age: 24}

const students1 = {
  name: "devae",
  age: 24,
};
students1 = {
   name: "peter",
};
console.log(students1);

<b>Output:</b>
Uncaught TypeError: Assignment to constant //variable.
    at main.js:29
</pre>

### ARROW FUNCTIONS

Below example shows how arrow functions work normally and with ES6.

<pre>
function sayHello() {
console.log("hello");
}
sayHello();

<b>Output:</b> hello

const sayHello = name => console.log(`hello ${name}`);
sayHello("Dave");

<b>Output:</b> hello
</pre>

### FOREACH

The below example shows how use foreach in ES6.

<pre>
const students = ["Dave", "peter", "shyam"];

students.forEach((stud, index) => {
   console.log(stud + index);
});

<b>Output:</b>
Dave0
peter1
shyam2

const std = students.map(student => student.slice(0, -1).toLocaleUpperCase());
console.log(std);

<b>Output:</b>
(3) ["DAV", "PETE", "SHYA"]
</pre>

### FILTER

How to use filter in ES6.

<pre>
const students = [
{ id: 1, name: "dave", age: 19 },
{ id: 2, name: "peter", age: 24 },
];

const stud2 = students.filter(student => student.age > 20);
console.log(stud2);
<b>Output:</b>

0: {id: 2, name: "peter", age: 24}length: 1__proto__: Array(0)
</pre>

### SPREAD

**Syntax is (...)**

The spread syntax is just simple three dots like this ...
It allows an iterable to expand in places where 0+ arguments are expected.

<pre>
const num1 = [1, 2, 3];
const num2 = [num1, 4];
console.log(num2);

<b>Output :</b> (2) [Array(3), 4] <b>// Which is wrong</b>

I would like to expect the output like this [1,2,3,4]
const num3 = [1, 2, 3];
const num4 = [...num3, 4];
console.log(num4);

<b>Output :</b> (4) [1, 2, 3, 4] <b>// Which is right</b>
</pre>

**With objects**

<pre>
const student1 = [{ id: 1, name: "Dave" }];
console.log(student1);

<b>Output:</b> 0: {id: 1, name: "Dave"}length: 1__proto__: Array(0)

const student2 = [
  {
    ...student1,
    email: "dave@test.com",
  },
];
console.log(student2);

<b>Output:</b> 0:{id: 1, name: "Dave"}email:"dave@test.com"
</pre>

**how spread with filters**
I would like to remove 4 from the array

<pre>
const num5 = [1, 2, 3, 4, 5];
const num6 = [...num5.filter(n => n !== 4)];
console.log(num6);

<b>Output:</b> (4) [1, 2, 3, 5]
</pre>

### DESTRUCTURING

How will do restructuring in react

<pre>
const college = {
  name: "St.Josph",
  address: {
    street: "Main Road",
    city: "Texas",
  },
  branch: ["CS", "IT"],
};

const { name, address, branch } = college;
const { street } = college.address;
console.log(street);
console.log(name, address.street, branch[0]);

<b>Output: </b>
Main Road
St.Josph Main Road CS
</pre>
