/* Зроби таку саму галерею як в першому завданні, 
але використовуючи бібліотеку SimpleLightbox, 
яка візьме на себе обробку кліків по зображеннях, 
відкриття і закриття модального вікна, а також гортання 
зображень за допомогою клавіатури.

Необхідно трохи змінити розмітку картки галереї, 
використовуй цей шаблон.

<a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" 
  alt="Image description" />
</a>

Виконуй це завдання у файлах 02-lightbox.html і 02-lightbox.js. 
Розбий його на декілька підзавдань:

Створення і рендер розмітки на підставі масиву даних 
galleryItems і наданого шаблону елемента галереї. 

Використовуй готовий код з першого завдання.

Підключення скрипту і стилів бібліотеки, використовуючи CDN 
сервіс cdnjs. Необхідно додати посилання на два 
файли: simple-lightbox.min.js і simple-lightbox.min.css.

Ініціалізація бібліотеки після створення і додання елементів 
галереї у div.gallery. Для цього ознайомся з документацією 
SimpleLightbox - насамперед секції «Usage» і «Markup».

Подивися в документації секцію «Options» і додай відображення 
підписів до зображень з атрибута alt. Нехай підпис буде 
знизу і з'являється через 250 мілісекунд після відкриття зображення. */

import { galleryItems } from './gallery-items.js';
// Change code below this line
const divReference = document.querySelector('.gallery');
const Markup = createGalleryMarkup(galleryItems);

divReference.insertAdjacentHTML("beforeend", Markup);

// divReference.addEventListener("click", onGalleryItemClick);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `<a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}" 
        alt="${description}" /> 
        </a>`;
    }).join('');
}
console.log(divReference);

let lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 500,
  });

//   console.log(lightbox);


// const addGalleryMarkup = createGalleryMarkup(galleryItems);
// divReference.innerHTML = addGalleryMarkup;

// function onGalleryItemClick(event) {
//     event.preventDefault();
    
//     if (event.target.nodeName !== "IMG") {
//         return;
//     }
//     const galleryLink = event.target.dataset.source;
//     const instance = basicLightbox.create(`<img src="${galleryLink}">`);
//     instance.show();

//     document.addEventListener("keydown", event => {
//         if (event.key === "Escape") instance.close();
//     });
// }
// console.log(galleryItems);
