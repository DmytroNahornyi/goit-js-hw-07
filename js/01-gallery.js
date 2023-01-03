/* Створи галерею з можливістю кліку по її елементах і перегляду 
повнорозмірного зображення у модальному вікні. 
Подивися демо відео роботи галереї. 
Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. 
Розбий його на декілька підзавдань:

Створення і рендер розмітки на підставі масиву даних galleryItems і 
наданого шаблону елемента галереї.
Реалізація делегування на div.gallery і отримання url великого зображення.
Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. 
Використовуй CDN сервіс jsdelivr і додай у проект посилання на 
мініфіковані (.min) файли бібліотеки.
Відкриття модального вікна по кліку на елементі галереї. 
Для цього ознайомся з документацією і прикладами.
Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. 
Використовуй готову розмітку модального вікна із зображенням з прикладів 
бібліотеки basicLightbox.
Розмітка елемента галереї
Посилання на оригінальне зображення повинно зберігатися в data-атрибуті 
source на елементі <img>, і вказуватися в href посилання. 
Не додавай інші HTML теги або CSS класи, крім тих, що містяться в цьому шаблоні.

<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>

Зверни увагу на те, що зображення обгорнуте посиланням, 
отже по кліку за замовчуванням користувач буде перенаправлений 
на іншу сторінку. Заборони цю поведінку за замовчуванням. */


import { galleryItems } from './gallery-items.js';
// Change code below this line
const divReference = document.querySelector('.gallery');
const Markup = createGalleryMarkup(galleryItems);
divReference.insertAdjacentHTML("beforeend", Markup);
divReference.addEventListener("click", onGalleryItemClick);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `<a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" /> </a>`;
    }).join('');
}
const addGalleryMarkup = createGalleryMarkup(galleryItems);
divReference.innerHTML = addGalleryMarkup;

function onGalleryItemClick(event) {
    event.preventDefault();
    
    if (event.target.nodeName !== "IMG") {
        return;
    }
    const galleryLink = event.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${galleryLink}">`);
    instance.show();

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") instance.close();
    });
}
console.log(galleryItems);