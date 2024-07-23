let jenny = {age: 13, grade: 6, attendance: 100};
let kyle = {age: 12, grade: 7, attendance: 90};
let george = {age: 12, grade: 6, attendance: 87};

console.log(`Jenny is ${jenny.age} years old, she is in the ${jenny.grade}th grade and she has an attendance of ${jenny.attendance}%`);
console.log(`George is ${george.age} years old, he is in the ${george.grade}th grade and he has an attendance of ${george.attendance}%`);
console.log(`Kyle is ${kyle.age} years old, he is in the ${kyle.grade}th grade and she has an attendance of ${jenny.attendance}%`);


// TASK 2 Calulator 

let num1 = 4;
let num2 = 35;

console.log("sum: ", num1 + num2);
console.log("Difference: ", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient: ", num1 / num2);

num1 += 5;
num2 *= 4;

console.log("Updated Num1: ", num1);
console.log("Updated Num2: ", num2);

console.log("IS Num1 equal to num2?: ", num1 == num2);
console.log("IS num1 greater than num2?: ", num1 > num2);
console.log("Is num1 not equal to num2?: ", num1 !== num2);

let isPositive = num1 > 0 && num2 > 0;
let isEven = num1 % 2 === 0 || num2 % 2 === 0;

console.log("Are both numbers positive?", isPositive);
console.log("Is at least one number even?", isEven);