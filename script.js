//previous day revision

//Que 1
var a = 10;
let b = 20;
const c = 30;
console.log(a, b, c);

//Que 2
let name = "Vijay";
let age = 24;
let salary = 25000.85;
let isWorking = true;

console.log(typeof name);
console.log(typeof age);
console.log(typeof salary);
console.log(typeof isWorking);

//Que 3

const fruits = ["Apple", "Banana", "Jackfruit", "Papaya", "Mango"];
console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

//Que 4

const person = {
  name: "Vijay",
  age: 24,
  location: "Coimbatore",
  skills: ["HTML", "CSS", "JavaScript"]
};

console.log(person.name);
console.log(person.age);
console.log(person.location);
console.log(person.skills);

//Que 5

let x = 17, y = 5;
console.log("Addition:", x + y);
console.log("Subtraction:", x - y);
console.log("Multiplication:", x * y);
console.log("Division:", x / y);
console.log("Modulus:", x % y);
console.log("Exponentiation:", x ** y);

//QUE 6

let num = 10;
console.log(++num);

//Que 7

let p = 20;
let q = p++;
console.log("p:", p);
console.log("q:", q);

//Que 8

let r = 10;      
r += 3;  console.log(r);  
r -= 3;  console.log(r);  
r *= 3;  console.log(r);  
r /= 3;  console.log(r);  
r %= 3;  console.log(r); 

//Que 9

console.log(100 > 50);
console.log(100 == 100);
console.log(100 != 200);

//Que 10

console.log(25 == "25");   
console.log(25 === "25"); 

//Que 11

let age1 = 22, hasID = true;
console.log(age1 >= 18 && hasID);

//Que 12

let isWeekend = false, isHoliday = true;
console.log(isWeekend || isHoliday);

//Que 13

console.log(!(10 > 5));

//Que 14

let personAge = 18;
let result = personAge >= 18 ? "Eligible to vote" : "Not eligible to vote";
console.log(result);

//Que 15

let userName = "Arjun";
let userAge = 25;
let city = "Chennai";
console.log(`My name is ${userName}, I am ${userAge} years old and I live in ${city}.`);

//Que 16

console.log(typeof ("Hello" + 100));
console.log(typeof (100 + true));
console.log("Hello" + 100);
console.log(100 + true);

//Que 17

let str = "500";
let total = Number(str) + 100;
console.log(total);

//Que 18

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("JavaScript"));


//Conditional Statements

//Que 1

let a1 = 10;

if(a1>0)
{
    console.log("Postive");
}
else{
    console.log("Negative");
}
//Que 2

let age = 20;

if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}

//Que 3

let number = 7;

if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

//Que 4

let marks = 42;

if (marks >= 35) {
  console.log("Pass");
} else {
  console.log("Fail");
}

//Que 5

let hour = 14;

if (hour >= 1 && hour <= 6) {
  console.log("Early Morning");
} else if (hour >= 7 && hour <= 12) {
  console.log("Good Morning");
} else if (hour >= 13 && hour <= 15) {
  console.log("Good Afternoon");
} else if (hour >= 16 && hour <= 18) {
  console.log("Good Evening");
} else if (hour >= 19 && hour <= 24) {
  console.log("Good Night");
} else {
  console.log("Invalid Time");
}

//Que 6

let age = 22;
let height = 175;  // in cm
let weight = 65;   // in kg

if (age >= 18) {
  if (height >= 170) {
    if (weight >= 55) {
      console.log("Selected");
    } else {
      console.log("Rejected: weight is too low");
    }
  } else {
    console.log("Rejected: height is too short");
  }
} else {
  console.log("Rejected: age is below 18");
}

//Que 7

let trafficLight = "yellow";

switch (trafficLight) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Get ready");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid signal");
}

//Que 8

let dayNumber = 3;

switch (dayNumber) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day number");
}

//Que 9

let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
  console.log("Login successful");
} else {
  console.log("Invalid username or password");
}

//Que 10

let score = 72;

if (score >= 90) {
  console.log("Grade A");
} 
else if (score >= 75) {
  console.log("Grade B");
}
 else if (score >= 50) {
  console.log("Grade C");
}
 else {
  console.log("Fail");
}

// Looping Statements

//Que 1

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//Que 2

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

//Que 3

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//Que 4

for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//Que 5

for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

//Que 6

let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum += i;
}

console.log("Sum:", sum);

//Que 7

let n = 10;

while (n >= 1) {
  console.log(n);
  n--;
}

//Que 8

let count = 1;

do {
  console.log(count);
  count++;
} while (count <= 5);

//Que 9

for (const char of "JAVASCRIPT") {
  console.log(char);
}

//Que 10

const languages = ["JavaScript", "Python", "Java", "C++", "Go"];

for (const lang of languages) {
  console.log(lang);
}

//Que 11

const employee = {
  name: "Arjun",
  age: 25,
  location: "Chennai",
  designation: "Web Developer"
};

for (const key in employee) {
  console.log(`${key}: ${employee[key]}`);
}

//Que 12

const brands = ["Apple", "Samsung", "OnePlus", "Xiaomi", "Realme"];

for (const brand of brands) {
  console.log(brand);
}

//combined Challenge

//Que 1

const marks = [78, 45, 92, 33, 67];

for (let i = 0; i < marks.length; i++) {
  console.log(`Mark ${i + 1}: ${marks[i]}`);
}

//Que 2

const employee = {
  name: "Vijay",
  age: 24,
  salary: 32000,
  location: "Coimbatore"
};

for (const key in employee) {
  console.log(`${key}: ${employee[key]}`);
}

//Que 3

const numbers = [12, 7, 20, 33, 8];

for (const num of numbers) {
  if (num % 2 === 0) {
    console.log(`${num} is Even`);
  } else {
    console.log(`${num} is Odd`);
  }
}

//Que 4

const student = {
  name: "Priya",
  marks: 58
};

if (student.marks >= 35) {
  console.log(`${student.name}: Pass`);
} else {
  console.log(`${student.name}: Fail`);
}

//Que 5

let signal = "green";

switch (signal) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Get ready");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid signal");
}

//Que 6

const number = 7;

for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

//Que 7

const fruits = ["apple", "banana", "mango", "orange", "grapes"];

for (const fruit of fruits) {
  console.log(fruit.toUpperCase());
}

//Que 8

const emp = {
  name: "Karthik",
  designation: "Developer",
  salary: 30000,
  location: "Coimbatore"
};

for (const key in emp) {
  console.log(`${key}: ${emp[key]}`);
}

if (emp.salary > 25000) {
  console.log("Salary is above ₹25,000");
} else {
  console.log("Salary is ₹25,000 or below");
}

//Que 9

const correctUsername = "admin";
const correctPassword = "pass@123";

let username = "admin";
let password = "pass@123";

if (username === correctUsername && password === correctPassword) {
  console.log("Login successful. Welcome, " + username + "!");
} else if (username !== correctUsername) {
  console.log("Incorrect username");
} else {
  console.log("Incorrect password");
}

//Que 10

let students = [
    {
        name: "Kumar",
        marks: 45
    },
    {
        name: "Gopishanker",
        marks: 30
    },
    {
        name: "Dinesh",
        marks: 60
    },
    {
        name: "Suresh",
        marks: 25
    },
    {
        name: "Anand",
        marks: 90
    }
];

for (let student of students) {

    console.log("Name:", student.name);
    console.log("Marks:", student.marks);

    if (student.marks >= 35) {
        console.log("Result: Pass");
    } else {
        console.log("Result: Fail");
    }
}
