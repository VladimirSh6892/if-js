//  lessons9

const text4 = document.getElementById('text4');
const text5 = document.getElementById('text5');
const text6 = document.getElementById('text6');
const colors2 = {
  data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
  [Symbol.iterator]() {
    return this;
  },
  next(counter) {
    return {
      value: this.data[counter],
      done: false,
    };
  },
};
function textCounter() {
  let counter = 0;
  return (e) => {
    e.target.style.color = colors2.next(counter).value;
    counter = counter > 3 ? 0 : counter + 1;
  };
}
text4.addEventListener('click', textCounter());
text5.addEventListener('click', textCounter());
text6.addEventListener('click', textCounter());
