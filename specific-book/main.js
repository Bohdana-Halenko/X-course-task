const countInput = document.querySelector('.count-input');
    const totalPriceElement = document.getElementById('total-price');

    // Значення кількості книг та ціни за книгу
    let count = 0;
    const pricePerBook = 10; // припустимо, що ціна за книгу - $10

    // Функція для оновлення загальної вартості
    function updateTotalPrice() {
        const totalPrice = count * pricePerBook;
        totalPriceElement.textContent = totalPrice;
    }

    // Функція для збільшення кількості книг
    function increaseCount() {
        if (count < 42) {
            count++;
            countInput.value = count;
            updateTotalPrice();
        }
    }

    // Функція для зменшення кількості книг
    function decreaseCount() {
        if (count > 1) {
            count--;
            countInput.value = count;
            updateTotalPrice();
        }
    }

    // Обробник подій для полів вводу з клавіатури
    countInput.addEventListener('input', function () {
        const inputValue = parseInt(countInput.value);

        if (!isNaN(inputValue) && inputValue >= 1 && inputValue <= 42) {
            count = inputValue;
            updateTotalPrice();
        } else {
            // Введення неприпустимої кількості, скидаємо на минуле значення
            countInput.value = count;
        }
    });