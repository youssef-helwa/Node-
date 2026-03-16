// Q1
let x = "123";
console.log(Number(x) + 7);

// Q2
function check(varabile) {
  if (varabile == 0) {
    return "invailed";
  }
}
console.log(check(0));

// Q3
let result = [];
for (let i = 0; i <= 10; i++) {
  if (i % 2 != 0) {
    result.push(i);
  }
}
console.log(result.join(","));

// Q4

let number = [1, 2, 3, 4, 5];

// let ArrFunc = function (el) {
//   return el % 2 == 0;
// };
// let even = number.filter(ArrFunc);
// console.log(even);

let even = number.filter((num) => num % 2 === 0);

console.log(even);

// Q5
let num1 = [1, 2, 3];
let num2 = [4, 5, 6];

let TotalArr = [...num1, ...num2];

console.log(TotalArr);

// Q6
function AllDays(DayNum) {
  switch (DayNum) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return "invalid number";
  }
}

let NameDay = AllDays(2);

console.log(NameDay);

// Q7

let Arr = ["a", "ab", "abc"];
let ByMap = Arr.map(function (el) {
  return el.length;
});

console.log(ByMap);

// Q8

let devition = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    return "Divisible by both";
  } else {
    return "Cannot Divisible by both ";
  }
};

console.log(devition(6));

// Q9

let Square = (a) => a * a;

console.log(Square(5));

// Q10
let person = { name: "youssef ", age: 25 };
function UserInfo({ name, age }) {
  return `${name} is ${age} years old`;
}

console.log(UserInfo(person));

// Q11

let CalcSum = function (...Q) {
  let total = 0;
  for (let i = 0; i < Q.length; i++) {
    total += Q[i];
  }
  return total;
};

console.log(CalcSum(1, 2, 3, 4, 5));

// Q13

let GetLarge = [1, 3, 7, 2, 4];
function Large(num) {
  let BigNum = num[0];
  for (let i = 0; i <= num.length; i++) {
    if (num[i] > BigNum) {
      BigNum = num[i];
    }
  }
  return BigNum;
}

console.log(Large(GetLarge));

// Q12
function time() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success");
    }, 3000);
  }).then((resolve) => console.log(`"${resolve}"`));
}

time();

// Q14
let info = { name: "John", age: 30 };

function obj() {
  return Object.keys(info);
}
console.log(obj());

// Q15
let word = "The quick brown fox";
function SplitWords() {
  return word.split([" "]);
}
console.log(SplitWords());
