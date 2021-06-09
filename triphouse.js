const data = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa  Cruz de Tenerife',
    country: 'Spain',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
  },
];

const hotels = document.querySelector('#guests-loves__image');

data.forEach((item) => {
  hotels.innerHTML += `
    <figure class="guests-loves__image-wrapper guests-loves__swiper-slide">
      <div class="guests-loves__image">
        <img src="${item.imageUrl}" alt="${item.country}" class="guests-loves__image-photo">
      </div> 
      <figcaption class="guests-loves__destination">   
        <span class="guests-loves__hotel">${item.name}</span>
        <span class="guests-loves__city">${item.city}</span>
      </figcaption>
    </figure>
  `;
});

new Swiper('.guest-loves__swiper-container', {
  slideClass: 'guests-loves__swiper-slide',
  wrapperClass: 'guest-loves__swiper-wrapper',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 16,
      slidesPerGroup: 1,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 16,
      slidesPerGroup: 1,
    },
  },
});

const formPeopleDrop = document.querySelector('#heder-form-drop');
formPeopleDrop.innerHTML = `
<div class="header-people-add">
<div class="header-people__row">
  <span>Adults</span>
  <div class="header-people__row__button">
    <a class="header-people-buttons header-people-buttons__minus" id="dellAdults">-</a>
    <span class="header-people__row__button-value">0</span>
    <a class="header-people-buttons header-people-buttons__plus" id="addAdults">+</a>
  </div>
</div>
<div class="header-people__row">
  <span>Children</span>
  <div class="header-people__row__button">
    <a class="header-people-buttons header-people-buttons__minus" id="dellChildren">-</a>
    <span class="header-people__row__button-value" id="value-children">0</span>
    <a class="header-people-buttons header-people-buttons__plus" id="addChildren">+</a>
  </div>
</div>
<div class="header-people__row">
  <span>Rooms</span>
  <div class="header-people__row__button">
    <a class="header-people-buttons header-people-buttons__minus" id="dellRooms">-</a>
    <span class="header-people__row__button-value">0</span>
    <a class="header-people-buttons header-people-buttons__plus" id="addRooms">+</a>
  </div>
</div>
</div>`;

const inputPeople = document.querySelector('#header-form__input-form-people');
const dropPeople = document.querySelector('.header-people-add');

inputPeople.addEventListener('click', (e) => {
  e.stopPropagation();
  formPeopleDrop.style.display = 'blok';
  changeColor();
}, true);
document.addEventListener('click', () => {
  formPeopleDrop.style.display = 'none';
}, false);

const generateSelect = (e) => {
  const selectItemsText = `
    <select> 
      <option value = '1'>1 years old</option>
      <option value = '2'>2 years old</option>
      <option value = '3'>3 years old</option>
      <option value = '4'>4 years old</option>
      <option value = '5'>5 years old</option>
      <option value = '6'>6 years old</option>
      <option value = '7'>7 years old</option>
      <option value = '8'>8 years old</option>
      <option value = '9'>9 years old</option>
      <option value = '10'>10 years old</option>
      <option value = '11'>11 years old</option>
      <option value = '12'>12 years old</option>
      <option value = '13'>13 years old</option>
      <option value = '14'>14 years old</option>
      <option value = '15'>15 years old</option>
      <option value = '16'>16 years old</option>
      <option value = '17'>17 years old</option>
    </select>`;
  const slelctChildren = document.createElement('div');
  slelctChildren.classList.add('heder-people__age-children');
  slelctChildren.innerHTML = '<span>What is the age of the child you’re travelling with?</span>';
  const selectItems = document.createElement('select');
  selectItems.classList.add('heder-people__select-children-age');
  selectItems.innerHTML = selectItemsText;
  let childrenAge = 0;
  e.target.id === 'dellChildren'
    ? childrenAge = e.target.nextSibling.innerHTML
    : childrenAge = e.target.previousliSibling.innerHTML;
  if (document.querySelector('.heder-people__age-children')) {
    document.querySelector('.heder-people__age-children').remove();
  }
  for (let i = 0; i < childrenAge; i++) {
    if (i === 0) {
      document.querySelector('.header-people-add').appendChild(slelctChildren);
      slelctChildren.appendChild(selectItems);
    } else {
      selectItems.classList.add('heder-people__select-children-age');
      selectItems.innerHTML = selectItemsText;
      slelctChildren.appendChild(selectItems);
    }
  }
};
