/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
let user = 'John Doe';
console.log(user); //   output John Doe
const student = 'Vladimir';
console.log(student); //    output Vladimir
user = student;
console.log(user); //   output Vladimir

let test = 1;
test += 1;
console.log(test); //   output 2
test += '1';
console.log(test); //   output 21
test -= 1;
console.log(test); //   output 20
console.log(Boolean(test)); //  output true

const arr1 = [2, 3, 5, 8];
let result = 1;
for (i = 0; i < arr1.length; i++) {
  result *= arr1[i];
}
console.log(result);

const arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (i = 0; i < arr2.length; i++) {
  if (arr2[i] > 5 && arr2[i] < 10) {
    console.log(arr2[i]);
  }
}

const arr3 = [2, 5, 8, 15, 0, 6, 20, 3];
for (i = 0; i < arr3.length; i++) {
  if (!(arr3[i] % 2)) {
    console.log(arr3[i]);
  }
}

//  lessons3

const palindrome = (str) => {
  str.toLowerCase();
  return str === str.split('').reverse().join('') ? 'True' : 'False';
};
console.log(palindrome('noon'));

function min(a, b) {
  if (a > b) {
    return b;
  }
  return a;
}
console.log(min(25, 28));

function max(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}
console.log(max(25, 28));
