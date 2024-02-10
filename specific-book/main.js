document.addEventListener("DOMContentLoaded", function () {
    var countInput = document.querySelector(".count-input");
    var totalPriceElement = document.getElementById("total-price");
    var decreaseButton = document.querySelector(".price-box button:nth-child(2)");
    var increaseButton = document.querySelector(".price-box button:nth-child(4)");

    var pricePerBook = 10.99;
    var maxAllowedBooks = 42;
    var currentCount = 0;
    function updateTotalPrice() {
        var totalPrice = pricePerBook * currentCount;
        totalPriceElement.textContent = totalPrice.toFixed(2);
    }

    // Зменшення кількості книг
    function decreaseCount() {
        if (currentCount > 1) {
            currentCount--;
            countInput.value = currentCount;
            updateTotalPrice();
        }
    }

    // Збільшення кількості книг
    function increaseCount() {
        if (currentCount < maxAllowedBooks) {
            currentCount++;
            countInput.value = currentCount;
            updateTotalPrice();
        }
    }

    updateTotalPrice();

    // Обробка подій
    countInput.addEventListener("input", function () {
        var newCount = parseInt(countInput.value);

        if (newCount > 0 && newCount <= maxAllowedBooks) {
            currentCount = newCount;
            updateTotalPrice();
        }
    });

    decreaseButton.addEventListener("click", decreaseCount);
    increaseButton.addEventListener("click", increaseCount);

    // Обробник клавіш
    countInput.addEventListener("keydown", function (e) {
        if (e.key === "ArrowUp") {
            increaseCount();
        } else if (e.key === "ArrowDown") {
            decreaseCount();
        }
    });
});