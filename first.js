console.log("Raghuraj Singh"); // to print somithing
console.log(" I am learning JS");
age = 24;
console.log(age); // variable declarlation
let name = "tony stark"; // can be updated
const PI = 3.14; // can not be updated
console.log(name);

// object understanding
const student = {
  fullName: "RaghurajSingh", // key : "value" pair
  age: "19",
  marks: 8.5,
  isPass: true,
};

student["marks"] = student["marks"] + 1; // vaule changing in object
console.log(student.age);
console.log(student.marks);

// learning Arthematic operators
let a = 5;
let b = 2;
console.log("a=", a, "&b=", b);
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a ** b =", a ** b);

// Comparsion operators
console.log("a==b", a == b);
console.log("a=b", a != b);
console.log("a>b", a > b);
console.log("a<b", a < b);
console.log("a==b", a == b);

// logical opertor
let cond1 = a > b;
let cond2 = a == 4;
console.log("cond1&&cond2 =", cond1 && cond2);
console.log("cond1||cond2 =", cond1 || cond2);
console.log("cond1&&cond2 =", !(cond1 && cond2));

// Conditional Statements
let number = 10;
if (number % 2 == 0) {
  console.log(number, "The number is even");
} else if (number % 2 != 0) {
  console.log(number, "The number is odd");
} else {
  console.log("Enter the valid number ");
}

// Pratice Question
let num = prompt("Enter Your Number:");

if (num % 5 == 0) {
  console.log("The number is divisble by 5");
} else {
  console.log("The number is not divisible by 5");
}
