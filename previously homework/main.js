//  lessons8

const studentsData = [
  {
    firstName: 'Василий',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Java',
  },
  {
    firstName: 'Иван',
    lastName: 'Иванов',
    admissionYear: 2018,
    courseName: 'JavaScript',
  },
  {
    firstName: 'Александр',
    lastName: 'Федоров',
    admissionYear: 2017,
    courseName: 'Python',
  },
  {
    firstName: 'Николай',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Android',
  },
];
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
class Student extends User {
  constructor(firstName, lastName, admissionYear, courseName) {
    super(firstName, lastName);
    this.admissionYear = admissionYear;
    this.courseName = courseName;
  }

  get course() {
    return new Date().getFullYear() - this.admissionYear;
  }
}
class Students {
  constructor(students) {
    this.students = students.map(({
      firstName, lastName, admissionYear, courseName,
    }) => new Student(firstName, lastName, admissionYear, courseName));
  }

  getInfo() {
    this.students.sort((prev, next) => prev.course - next.course);
    const arrgument = [];
    this.students.forEach((item) => {
      arrgument.push(`${item.fullName} - ${item.courseName}, ${item.course} курс`);
    });
    return arrgument;
  }
}
const students = new Students(studentsData);
console.log(students.getInfo());

//  lessons9
console.log('<-----Lessons9----->');
const text4 = document.getElementById('text4');
const text5 = document.getElementById('text5');
const text6 = document.getElementById('text6');
const colors2 = {
  data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
  [Symbol.iterator]() {
    return this;
  },
  next(textColor) {
    let i = this.data.indexOf(textColor);
    if (i === -1 || i === this.data.length - 1) {
      i = 0;
    } else {
      i++;
    }
    return {
      done: false,
      value: this.data[i++],
    };
  },
};
const textCounter = (e) => {
  const colorText = document.getElementById(e.target.id).style.color;
  e.target.style.color = colors2.next(colorText).value;
};

text4.addEventListener('click', textCounter);
text5.addEventListener('click', textCounter);
text6.addEventListener('click', textCounter);
