// Practice 1
let number = -2;
if (number < 0) {
  console.log("It is a negative integer");
} else if ((number = 0)) {
  console.log("It zero");
} else {
  console.log("It is a positive integer");
}

// Practice 2

let day = "Friday";
switch (day) {
  case "Monday":
    console.log("It is a week day");
    break;
  case "Tuesday":
    console.log("It is a week day");
    break;
  case "Wednesday":
    console.log("It is a week day");
    break;
  case "Thursday":
    console.log("It is a week day");
    break;
  case "Friday":
    console.log("It is a weekend");
    break;
  case "Saturday":
    console.log("It is a weekend");
    break;
  case "Sunday":
    console.log("It is a weekend");
    break;
}

// Practice 3

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Practice 4
let count = 1;
while (count <= 10) {
  console.log(count + " x 5 = " + count * 5);
  count++;
}

// Practice 5
let number1 = 0;
do {
  console.log("The number is: " + [number1]);
  number1++;
} while (number1 <= 10);

// Practice 6
for (let i = 1; i <= 10; i++) {
  console.log(i);
  if (i === 5) {
    break;
  }
}

// Practice 7
for (let j = 1; j <= 20; j++) {
  if (j % 2 == 1) {
    continue;
  }
  console.log(j);
}

// Practice 8
function division(num1, num2) {
  try {
    let num2 = 0;
    let x = num1 / num2;
    console.log("This code will not be executed if an error occurs");
  } catch (error) {
    console.log("Error occured: " + error.message);
  } finally {
    console.log("succesful");
  }
}

division(2, 0);

// Practice 9
function multiply(one, two) {
  return one * two;
}
console.log(multiply(2, 3));

// Practice 10
for (let m = 1; m <= 30; m++) {
  if (m % 3 == 0 && m % 5 == 0) {
    console.log([m] + " :FizzBuzz");
  } else if (m % 3 == 0) {
    console.log([m] + " :Fizz");
  } else if (m % 5 == 0) {
    console.log([m] + " :Buzz");
  } else {
    console.log([m] + " :Not FizzBuzz");
  }
}
