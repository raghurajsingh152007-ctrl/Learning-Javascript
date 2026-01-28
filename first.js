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
let mode="dark";
let color;
if(mode=="dark"){
    color="black";
}
else{
    color="white";
}
console.log("color");
