//CONST AND LET
// const name = "Johan";
// name = "Dave";
// console.log(name);
//Output:
//Uncaught TypeError: Assignment to constant //variable.
//    at main.js:3

// let name2 = "Johan";
// name2 = "Dave";
// console.log(name2);
//OutPut: Dave
//-------------------------------------------
// const nums = [1, 2, 3];
// nums.push(4);
// console.log(nums);

// //Output: (4) [1, 2, 3, 4]

// const nums1 = [1, 2, 3];
// nums1 = [4];
// console.log(nums1);
//Output:
//Uncaught TypeError: Assignment to constant //variable.
//    at main.js:3

// let nums2 = [1, 2, 3];
// nums2 = [4];
// console.log(nums2);
// //Output: [4]

//-----------------------------------------
// const students = {
//   name: "devae",
//   age: 24,
// };

// students.name = "Peter";
// console.log(students);

// //Output: {name: "Peter", age: 24}

// const students1 = {
//   name: "devae",
//   age: 24,
// };

// students1 = {
//   name: "peter",
// };

// console.log(students1);
//Output:
//Uncaught TypeError: Assignment to constant //variable.
//    at main.js:29

//-------------------------------------------

//ARROW FUNCTIONS
// function sayHello() {
//   console.log("hello");
// }
// sayHello();
//Output: hello
// const sayHello = name => console.log(`hello ${name}`);
// sayHello("Dave");
// //Output: hello

//-------------------------------------------

//FOREACH

/* const students = ["Dave", "peter", "shyam"];

students.forEach((stud, index) => {
  console.log(stud + index);
});

const std = students.map(student => student.slice(0, -1).toLocaleUpperCase());

console.log(std); */
//--------------------------------------------

//FILTER

/* const students = [
  { id: 1, name: "dave", age: 19 },
  { id: 2, name: "peter", age: 24 },
];

const stud2 = students.filter(student => student.age > 20);
console.log(stud2); */

//-----------------------------------------------

//SPREAD
