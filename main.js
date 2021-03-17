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
