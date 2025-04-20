// Проверка работы файла
console.log("Файл main.js подключен");

// Функция валидации формы
function validateForm(event) {
    event.preventDefault(); // Останавливаем отправку формы

    const form = event.target;
    const inputs = form.querySelectorAll("input, textarea");
    let isValid = true;

    inputs.forEach(input => {
        if (input.hasAttribute("required") && input.value.trim() === "") {
            isValid = false;
            input.style.border = "2px solid red";
            alert(`Поле "${input.previousElementSibling.textContent}" обязательно для заполнения.`);
        } else {
            input.style.border = "";
        }
    });

    if (isValid) {
        if (form.id === "review-form") {
            addReview(form); // Добавляем отзыв, если это форма отзывов
        } else {
            alert("Форма успешно отправлена!");
        }
        form.reset(); // Очищаем форму после успешной отправки
    }
}

// Функция добавления отзыва
function addReview(form) {
    const name = form.querySelector("#name").value.trim();
    const reviewText = form.querySelector("#review").value.trim();

    const reviewList = document.getElementById("reviews-list");
    const newReview = document.createElement("div");
    newReview.classList.add("review");

    newReview.innerHTML = `
        <h3>${name}</h3>
        <p>${reviewText}</p>
    `;

    reviewList.appendChild(newReview);
    alert("Спасибо за ваш отзыв!");
}

// Привязка валидации к формам на странице
document.addEventListener("DOMContentLoaded", () => {
    const forms = document.querySelectorAll("form");

    forms.forEach(form => {
        form.addEventListener("submit", validateForm);
    });
});