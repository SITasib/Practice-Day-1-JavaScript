// Question 1 ans:

// 0 - 39 = C
// 40 - 59 = B
// 60 - 69 = A-
// 70 - 79 = A
// 80 - 100 = A+

var result = 80;

if (result < 0 || result > 100) {
    console.log("invalid");
}
else if (result >= 0 && result <= 39) {
    console.log("tumi C grade paico");
}
else if (result >= 40 && result <= 59) {
    console.log("tumi B grade paico");
}
else if (result >= 60 && result <= 69) {
    console.log("tumi A- grade paico");
}
else if (result >= 70 && result <= 79) {
    console.log("tumi A grade paico");
}
else if (result >= 80 && result <= 100) {
    console.log("tumi A+ grade paico");
}

// Question 2 ans:
var number = 7;

if (number % 2 == 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}

// Question 3 ans:
var arr = [5, 2, 18, 1, 10, 7, 3, 15, 20, 8];

for (var i = 0; i < arr.length; i++) {
  for (var j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}

console.log(arr);

// Question 4 ans:
var year = 2026;

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log("Leap Year");
} else {
  console.log("Not Leap Year");
}

// Question 5 ans:
for (var i = 1; i <= 50; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i);
  }
}

// Question 6 ans:
var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

var biggest = friends[0];

for (var i = 0; i < friends.length; i++) {
  if (friends[i].length > biggest.length) {
    biggest = friends[i];
  }
}

console.log("Biggest name:", biggest);

// Question 7 ans:
var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
var unique = [];

for (var i = 0; i < numbers.length; i++) {
  var found = false;

  for (var j = 0; j < unique.length; j++) {
    if (numbers[i] == unique[j]) {
      found = true;
      break;
    }
  }

  if (!found) {
    unique.push(numbers[i]);
  }
}

console.log(unique);

// Question 8 ans:
var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

var max = numbers[0];

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log("Largest number:", max);

// Question 9 ans:
var payments = [1000, 2000, 3000];
var livingCost = 5400;

if (typeof payments != "object" || typeof livingCost != "number") {
  console.log("invalid input");
} else {

  var totalIncome = 0;
  var totalTax = 0;

  for (var i = 0; i < payments.length; i++) {
    totalIncome = totalIncome + payments[i];

    if (payments[i] >= 3000) {
      totalTax = totalTax + payments[i] * 0.2;
    }
  }

  var savings = totalIncome - totalTax - livingCost;

  if (savings > 0) {
    console.log(savings);
  } else {
    console.log("earn more");
  }
}