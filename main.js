//  lessons2

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
for (let i = 0; i < arr1.length; i++) {
  result *= arr1[i];
}
console.log(result);

const arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] > 5 && arr2[i] < 10) {
    console.log(arr2[i]);
  }
}

const arr3 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr3.length; i++) {
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

let arr = [12, 22, 20, 450, 88, 54, 30, 24, 101, 28];
arr = arr.join().replace(/0/g, 'zero');
console.log(arr.split(','));

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const colorText = () => {
  let x = 0;
  return (e) => {
    e.target.style.color = colors[x];
    x = x > colors.length ? 0 : x + 1;
  };
};

text1.addEventListener('click', colorText());
text2.addEventListener('click', colorText());
text3.addEventListener('click', colorText());

function sum(a, b) {
  return a + b;
}
console.log(sum(5, 2));

const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];
const replaceStrForSearch = (str) => str.toLowerCase().replaceAll(' ', '');

const search = (str) => {
  const searchStr = replaceStrForSearch(str);

  return data
    .filter((object) => {
      const string = `${object.country}${object.city}${object.hotel}`;
      return replaceStrForSearch(string).includes(searchStr);
    }).map((object) => `Страна: ${object.country} Город: ${object.city} Отель: ${object.hotel}`);
};

console.log(search('net '));

const date = '2020-11-26';
const dateFormat = (date2) => date2.split('-').reverse().join('.');

console.log(dateFormat(date));
