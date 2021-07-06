// Создать массив, описывающий чек в магазине. 
// Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. 
// Написать следующие функции:

// 2.1 Распечатка чека на экран;
// 2.2 Подсчет общей суммы покупки;
// 2.3 Получение самой дорогой покупки в чеке;
// 2.4 Подсчет средней стоимости одного товара в чеке.


// Инициализация массива
let receipt = [
    {
        name: 'Bread',
        quantity: 2,
        price: 9.28,
    },
    {
        name: 'Milk',
        quantity: 3,
        price: 3.02,
    },
    {
        name: 'Banana',
        quantity: 10,
        price: 0.55,
    },
    {
        name: 'Water',
        quantity: 1,
        price: 1.13,
    },
    {
        name: 'Pasta',
        quantity: 5,
        price: 1.74,
    },
];

// Поиск максимального элемента в массиве
function maxElement(arr){
    let max = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > max) max = arr[i];
    }
    return max;
}

// Универсальная функция для решения всех поставленных задач
function printReceipt(obj){
    // Переменная для вывода строк на экран
    let out = '';
    // Переменная для общей суммы покупки
    let totalPrice = 0;
    // Новый массив для поиска самой дорогой покупки
    let arrForMaxElement = [];
    // Строка для названия самого дорогого продукта
    let nameOfExpensiveElement = '';
    for (let i = 0; i < obj.length; i++){
        out += obj[i].name + ':  ' + obj[i].quantity + ' * ' + obj[i].price + '\n';
        totalPrice += obj[i].quantity*obj[i].price;
        arrForMaxElement[i] = obj[i].quantity*obj[i].price;
    }
    for (let i = 0; i < obj.length; i++){
        if ((maxElement(arrForMaxElement) == obj[i].quantity*obj[i].price)) nameOfExpensiveElement = obj[i].name
    }
    out += '\n' + 'Total price: ' + totalPrice;
    out += '\n' + 'The most expensive purchase:   ' + nameOfExpensiveElement + ' ' + maxElement(arrForMaxElement);
    out += '\n' + 'The average price: ' + totalPrice / obj.length;
    alert(out);
}

// Вывод чека на экран
printReceipt(receipt);


