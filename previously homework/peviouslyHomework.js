//  lessons2
console.log('<-----Lessons2----->');
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
let resul = 1;
for (let i = 0; i < arr1.length; i++) {
  resul *= arr1[i];
}
console.log(resul);

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
console.log('<-----Lessons3----->');

function palindrome(text) {
  for (let i = 0; i < text.length / 2; i += 1) {
    if (text[i] !== text[text.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
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

//  lessons4
console.log('<-----Lessons4----->');
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const colorText = () => {
  let x = 0;
  return (e) => {
    e.target.style.color = colors[x];
    x = x > 3 ? 0 : x + 1;
  };
};

text1.addEventListener('click', colorText());
text2.addEventListener('click', colorText());
text3.addEventListener('click', colorText());

function sum(a, b) {
  return a + b;
}
console.log(sum(5, 2));

//  lessons5
console.log('<-----Lessons5----->');
const data = [{
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

//  first solution

const checkStringTolowerCase = (str, strToCompare) => str.toLocaleLowerCase().replaceAll(' ', '').includes(strToCompare);

function searchFirst(searchData) {
  const result1 = [];
  const serchStringLowerCase = searchData.replaceAll(' ', '').toLowerCase();
  for (let index = 0; index < data.length; index++) {
    const {
      country,
      city,
      hotel,
    } = data[index];
    const srcString = `${country}, ${city}, ${hotel}`;
    if (checkStringTolowerCase(srcString, serchStringLowerCase)) {
      result1.push(`Страна: ${country}, Город: ${city}, Отель: ${hotel}`);
    }
  }
  return result1;
}
console.log(searchFirst('Ger '));

//  second solution
function searchSec(searchData) {
  const result2 = [];
  const serchStringLowerCase = searchData.replaceAll(' ', '').toLowerCase();
  data.forEach((object) => {
    const {
      country,
      city,
      hotel,
    } = object;
    const srcString = `${country}, ${city}, ${hotel}`;
    if (checkStringTolowerCase(srcString, serchStringLowerCase)) {
      result2.push(`Страна: ${country}, Город: ${city}, Отель: ${hotel}`);
    }
  });
  return result2;
}
console.log(searchSec('Rot '));

//  third solution
function searchThird(searchData) {
  const serchStringLowerCase = searchData.replaceAll(' ', '').toLowerCase();

  return data.filter(({
    country,
    city,
    hotel,
  }) => checkStringTolowerCase(`${country}, ${city}, ${hotel}`, serchStringLowerCase)).map(({
    country,
    city,
    hotel,
  }) => `${country}, ${city}, ${hotel}`);
}
console.log(searchThird('Rus '));

const date = '2020-11-26';
const dateFormat = (date2) => date2.split('-').reverse().join('.');

console.log(dateFormat(date));

//  lessons6
console.log('<-----Lessons6----->');
const hotels = [{
  name: 'Hotel Leopold',
  city: 'Saint Petersburg',
  country: 'Russia',
},
{
  name: 'Apartment Sunshine',
  city: 'Santa Cruz de Tenerife',
  country: 'Spain',
},
{
  name: 'Villa Kunerad',
  city: 'Vysokie Tatry',
  country: 'Slowakia',
},
{
  name: 'Hostel Friendship',
  city: 'Berlin',
  country: 'Germany',
},
{
  name: 'Radisson Blu Hotel',
  city: 'Kyiv',
  country: 'Ukraine',
},
{
  name: 'Paradise Hotel',
  city: 'Guadalupe',
  country: 'Mexico',
},
{
  name: 'Hotel Grindewald',
  city: 'Interlaken',
  country: 'Switzerland',
},
{
  name: 'The Andaman Resort',
  city: 'Port Dickson',
  country: 'Malaysia',
},
{
  name: 'Virgin Hotel',
  city: 'Chicago',
  country: 'USA',
},
{
  name: 'Grand Beach Resort',
  city: 'Dubai',
  country: 'United Arab Emirates',
},
{
  name: 'Shilla Stay',
  city: 'Seoul',
  country: 'South Korea',
},
{
  name: 'San Firenze Suites',
  city: 'Florence',
  country: 'Italy',
},
{
  name: 'The Andaman Resort',
  city: 'Port Dickson',
  country: 'Malaysia',
},
{
  name: 'Black Penny Villas',
  city: 'BTDC, Nuca Dua',
  country: 'Indonesia',
},
{
  name: 'Koko Hotel',
  city: 'Tokyo',
  country: 'Japan',
},
{
  name: 'Ramada Plaza',
  city: 'Istanbul',
  country: 'Turkey',
},
{
  name: 'Waikiki Resort Hotel',
  city: 'Hawaii',
  country: 'USA',
},
{
  name: 'Puro Hotel',
  city: 'Krakow',
  country: 'Poland',
},
{
  name: 'Asma Suites',
  city: 'Santorini',
  country: 'Greece',
},
{
  name: 'Cityden Apartments',
  city: 'Amsterdam',
  country: 'Netherlands',
},
{
  name: 'Mandarin Oriental',
  city: 'Miami',
  country: 'USA',
},
{
  name: 'Concept Terrace Hotel',
  city: 'Rome',
  country: 'Italy',
},
{
  name: 'Ponta Mar Hotel',
  city: 'Fortaleza',
  country: 'Brazil',
},
{
  name: 'Four Seasons Hotel',
  city: 'Sydney',
  country: 'Australia',
},
{
  name: 'Le Meridien',
  city: 'Nice',
  country: 'France',
},
{
  name: 'Apart Neptun',
  city: 'Gdansk',
  country: 'Poland',
},
{
  name: 'Lux Isla',
  city: 'Ibiza',
  country: 'Spain',
},
{
  name: 'Nox Hostel',
  city: 'London',
  country: 'UK',
},
{
  name: 'Leonardo Vienna',
  city: 'Vienna',
  country: 'Austria',
},
{
  name: 'Adagio Aparthotel',
  city: 'Edinburgh',
  country: 'UK',
},
{
  name: 'Steigenberger Hotel',
  city: 'Hamburg',
  country: 'Germany',
},
];

function searchHotel(searchHotels) {
  const res = [];
  const serchStringLowerCase = searchHotels.replaceAll(' ', '').toLowerCase();
  hotels.forEach((object) => {
    const {
      country,
      city,
      name,
    } = object;
    const srcString = `${country}, ${city}, ${name}`;
    if (checkStringTolowerCase(srcString, serchStringLowerCase)) {
      res.push(`Страна: ${country}, Город: ${city}, Отель: ${name}`);
    }
  });
  return res;
}
console.log(searchHotel('stei '));

function searchCity() {
  return hotels.reduce((accumulator, currentValue) => {
    const resultSearch = [];
    if (!accumulator[currentValue.country]) {
      resultSearch.push(currentValue.city);
      accumulator[currentValue.country] = resultSearch;
    } else if (!accumulator[currentValue.country].includes(currentValue.city)) {
      accumulator[currentValue.country].push(currentValue.city);
    }
    return accumulator;
  });
}
console.log(searchCity());

const palindromeString = (str) => {
  str.toLowerCase();
  return str === str.split('').reverse().join('') ? 'True' : 'False';
};
console.log(palindromeString('noon'));

//  lessons7
console.log('<-----Lessons7----->');
const obj1 = {
  a: 'a',
  b: {
    a: 'a',
    b: 'b',
    c: {
      a: 1,
    },
  },
};
const obj2 = {
  b: {
    c: {
      a: 1,
    },
    b: 'b',
    a: 'a',
  },
  a: 'a',
};
const obj3 = {
  a: {
    c: {
      a: 'a',
    },
    b: 'b',
    a: 'a',
  },
  b: 'b',
};

const deepEqual = (object1, object2) => {
  const isParametrsObject = typeof object1 !== 'object' || typeof object2 !== 'object';
  const isParametrsNull = object1 === null || object2 === null;
  const isParametrsUndefined = object1 === undefined || object2 === undefined;
  if (object1 === object2) return true;
  if (isParametrsUndefined) return false;
  if (isParametrsNull) return false;
  if (isParametrsObject) return false;
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  if (object1Keys.length !== object2Keys.length) return false;
  for (const key of object1Keys) {
    if (!object2Keys.includes(key) || !deepEqual(object1[key], object2[key])) return false;
  }
  return true;
};

console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));

// calendar
console.log('<-----Calendar----->');
const calendarMonth = (inMonth, inWeek, ofWeek) => {
  if (ofWeek >= inWeek) {
    throw new Error('Invalid data');
  }
  const withoutTail = inMonth + ofWeek;
  const iteration = withoutTail + (inWeek - (withoutTail % inWeek));
  let currentDay = inMonth - ofWeek;
  let arrayIndex = 0;
  const result = [
    [],
  ];

  for (let i = 1; i <= iteration; i++) {
    if (result[arrayIndex].length === inWeek) {
      if (result[arrayIndex][result[arrayIndex].length - 1] === inMonth) {
        break;
      }
      arrayIndex++;
      result[arrayIndex] = [];
    }
    currentDay++;
    if (currentDay > inMonth) {
      currentDay = 1;
    }
    result[arrayIndex].push(currentDay);
  }
  return result;
};

console.log(calendarMonth(31, 7, 0)); //  march
