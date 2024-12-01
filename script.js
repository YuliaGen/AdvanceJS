// Получение элементов DOM
const reviewForm = document.getElementById("review-form");
const productList = document.getElementById("product-list");

// Обработчик отправки формы
reviewForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Получение значений полей формы
    const productName = document.querySelector(".product-name").value;
    const reviewText = document.querySelector(".review-text").value;

    // Создание объекта отзыва
    const review = {
        product: productName,
        text: reviewText,
    };

    // Получение текущих отзывов из LocalStorage
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    // Добавление нового отзыва
    reviews.push(review);

    // Сохранение отзывов в LocalStorage
    localStorage.setItem("reviews", JSON.stringify(reviews));

    // Очистка полей формы
    document.querySelector(".product-name").value = "";
    document.querySelector(".review-text").value = "";

    // Обновление списка отзывов
    displayProductList();
});

// Функция отображения списка продуктов
function displayProductList() {
    // Очистка списка
    productList.textContent = "";

    // Получение текущих отзывов из LocalStorage
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    // Получение уникальных названий продуктов
    let products = [...new Set(reviews.map((review) => review.product))];

    // Отображение списка продуктов
    products.forEach((product) => {
        const productElement = document.createElement("details");
        productElement.classList.add("product-list");

        const summaryElement = document.createElement("summary");
        summaryElement.textContent = product;
        productElement.appendChild(summaryElement);

        const reviewsContainer = document.createElement("div");

        // Обработчик клика на название продукта
        summaryElement.addEventListener("click", function () {
            // Отображение отзывов по выбранному продукту
            displayReviews(product, reviewsContainer);
        });

        productElement.appendChild(reviewsContainer);
        productList.appendChild(productElement);
    });
}

// Функция отображения отзывов по выбранному продукту
function displayReviews(product, container) {
    // Очистка контейнера отзывов
    container.textContent = "";

    // Получение текущих отзывов из LocalStorage
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    // Фильтрация отзывов по выбранному продукту
    let filteredReviews = reviews.filter((review) => review.product === product);

    // Отображение отзывов
    filteredReviews.forEach((review) => {
        const reviewElement = document.createElement("div");
        reviewElement.classList.add("review");

        // const productName = document.createElement("h3");
        // productName.textContent = review.product;
        // reviewElement.appendChild(productName);

        const reviewText = document.createElement("p");
        reviewText.textContent = review.text;
        reviewElement.appendChild(reviewText);

        const deleteButton = document.createElement("span");
        deleteButton.classList.add("delete-button");
        deleteButton.textContent = "Удалить";
        reviewElement.appendChild(deleteButton);

        // Обработчик клика на кнопку "Удалить"
        deleteButton.addEventListener("click", function () {
            // Удаление отзыва
            deleteReview(review);

            // Обновление списка отзывов
            displayReviews(product, container);
        });

        container.appendChild(reviewElement);
    });
}

// Функция удаления отзыва
function deleteReview(review) {
    // Получение текущих отзывов из LocalStorage
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    // Поиск индекса отзыва в массиве
    const index = reviews.findIndex(
        (r) => r.product === review.product && r.text === review.text
    );

    // Удаление отзыва из массива
    if (index !== -1) {
        reviews.splice(index, 1);
    }

    // Сохранение отзывов в LocalStorage
    localStorage.setItem("reviews", JSON.stringify(reviews));
}

// Инициализация страницы
displayProductList();
    const newProd = inp.value;
    const newText = inp2.value;
    const newProdObj = {
      product: newProd,

      text: newText,

    };
    initialData.push(newProdObj);
    localStorage.setItem('initialData', JSON.stringify(initialData, null, 2));
    console.log(initialData);
    console.log(JSON.stringify(initialData));
    console.log(JSON.stringify(initialData, null, 2));
    pUsers2.innerHTML = ' ';
    printValues(initialData);
  });
