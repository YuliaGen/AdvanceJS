
// Задание 2 Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

// const initialData = [ { product: "Apple iPhone 13", reviews: [ { id: "1", text: "Отличный телефон! Батарея держится долго.", }, { id: "2", text: "Камера супер, фото выглядят просто потрясающе.", }, ], }, { product: "Samsung Galaxy Z Fold 3", reviews: [ { id: "3", text: "Интересный дизайн, но дорогой.", }, ], }, { product: "Sony PlayStation 5", reviews: [ { id: "4", text: "Люблю играть на PS5, графика на высоте.", }, ], }, ];

// Вы можете использовать этот массив initialData для начальной загрузки данных при запуске вашего приложения.

const initialData = [
        {
                product: "Apple iPhone 13",
                reviews: [
                        {
                                id: "1",
                                text: "Отличный телефон! Батарея держится долго.",
                        },
                        {
                                id: "2",
                                text: "Камера супер, фото выглядят просто потрясающе.",
                        },
                ],
        },
        {
                product: "Samsung Galaxy Z Fold 3",
                reviews: [
                        {
                                id: "3", text: "Интересный дизайн, но дорогой.",
                        },
                ],
        },
        {
                product: "Sony PlayStation 5",
                reviews: [
                        {
                                id: "4",
                                text: "Люблю играть на PS5, графика на высоте.",
                        },
                ],
        },
];





let inputElem = document.querySelector('.user_comment');
let buttonElem = document.querySelector('.btn');
let reviews = document.querySelector('.reviews');
let errorMess = document.querySelector('.error');

initialData.forEach(element => {
        const productName = document.createElement('h3');
        productName.textContent = element.product;
        reviews.appendChild(productName);
        element.reviews.forEach(review => {
                const defaultReview = document.createElement('p');
                defaultReview.textContent = review.text;
                reviews.appendChild(defaultReview);
        });
});

buttonElem.addEventListener('click', () => {
        try {
                const string = inputElem.value;
                if (string.length < 50 || string.length > 500) {

                        throw new Error('Комментарий должен быть от 50 до 500 символов');
                } else {
                        const pElem = document.createElement('p');
                        pElem.textContent = string;
                        reviews.appendChild(pElem);
                        errorMess.textContent = '';
                }
        } catch (error) {
                errorMess.textContent = error.message;
        }
});
