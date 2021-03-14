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
];

const hotels = document.querySelector('#guests-loves__image');

data.forEach((item) => {
  hotels.innerHTML += `
    <figure class="guests-loves__image-wrapper guests-loves__image-hotel">
        <figcaption class="guests-loves__destination">
            <img src="${item.imageUrl}" alt="${item.country}" class="guests-loves__image-photo">
            <span class="guests-loves__hotel">${item.name}</span>
            <span class="guests-loves__city">${item.city}</span>
        </figcaption>
      </figure>
  `;
});
